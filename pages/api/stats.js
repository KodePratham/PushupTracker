import { getAuth } from '@clerk/nextjs/server';
import prisma from '../../lib/prisma';
// Import date-fns with error handling
let startOfDay, startOfWeek;
try {
  const dateFns = require('date-fns');
  startOfDay = dateFns.startOfDay;
  startOfWeek = dateFns.startOfWeek;
} catch (error) {
  // Fallback if date-fns is not available
  startOfDay = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };
  startOfWeek = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const diff = newDate.getDate() - day; // adjust to get to Sunday
    newDate.setDate(diff);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };
  console.warn("date-fns not found, using fallback date functions");
}

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      // Get today's date at midnight
      const today = startOfDay(new Date());
      // Get the start of the current week
      const weekStart = startOfWeek(new Date());
      
      // Check for prisma initialization
      if (!prisma) {
        throw new Error("Prisma client not initialized");
      }
      
      // Calculate total pushups with error handling
      let totalCount = 0;
      try {
        const totalResult = await prisma.pushupLog.aggregate({
          where: { userId },
          _sum: { count: true }
        });
        totalCount = totalResult._sum?.count || 0;
      } catch (error) {
        console.error("Error calculating total count:", error);
        totalCount = 0;
      }
      
      // Calculate pushups done today with error handling
      let todayCount = 0;
      try {
        const todayLogs = await prisma.pushupLog.findMany({
          where: {
            userId,
            date: {
              gte: today
            }
          }
        });
        todayCount = todayLogs.reduce((sum, log) => sum + (log.count || 0), 0);
      } catch (error) {
        console.error("Error calculating today count:", error);
        todayCount = 0;
      }
      
      // Calculate pushups done this week with error handling
      let weekCount = 0;
      try {
        const weekLogs = await prisma.pushupLog.findMany({
          where: {
            userId,
            date: {
              gte: weekStart
            }
          }
        });
        weekCount = weekLogs.reduce((sum, log) => sum + (log.count || 0), 0);
      } catch (error) {
        console.error("Error calculating week count:", error);
        weekCount = 0;
      }
      
      // Get user's daily goal with error handling
      let dailyGoal = 0;
      try {
        const userGoal = await prisma.userGoal.findUnique({
          where: { userId }
        });
        dailyGoal = userGoal?.dailyGoal || 0;
      } catch (error) {
        console.error("Error retrieving daily goal:", error);
        dailyGoal = 0;
      }
      
      return res.status(200).json({
        totalCount,
        todayCount,
        weekCount,
        dailyGoal
      });
    } catch (error) {
      console.error('Error calculating stats:', error);
      return res.status(500).json({ error: 'Failed to calculate stats', message: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

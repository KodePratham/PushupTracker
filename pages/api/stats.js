import { getAuth } from '@clerk/nextjs/server';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    // Get authentication
    const auth = getAuth(req);
    const userId = auth.userId;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized. Please sign in.' });
    }

    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed. Use GET.' });
    }
    
    // Calculate today's date (midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calculate start of week (Sunday)
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    
    // Get totalCount
    const totalResult = await prisma.pushupLog.aggregate({
      where: { userId },
      _sum: { count: true }
    });
    
    // Get logs for today
    const todayLogs = await prisma.pushupLog.findMany({
      where: {
        userId,
        date: {
          gte: today
        }
      }
    });
    
    // Get logs for this week
    const weekLogs = await prisma.pushupLog.findMany({
      where: {
        userId,
        date: {
          gte: weekStart
        }
      }
    });
    
    // Get user goal
    const userGoal = await prisma.userGoal.findUnique({
      where: { userId }
    });
    
    // Calculate totals
    const totalCount = totalResult._sum?.count || 0;
    const todayCount = todayLogs.reduce((sum, log) => sum + log.count, 0);
    const weekCount = weekLogs.reduce((sum, log) => sum + log.count, 0);
    
    // Return stats
    return res.status(200).json({
      totalCount,
      todayCount,
      weekCount,
      dailyGoal: userGoal?.dailyGoal || 0
    });
  } catch (error) {
    console.error('API Error in stats:', error.message);
    return res.status(500).json({ 
      error: 'Server error fetching stats', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

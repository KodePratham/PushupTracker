import { getAuth } from '@clerk/nextjs/server';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // GET request to fetch user's goal
  if (req.method === 'GET') {
    try {
      const userGoal = await prisma.userGoal.findUnique({
        where: { userId },
      });
      
      return res.status(200).json(userGoal || { dailyGoal: 0 });
    } catch (error) {
      console.error('Error fetching goal:', error);
      return res.status(500).json({ error: 'Failed to fetch goal' });
    }
  }

  // POST request to update user's goal
  if (req.method === 'POST') {
    try {
      const { dailyGoal } = req.body;
      
      // Better validation
      if (dailyGoal === undefined || dailyGoal === null) {
        return res.status(400).json({ error: 'Daily goal is required' });
      }
      
      const goalNumber = parseInt(dailyGoal);
      if (isNaN(goalNumber)) {
        return res.status(400).json({ error: 'Daily goal must be a number' });
      }
      
      if (goalNumber <= 0) {
        return res.status(400).json({ error: 'Daily goal must be greater than zero' });
      }
      
      // Try to find existing goal first
      const existingGoal = await prisma.userGoal.findUnique({
        where: { userId }
      });
      
      let goal;
      if (existingGoal) {
        // Update existing goal
        goal = await prisma.userGoal.update({
          where: { userId },
          data: { dailyGoal: goalNumber }
        });
      } else {
        // Create new goal
        goal = await prisma.userGoal.create({
          data: {
            userId,
            dailyGoal: goalNumber
          }
        });
      }
      
      return res.status(200).json(goal);
    } catch (error) {
      console.error('Error updating goal:', error);
      return res.status(500).json({ 
        error: 'Failed to update goal', 
        details: error.message 
      });
    }
  }

  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

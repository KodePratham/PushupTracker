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
      
      if (!dailyGoal || isNaN(dailyGoal) || dailyGoal <= 0) {
        return res.status(400).json({ error: 'Valid daily goal is required' });
      }
      
      const goal = await prisma.userGoal.upsert({
        where: { userId },
        update: { dailyGoal: parseInt(dailyGoal) },
        create: { userId, dailyGoal: parseInt(dailyGoal) },
      });
      
      return res.status(200).json(goal);
    } catch (error) {
      console.error('Error updating goal:', error);
      return res.status(500).json({ error: 'Failed to update goal' });
    }
  }

  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

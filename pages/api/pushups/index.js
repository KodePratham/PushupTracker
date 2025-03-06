import { getAuth } from '@clerk/nextjs/server';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // GET request to fetch logs
  if (req.method === 'GET') {
    try {
      const logs = await prisma.pushupLog.findMany({
        where: { userId },
        orderBy: { date: 'desc' },
      });
      
      return res.status(200).json(logs);
    } catch (error) {
      console.error('Error fetching logs:', error);
      return res.status(500).json({ error: 'Failed to fetch logs' });
    }
  }

  // POST request to create a new log
  if (req.method === 'POST') {
    try {
      const { count } = req.body;
      
      if (!count || isNaN(count) || count <= 0) {
        return res.status(400).json({ error: 'Valid count is required' });
      }
      
      const log = await prisma.pushupLog.create({
        data: {
          count: parseInt(count),
          userId,
        },
      });
      
      return res.status(201).json(log);
    } catch (error) {
      console.error('Error creating log:', error);
      return res.status(500).json({ error: 'Failed to create log' });
    }
  }

  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

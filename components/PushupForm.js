import { useState } from 'react';
import { useRouter } from 'next/router';

export default function PushupForm({ onSuccess }) {
  const [count, setCount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!count || isNaN(count) || parseInt(count) <= 0) {
      setError('Please enter a valid number of pushups');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/pushups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: parseInt(count) }),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Something went wrong');
      }
      
      setCount('');
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="card slide-up">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Log Your Pushups</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-700 mb-1">
            How many pushups did you do?
          </label>
          <div className="relative">
            <input
              id="count"
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="input pr-12"
              placeholder="Enter number"
              min="1"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
              reps
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`btn btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Saving...' : 'Log Pushups'} 
        </button>
      </form>
    </div>
  );
}

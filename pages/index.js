import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import UserMenu from '../components/UserMenu';
import Head from 'next/head';

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  // State to store pushup data
  const [pushupData, setPushupData] = useState({
    logs: [],
    dailyGoal: 0
  });
  
  // Form state
  const [pushupCount, setPushupCount] = useState('');
  const [goalValue, setGoalValue] = useState('');
  
  // Stats
  const [todayCount, setTodayCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  
  // Load data from API when user is authenticated
  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;
    
    fetchUserData();
  }, [isLoaded, isSignedIn]);
  
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      setFetchError(null);
      
      // Fetch logs for history
      const logsResponse = await fetch('/api/pushups');
      if (!logsResponse.ok) {
        const errorData = await logsResponse.json();
        throw new Error(`Error fetching logs: ${errorData.error || logsResponse.statusText}`);
      }
      
      const logs = await logsResponse.json();
      setPushupData(prev => ({ ...prev, logs }));
      
      // Fetch stats
      const statsResponse = await fetch('/api/stats');
      if (!statsResponse.ok) {
        const errorData = await statsResponse.json();
        throw new Error(`Error fetching stats: ${errorData.error || statsResponse.statusText}`);
      }
      
      const stats = await statsResponse.json();
      setTodayCount(stats.todayCount || 0);
      setWeekCount(stats.weekCount || 0);
      setTotalCount(stats.totalCount || 0);
      
      if (stats.dailyGoal) {
        setPushupData(prev => ({ ...prev, dailyGoal: stats.dailyGoal }));
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setFetchError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handler for logging pushups
  const handleLogPushups = async (e) => {
    e.preventDefault();
    
    const count = parseInt(pushupCount);
    if (isNaN(count) || count <= 0) {
      alert('Please enter a valid number of pushups.');
      return;
    }
    
    try {
      const response = await fetch('/api/pushups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count }),
      });
      
      if (response.ok) {
        // Success! Refresh data
        fetchUserData();
        setPushupCount('');
      } else {
        alert('Error logging pushups. Please try again.');
      }
    } catch (error) {
      console.error('Error logging pushups:', error);
      alert('Failed to save pushups. Please try again.');
    }
  };
  
  // Handler for setting goal
  const handleSetGoal = async (e) => {
    e.preventDefault();
    
    const goal = parseInt(goalValue);
    if (isNaN(goal) || goal <= 0) {
      alert('Please enter a valid goal.');
      return;
    }
    
    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dailyGoal: goal }),
      });
      
      if (response.ok) {
        const updatedGoal = await response.json();
        // Set the goal from the response rather than the input value
        setPushupData(prev => ({ ...prev, dailyGoal: updatedGoal.dailyGoal }));
        setTodayCount(prev => prev); // Force recalculation of progress
        setGoalValue('');
        // Success message
        alert('Goal updated successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error setting goal: ${errorData.error || 'Please try again'}`);
      }
    } catch (error) {
      console.error('Error setting goal:', error);
      alert('Failed to set goal. Please try again.');
    }
  };
  
  // Calculate progress percentage - ensure it's a number
  const progressPercentage = pushupData.dailyGoal > 0 
    ? Math.min(Math.round((todayCount / pushupData.dailyGoal) * 100), 100) 
    : 0;
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }
  
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center flex-col p-4">
        <Head>
          <title>Pushup Tracker - Welcome</title>
        </Head>
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Welcome to Pushup Tracker</h1>
        <p className="text-lg text-gray-600 mb-8">Track your pushup journey and achieve your fitness goals</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
          <a 
            href="/sign-in" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            Sign In
          </a>
          <a 
            href="/sign-up" 
            className="px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors text-center"
          >
            Create Account
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          First time? Click "Create Account" to get started!
        </p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header with user profile */}
        <header className="text-center mb-8 py-8 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-md relative">
          <div className="absolute top-4 right-4">
            <UserMenu />
          </div>
          
          <h1 className="text-3xl font-semibold text-white flex justify-center items-center space-x-2">
            <i className="fas fa-dumbbell"></i>
            <span>Pushup Tracker</span>
          </h1>
          
          {isSignedIn && (
            <p className="text-white mt-2 opacity-80">
              Welcome, {user.firstName || user.username || 'User'}!
            </p>
          )}
        </header>
        
        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center my-12">
            <p className="text-lg">Loading your data...</p>
          </div>
        ) : fetchError ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            <p className="font-medium">Error loading data</p>
            <p className="text-sm mt-1">{fetchError}</p>
            <button 
              onClick={() => fetchUserData()} 
              className="mt-2 bg-red-100 px-3 py-1 rounded-md text-red-800 text-sm hover:bg-red-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="stat-box">
                <h2 className="text-lg text-gray-600 mb-2">Today</h2>
                <p className="stat-count">{todayCount}</p>
              </div>
              
              <div className="stat-box">
                <h2 className="text-lg text-gray-600 mb-2">This Week</h2>
                <p className="stat-count">{weekCount}</p>
              </div>
              
              <div className="stat-box">
                <h2 className="text-lg text-gray-600 mb-2">Total</h2>
                <p className="stat-count">{totalCount}</p>
              </div>
            </div>
            
            {/* Goal Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-secondary-500 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <i className="fas fa-bullseye mr-2 text-secondary-500"></i> Your Daily Goal
              </h2>
              
              <div className="my-6">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner mb-2">
                  <div 
                    className="h-full bg-secondary-500 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-center font-semibold">
                  {todayCount} / {pushupData.dailyGoal || 0} pushups 
                  {progressPercentage > 0 && (
                    <span className="text-secondary-500 ml-2">({progressPercentage}%)</span>
                  )}
                </p>
              </div>
              
              <form onSubmit={handleSetGoal} className="mt-4">
                <label htmlFor="goal" className="block font-medium text-gray-700 mb-1">
                  Set Daily Goal:
                </label>
                <input
                  type="number"
                  id="goal"
                  className="form-input"
                  placeholder={pushupData.dailyGoal > 0 ? pushupData.dailyGoal.toString() : "Enter your goal"}
                  value={goalValue}
                  onChange={(e) => setGoalValue(e.target.value)}
                  min="1"
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-secondary w-full mt-3"
                >
                  <i className="fas fa-check mr-2"></i> Set Goal
                </button>
              </form>
            </section>
            
            {/* Log Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-accent mb-6">
              <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <i className="fas fa-plus-circle mr-2"></i> Log Pushups
              </h2>
              
              <form onSubmit={handleLogPushups}>
                <label htmlFor="pushups" className="block font-medium text-primary mb-1">
                  Number of pushups:
                </label>
                <input
                  type="number"
                  id="pushups"
                  className="form-input"
                  placeholder="How many pushups?"
                  value={pushupCount}
                  onChange={(e) => setPushupCount(e.target.value)}
                  min="1"
                  required
                />
                <button type="submit" className="btn mt-3">
                  <i className="fas fa-save mr-2"></i> Log Pushups
                </button>
              </form>
            </section>
            
            {/* History Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <i className="fas fa-history mr-2"></i> History
              </h2>
              
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {pushupData.logs.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No pushups logged yet</p>
                )}
                
                {pushupData.logs.map((log) => {
                  const date = new Date(log.date);
                  const formattedDate = date.toLocaleDateString();
                  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  
                  return (
                    <div key={log.id} className="history-item">
                      <span className="text-gray-600 text-sm">{formattedDate} at {formattedTime}</span>
                      <strong className="text-primary font-semibold">{log.count} pushups</strong>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

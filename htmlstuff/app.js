document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const pushupForm = document.getElementById('pushup-form');
    const pushupInput = document.getElementById('pushup-input');
    const goalForm = document.getElementById('goal-form');
    const goalInput = document.getElementById('goal-input');
    const todayCount = document.getElementById('today-count');
    const weekCount = document.getElementById('week-count');
    const totalCount = document.getElementById('total-count');
    const goalStatus = document.getElementById('goal-status');
    const progressFill = document.getElementById('progress-fill');
    const historyList = document.getElementById('history-list');
    
    // Initialize data from local storage or set defaults
    let data = JSON.parse(localStorage.getItem('pushupData')) || {
        logs: [],
        dailyGoal: 0
    };
    
    // Update UI with stored data
    function updateUI() {
        // Calculate today's count
        const today = new Date().toLocaleDateString();
        const todayPushups = data.logs
            .filter(log => new Date(log.date).toLocaleDateString() === today)
            .reduce((sum, log) => sum + log.count, 0);
            
        // Calculate week's count
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        
        const weekPushups = data.logs
            .filter(log => new Date(log.date) >= startOfWeek)
            .reduce((sum, log) => sum + log.count, 0);
            
        // Calculate total count
        const totalPushups = data.logs.reduce((sum, log) => sum + log.count, 0);
        
        // Update statistics
        todayCount.textContent = todayPushups;
        weekCount.textContent = weekPushups;
        totalCount.textContent = totalPushups;
        
        // Update goal progress
        let goalPercentage = data.dailyGoal > 0 ? (todayPushups / data.dailyGoal) * 100 : 0;
        goalPercentage = Math.min(goalPercentage, 100); // Cap at 100%
        progressFill.style.width = `${goalPercentage}%`;
        goalStatus.textContent = `${todayPushups} / ${data.dailyGoal}`;
        
        // Update history
        updateHistoryList();
    }
    
    // Update the history list in the UI
    function updateHistoryList() {
        historyList.innerHTML = '';
        
        // Sort logs by date (most recent first)
        const sortedLogs = [...data.logs].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );
        
        // Display the 10 most recent logs
        sortedLogs.slice(0, 10).forEach(log => {
            const date = new Date(log.date);
            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <span>${formattedDate} at ${formattedTime}</span>
                <strong>${log.count} pushups</strong>
            `;
            
            historyList.appendChild(historyItem);
        });
    }
    
    // Save data to local storage
    function saveData() {
        localStorage.setItem('pushupData', JSON.stringify(data));
        updateUI();
    }
    
    // Event listener for pushup form submission
    pushupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const count = parseInt(pushupInput.value);
        if (isNaN(count) || count <= 0) {
            alert('Please enter a valid number of pushups.');
            return;
        }
        
        data.logs.push({
            date: new Date().toISOString(),
            count: count
        });
        
        saveData();
        pushupInput.value = '';
    });
    
    // Event listener for goal form submission
    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const goal = parseInt(goalInput.value);
        if (isNaN(goal) || goal <= 0) {
            alert('Please enter a valid goal.');
            return;
        }
        
        data.dailyGoal = goal;
        
        saveData();
        goalInput.value = '';
    });
    
    // Load existing goal if available
    if (data.dailyGoal > 0) {
        goalInput.placeholder = data.dailyGoal;
    }
    
    // Initialize UI
    updateUI();
});

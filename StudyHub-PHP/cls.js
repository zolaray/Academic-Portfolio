 document.addEventListener('DOMContentLoaded', function() {
            const onceBtn = document.getElementById('once-btn');
            const repeatingBtn = document.getElementById('repeating-btn');
            const onceContainer = document.getElementById('once-container');
            const daysContainer = document.getElementById('days-container');
            const dayButtons = document.querySelectorAll('.day-button');
            const dateInput = document.getElementById('event-date');
            const startTimeInput = document.getElementById('start-time');
            const endTimeInput = document.getElementById('end-time');
            const dateDisplay = document.getElementById('selected-date-display');
            const dateDisplayText = document.getElementById('date-time-display-text');
            
            // Initialize with current date/time
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            dateInput.value = formattedDate;
            
            // Set default times (8:00 AM - 9:00 AM)
            startTimeInput.value = '08:00';
            endTimeInput.value = '09:00';
            
            // Format time display (e.g., "8:00 AM")
            function formatTime(timeString) {
                const [hours, minutes] = timeString.split(':');
                const hourNum = parseInt(hours);
                const ampm = hourNum >= 12 ? 'PM' : 'AM';
                const displayHour = hourNum % 12 || 12;
                return `${displayHour}:${minutes} ${ampm}`;
            }
            
            // Format date display (e.g., "Friday, March 4, 2022")
            function formatDate(dateString) {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
            }
            
            // Update the date/time display
            function updateDateTimeDisplay() {
                const dateStr = dateInput.value;
                const startTimeStr = startTimeInput.value;
                const endTimeStr = endTimeInput.value;
                
                if (dateStr && startTimeStr && endTimeStr) {
                    dateDisplay.style.display = 'flex';
                    dateDisplayText.textContent = `${formatDate(dateStr)}, ${formatTime(startTimeStr)} - ${formatTime(endTimeStr)}`;
                } else {
                    dateDisplay.style.display = 'none';
                }
            }
            
            // Set up event listeners
            dateInput.addEventListener('change', updateDateTimeDisplay);
            startTimeInput.addEventListener('change', updateDateTimeDisplay);
            endTimeInput.addEventListener('change', updateDateTimeDisplay);
            
            // Initial display update
            updateDateTimeDisplay();
            
            // Toggle between Once and Repeating
            onceBtn.addEventListener('click', function() {
                onceBtn.classList.add('active');
                repeatingBtn.classList.remove('active');
                onceContainer.classList.add('show');
                daysContainer.classList.remove('show');
            });
            
            repeatingBtn.addEventListener('click', function() {
                repeatingBtn.classList.add('active');
                onceBtn.classList.remove('active');
                daysContainer.classList.add('show');
                onceContainer.classList.remove('show');
            });
            
            // Toggle day selection
            dayButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.classList.toggle('active');
                });
            });
            
            // Enhance date input with better mobile support
            dateInput.addEventListener('focus', function() {
                this.type = 'date';
            });
            
            dateInput.addEventListener('blur', function() {
                if (!this.value) this.type = 'text';
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
    const onceBtn = document.getElementById('once-btn');
    const repeatingBtn = document.getElementById('repeating-btn');
    const onceContainer = document.getElementById('once-container');
    const daysContainer = document.getElementById('days-container');
    const dayButtons = document.querySelectorAll('.day-button');
    const daySelect = document.getElementById('day-select');
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');
    const startTimeInput = document.getElementById('start-time');
    const endTimeInput = document.getElementById('end-time');
    const dateDisplay = document.getElementById('selected-date-display');
    const dateDisplayText = document.getElementById('date-time-display-text');
    
    // Populate days (1-31)
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
    
    // Populate months
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
    
    // Populate years (current year -10 to +10)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
    
    // Set default values to current date
    const today = new Date();
    daySelect.value = today.getDate();
    monthSelect.value = today.getMonth() + 1;
    yearSelect.value = today.getFullYear();
    
    // Set default times (8:00 AM - 9:00 AM)
    startTimeInput.value = '08:00';
    endTimeInput.value = '09:00';
    
    // Format time display (e.g., "8:00 AM")
    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const hourNum = parseInt(hours);
        const ampm = hourNum >= 12 ? 'PM' : 'AM';
        const displayHour = hourNum % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    }
    
    // Format date display (e.g., "Friday, March 4, 2022")
    function formatDate(day, month, year) {
        const date = new Date(year, month - 1, day);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    // Update the date/time display
    function updateDateTimeDisplay() {
        const day = daySelect.value;
        const month = monthSelect.value;
        const year = yearSelect.value;
        const startTimeStr = startTimeInput.value;
        const endTimeStr = endTimeInput.value;
        
        if (day && month && year && startTimeStr && endTimeStr) {
            dateDisplay.style.display = 'flex';
            dateDisplayText.textContent = 
                `${formatDate(day, month, year)}, ${formatTime(startTimeStr)} - ${formatTime(endTimeStr)}`;
        } else {
            dateDisplay.style.display = 'none';
        }
    }
    
    // Set up event listeners
    daySelect.addEventListener('change', updateDateTimeDisplay);
    monthSelect.addEventListener('change', updateDateTimeDisplay);
    yearSelect.addEventListener('change', updateDateTimeDisplay);
    startTimeInput.addEventListener('change', updateDateTimeDisplay);
    endTimeInput.addEventListener('change', updateDateTimeDisplay);
    
    // Initial display update
    updateDateTimeDisplay();
    
    // Toggle between Once and Repeating
    onceBtn.addEventListener('click', function() {
        onceBtn.classList.add('active');
        repeatingBtn.classList.remove('active');
        onceContainer.classList.add('show');
        daysContainer.classList.remove('show');
    });
    
    repeatingBtn.addEventListener('click', function() {
        repeatingBtn.classList.add('active');
        onceBtn.classList.remove('active');
        daysContainer.classList.add('show');
        onceContainer.classList.remove('show');
    });
    
    // Toggle day selection
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

  
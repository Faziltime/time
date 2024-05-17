document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const goButton = document.getElementById('goButton');
    const resultDiv = document.getElementById('result');

    // Populate the year select with options
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // Sample data for amazing events
    const amazingEvents = {
        '2023-01': 'Amazing Event in January 2023',
        '2022-02': 'Spectacular Event in February 2022',
        '2021-03': 'Incredible Event in March 2021',
        // Add more events as needed
    };

    goButton.addEventListener('click', () => {
        const selectedYear = yearSelect.value;
        const selectedMonth = monthSelect.value;
        const key = `${selectedYear}-${selectedMonth}`;

        const eventMessage = amazingEvents[key] || 'No amazing event found for this date.';
        resultDiv.textContent = eventMessage;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const goButton = document.getElementById('goButton');
    const eventText = document.getElementById('eventText');
    const eventImage = document.getElementById('eventImage');

    // Populate the year select with options
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // Sample data for amazing events with images
    const amazingEvents = {
        '2019-07': {
            text: 'England won the Cricket World Cup in July 2019!',
            image: 'england.webp' // Local image
        },
        '2023-01': {
            text: 'Amazing Event in January 2023',
            image: 'event_jan_2023.jpg' // Placeholder for another local image
        },
        '2022-02': {
            text: 'Spectacular Event in February 2022',
            image: 'event_feb_2022.jpg' // Placeholder for another local image
        },
        '2021-03': {
            text: 'Incredible Event in March 2021',
            image: 'event_mar_2021.jpg' // Placeholder for another local image
        },
        // Add more events as needed
    };

    goButton.addEventListener('click', () => {
        const selectedYear = yearSelect.value;
        const selectedMonth = monthSelect.value;
        const key = `${selectedYear}-${selectedMonth}`;

        console.log(`Selected Year-Month Key: ${key}`); // Debugging line

        const event = amazingEvents[key];
        if (event) {
            eventText.textContent = event.text;
            eventImage.src = event.image;
            eventImage.style.display = 'block';
        } else {
            eventText.textContent = 'No amazing event found for this date.';
            eventImage.style.display = 'none';
        }
    });
});

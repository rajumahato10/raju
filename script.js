document.addEventListener('DOMContentLoaded', function() {
    // Latest Updates section dynamic content
    const newsList = [
        { date: '2024-09-15', headline: 'New Initiative Launched' },
        { date: '2024-09-10', headline: 'Community Health Program Success' },
        { date: '2024-09-05', headline: 'Award for Outstanding Service' }
    ];

    const newsListElement = document.getElementById('news-list');
    newsList.forEach(news => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#">${news.date}: ${news.headline}</a>`;
        newsListElement.appendChild(listItem);
    });

    // Hero Slider functionality
    const slider = document.querySelector('.hero-slider');
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % slider.children.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});


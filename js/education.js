const ARTICLES_PER_PAGE = 8;
let currentIndex = 0;

// Get DOM elements
const articlesGrid = document.getElementById('articlesGrid1');
const loadMoreBtn = document.getElementById('loadMoreBtn1');

// Function to create article card HTML
function createArticleCard(article, index) {
    const card = document.createElement('div');
    card.className = 'article-card1';
    card.style.animationDelay = `${(index % ARTICLES_PER_PAGE) * 0.1}s`;
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-image1">
        <div class="article-content1">
            <div class="article-date1">${article.date}</div>
            <h4>${article.title}</h4>
            <p class="article-excerpt1">${article.excerpt}</p>
        </div>
    `;
    
    // Add click event
    card.addEventListener('click', () => {
    window.open(article.link, '_blank');
});
    
    return card;
}

// Function to load articles
function loadArticles() {
    const endIndex = Math.min(currentIndex + ARTICLES_PER_PAGE, articlesData.length);
    
    // Create and append article cards
    for (let i = currentIndex; i < endIndex; i++) {
        const card = createArticleCard(articlesData[i], i - currentIndex);
        articlesGrid.appendChild(card);
    }
    
    currentIndex = endIndex;
    
    // Hide load more button if all articles are loaded
    if (currentIndex >= articlesData.length) {
        loadMoreBtn.classList.add('hidden');
    }
    
    // Scroll to newly loaded articles (with slight delay for animation)
    if (currentIndex > ARTICLES_PER_PAGE) {
        setTimeout(() => {
            const lastCard = articlesGrid.lastElementChild;
            if (lastCard) {
                lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    }
}

// Load more button event
loadMoreBtn.addEventListener('click', loadArticles);

// Initial load
loadArticles();
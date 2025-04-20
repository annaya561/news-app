const API_KEY = "747451d50863ef8610be18c62a822209";
const HEADLINES_NEWS="https://gnews.io/api/v4/top-headlines?category=headlines&lang=en&country=in&apikey="
const GENERAL_NEWS = "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=";
const SPORTS_NEWS = "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&apikey=";
const BUSINESS_NEWS = "https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&apikey=";
const ENTERTAINMENT_NEWS = "https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&country=in&apikey=";


const generalBtn = document.getElementById("general");
const sportsBtn = document.getElementById("sports");
const businessBtn = document.getElementById("business");
const entertainmentBtn = document.getElementById("entertainment");
const newsDetails = document.getElementById("newsdetails");

function limitWords(text, maxWords) {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
}


window.onload = loadHeadlinesNews;

//headlines
async function loadHeadlinesNews() {
    try {
        const response = await fetch(`${HEADLINES_NEWS}${API_KEY}`);
        const data = await response.json();

        newsdetails.innerHTML = "";

        if (!data.articles || data.articles.length === 0) {
            alert("No articles found");
            newsdetails.innerHTML = "<p>No headlines found.</p>";
            return;
        }

        data.articles.forEach(news => {
            newsdetails.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="news-card card h-100 shadow-sm">
                        <img src="${news.image}" alt="News Image" class="news-image card-img-top img-fluid">
                        <div class="card-body d-flex flex-column">
                            <h3 class="news-title card-title">${limitWords(news.title, 10)}</h3>
                            <p class="news-description card-text">${limitWords(news.description, 20)}</p>
                            <a class="read-more btn btn-primary mt-auto" href="${news.url}" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Something went wrong while loading headlines");
        newsdetails.innerHTML = "<p>Error loading headlines.</p>";
    }
}




// general
generalBtn.addEventListener("click", async function () {
    try {
        const response = await fetch(`${GENERAL_NEWS}${API_KEY}`);
        const data = await response.json();

        newsdetails.innerHTML = "";

        if (!data.articles || data.articles.length === 0) {
            alert("No articles found");
            newsdetails.innerHTML = "<p>No news found.</p>";
            return;
        }

        
        data.articles.forEach(news => {
            newsdetails.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="news-card card h-100 shadow-sm">
                        <img src="${news.image}" alt="News Image" class="news-image card-img-top img-fluid">
                        <div class="card-body d-flex flex-column">
                            <h3 class="news-title card-title">${limitWords(news.title, 10)}</h3>
                            <p class="news-description card-text">${limitWords(news.description, 20)}</p>
                            <a class="read-more btn btn-primary mt-auto" href="${news.url}" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
            `;
        });
        
    } catch (error) {
        console.log("Fetch Error:", error);
        alert("Something went wrong in general news");
        newsdetails.innerHTML = "<p>Error fetching news.</p>";
    }
});

// sports//
sportsBtn.addEventListener("click", async function () {
    try {
        const response = await fetch(`${SPORTS_NEWS}${API_KEY}`);
        const data = await response.json();

        newsdetails.innerHTML = "";

        if (!data.articles || data.articles.length === 0) {
            alert("No articles found");
            newsdetails.innerHTML = "<p>No news found.</p>";
            return;
        }

        

        data.articles.forEach(news => {
            newsdetails.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="news-card card h-100 shadow-sm">
                        <img src="${news.image}" alt="News Image" class="news-image card-img-top img-fluid">
                        <div class="card-body d-flex flex-column">
                            <h3 class="news-title card-title">${limitWords(news.title, 10)}</h3>
                            <p class="news-description card-text">${limitWords(news.description, 20)}</p>
                            <a class="read-more btn btn-primary mt-auto" href="${news.url}" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
            `;
        });
        

    } catch (error) {
        console.log("Fetch Error:", error);
        alert("Something went wrong in sports news");
        newsdetails.innerHTML = "<p>Error fetching news.</p>";
    }
});

// business//
businessBtn.addEventListener("click", async function () {
    try{
        const response = await fetch(`${BUSINESS_NEWS}${API_KEY}`);
        const data = await response.json();
        
        newsdetails.innerHTML = "";
        if(!data.articles || data.articles.length === 0){
            
            newsdetails.innerHTML = "<p>No news found.</p>";
            return;
        }
        

        data.articles.forEach(news => {
            newsdetails.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="news-card card h-100 shadow-sm">
                        <img src="${news.image}" alt="News Image" class="news-image card-img-top img-fluid">
                        <div class="card-body d-flex flex-column">
                            <h3 class="news-title card-title">${limitWords(news.title, 10)}</h3>
                            <p class="news-description card-text">${limitWords(news.description, 20)}</p>
                            <a class="read-more btn btn-primary mt-auto" href="${news.url}" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }catch(error){
        console.log("Fetch Error:", error);
        alert("Something went wrong in business news");
        newsdetails.innerHTML = "<p>Error fetching news.</p>";
    }
});

// entertainment//

entertainmentBtn.addEventListener("click", async function (){
    try{
        const response = await fetch(`${ENTERTAINMENT_NEWS}${API_KEY}`);
        const data = await response.json();
        // console.log(data,"datatatatatatatata");
        

        newsdetails.innerHTML = "";

        if(!data.articles || data.articles.length === 0){
            newsdetails.innerHTML = "<p>No news found.</p>";
            return;
        }
        
        data.articles.forEach(news => {
            newsdetails.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="news-card card h-100 shadow-sm">
                        <img src="${news.image}" alt="News Image" class="news-image card-img-top img-fluid">
                        <div class="card-body d-flex flex-column">
                            <h3 class="news-title card-title">${limitWords(news.title, 10)}</h3>
                            <p class="news-description card-text">${limitWords(news.description, 20)}</p>
                            <a class="read-more btn btn-primary mt-auto" href="${news.url}" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
            `;
        });
        
    }catch(error){
        console.log("Fetch Error:", error);
        alert("Something went wrong in entertainment news");
        newsdetails.innerHTML = "<p>Error fetching news.</p>";
    }
})



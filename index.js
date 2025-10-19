import { videos } from "./data.js"
const firstVideo = videos[0];
const cardContainer = document.querySelector(".card-container")
const midheaderContainer = document.querySelector(".midheader-container")
const body = document.querySelector("body")

const midheaderHtml = `<div class="left-container">
                            <h4 class="header-title">Sermão recente</h4>
                            <h3 class="header-subtitle">${firstVideo.title}</h3>
                            <p class="header-text">${firstVideo.text}
                            </p>
                            <div class="video-header">
                                <h2 class="watch-btn">Assista agora</h2>
                                <h2 class="dot">.</h2>
                                <h2>${firstVideo.duration}</h2>
                            </div>
                        </div>
                        <iframe id="firstVideo" class="video"
                                src="${firstVideo.videoUrl}"
                                    
                                title="${firstVideo.title}"
                                allowfullscreen>
                        </iframe>`;

let videoHtml = videos.map((item) => {
    return `<section class="card">
                        <div class="video-wrapper">
                            <iframe 
                                src="${item.videoUrl}"
                                    
                                title="${item.title}"
                                allowfullscreen>
                                
                            </iframe>
                            <h4 class="video-duration">${item.duration}</h4>
                        </div>
                        <div class="card-text">
                            <h2 class="card-title"><span>${item.title}</span></h2>
                            <p class="card-date">${item.date}</p>
                            <p class="card-description">
                                ${item.text}
                            </p>
                        </div>
                </section>`;

}).join("");



function render(htmlElement, html){
  htmlElement.innerHTML = html;
}

render(midheaderContainer, midheaderHtml);
const videoOne = document.getElementById("firstVideo");


render(cardContainer, videoHtml);


body.addEventListener("click", (e) => {
  if (e.target.classList.contains("watch-btn")) {
    const baseUrl = firstVideo.videoUrl.split("?")[0]; // clean existing params
    const videoUrl = `${baseUrl}?autoplay=1&mute=1&rel=0&modestbranding=1`;
    videoOne.src = videoUrl;
  }
});


const searchInput = document.querySelector(".header-input")

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase()
    const cards = document.querySelectorAll(".card")

    cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase()
        
        if(title.includes(term)) {
            card.style.display = "flex"
        } else {
            card.style.display = "none";
        }


    })
})


(()=>{
  let scrollPos = window.scrollY;
  
  const header = document.getElementById("navigation");
  const scrollChange = 1;
  
  const addScrollClass = () => header.classList.add("navbg");
  const removeScrollClass = () => header.classList.remove("navbg");
  
  window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;
  
    if (scrollPos >= scrollChange) {
      addScrollClass();
    } else {
      removeScrollClass();
    }
  });
  
  function generateImages() {
    let gallery = document.querySelector(".gallery");
    let galleryHtml = "";
  
    for (let i = 1; i < 11; i++) {
      galleryHtml += `<figure>
      <a class="lightbox-trigger" href="" data-index="${i}">
          <img class="lightboxImg" src="static/img/Lightopia-${i}.jpg" alt="">
      </a>
  </figure>`;
    }
    gallery.innerHTML += galleryHtml;
  }
  
  
  
  function buildUI() {
    generateImages();
  }
  function initialize() {
    buildUI();
  }
  initialize();

})();

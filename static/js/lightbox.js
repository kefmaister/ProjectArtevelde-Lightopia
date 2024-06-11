(()=>{
  function setupLightbox() {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightboxImg");
    let closeBtn = document.getElementById("closeBtn");
    let lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
  
    lightboxTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        let index = parseInt(this.dataset.index);
        showLightbox(index);
      });
    });
  
    closeBtn.addEventListener("click", hideLightbox);
  
    function showLightbox(index) {
      lightboxImg.src = `static/img/Lightopia-${index}.jpg`;
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  
    function hideLightbox() {
      lightbox.classList.remove("show");
      document.body.style.overflow = "";
    }
  }
  
  
  function buildUI() {
    setupLightbox();
  }
  function initialize() {
    buildUI();
  }
  initialize();

})();
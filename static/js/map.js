(() => {
  function lightBoxMarker() {
      let lightbox = document.getElementById("foto-detail");
      let lightboxImg = lightbox.querySelector("img");
      let closeBtn = document.getElementById("closeBtnDetail");

      closeBtn.addEventListener("click", hideLightbox);

      function showLightbox(index) {
          lightboxImg.src = `static/img/0${index}.jpg`;
          lightbox.classList.add("show");
      }

      function hideLightbox() {
          lightbox.classList.remove("show");
      }

      return {
          showLightbox,
          hideLightbox
      };
  }

  function createMarker(x, y, index, lightboxHandler) {
      const marker = document.createElement("div");
      marker.classList.add("marker", "lightbox-trigger");
      marker.style.left = `${x}%`;
      marker.style.top = `${y}%`;
      marker.dataset.index = index;
      marker.innerHTML = `<i class="fa-regular fa-images"></i>`;
      const markerEvent = document.getElementById("markers");
      markerEvent.appendChild(marker);

      marker.addEventListener("click", function() {
          const index = parseInt(this.dataset.index);
          lightboxHandler.showLightbox(index);
      });
  }

  const lightboxHandler = lightBoxMarker();

  for (const pointer in mapPointers) {
      if (mapPointers.hasOwnProperty(pointer)) {
          const {
              x,
              y
          } = mapPointers[pointer];
          createMarker(x, y, pointer.charAt(pointer.length - 1), lightboxHandler);
      }
  }
})();
(()=>{
  function generateFaq() {
    let faqHtml = "";
    // let currentCat = null;
    const faqDiv = document.getElementById("faq");
  
    const category = [...new Set(questions.map((quest) => quest.category))];
    console.log(category);
  
    for (const cat of category) {
      faqHtml += `<h3 class="category">${cat}</h3>
          <ul class="textbox container general-center limit-600">`;
  
      const catQuest = questions.filter((quest) => quest.category == cat);
  
      for (const quest of catQuest) {
        faqHtml += `<li class="item">
          <div class="item-container">
          <strong>${quest.question}</strong>
          <i class="fa-solid fa-plus"></i>
          </div>
          <p class="question">${quest.answer}</p>
          </li>`;
      }
      faqHtml += `</ul>`;
    }
  
    faqDiv.innerHTML = faqHtml;
  
    const questItems = document.querySelectorAll(".item");
    const plusmark = document.querySelector(".fa-plus");
    questItems.forEach((item) => {
      item.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        questItems.forEach((otherItem) => otherItem.classList.remove("active"));
        if (!isOpen) {
          item.classList.add("active");
          plusmark.animate();
        }
      });
    });
  }
  
  function buildUI() {
    generateFaq();
  }
  function initialize() {
    buildUI();
  }
  initialize();
})();



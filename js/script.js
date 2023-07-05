/*============================TEMPLATES SLIDER==========================*/
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass(".cs-hidden");
    },
  });
});

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 100,
});

sr.reveal(".header__content", { origin: "top", delay: 400 });
sr.reveal(".home__heading", { origin: "top"});
sr.reveal(".home__heading-text", { origin: "top"});
sr.reveal(".home__item", { origin: "bottom"});
sr.reveal(".piano__img", { origin: "bottom"});
sr.reveal(".piano__desc", { origin: "bottom", delay: 600 });
sr.reveal(".presentation__heading", { origin: "top" });
sr.reveal(".presentation__heading-text", { origin: "bottom" });
sr.reveal(".presentation__item-right", { origin: "right"});
sr.reveal(".presentation__item-left", { origin: "left"});
sr.reveal(".edition__item", { origin: "left" });
sr.reveal(".edition__item-secondary", { origin: "right"});
sr.reveal(".templates", { origin: "top"});
sr.reveal(".apply__left", { origin: "top"});
sr.reveal(".apply__right", { origin: "right"});
sr.reveal(".pricing__heading", { origin: "top"});
sr.reveal(".pricing__heading-text", { origin: "left"});
sr.reveal(".pricing__top", { origin: "top"});
sr.reveal(".pricing__bottom", { origin: "bottom"});
sr.reveal(".pricing__description", { origin: "bottom"});
sr.reveal(".questions__heading", { origin: "top"});
sr.reveal(".questions__item", { origin: "top", delay: 500 });
sr.reveal(".support__content", { origin: "left"});
sr.reveal(".support__subtitle", { origin: "right"});
sr.reveal(".footer__logo", { origin: "left"});
sr.reveal(".footer__heading", { origin: "top"});
sr.reveal(".footer__list", { origin: "top", delay: 600});
sr.reveal(".footer__copyright", { origin: "bottom", delay: 1000});

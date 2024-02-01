
// const myName = "Amir";
// const h1 = document.querySelector(".primary-heading");
// console.log(myName);
// console.log(h1);


// h1.addEventListener("click",function(){
//   h1.textContent = myName;
// h1.style.backgroundColor="red";
// })


//////////////////////// SET CURRENT YEAR /////////////////////////////
const yearEl= document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent= currentYear;
//////////////////////////////////////////////////////////////////////

////////////////////  MAKE THE NAVIGATION WORK////////////////////////

const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function() {
headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////////////////

////////////////////  SMOOTH SCROLLING  ////////////////////////
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach ( function(link){
  link.addEventListener("click", function(e){
    e.preventDefault();
    const href = link.getAttribute("href");
    

    /// Scroll back to top
    if (href === "#")
      window.scrollTo({
      top: 0,
      behavior: "smooth",
      });
    /// SCROLL TO SECTIONS
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView ({ behavior:"smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");}
  });
});



/////////////////// STICKY NAVIGATION //////////////////
const sectionHeroEl= document.querySelector(".section-hero");

const obs = new IntersectionObserver (
  function (entries){
    const ent = entries [0];

    if (ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true){
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root : null,
  threshold: 0,
  rootMargin : '-80px', 
  }
);
obs.observe(sectionHeroEl);







///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  
  //  PUT INTO THE HEAD AS A SCRIPT 
  //https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
  
  
  

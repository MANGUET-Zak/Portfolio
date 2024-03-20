/*light & dark mode*/
window.localStorage.setItem('mode', 'light')
const modeBtn = document.getElementById('switch');
modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    const choiceImgDark = document.querySelector (".presentation__image");
    choiceImgDark.src = 'images/images-moi-no-background.webp';
    window.localStorage.setItem('mode', 'dark');
  } else {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    const choiceImgDark = document.querySelector (".presentation__image");
    choiceImgDark.src = 'images/images-moi-no-background-light.webp';
    window.localStorage.setItem('mode', 'light');
  }
}


// typing-text effect //

const dynamicText = document.querySelector(".bienvenue__effect-typing");
const words = ["Zak Manguet", "Webdesigner", "Integrator", "Creative" ];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if(!isDeleting && charIndex < currentWord.length){
    // if condition true, type the next character //
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if(isDeleting && charIndex > 0) {
    // if condition true, remove the previous character //
    charIndex--;
    setTimeout(typeEffect, 100);
  } else{
    // if word is deleted then switch to the next word //
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
}

typeEffect();


// les scroll //

gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia(); //limitation pour certaine résolution//

mm.add("(min-width:1024px)", ()=>{

  const image = document.querySelector (".presentation__image");// Animation 1//

  gsap.to(image , { 
      scrollTrigger: {
        trigger: ".presentation__image",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        toggleActions: "play complete reverse reset",
      },
      y: 0,
      duration: 2,
      'clip-path': 'circle(50% at 50% 50%)',
      opacity: 1,
      ease: "none",
    });

    const textPresentation = document.querySelector (".presentation__text");// Animation 2//

  gsap.from( textPresentation , { 
      scrollTrigger: {
        trigger: ".presentation",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        toggleActions: "play complete reverse reset",
      },
      x: -3000,
      duration: 0.5,
      opacity: 0,
      ease: "sine.out",
  });


  const sectionCompetence = document.querySelector (".competence");// Animation 3//

  gsap.from( sectionCompetence , { 
      scrollTrigger: {
        trigger: ".competence",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        toggleActions: "play complete reverse reset",
      },
      duration: 2,
      opacity: 0,
      ease: "none",
  });
})
  
//caroussel//

console.clear();
let count = 0;
const targets = document.querySelectorAll(".box");
gsap.set(targets, { xPercent: 100 });
gsap.set(targets[0], { xPercent: 0 });

// Next button
function slideOneNext() {
gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 });
count = count < targets.length - 1 ? ++count : 0;
gsap.fromTo(targets[count], { xPercent: 100, zIndex: 10 }, { duration: 1.2, xPercent: 0, zIndex: 0 });
}
nextButton.addEventListener("click", function() {
slideOneNext();
});

// Previous button
function slideOnePrev() {
  gsap.fromTo(targets[count], { xPercent: 0, zIndex: 10 }, {xPercent: 0, zIndex: 0 });
  gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 });
  count = count < targets.length ? --count : 0;
}
prevButton.addEventListener("click", function() {
  slideOnePrev();
});

// Line //

let path = document.querySelector('.line-container__path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () =>{

  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var drawLength = pathLength * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;

})

// cursor //

const cursor = document.querySelector(".cursor");
var timeout;

    //suivre le curseur avec la souris //

document.addEventListener("mousemove", (ev) => {
  let x = ev.pageX;
  let y = ev.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});

  //effet du cursor lors de la sortie de la souris //

document.addEventListener ("mouseout"), () => {
  cursor.style.display = "none";
}
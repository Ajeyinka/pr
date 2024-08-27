const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
        toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });

const activePage = window.location.pathname;
const activeNav = document.querySelectorAll('.ava').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('navactive');
      
    }
  })

  

   
  /* 
  const magneto = document.querySelector('.name');
  const magnetoText = document.querySelector('.name h3');
  const dbgr = document.querySelector('.debbuger');

  const activateMagneto =(event) =>{
      
      let boundBox = magneto.getBoundingClientRect();
      let magnetoStrength = 40
      let magnetoTextStrength = 80
      const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5
      const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5

      gsap.to(magneto, {
       duration:1,
       x:newX * magnetoStrength,
       y:newY * magnetoStrength,
       ease:Power4.easeOut
      })

      gsap.to(magnetoText, {
       duration:1,
       x:newX * magnetoTextStrength,
       y:newY * magnetoTextStrength,
       ease:Power4.easeOut
      })
  }


  const resetMagneto =(event) =>{
    gsap.to(magneto, {
      duration:1,
      x: 0,
      y: 0,
      ease:Elastic.easeOut
     })

     gsap.to(magnetoText, {
      duration:1,
      x: 0,
      y: 0,
      ease:Elastic.easeOut
     })
   
 }

 
 
 magneto.addEventListener('mousemove' , activateMagneto);
 magneto.addEventListener('mouseleave' , resetMagneto)
 
 */




 const magnetoElements = document.querySelectorAll('.name');

const activateMagneto = (event) => {
    const magneto = event.currentTarget;
    const magnetoText = magneto.querySelector('h3');
    let boundBox = magneto.getBoundingClientRect();
    let magnetoStrength = 20;
    let magnetoTextStrength = 40;
    const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
    const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    });

    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    });
}

const resetMagneto = (event) => {
    const magneto = event.currentTarget;
    const magnetoText = magneto.querySelector('h3');

    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
}

magnetoElements.forEach((magneto) => {
    magneto.addEventListener('mousemove', activateMagneto);
    magneto.addEventListener('mouseleave', resetMagneto);
});


let loadTl = gsap.timeline();
loadTl.from('.navbar',{
    opacity:0,
    y:"-6rem",
    duration:1,
}
)
loadTl.from('.txt',{
    opacity:0,
    stagger:{each:0.2},
    y:"6rem",
    duration:1,
}
)


loadTl.from('.image-hero-container',{
    opacity:0,
    scale:0,
    y:"6rem",
    duration:1,
}, '<.5')

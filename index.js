// Nav bar background animation 
const navBar = document.querySelector('nav')

window.addEventListener('scroll', () => {
  if (window.scrollY > 10)
    navBar.classList.add('scrolled')
  else
    navBar.classList.remove('scrolled')
})

// Nav bar hamburger menu

const hamburgerBtn = document.querySelector('.hamburger')
const navList = document.querySelector('nav ul')

hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active')
      navList.classList.toggle('active')
      navBar.classList.toggle('active')
    }
)

navList.addEventListener('click', () => {
  if(navList.classList.contains('active')) {
      hamburgerBtn.classList.remove('active')
      navList.classList.remove('active')
      navBar.classList.remove('active')
  }
})

// Apear and Disapear Animations
const aboutMeSection = document.querySelector('.about-me-container')
const technologiesHeading = document.querySelector('.technologies-heading')
const technologiesImages = document.querySelectorAll('.technologies-images .image')
const contactSection = document.querySelector('.contact-container')
const projectOne = document.querySelector('.project-one')
const projectTwo = document.querySelector('.project-two')
const projectThree = document.querySelector('.project-three')

window.addEventListener('scroll', () => {
  const aboutMeSecPosition = aboutMeSection.getBoundingClientRect().top
  const technologiesHeadPosition = technologiesHeading.getBoundingClientRect().top
  const contactSecPosition = contactSection.getBoundingClientRect().top
  /// Projects viewport positions
  const projectOnePosition = projectOne.getBoundingClientRect().top
  const projectOnePosition_btm = projectOne.getBoundingClientRect().bottom
  const projectTwoPosition = projectTwo.getBoundingClientRect().top
  const projectTwoPosition_btm = projectTwo.getBoundingClientRect().bottom
  const projectThreePosition = projectThree.getBoundingClientRect().top
  const projectThreePosition_btm = projectThree.getBoundingClientRect().bottom

  // About Me section
  if (aboutMeSecPosition < window.innerHeight * 0.7 && aboutMeSecPosition > 0) {
    aboutMeSection.classList.add('scroll-apear-animation')
  } 

  // Technologies section
  if (technologiesHeadPosition < window.innerHeight * 0.7 && technologiesHeadPosition > 0) {
    technologiesHeading.classList.add('scroll-apear-animation')

    for (i = 0; i < technologiesImages.length; i++) {
      technologiesImages[i].classList.add('scroll-apear-animation-tech_img')
      technologiesImages[i].style.animationDelay += 1000 + (i + 1) * 350 + 'ms'
    } 
  }  

  // Projects section
  if (projectOnePosition < window.innerHeight * 0.7 && projectOnePosition > 0) {
    projectOne.classList.add('scroll-apear-animation-scale-project')

    if (projectOne.classList.contains('scroll-disapear-animation-scale-project'))
      projectOne.classList.remove('scroll-disapear-animation-scale-project')
  } else if (projectOnePosition > 0 || projectOnePosition_btm < 200){
    projectOne.classList.add('scroll-disapear-animation-scale-project')
    projectOne.classList.remove('scroll-apear-animation-scale-project')
  }

  if (projectTwoPosition < window.innerHeight * 0.7 && projectTwoPosition > 0) {
    projectTwo.classList.add('scroll-apear-animation-scale-project')

    if (projectTwo.classList.contains('scroll-disapear-animation-scale-project'))
      projectTwo.classList.remove('scroll-disapear-animation-scale-project')
  } else if (projectTwoPosition > 0 || projectTwoPosition_btm < 200){
    projectTwo.classList.add('scroll-disapear-animation-scale-project')
    projectTwo.classList.remove('scroll-apear-animation-scale-project')
  }

  if (projectThreePosition < window.innerHeight * 0.7 && projectThreePosition > 0) {
    projectThree.classList.add('scroll-apear-animation-scale-project')

    if (projectThree.classList.contains('scroll-disapear-animation-scale-project'))
      projectThree.classList.remove('scroll-disapear-animation-scale-project')
  } else if (projectThreePosition > 0 || projectThreePosition_btm < 200){
    projectThree.classList.add('scroll-disapear-animation-scale-project')
    projectThree.classList.remove('scroll-apear-animation-scale-project')
  }

  // Contact Section
  if (contactSecPosition < window.innerHeight * 0.7 && contactSecPosition > 0) {
    contactSection.classList.add('scroll-apear-animation')
  } 

})

// Project website preview
// Buttons
const previewButtonOne = document.querySelector('.project-one .image-button img')
const previewButtonTwo = document.querySelector('.project-two .image-button img')
const previewButtonThree = document.querySelector('.project-three .image-button img')
// Images
const previewImageOne = document.querySelector('.project-one .image-preview img')
const previewImageTwo = document.querySelector('.project-two .image-preview img')
const previewImageThree = document.querySelector('.project-three .image-preview img')


previewButtonOne.addEventListener('click', () => {
  if (previewButtonOne.getAttribute('src') === './images/Projects/iphone-icon.png') {
    previewButtonOne.src = './images/Projects/desktop-icon.png'
    previewImageOne.src = './images/Projects/vitta-watches-iphone-image.png'
    previewImageOne.style.width = '30%'
  } else {
    previewButtonOne.src = './images/Projects/iphone-icon.png'
    previewImageOne.src = './images/Projects/vitta-watches-mac-image.png'
    previewImageOne.style.width = '100%'
  }
})

previewButtonTwo.addEventListener('click', () => {
  if (previewButtonTwo.getAttribute('src') === './images/Projects/iphone-icon.png') {
    previewButtonTwo.src = './images/Projects/desktop-icon.png'
    previewImageTwo.src = './images/Projects/fabianfallend-iphone-image.png'
    previewImageTwo.style.width = '30%'
  } else {
    previewButtonTwo.src = './images/Projects/iphone-icon.png'
    previewImageTwo.src = './images/Projects/fabianfallend-mac-image.png'
    previewImageTwo.style.width = '100%'
  }
})

previewButtonThree.addEventListener('click', () => {
  if (previewButtonThree.getAttribute('src') === './images/Projects/iphone-icon.png') {
    previewButtonThree.src = './images/Projects/desktop-icon.png'
    previewImageThree.src = './images/Projects/bugatti-smartwatches-iphone-image.png'
    previewImageThree.style.width = '30%'
  } else {
    previewButtonThree.src = './images/Projects/iphone-icon.png'
    previewImageThree.src = './images/Projects/bugatti-smartwatches-mac-image.png'
    previewImageThree.style.width = '100%'
  }
})



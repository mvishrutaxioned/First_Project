const hamburger = document.querySelector('.hamburger')
const respoNav = document.querySelector('.respo-nav')
const closeBtn = document.querySelector('.close')
const heroPage = document.querySelector('.hero')
const navbar = document.querySelector('.navbar')
const downKey = document.querySelector('.down')
const btn = document.querySelector('form button')

btn.addEventListener('click', (e) => {
    e.preventDefault();
})

downKey.addEventListener('click', (e) => {
    e.preventDefault()

    const value = navbar.offsetHeight + heroPage.offsetHeight
    window.scrollTo(0, value)
});

hamburger.addEventListener('click', (e) => {
    e.preventDefault()

    respoNav.classList.add('show')
    console.log('Hello')
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    respoNav.classList.remove('show')
})

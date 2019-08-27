var menuBtn = document.getElementsByClassName('menuButton')

var mobileMenu = document.getElementsByClassName('mobileMenu')

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])



// close button ==============================================

var closeBtn = document.getElementsByClassName('closeButton')

var mobileMenu = document.getElementsByClassName('mobileMenu')

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

closeBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])


// // hoverMenu ==============================================

// var closeBtn = document.getElementsByClassName('closeButton')

// var mobileMenu = document.getElementsByClassName('mobileMenu')

// var clickedBtn = function() {
//     mobileMenu[0].classList.toggle('active')
// }

// closeBtn[0].addEventListener('click', clickedBtn)

// console.log(menuBtn[0])
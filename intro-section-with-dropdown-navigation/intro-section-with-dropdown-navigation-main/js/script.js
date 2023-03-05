var button = document.querySelector('.toggle');
button.addEventListener('click', () => {
    let mobile = document.querySelector('.mobile-nav');
    mobile.classList.toggle('mobile-toggler');

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');

});

var brainz = document.querySelector('.brainz');
brainz.addEventListener('click', () => {
    document.querySelector('.fox').classList.toggle('fox-sub');
});

var item = document.querySelector('.item');
item.addEventListener('click', () => {
    document.querySelector('.jey').classList.toggle('jey-sub');
});

var mont = document.querySelector('.mont');
mont.addEventListener('click', () => {
   document.querySelector('.dropdown-contenter').classList.toggle('herter'); 
})
var blog = document.querySelector('.mon');
blog.addEventListener('click', () => {
    document.querySelector('.dropdown-contenter-two').classList.toggle('hert')
})
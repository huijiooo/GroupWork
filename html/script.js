
document.addEventListener("DOMContentLoaded", function () {
    var menuBox = document.querySelector('header .header_left');
    var cartLink1 = document.querySelector('header a.cart1');
    var cartLink2 = document.querySelector('header a.cart2');
    var shoppingCart = document.querySelector('.shoppingCart');
    var menu_hezi_box = document.querySelector('.menu_hezi_box');

    // Click to show shopping cart
    cartLink1.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        shoppingCart.style.display = 'block';
    });
})
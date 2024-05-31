
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

    cartLink2.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        shoppingCart.style.display = 'block';
    });
    // Click elsewhere to hide the cart
    document.addEventListener('click', function (event) {
        var isClickInsideCart = shoppingCart.contains(event.target);
        var isClickInsideCart2 = menu_hezi_box.contains(event.target);
        var isClickInsideCartIcon = cartLink1.contains(event.target);
        var isClickInsideCartIcon = cartLink2.contains(event.target);
    
        if (!isClickInsideCart && !isClickInsideCartIcon && !isClickInsideCart2) {
            shoppingCart.style.display = 'none';
            menu_hezi_box.style.display = 'none';
        }
    });
    
    menuBox.addEventListener('click', function (event) {
        console.log(7272);
        event.preventDefault();
        event.stopPropagation();
        menu_hezi_box.style.display = 'block';
    });
})
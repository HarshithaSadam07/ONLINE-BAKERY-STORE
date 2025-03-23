$(document).ready(function() {
    // Cart functionality
    let cartBtn = document.getElementById('cart-info');
    let cart = document.getElementById('cart');
    let cartOverlay = document.querySelector('.cart-overlay');
    let closeCart = document.querySelector('.close-cart');

    cartBtn.addEventListener('click', function() {
        cart.classList.add('show-cart');
        // if (cartOverlay) { // Check if cartOverlay exists in your HTML
        //     cartOverlay.classList.add('transparentBcg');
        // }
    });

    // if (closeCart) { // Check if closeCart exists in your HTML
    //     closeCart.addEventListener('click', function() {
    //         cart.classList.remove('show-cart');
    //         if (cartOverlay) {
    //             cartOverlay.classList.remove('transparentBcg');
    //         }
    //     });
    // }

    // Filter functionality
    $('.filter-btn').on('click', function() {
        const value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.store-item').show('300');
        } else {
            $('.store-item').not('.' + value).hide('300');
            $('.store-item').filter('.' + value).show('300');
        }
    });

    // Search functionality
    $('#search-item').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $('.store-item').filter(function() {
            $(this).toggle($(this).find('#store-item-name').text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Lightbox functionality (assuming you have the modal-container in your HTML)
    const lightboxContainer = $('.lightbox-container');
    const lightboxItem = $('.lightbox-item');
    const lightboxClose = $('.lightbox-close');
    const storeItems = $('.store-items');
    const btnLeft = $('.btnLeft');
    const btnRight = $('.btnRight');
    let itemIndex = 0;

    storeItems.on('click', '.store-img', function() {
        let imgSrc = $(this).attr('src');
        itemIndex = $(this).parent().parent().index();
        lightboxItem.css('background-image', `url(${imgSrc})`);
        lightboxContainer.fadeIn();
    });

    lightboxClose.on('click', function() {
        lightboxContainer.fadeOut();
    });

    function showLightboxItem(direction) {
        itemIndex += direction;
        if (itemIndex > storeItems.children().length - 1) {
            itemIndex = 0;
        }
        if (itemIndex < 0) {
            itemIndex = storeItems.children().length - 1;
        }
        const imgSrc = storeItems.children().eq(itemIndex).find('.store-img').attr('src');
        lightboxItem.css('background-image', `url(${imgSrc})`);
    }

    btnLeft.on('click', function() {
        showLightboxItem(-1);
    });

    btnRight.on('click', function() {
        showLightboxItem(1);
    });

    lightboxContainer.on('click', function(event) {
        if ($(event.target).hasClass('lightbox-container')) {
            lightboxContainer.fadeOut();
        }
    });
});
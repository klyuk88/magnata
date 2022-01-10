document.addEventListener('DOMContentLoaded', () => {




    function offerSlider() {
        const sliderItem = document.querySelectorAll('.offer-bg')

        setInterval(() => {
            let nextIndex
            sliderItem.forEach((item, idx) => {
                if (item.classList.contains('active')) {
                    if ((idx + 1) === sliderItem.length) {
                        nextIndex = 0
                    } else {
                        nextIndex = idx + 1
                    }

                }
                item.classList.remove('active')
            })
            sliderItem[nextIndex].classList.add('active')
        }, 3000);


    }
    try {
        offerSlider()
    } catch (error) {
        console.log(error);
    }



    function foundationTabs() {
        const items = document.querySelectorAll('.foundation-features-item')
        const content = document.querySelector('.foundation-features-content')

        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(elem => {
                    elem.classList.remove('active')
                })
                item.classList.toggle('active')
                let itemContent = item.children[1].innerHTML
                content.innerHTML = itemContent
            })
        })


    }
    if (window.innerWidth >= 576) {
        foundationTabs()
    }



    function whyWeTabs() {
        $('.why-we-item').on('click', function (params) {
            $(this).children('.why-we-item-body').slideToggle()

        })

    }
    whyWeTabs()

    function menuClick(params) {
        let menuIcon = document.querySelector('.mob-menu-icon')
        let menuWrap = document.querySelector('.mob-menu-wrap')
        let click = false
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('clicked')
            menuWrap.classList.toggle('visible')
        })
    }

    menuClick()


    $('.single-product-slider').owlCarousel({
        items: 1,
        dots: true,
        dotsContainer: '.single-product-slider-nav .thumbs'
    })


    $('.thumbs img').on('click', function () {
        $('.single-product-slider.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    })


    $('.arrow-left').click(function () {
        $('.single-product-slider').trigger('prev.owl.carousel');
    })
    $('.arrow-right').click(function () {
        $('.single-product-slider').trigger('next.owl.carousel');
    })

function popup() {
    const btn = document.querySelector('.btn-single-product')
    const popup = document.querySelector('.popup-wrap')
    const close = document.querySelector('.close-popup')

    btn.addEventListener('click', () => {
        popup.style.display = 'flex'
    })

    close.addEventListener('click', () => {
        popup.style.display = 'none'
    })

}
try {
    popup() 
} catch (error) {
    console.log(error);
}



new WOW().init();


})
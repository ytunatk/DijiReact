import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '/node_modules/react-owl-carousel2/lib/styles.css';

const options = {
    items: 1,
    nav: false,
    loop: true,
    center: true,
    dotsEach: true,
    touchDrag: true,
    autoplay: true,
    stagePadding: 0,
    autoplayTimeout: 4000,
    responsiveRefreshRate: 0,
    autoplayHoverPause: true,

};

const events = {
    onDragged: function (event) {


    },

    onChanged: function (event) {

    }
};

function Carousel() {
    return (
        <div className='owl_carousel_glow'>
            <OwlCarousel options={options} events={events}>
                <div><img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage1.jpg" alt="The Last of us" /></div>
                <div><img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage2.jpg" alt="GTA V" /></div>
                <div><img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage3.jpg" alt="Mirror Edge" /></div>
            </OwlCarousel>
        </div>
    )
}
export default Carousel;
// Advantages carousel
let advantagesCarousel = $('.advantages-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
  dots: false,
  singleItem: true,
  transitionStyle: "fade"
});

document.querySelector('.advantages-carousel').addEventListener('click', (evt) => {
  if (evt.target.classList.contains('carousel-navs__item--prev')) {
    advantagesCarousel.trigger('prev.owl.carousel');
  }

  if (evt.target.classList.contains('carousel-navs__item--next')) {
    advantagesCarousel.trigger('next.owl.carousel');
  }
});

// Partners carousel
let partnersCarousel = $('.partners-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  items: 4,
  dots: false,
});

let partnersCounter = document.querySelector('.partners-counter');
partnersCarousel.on('changed.owl.carousel', function (event) {
  let counter = partnersCounter.querySelector('.carousel-counter__current');
  counter.innerHTML = event.item.index - 3;
})

let partnersNavs = document.querySelector('.partners-navs');
partnersNavs.querySelector('.carousel-navs__item--prev').addEventListener('click', (evt) => {
  partnersCarousel.trigger('prev.owl.carousel');
});

partnersNavs.querySelector('.carousel-navs__item--next').addEventListener('click', (evt) => {
  partnersCarousel.trigger('next.owl.carousel');
});
// Google Maps
// let map = document.getElementById("map");
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {
//       lat: 40.233754,
//       lng: 69.697530
//     },
//     zoom: 15,
//     mapTypeControl: false,
//     streetViewControl: false
//   });

//   marker = new google.maps.Marker({
//     map: map,
//     draggable: false,
//     animation: google.maps.Animation.BOUNCE,
//     position: {
//       lat: 40.233754,
//       lng: 69.697530
//     },
//   });
//   marker.addListener('click', toggleBounce);
// }

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }
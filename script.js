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
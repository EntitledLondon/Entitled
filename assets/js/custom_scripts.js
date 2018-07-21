var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.995028, lng: -81.252833},
    zoom: 16
  });
}

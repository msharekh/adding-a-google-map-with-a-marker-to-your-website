// Initialize and add the map
function initMap() {
    //debugger;
    // The location of Uluru
    const uluru = { lat: 24.8079169, lng: 46.6400259 };//24.8079169 | 46.6400259
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
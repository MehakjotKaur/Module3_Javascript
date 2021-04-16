
 // Initialize and add the map
 function initMap() {
    // The location of blueMountain
    const jimmiChoo = { lat: 51.4968246, lng: -0.1401983 };
    
    // The map, centered at blueMountain
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: jimmiChoo,
      // adding style to the map
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });
  
 // The marker, positioned at blueMountain
    const marker = new google.maps.Marker({
        position: jimmiChoo,
        map: map,
        
      });
      // adding custom legends here; like adding icon at specific longitude and lattitude
      const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
      const icons = {
        parking: {
          name: "Parking",
          icon: iconBase + "parking_lot_maps.png",
        },
        library: {
          name: "Library",
          icon: iconBase + "library_maps.png",
        },
        info: {
          name: "Info",
          icon: iconBase + "info-i_maps.png",
        },
      };
      const features = [
        {
          position: new google.maps.LatLng(50.5968246, -0.1401983),
          type: "info",
        },
        {
          position: new google.maps.LatLng(55.5968246, -0.1401983),
          type: "info",
        },
        {
          position: new google.maps.LatLng(48.476859, -0.2588541),
          type: "info",
        },
        {
          position: new google.maps.LatLng(
            54.23152,
            -1.11214569
          ),
          type: "parking",
        },
        {
          position: new google.maps.LatLng(
            49.54739766,
            -2.16203981781
          ),
          type: "parking",
        },
        {
          position: new google.maps.LatLng(
            50.54739766,
            -2.56203981781
          ),
          type: "parking",
        },
        {
          position: new google.maps.LatLng(
            46.958453,
            -4.155578
          ),
          type: "library",
        },
        {
          position: new google.maps.LatLng(
            48.958453,
            -4.155578
          ),
          type: "library",
        }, {
          position: new google.maps.LatLng(
            50.958453,
            -3.255578
          ),
          type: "library",
        },
      ];
      features.forEach((feature) => {
        new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map,
        });
      });
      const legend = document.getElementById("legend");

      for (const key in icons) {
        const type = icons[key];
        const name = type.name;
        const icon = type.icon;
        const div = document.createElement("div");
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);s
      }
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
    
   
function initMap() {
    let coordinates = { lat: 57.656955, lng: 39.841904 },
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: coordinates,
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
            ],
        }),
        marker = new google.maps.Marker({
            position: { lat: 57.657254, lng: 39.845777 },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: '/../img/marker.png',
        });

    if (window.innerWidth <= 600) {
        map.setCenter({ lat: 57.658212, lng: 39.845498 });
    }
}

var map;
var address = document.querySelector('.main-address').firstElementChild.innerHTML;
var thumbs = document.querySelector('.container-thumbs');
var preview = document.querySelector('.img-key');

function initMap() {
    var location;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            location = results[0].geometry.location;
        } else {
            console.log("Geocode was not successful for the following reason: " + status);
        }
        var mapOptions = {
            center: location,
            zoom: 16
        };
        map = new google.maps.Map(document.querySelector('.google-map'), mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: location
        });
    });
}

function makeActivePhoto(e) {
    var image = e.target;
    while (image.tagName !== 'IMG') {
        image = image.firstElementChild;
    }
    preview.firstElementChild.src = image.src;
};

thumbs.addEventListener('click', makeActivePhoto);

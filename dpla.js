function coordinates_search() {
           var reduced_lat = document.getElementById("reduced_lat").value;
           var reduced_long = document.getElementById("reduced_long").value;
           var api = document.getElementById("api_key").value;
           var result_limit = document.getElementById("result_limit").value;
           var url = "https://api.dp.la/v2/items?sourceResource.spatial=" + reduced_lat + ":" + reduced_long + "&sort_by_pin=" + reduced_lat + "," + reduced_long + "&sort_by=sourceResource.spatial.coordinates" + "&page_size=" + result_limit + "&api_key=" + api;
           window.open(url);
        }

var marker;

function initialize() {
        var latlng = new google.maps.LatLng(39.74822634554226, -97.7431);

        var myOptions = {
            zoom: 4,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: true,
            mapTypeControl: true,
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),
                myOptions);


        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
             document.getElementById("latitude").value = event.latLng.lat();
             document.getElementById("longitude").value = event.latLng.lng();
             document.getElementById("reduced_lat").value = Math.round(event.latLng.lat());
             document.getElementById("reduced_long").value = Math.round(event.latLng.lng());
        });
        
function placeMarker(location) {

            if (marker == undefined){
                marker = new google.maps.Marker({
                    position: location,
                    map: map, 
                    animation: google.maps.Animation.DROP,
                });
            }
            else{
                marker.setPosition(location);
            }
            map.setCenter(location);

        }
    }

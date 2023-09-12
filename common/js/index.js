

// 카카오맵 API
var container = document.getElementById('map'); 
var options = { 
	center: new kakao.maps.LatLng(37.6575256, 127.0615864), 
	level: 2 
};
var map = new kakao.maps.Map(container, options); 
var markerPosition  = new kakao.maps.LatLng(37.6575256, 127.0615864); 
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);


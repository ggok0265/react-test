import React, { useEffect, useRef } from "react";
 
const { kakao } = window;
 
function KakaoMap() {
 
  const container = useRef(null); // 지도 컨테이너 접근
  useEffect(() => {
    const position = new kakao.maps.LatLng(37.487499, 126.825814);
    
    const guksu_namu = new kakao.maps.LatLng(37.488197,126.825349);
    var guksu_namu_marker = new kakao.maps.Marker({
      position: guksu_namu,
      clickable: true
    });

    const dawon_guksu = new kakao.maps.LatLng(37.489296, 126.825112);
    var dawon_guksu_marker = new kakao.maps.Marker({
      position: dawon_guksu,
      clickable: true
    });

    var iwRemovable = true;
    var guksu_namu_iwContent = "<div style=padding:5px>국수나무</div>";
    var dawon_guksu_iwContent = "<div style=padding:5px>다원국수</div>";
    
    var infoWindow = new kakao.maps.InfoWindow({
      content: guksu_namu_iwContent,
      removable: iwRemovable
    },
    {
      content: dawon_guksu_iwContent,
      removable: iwRemovable
    });

    const options = {
      center: position, // 지도의 중심 좌표
      level: 3, // 지도 확대 레벨
    };
    const map = new kakao.maps.Map(container.current, options);

    guksu_namu_marker.setMap(map);
    dawon_guksu_marker.setMap(map);

    kakao.maps.event.addListener(guksu_namu_marker, 'click', function() {
      infoWindow.open(map, guksu_namu_marker);
    })
    kakao.maps.event.addListener(dawon_guksu_marker, 'click', function() {
      infoWindow.open(map, dawon_guksu_marker);
    })
  }, []);
 
  return (
    <div style={{ width: "800px", height: "500px" }} ref={container}></div>
  );
};

export default KakaoMap;
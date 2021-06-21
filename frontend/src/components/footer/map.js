import React from "react";
import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";

const mapData = {
  center: [59.217125, 39.850039],
  zoom: 12.49,
  controls: ["zoomControl", "fullscreenControl"],
};

const Maps = () => {
  return (
    <YMaps>
      <Map
        defaultState={mapData}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        width="580px"
        height="200px"
      >
        <GeoObject
          geometry={{
            type: "Point",
            coordinates: [59.220202, 39.898826],
          }}
          properties={{
            balloonContent:
              "г. Вологда, ул. Галкинская, 1. Читальные залы №1-2",
          }}
          options={{
            preset: "islands#dotIcon",
            iconColor: "#FF0000",
          }}
        />
        <GeoObject
          geometry={{
            type: "Point",
            coordinates: [59.224157, 39.884974],
          }}
          properties={{
            balloonContent:
              "г. Вологда, ул. Орлова, 6, ауд. 316. Читальный зал №3",
          }}
          options={{
            preset: "islands#icon",
            iconColor: "#0095b6",
          }}
        />

        <GeoObject
          geometry={{
            type: "Point",
            coordinates: [59.222767, 39.878874],
          }}
          properties={{
            balloonContent:
              "г. Вологда пр. Победы, 37, ауд. 37-38. Читальный зал №4",
          }}
          options={{
            preset: "islands#icon",
            iconColor: "#0095b6",
          }}
        />
        <GeoObject
          geometry={{
            type: "Point",
            coordinates: [59.209276, 39.816082],
          }}
          properties={{
            balloonContent:
              "г. Вологда, ул. Ильюшина, 15, ауд. 21. Читальный за №5",
          }}
          options={{
            preset: "islands#icon",
            iconColor: "#0095b6",
          }}
        />
        <Placemark modules={["geoObject.addon.balloon"]} />
      </Map>
    </YMaps>
  );
};

export default Maps;

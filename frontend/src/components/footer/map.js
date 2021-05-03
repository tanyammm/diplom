/* eslint-disable react/jsx-key */
import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [59.2205, 39.891521],
  zoom: 13,
  controls: ["zoomControl", "fullscreenControl"],
};

const coordinates = [
  [59.220202, 39.898826],
  [59.224157, 39.884974],
  [59.222767, 39.878874],
  [59.209276, 39.816082],
];

const Maps = () => {
  return (
    <div>
      <YMaps>
        <Map
          defaultState={mapData}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          width="628px"
          height="200px"
        >
          {coordinates.map((coordinate) => (
            <Placemark geometry={coordinate} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;

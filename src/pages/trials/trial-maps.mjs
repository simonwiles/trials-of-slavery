import * as L from "leaflet/dist/leaflet-src.esm.js";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";

// Work-around for a long-standing and well-known bundling bug in Leaflet
//  (see https://github.com/Leaflet/Leaflet/issues/4968)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconUrl, shadowUrl, iconRetinaUrl });

const locationData =
  document.querySelector("[data-locations]")?.dataset.locations;

if (locationData) {
  const locations = JSON.parse(locationData);

  const map = L.map("map").fitBounds(
    [
      locations.map((location) => [
        location["Latitude"],
        location["Longitude"],
      ]),
    ],
    { maxZoom: 8 },
  );

  L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  locations.forEach((location) => {
    L.marker([location["Latitude"], location["Longitude"]]).addTo(map)
      .bindPopup(`<header>${location["Location"]}</header>
            <p>${location["Relation to case"]}</p>`);
  });
}
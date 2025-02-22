import * as L from "leaflet/dist/leaflet-src.esm.js";
import { initMap, icon } from "@/src/scripts/leaflet-shared.js";

const response = await fetch("../locations-by-latlong.json");
const locationsByLatlong = await response.json();

const setInitialView = (map) => {
  // eyeballed to fit South Africa in the viewport
  map.setView([-28, 24.5], 6);
};

const map = initMap("map", setInitialView);

Object.entries(locationsByLatlong).forEach(([latlong, locations]) => {
  const locationsByName = locations.reduce(
    (result, location) => ({
      ...result,
      [location.name]: [...(result[location.name] || []), location],
    }),
    {},
  );

  L.marker(latlong.split(","), { icon: icon })
    .addTo(map)
    .bindPopup(
      Object.entries(locationsByName)
        .map(
          ([name, locations]) =>
            `<p>${name} - ${locations
              .map((l) => `<a href="../trials/${l.caseId}/">#${l.caseId}</a>`)
              .join(", ")}</p>`,
        )
        .join(""),
    );
});

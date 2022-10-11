import L from "leaflet";

export function addTileLayer(map) {
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kcmV5LWJvb21iYXJkaXIiLCJhIjoiY2w5NGE3djI3MDc3ZTNubXM1dnF0Z3E0byJ9.DbtgbodTaUCOQddkfNx2dQ",
    {
      attribution: `Challenge by
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
			  >Frontend Mentor</a>. Coded by
			<a
			  href="https://github.com/iamAndreyGavrilov/ip-address-tracker-master"
			  target="_blank"
			  >Andrey Gavrilov</a>.`,
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
}

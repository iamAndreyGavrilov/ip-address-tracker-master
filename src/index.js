import "leaflet/dist/leaflet.css";
import L from "leaflet";
//работаем через фасады
import { validateIp, addTileLayer, getAddress } from "./helpers";
import icon from "../images/icon-location.svg";

//во внешний код(модули) можно вынести все, что не использует глобальные переменные
const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");

const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timeZoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

const mapArea = document.querySelector(".map");
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
  zoomControl: false,
});

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});

// вывел логику получения карты в отдельню функцию
addTileLayer(map);

L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  // проверка данных
  if (validateIp(ipInput.value)) {
    getAddress(ipInput.value).then((data) => setInfo(data));
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    getData();
  }
}

function setInfo(mapData) {
  const { lat, lng, country, region, timezone } = mapData.location;

  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = `${country} ${region}`;
  timeZoneInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;

  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
}

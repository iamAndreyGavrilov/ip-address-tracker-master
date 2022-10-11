import "leaflet/dist/leaflet.css";
import L from "leaflet";
//работаем через фасады
import { addTileLayer, validateIp } from "./helpers";
import icon from "../images/icon-location.svg";

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
  //   iconAnchor: [22, 94],
});

// вывел логику получения карты в отдельню функцию
addTileLayer(map);

L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  // проверка данных
  if (validateIp(ipInput.value)) {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_ZwQDQmmmU8nujDzeu0Zj3ZLvWwWJY&ipAddress=${ipInput.value}`
    )
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    getData();
  }
}

function setInfo(mapData) {
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = `${mapData.location.country} ${mapData.location.region}`;
  timeZoneInfo.innerText = mapData.location.timezone;
  ispInfo.innerText = mapData.isp;
}

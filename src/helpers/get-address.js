export async function getAddress(ip = "8.8.8.8") {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZwQDQmmmU8nujDzeu0Zj3ZLvWwWJY&ipAddress=${ip}`
  );
  return await response.json();
}

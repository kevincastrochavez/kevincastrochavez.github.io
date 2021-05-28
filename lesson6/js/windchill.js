const temperature = document.getElementById("temperature").textContent;
const windSpeed = document.getElementById("windSpeed").textContent;
const windChill = document.getElementById("windChill");

const temperatureSplit = Number(temperature.split("°")[0]);
const windSpeedSplit = Number(windSpeed.split("m")[0]);

const windChillFactor = (
  35.74 +
  0.6215 * temperatureSplit -
  35.75 * windSpeedSplit ** 0.16 +
  0.4275 * temperatureSplit * windSpeedSplit ** 0.16
).toFixed(0);

windChill.textContent = `${Number(windChillFactor)} °F`;

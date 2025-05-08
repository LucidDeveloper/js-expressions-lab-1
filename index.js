// Data: 32°F, 25°C, 70°F, 18°C, 80°F, 15°C, 72°F, 28°C, 68°F, 20°C, 75°F, 23°C, 82°F, 30°C, 65°F, 22°C, 77°F, 26°C, 78°F, 24°C, 73°F, 21°C, 79°F, 27°C, 71°F, 19°C, 74°F, 17°C, 76°F, 29°
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

const temperatures_in_fahrenheit = [
  day1TempF,
  day3TempF,
  day5TempF,
  day7TempF,
  day9TempF,
  day11TempF,
  day13TempF,
  day15TempF,
  day17TempF,
  day19TempF,
  day21TempF,
  day23TempF,
  day25TempF,
  day27TempF,
  day29TempF,
];

const temperatures_in_celsius = [
  day2TempC,
  day4TempC,
  day6TempC,
  day8TempC,
  day10TempC,
  day12TempC,
  day14TempC,
  day16TempC,
  day18TempC,
  day20TempC,
  day22TempC,
  day24TempC,
  day26TempC,
  day28TempC,
  day30TempC,
];

function fahrenheit_to_celsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsius_to_fahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const tot_temperature_in_fahrenheit = (celsiusTemps, fahrenheitTemps) => {
  let total = 0;
  for (let c of celsiusTemps) {
    total += celsius_to_fahrenheit(c);
  }
  for (let f of fahrenheitTemps) {
    total += f;
  }
  return total;
};

const tot_temperature_in_celsius = (celsiusTemps, fahrenheitTemps) => {
  const totalF = tot_temperature_in_fahrenheit(celsiusTemps, fahrenheitTemps);
  return fahrenheit_to_celsius(totalF);
};

const avg_temperature_in_fahrenheit = (celsiusTemps, fahrenheitTemps) => {
  const totalF = tot_temperature_in_fahrenheit(celsiusTemps, fahrenheitTemps);
  const count = celsiusTemps.length + fahrenheitTemps.length;
  return totalF / count;
};

const avg_temperature_in_celsius = (celsiusTemps, fahrenheitTemps) => {
  const totalC = tot_temperature_in_celsius(celsiusTemps, fahrenheitTemps);
  const count = celsiusTemps.length + fahrenheitTemps.length;
  return totalC / count;
};

// Export values (not functions)
module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius,
};

// Console Log for testing
console.log(
  "Total temperature in Fahrenheit: ",
  tot_temperature_in_fahrenheit(
    temperatures_in_celsius,
    temperatures_in_fahrenheit
  )
);
console.log(
  "Total temperature in Celsius: ",
  tot_temperature_in_celsius(
    temperatures_in_celsius,
    temperatures_in_fahrenheit
  )
);
console.log(
  "Average temperature in Fahrenheit: ",
  avg_temperature_in_fahrenheit(
    temperatures_in_celsius,
    temperatures_in_fahrenheit
  )
);
console.log(
  "Average temperature in Celsius: ",
  avg_temperature_in_celsius(
    temperatures_in_celsius,
    temperatures_in_fahrenheit
  )
);
console.log("Temperatures in Fahrenheit: ", temperatures_in_fahrenheit);
console.log("Temperatures in Celsius: ", temperatures_in_celsius);

var forecastQueryUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}";
class Fetch {
  async getCurrent(input) {
    const apiKey = "99ba66799456699dd49ae0c3361c4eba";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
}

// https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${apiKey}

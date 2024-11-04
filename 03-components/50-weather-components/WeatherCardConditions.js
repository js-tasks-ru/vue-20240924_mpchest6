import { defineComponent } from "vue";
import { WeatherConditionIcons } from "./weather.service.ts";

export default defineComponent({
  name: "WeatherCardConditions",

  props: {
    description: {
      type: String,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    iconId: {
      type: Number,
      required: true,
    },
  },

  setup(props) {

    const convertKelvinToCelsius = (kelvin) => {
      return (kelvin - 273.15).toFixed(1);
    };

    const getWeatherIcon = (weatherId) => {
      return WeatherConditionIcons[weatherId] || "❓";
    };


    return {
      description: props.description,
      temp: props.temp,
      iconId: props.iconId,
      convertKelvinToCelsius,
      getWeatherIcon,
    };
  },

  template: `
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="description">
          {{ getWeatherIcon(iconId) }}
        </div>
        <div class="weather-conditions__temp">
          {{ convertKelvinToCelsius(temp) + ' °C'}}
        </div>
      </div>
  `
});


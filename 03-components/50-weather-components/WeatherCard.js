import { defineComponent } from "vue";
import WeatherCardAlert from "./WeatherCardAlert.js";
import WeatherCardHeader from "./WeatherCardHeader.js";
import WeatherCardConditions from "./WeatherCardConditions.js";
import WeatherCardDetails from "./WeatherCardDetails.js";

export default defineComponent({
  name: "WeatherCard",

  components: {
    WeatherCardAlert,
    WeatherCardHeader,
    WeatherCardConditions,
    WeatherCardDetails,
  },

  props: {
    weather: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const isNightTime = (current) => {
      return current.dt < current.sunrise || current.dt > current.sunset;
    };

    return {
      isNightTime,
    };
  },

  template: `
    <li class="weather-card" 
        :class="{ 'weather-card--night': isNightTime(weather.current) }">
      <WeatherCardAlert 
        v-if="weather.alert" 
        :alert="weather.alert" 
      />
      <WeatherCardHeader 
        :name="weather.geographic_name" 
        :time="weather.current.dt" 
      />
      <WeatherCardConditions 
        :description="weather.current.weather.description"  
        :temp="weather.current.temp" 
        :iconId="weather.current.weather.id" 
      />
      <WeatherCardDetails 
        :current="weather.current"
      />
    </li>
  `,
}); 
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherCardDetails",

  props: {
    current: {
      type: Object,
      required: true,
    },
  },

  

  setup(props) {

    const convertHpaToMmHg = (hPa) => {
      return Math.round(hPa * 0.75);
    };

    return {
      current: props.current,
      convertHpaToMmHg,
    };
  },

  template: `
    <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">
                {{ convertHpaToMmHg(current.pressure) }}
              </div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">
                {{ current.humidity }}
              </div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">
                {{ current.clouds }}
              </div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">
                {{ current.wind_speed }}
              </div>
            </div>
          </div>
  `
});


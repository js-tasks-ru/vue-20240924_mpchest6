import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref('');
    let timerId = null;

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' });
    };

    onMounted(() => {
      updateTime();
      timerId = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      if (timerId) {
        clearInterval(timerId);
      }
    });

    return {
      currentTime,
    };
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})

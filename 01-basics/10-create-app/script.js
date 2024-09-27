import { defineComponent, createApp } from 'vue'

const app = defineComponent({
  name: 'App',

  setup() {
    function formatAsLocaleDateString(date) {
      return date.toLocaleDateString(navigator.language, { dateStyle: 'long' })
    }

    return {
      formatAsLocaleDateString,
        }      
    },
    template: `
        <div>Сегодня {{ formatAsLocaleDateString(new Date()) }}</div>
    `
})

createApp(app).mount('#app')
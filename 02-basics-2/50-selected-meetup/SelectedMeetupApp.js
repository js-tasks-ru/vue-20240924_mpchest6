import { defineComponent, ref, watch, computed } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedId = ref(1);
    const meetupTitle = ref('');

    const fetchMeetup = async () => {
      const meetup = await getMeetup(selectedId.value);
      meetupTitle.value = meetup.title;
    };

    watch(selectedId, fetchMeetup, { immediate: true });

    const isPreviousDisabled = computed(() => selectedId.value <= 1);
    const isNextDisabled = computed(() => selectedId.value >= 5);

    return {
      selectedId,
      meetupTitle,
      isPreviousDisabled,
      isNextDisabled,
    };
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button 
          class="button button--secondary" 
          type="button" 
          @click="selectedId--" 
          :disabled="isPreviousDisabled">
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div v-for="id in 5" :key="id" class="radio-group__button">
            <input
              :id="id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedId"
            />
            <label :for="id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button 
          class="button button--secondary" 
          type="button"  
          @click="selectedId++" 
          :disabled="isNextDisabled">
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>

    </div>
  `,
})

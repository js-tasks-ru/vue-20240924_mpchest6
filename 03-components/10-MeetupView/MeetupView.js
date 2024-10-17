import { defineComponent, computed } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const meetupInfo = computed(() => props.meetup);

    return {
      meetupInfo,
    }
  },

  template: `
    <div>
      <MeetupCover :title="meetupInfo.title" :image="meetupInfo.image" />
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">

            <h2>Описание</h2>
            <MeetupDescription :description="meetupInfo.description" />

            <h2>Программа</h2>
            <MeetupAgenda v-if="meetupInfo.agenda.length > 0" :agenda="meetupInfo.agenda" />
            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <MeetupInfo :organizer="meetupInfo.organizer" :place="meetupInfo.place" :date="meetupInfo.date" />
            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})

<script>
// @ is an alias to /src
import MeetupCard from '@/components/MeetupCard.vue'

export default {
  name: 'Meetups',
  created() {
    this.$store.dispatch('fetchMeetups')
  },
  components: {
    MeetupCard
  },
  computed: {
    meetups() {
      return this.$store.state.meetups
    },
    likes() {
      return this.$store.state.likes
    }
  },
  methods: {
    like() {
      this.$store.dispatch('addLikes')
    }
  }
}
</script>

<template lang="pug">
  div.wrapper
    button(@click="like") Like!
    div Likes: {{ likes }}
    div.meetup(v-for="meetup in meetups", :key="meetup.id")
      meetup-card(:meetup="meetup")
</template>

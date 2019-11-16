<script>
export default {
  name: 'MeetupCard',
  props: {
    meetup: Object
  }
}
</script>

<template lang="pug">
.card 
  .name {{ meetup.name }}
</template>

<style scoped>
.name {
  color: grey;
}
</style>

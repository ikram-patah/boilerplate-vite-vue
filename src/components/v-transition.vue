<template lang="pug">
transition(
  :name='name',
  :style='{ transitionDelay: delay }',
  :appear='appear',
  mode='out-in'
)
  slot
</template>

<script>
export default {
  name: 'v-transition',

  props: {
    name: {
      type: String,
      required: false,
      default: 'fade',
    },
    delay: {
      type: String,
      required: false,
      default: '0',
    },
    appear: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.page-leave-active,
.page-enter-active {
  transition: all 0.5s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(1rem);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}
</style>

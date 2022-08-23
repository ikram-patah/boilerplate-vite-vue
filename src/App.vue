<template lang="pug">
div
  nav-bar

  .container
    router-view(v-slot='{ Component }')
      v-transition(name='page')
        component(:is='Component')
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import vTransition from '@/components/v-transition.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    vTransition,
  },
};
</script>

<style lang="scss" scoped></style>

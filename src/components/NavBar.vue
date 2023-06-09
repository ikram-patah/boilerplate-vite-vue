<template lang="pug">
.navbar
    .container
        ul
            li: router-link(:to='{ name: "home" }') Home
            li: router-link(:to='{ name: "about" }') About
</template>

<script>
    import vTransition from '@/components/v-transition.vue';

    export default {
        name: 'nav-bar',

        components: {
            vTransition,
        },
    };
</script>

<style lang="scss" scoped></style>

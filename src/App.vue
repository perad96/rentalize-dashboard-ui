<template>
  <UpperNav />
  <router-view />
</template>

<script>
import UpperNav from "@/components/shared/UpperNav.vue";

export default {
  components: {
    UpperNav,
  },
};
</script>

<style>
</style>

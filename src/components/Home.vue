<template>
  <main>
      sdsds
      <router-link to="login">
          Login
      </router-link>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Home extends Vue {
  msg!: string
}
</script>

<style lang="scss">
</style>

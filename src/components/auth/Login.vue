<template>
  <section>
    <
    <input type="email" v-model="email" required />
    <input type="password" v-model="password" required />
    <button type="submit">Login</button>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Login extends Vue {
  email!: string;
  password!: string;
}
</script>

<style lang="scss">
</style>

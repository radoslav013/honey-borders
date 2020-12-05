<template>
  <section>
    <form @submit.prevent="login()">
      <input type="email" v-model="email" required />
      <input type="password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Login extends Vue {
  email!: string;

  password!: string;

  login() {
    console.log(this);
  }
}
</script>

<style lang="scss">
</style>

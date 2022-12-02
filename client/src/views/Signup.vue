<script setup lang="ts">
  import axios from 'axios'
  import { ref } from 'vue'
  import SignupPopup from '../components/SignupPopup.vue'

  function togglePassword() {
      var element = document.getElementById('password');
      var eye = document.getElementById('eye');
      element.type = (element.type == 'password' ? 'text' : 'password');
      if (element.type === 'password') {
        eye.setAttribute('class', 'bi bi-eye-fill')
      }
      else {
        eye.setAttribute('class', 'bi bi-eye-slash-fill')
      }
  }

  const fullName = ref('')
  const username = ref('')
  const email = ref('')
  const password = ref('')

  async function addUser() {
    const response = await axios.post("http://localhost:3000/user/", {
      fullName: fullName.value,
      username: username.value,
      email: email.value,
      password: password.value
    })
    console.log(response)
  }
</script>
<template>
  <form class="">
    <h1>Login</h1>
    <br>
    <label for="fullname">Name & Surname</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-person-lines-fill"></i>
      </span>
      <input type="text" v-model="fullName" id="fullname" class="form-control " required autofocus placeholder="John Die" aria-label="Fullname" aria-describedby="basic-addon1">
    </div>
    <label for="username">Username</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-person-heart"></i>
      </span>
      <input type="text" v-model="username" id="username" class="form-control " required placeholder="john.die" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <label for="email">E-mail (optional)</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" v-model="email" id="email" class="form-control" placeholder="johndie@example.com" aria-label="E-mail" aria-describedby="basic-addon1">
    </div>
    <label for="password">Password</label>
    <div class="input-group mb-3">
      <span class="input-group-text">
        <i class="bi bi-key-fill"></i>
      </span>
      <input type="password" v-model="password" class="form-control" required placeholder="Password" id="password">
      <span class="input-group-text" @click="togglePassword()">
        <i class="bi bi-eye-fill" id="eye"></i>
      </span>
    </div>
    <button name="button" type="button" @click="addUser()" class="btn btn-success text-center input-group" :disabled="!password">JOIN</button>
    <br><br>
    <p class="text-center">
      Do you have an account?
      <a id="login" href="/login" class="text-info">Login</a>
    </p>
  </form>
  <SignupPopup />
</template>
<style scoped lang="scss">
  @import '../../public/Login.scss'
</style>

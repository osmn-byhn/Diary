<script setup>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  const username = ref('')
  const password = ref('')
  const apiUrl = "http://localhost:3000";
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
  async function Login() {
    const response = await axios.post(`${apiUrl}/login`, {username: username.value, password: password.value})
  }
</script>
<template>
  <form class="">
    <h1>Login</h1>
    <br>
    <label for="username">Username or e-mail</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-person-fill"></i>
      </span>
      <input type="text" id="username" v-model="username" class="form-control " style="outline:none;" required autofocus placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
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
    <button type="submit" @click="Login()" name="button" class="btn btn-warning text-center input-group">LOGIN</button>
    <br><br>
    <p class="text-center">
      <a id="forgot-password" href="/forgot-password" class="text-info">Forgot Password?</a>
    </p>
    <a href="/signup" class="btn btn-dark text-center input-group">Sign up</a>

  </form>

</template>
<style scoped lang="scss">
  @import '../../public/Login.scss'
</style>

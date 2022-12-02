<script setup>
  //import Thema from './thema.js'
</script>
<template>
  <nav id="nav">
    <ul id="home-link">
      <li>
        <a href="/">
          <h1>
            <img class="img-fluid" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-diary-user-interface-flatart-icons-flat-flatarticons.png"/>
            Diary
          </h1>
        </a>
      </li>
    </ul>
    <ul id="icons">
      <!--
      <li>
        <i class="bi bi-sun-fill" id="icon" @click="Thema()"></i>
      </li>-->
      
      <li>
        <i class="bi bi-person-circle" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @import '../../public/Navbar.scss'
</style>

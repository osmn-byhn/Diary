<script setup lang="ts">
  const fieldName = ''
  function signup() {
    if (fullName.value === '') {
      fieldName === "Fullname"
      console.log(fieldName);
    }
    else if (username.value === '') {
      console.log("Username field cannot be left blank!")
    }
    else if (password.value === '') {
      console.log("Password field cannot be left blank!")
    }
    else {
      console.log("okey")
    }
  }
</script>

<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup">
    Launch
  </button>
  <div class="modal fade" id="popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content"><!--
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Login or Sign up to Diary</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>-->
        <div class="modal-body">
          <p>{{ fieldName }} field cannot be left blank!</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>

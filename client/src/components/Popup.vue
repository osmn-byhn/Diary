<script setup>

</script>

<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Login or Sign up to Diary</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            <a href="/" class="btn btn-warning text-center">Login</a>
          </li>
          <p></p>
          <p class="text-center">or</p>
          <li>
            <a href="/signup" class="btn btn-dark">Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped lang="scss">
  @import '../../public/Popup.scss'
</style>

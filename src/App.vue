<script setup>
</script>

<template>
  <div class="app-container">
    <Suspense>
      <RouterView />
    </Suspense>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Raleway&family=Roboto+Mono&family=Ubuntu&display=swap');

* {
  font-family: 'Poppins', 'Raleway', 'Roboto Mono', 'Ubuntu';
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.app-container {
  width: 100%;
  height: 100%;
}
</style>
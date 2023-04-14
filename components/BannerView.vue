<template>
  <div class="Banner">
    <div class="Banner-header">
      <slot />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.Banner {
  overflow: hidden;
  width: 100%;
  &-header {
    height: 20%;
    text-align: center;
    background-color: #121212;
    transition: all 1s;
  }
  &-header:hover {
    transform: scale(1.1, 1.1);
  }
  img {
    width: 100%;
  }
  h1 {
    height: 200px;
    line-height: 200px;
    font-size: 38px;
    font-weight: 300;
    color: #ccc;
  }
}
</style>

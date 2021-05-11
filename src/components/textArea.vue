<template>
  <div class="textArea">
    <textarea class="area" placeholder="Description"></textarea>
  </div>
</template>

<script>
export default {
  name: "textArea",
};
</script>

<style scoped>
.textArea {
  width: 80%;
  height: 60%;
  margin-bottom: 15px;
}

textarea {
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: inherit;
  outline: none;
  padding: 20px;
  min-height: 90px;
  box-sizing: border-box;
}
</style>

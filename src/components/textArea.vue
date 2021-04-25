<template>
  <div class="textArea">
    <textarea class="textarea"
      cols="30"
      rows="10"
      @input="resize($event)"
      placeholder="Description"
    ></textarea>
  </div>
</template>

<script>


export default {
  name: "textArea",
  methods: {
    resize(e) {
      e.target.style.height = 'auto'
      e.target.style.height = `${e.target.scroll.Height}px`
    }
  }
}
</script>

<style scoped>

.textarea {
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: inherit;
  outline: none;
  padding: 20px;
  min-height: 80px;
  box-sizing: border-box;
}
</style>

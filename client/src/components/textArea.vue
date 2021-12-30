<template>
  <div class="textArea__container">
    <textarea
      type="submit"
      @input="changeDescription"
      class="textArea"
      placeholder="Description"
      data-test="textArea"
      :value="value"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "textArea",
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    changeDescription(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.textArea__container {
  width: 80%;
  height: 60%;
}

::placeholder {
  color: aqua;
  font-weight: bold;
  letter-spacing: 1.5px;
}

textarea {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: aqua;
  font-weight: 600;
  text-shadow: 0 0 20px rgb(247, 242, 242);
  padding: 11.2px;
  background: none;
  outline: none;
  border: 1px solid rgba(78, 243, 255, 0.856);
  border-radius: 8px;
  background: transparent;
  box-shadow: 0 0px 16px rgba(49, 221, 252, 0.363);
}

@media (max-width: 765px) {
  .textArea__container {
    min-height: 62%;
  }
}
</style>

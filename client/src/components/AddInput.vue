<template>
  <div class="addInput__container">
    <input class="addInput" placeholder=" " />
    <label class="addInput__label">{{ label }}</label>
    <button class="addInput__button" v-bind="$attrs" v-on="$listeners">Add</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

.addInput__container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 2rem 0;
  position: absolute;
}

.addInput {
  margin-left: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 1rem turquoise;
  padding: 0.7rem;
  background: none;
  outline: none;
  border-top: 2px solid rgb(35, 166, 170);
  border-bottom: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
  transition: 0.4s ease;
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .addInput__label {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  border-left: 2px solid rgb(35, 166, 170);
  border-right: 2px solid rgb(35, 166, 170);
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .addInput__label {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .addInput__label,
input:not(:placeholder-shown).addInput:not(:focus) ~ .addInput__label {
  top: -4.5rem;
}

input:not(:placeholder-shown) ~ .addInput__button {
  display: block;
}

.addInput__label {
  position: relative;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  top: -2.2rem;
  left: 0.2rem;
  background-color: none;
  font-weight: bold;
}

.addInput__button {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: relative;
  left: 12.5rem;
  top: -4.7rem;
  text-align: center;
  border-radius: 2px;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 2px rgb(17, 185, 207));
  display: none;
}
</style>

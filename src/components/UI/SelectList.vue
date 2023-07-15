<template>
  <div class="select">
    <div class="select__input" @click="toggleOptions">
      {{ currentOption }}
    </div>
    <div class="select__options" v-if="isOpened">
      <div class="select__option"
           v-for="(option, index) in options"
           :key="index"
           @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SelectList",
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpened: false,
      currentOption: '',
    }
  },
  methods: {
    toggleOptions() {
      this.isOpened = !this.isOpened
    },
    selectOption(option) {
      this.currentOption = option
      this.isOpened = false
      this.$emit('onSelectOption', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  position: relative;


  &__input {
    border: 2px solid #333333;
    width: 200px;
    padding: 5px 25px 5px 10px;
    height: 34px;
    margin-right: 100px;
    border-radius: 15px;
  }

  &__options {
  position: absolute;
    top: 34px;
    background-color: white;
    width: 200px;
  }
  &__option {
    padding: 4px;
  }
  &__option:hover {
    background-color: #b2b2b2;
    cursor: pointer;
  }
}
</style>
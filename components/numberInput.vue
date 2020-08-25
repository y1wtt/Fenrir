<template>
  <v-col cols="6" md="2">
    <v-text-field
      prepend-icon="mdi-minus"
      append-outer-icon="mdi-plus"
      :label="label"
      :value="num"
      :v-bind="num"
      hide-details="auto"
      class="mx-2"
      @input="updateNumber"
      @keyup.up="updateNumber(num+1)"
      @click:append-outer="updateNumber(num+1)"
      @keyup.down="updateNumber(num-1)"
      @click:prepend="updateNumber(num-1)"
    />
  </v-col>
</template>
<script>
export default {
  name: 'NumberInput',
  model: {
    prop: 'num',
    event: 'update-num'
  },
  props: {
    num: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateNumber (e) {
      if (Number(e) < 0) {
        this.$emit('update-num', 0)
        return
      }
      this.$emit('update-num', Number(e))
    }
  }
}
</script>

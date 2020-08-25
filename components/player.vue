<template>
  <v-row align="center" justify="center">
    <v-col cols="8">
      <v-text-field
        label="ユーザー名"
        hide-details
        outlined
        :value="name"
        :v-bind="name"
        :rules="rules.required"
        @input="updatePlayerName"
      />
    </v-col>
    <v-col cols="4">
      <v-text-field
        label="役職"
        :value="role"
        hide-details="auto"
        readonly
        outlined
        disabled
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  model: {
    prop: 'name',
    event: 'update-name'
  },
  props: {
    role: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      rules: {
        required: [value => !!value || '入力が必須です']
      }
    }
  },
  methods: {
    updatePlayerName (e) {
      this.$emit('update-name', e)
    }
  }
}
</script>

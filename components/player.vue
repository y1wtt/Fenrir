<template>
  <v-row align="center" justify="center">
    <v-col cols="8" class="pb-0 pt-4">
      <v-text-field
        label="ユーザー名"
        :value="name"
        :v-bind="name"
        :rules="rules.required"
        outlined
        @input="updatePlayerName"
      />
    </v-col>
    <v-col cols="4" class="pb-0 pt-4">
      <v-text-field
        label="役職"
        :value="role"
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

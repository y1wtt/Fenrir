<template>
  <v-row align="center" justify="center">
    <v-col cols="8">
      <v-text-field label="ユーザー名" hide-details="true2" outlined />
    </v-col>
    <v-col cols="4">
      <v-text-field label="役職" :value="position" hide-details="auto" readonly outlined disabled />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["position"]
};
</script>
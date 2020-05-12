<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10" lg="8" xl="5">
        <v-row align="center" justify="start">
          <number-input v-for="r in availableRoles" :key="r.name" :label="r.name" v-model="r.num" />
        </v-row>
        <player v-for="i in sum" :key="i" :position="role[i-1]" />
        <v-row>
          <v-col>
            <v-text-field label="合計" :value="sum" readonly disabled outlined />
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="ma-1" style="height:75px">
          <v-col>
            <v-btn depressed color="orange darken-1" dark @click="shuffle">割り当て</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
div.row {
}
</style>
<script>
import Player from "@/components/player";
import NumberInput from "@/components/numberInput";
export default {
  components: {
    Player,
    NumberInput
  },
  data() {
    return {
      role: [],
      availableRoles: [
        {
          name: "人狼",
          num: 0
        },
        {
          name: "狂人",
          num: 0
        },
        {
          name: "占い師",
          num: 0
        },
        {
          name: "霊能者",
          num: 0
        },
        {
          name: "騎士",
          num: 0
        },
        {
          name: "市民",
          num: 0
        }
      ]
    };
  },
  methods: {
    shuffle: function() {}
  },
  computed: {
    sum: function() {
      return this.availableRoles
        .map(v => v.num)
        .reduce(function(prev, current) {
          return prev + current;
        });
    }
  }
};
</script>
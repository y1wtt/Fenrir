<template>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col cols="11" sm="10" md="9">
        <v-row align="center" justify="start">
          <number-input v-for="r in availableRoles" :key="r.name" :label="r.name" v-model="r.num" />
        </v-row>
        <player v-for="i in sum" :key="i" :position="role[i-1]" />
        <v-row justify="end">
          <v-col cols="8">
            <v-text-field label="合計" :value="sum" readonly disabled outlined />
          </v-col>
          <v-col cols="4">
            <v-btn outlined style="height:56px" color="primary" dark @click="shuffle">割り当て</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
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
    shuffle: function() {
      let role = [];
      this.availableRoles.forEach(element => {
        for (let i = 0; i < element.num; i++) {
          role.push(element.name);
        }
      });

      for (let i = role.length; i > 0; i--) {
        // create ramdom value
        let min = Math.ceil(1);
        i = Math.floor(i);
        let r = Math.floor(Math.random() * (i - min)) + min;
        // shuffle
        let tmp = role[r];
        role[r] = role[i - 1];
        role[i - 1] = tmp;
      }
      this.role = role;
    }
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
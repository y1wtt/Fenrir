<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="11" md="7">
        <v-card>
          <v-card-title />
          <p class="clock">
            {{ ('00' + Math.floor((time / 60))).slice(-2) + ':' + ('00' + (+(time % 60))).slice(-2) }}
          </p>
          <v-card-actions>
            <v-btn color="primary" :disabled="started || time === 0" @click="start">
              start
            </v-btn>
            <v-btn color="primary" @click="clear">
              clear
            </v-btn>
            <v-spacer />
            <v-btn color="primary" :disabled="started" @click="setTimer(60*3)">
              3分
            </v-btn>
            <v-btn color="primary" :disabled="started" @click="setTimer(60)">
              1分
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      timerId: 0
    }
  },
  computed: {
    time () {
      return this.$store.state.timer.time
    },
    started () {
      return this.$store.state.timer.started
    }
  },
  methods: {
    start () {
      if (this.time !== 0) {
        this.$nuxt.$emit('start-timer')
      }
    },
    clear () {
      this.$nuxt.$emit('clear-timer')
    },
    setTimer (t:Number) {
      this.$nuxt.$emit('set-timer', t)
    }
  }
})
</script>

<style scoped>
.clock{
  text-align: center;
  font-size: 15.5vh;
}
</style>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="accent" bottom clipped>
      <v-list>
        <v-list-item v-for="i in items" :key="i.title" :to="i.url">
          <v-list-item-title>{{ i.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-card />
      <v-toolbar-title class="v-list-item--link">
        <span @click="$router.push('/'); drawer = false">人狼ゲームツール集</span>
      </v-toolbar-title>
      <v-spacer />
      <h2 v-if="time !== 0">
        {{ timeSurface }}
      </h2>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          title: '割当ツール',
          url: '/'
        },
        {
          title: 'タイマー',
          url: '/timer'
        },
        {
          title: '投票',
          url: '/vote'
        }
      ],
      time: 0,
      timerId: 0
    }
  },
  computed: {
    timeSurface () {
      return ('00' + Math.floor((this.time / 60))).slice(-2) + ':' + ('00' + (+(this.time % 60))).slice(-2)
    }
  },
  mounted () {
    this.setListener()
  },
  methods: {

    setListener () {
      this.$nuxt.$on('start-timer', this.startTimer)
      this.$nuxt.$on('set-timer', this.setTimer)
      this.$nuxt.$on('clear-timer', this.clearTimer)
    },
    startTimer () {
      this.$store.commit('timer/start')
      this.timerId = setInterval(() => {
        if (this.time === 0) {
          clearInterval(this.timerId)
          this.endTimer()
        } else {
          this.time--
          this.$store.commit('timer/setTimer', this.time)
        }
      }, 1000)
    },
    setTimer (t) {
      this.time = t
      this.$store.commit('timer/setTimer', +t)
    },
    clearTimer () {
      this.$store.commit('timer/stop')
      clearInterval(this.timerId)
      this.time = 0
      this.$store.commit('timer/setTimer', this.time)
    },
    endTimer () {
      // TODO play sound
      this.$store.commit('timer/stop')
    }
  }
}
</script>

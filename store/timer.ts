export const state = () => ({
  time: 0,
  started: false
})

export const mutations = {
  setTimer (state:{time:Number, started:Boolean}, t:Number) {
    state.time = t
  },
  start (state:{time:Number, started:Boolean}) {
    state.started = true
  },
  stop (state:{time:Number, started:Boolean}) {
    state.started = false
  }
}

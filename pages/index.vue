<template>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col cols="11" sm="10" md="9">
        <v-row align="center" justify="start">
          <number-input v-for="r in availableRoles" :key="r.name" v-model="r.num" :label="r.name" />
        </v-row>
        <v-form ref="form">
          <player v-for="i in players" :key="i.id" v-model="i.name" :role="i.role" />
        </v-form>
        <v-row justify="end">
          <v-col cols="8">
            <v-text-field label="合計" :value="sum" readonly disabled outlined />
          </v-col>
          <v-col cols="4">
            <v-btn
              outlined
              style="height:56px;width:100%;font-size:1rem"
              color="primary"
              dark
              @click="shuffle"
            >
              割り当て
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
</style>
<script>
import Player from '@/components/player'
import NumberInput from '@/components/numberInput'

export default {
  components: {
    Player,
    NumberInput
  },
  data () {
    return {
      players: [],
      availableRoles: [
        {
          name: '人狼',
          num: 0
        },
        {
          name: '狂人',
          num: 0
        },
        {
          name: '占い師',
          num: 0
        },
        {
          name: '霊能者',
          num: 0
        },
        {
          name: '騎士',
          num: 0
        },
        {
          name: '市民',
          num: 0
        }
      ]
    }
  },
  computed: {
    sum () {
      return this.availableRoles
        .map(v => v.num)
        .reduce(function (prev, current) {
          return prev + current
        })
    }
  },
  watch: {
    sum () {
      if (this.sum > this.players.length) {
        while (this.sum !== this.players.length) {
          this.players.push({ id: this.players.length + 1, name: '', role: '' })
        }
      } else if (this.sum < this.players.length) {
        while (this.sum !== this.players.length) {
          this.players.pop()
        }
      }
    }
  },
  methods: {
    shuffle () {
      const valid = this.$refs.form.validate()
      if (!valid) { return }
      const role = []
      this.availableRoles.forEach((element) => {
        for (let i = 0; i < element.num; i++) {
          role.push(element.name)
        }
      })

      for (let i = role.length; i > 0; i--) {
        // create ranMdom value
        const min = Math.ceil(0)
        i = Math.floor(i)
        const r = Math.floor(Math.random() * (i - min)) + min
        // shuffle
        const tmp = role[r]
        role[r] = role[i - 1]
        role[i - 1] = tmp
      }
      this.players.forEach((it, index) => { it.role = role[index] })
    }
  }
}
</script>

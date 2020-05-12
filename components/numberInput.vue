 <template>
  <v-col cols="6" md="2">
    <v-text-field
      :label="label"
      :value="num"
      :v-bind="num"
      hide-details="auto"
      type="number"
      class="mx-2"
      @input="updateNumber"
    />
  </v-col>
</template>
<script>
export default {
  name: "number-input",
  model: {
    prop: "num",
    event: "update-num"
  },
  props: {
    num: {
      type: Number,
      default: 0
    },
    label: {}
  },
  methods: {
    updateNumber: function(e) {
      if (Number(e) < 0) {
        this.$emit("update-num", 0);
        return;
      }
      this.$emit("update-num", Number(e));
    }
  }
};
</script>
import AlgoCanvas from "@/components/AlgoCanvas";

export default {
  components: { AlgoCanvas },
  computed: {
    canvas() {
      return this.$refs.canvas;
    }
  },
  mounted() {
    this.init();
    this.run();
    document.addEventListener("keypress", this.keypress);
  },
  beforeDestroy() {
    cancelAnimationFrame(this.timer);
    document.removeEventListener("keypress", this.keypress);
  }
};

import AlgoCanvas from "@/components/AlgoCanvas";

export default {
  components: { AlgoCanvas },
  computed: {
    canvas() {
      return this.$refs.canvas;
    }
  },
  methods: {
    sleep(time) {
      return new Promise(resolve => {
        this.timer = setTimeout(() => {
          resolve();
        }, time);
      });
    }
  },
  mounted() {
    this.init();
    this.run();
    document.addEventListener("keypress", this.keypress);
  },
  beforeDestroy() {
    cancelAnimationFrame(this.timer);
    clearInterval(this.timer);
    document.removeEventListener("keypress", this.keypress);
  }
};

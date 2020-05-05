export default {
  mounted() {
    document.addEventListener("keypress", this.keypress);
  },
  beforeDestroy() {
    document.removeEventListener("keypress", this.keypress);
  }
};

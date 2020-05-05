<template>
  <div class="algo-canvas">
    <section class="canvas-wrapper">
      <canvas ref="canvas" class="canvas-inner" :width="width" :height="height">
        抱歉，您的浏览器不支持canvas元素
      </canvas>
    </section>
    <span class="canvas-tip">canvas 画布 🔼 </span>
  </div>
</template>

<script>
export default {
  name: "AlgoCanvas",
  props: {
    height: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      colors: {
        red: "#FF0000",
        pink: "#FFC0CB",
        purple: "#800080",
        indigo: "#4B0082",
        blue: "#0000ff",
        lightBlue: "#ADD8E6",
        green: "#00FF00",
        yellow: "#FFFF00",
        orange: "#FFA500",
        darkOrange: "#FF8C00",
        gery: "#D3D3D3",
        black: "#000",
        white: "#fff"
      }
    };
  },
  computed: {
    context() {
      return this.$refs.canvas.getContext("2d");
    }
  },
  methods: {
    clearCanvas() {
      this.context.clearRect(0, 0, this.width, this.height);
    },
    setStrokeColor(colorString) {
      this.context.strokeStyle = colorString;
    },
    setStrokeWidth(width) {
      this.context.lineWidth = width;
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
    },
    setFillColor(colorString) {
      this.context.fillStyle = colorString;
    },
    fillCircle(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, 2 * Math.PI);
      this.context.fill();
    },
    strokeCircle(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, 2 * Math.PI);
      this.context.stroke();
    },
    fillRectangle(x, y, w, h) {
      this.context.fillRect(x, y, w, h);
    },
    strokeRectangle(x, y, w, h) {
      this.context.strokeRect(x, y, w, h);
    },
    putImage(x, y, imageURL) {
      const image = new Image();
      image.src = imageURL;
      console.log(image);
      this.context.drawImage(image, x, y);
    },
    _emitClickEvent(event) {
      this.$emit("canvas-click", event);
    }
  },
  mounted() {
    this.$refs.canvas.addEventListener("click", this._emitClickEvent);
  },
  beforeDestroy() {
    this.$refs.canvas.removeEventListener("click", this._emitClickEvent);
  }
};
</script>

<style scoped lang="scss">
.algo-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;

  .canvas-wrapper {
    padding: 10px;
    border-radius: 5px;
    border: #dcdfe6 solid 1px;
    background: #e4e7ed;

    .canvas-inner {
      border: 1px #dcdfe6 solid;
      background: #f2f6fc;
    }
  }

  .canvas-tip {
    line-height: 40px;
  }
}
</style>

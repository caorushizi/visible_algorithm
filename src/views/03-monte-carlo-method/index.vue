<template>
  <div class="monte-carlo-method">
    <h1>蒙特卡洛方法</h1>
    <AlgoCanvas
      ref="canvas"
      :height="canvasHeight"
      :width="canvasWidth"
    ></AlgoCanvas>
    <span>当前圆周率估算值为：{{ pi }}</span>
  </div>
</template>

<script>
import circle from "./circle";
import utils from "@/assets/script/utils";
import mixins from "@/mixins";

export default {
  name: "monte-carlo-method",
  mixins: [mixins],
  data() {
    return {
      canvasWidth: 500,
      canvasHeight: 500,
      circle: null,
      points: [],
      insideCount: 0,
      pi: 0
    };
  },
  methods: {
    init() {
      this.circle = new circle(
        this.canvasWidth / 2,
        this.canvasHeight / 2,
        this.canvasWidth / 2
      );
    },
    run() {
      // 绘制数据
      this.canvas.setStrokeColor(this.canvas.colors.blue);
      this.canvas.strokeCircle(this.circle.x, this.circle.y, this.circle.r);
      for (let i = 0; i < this.points.length; i++) {
        const point = this.points[i];
        if (this.circle.contain(point.x, point.y)) {
          this.canvas.setFillColor(this.canvas.colors.red);
        } else {
          this.canvas.setFillColor(this.canvas.colors.green);
        }
        this.canvas.fillCircle(point.x, point.y, 2);
      }

      // 更新数据
      if (this.points.length > 0) {
        this.pi = (this.insideCount / this.points.length) * 4;
      }
      for (let k = 0; k < 100; k++) {
        const point = {
          x: utils.getRandomInt(0, this.canvasWidth),
          y: utils.getRandomInt(0, this.canvasHeight)
        };
        this.points.push(point);
        if (this.circle.contain(point.x, point.y)) {
          this.insideCount++;
        }
      }

      if (this.points.length > 10000) return;

      this.timer = requestAnimationFrame(() => this.run());
    }
  }
};
</script>

<style scoped lang="scss"></style>

<template>
  <div class="start-with-canvas">
    <h1>开始使用 canvas</h1>
    <AlgoCanvas
      ref="canvas"
      :height="canvasHeight"
      :width="canvasWidth"
      @canvas-click="canvasClick"
    ></AlgoCanvas>
    <span>PS： 点击空格以开始/暂停；点击小球变颜色</span>
  </div>
</template>

<script>
import circle from "./circle";
import mixins from "@/mixins";
import utils from "@/assets/script/utils";

export default {
  name: "start-with-canvas",
  mixins: [mixins],
  data() {
    return {
      canvasHeight: 500,
      canvasWidth: 500,
      circles: [],
      animated: true
    };
  },
  methods: {
    init() {
      const N = 10;
      const R = 30;

      for (let i = 0; i < N; i++) {
        const x = utils.getRandomInt(R, this.canvasWidth - R);
        const y = utils.getRandomInt(R, this.canvasHeight - R);
        const vx = utils.getRandomInt(1, 5);
        const vy = utils.getRandomInt(1, 5);
        this.circles.push(new circle(x, y, R, vx, vy));
      }
    },
    run() {
      this.canvas.clearCanvas();

      // 绘制数据
      this.circles.forEach(circle => {
        circle.isFilled
          ? this.canvas.fillCircle(circle.x, circle.y, circle.r)
          : this.canvas.strokeCircle(circle.x, circle.y, circle.r);
      });

      // 更新数据
      this.animated &&
        this.circles.forEach(circle => {
          circle.move(0, 0, this.canvasWidth, this.canvasHeight);
        });

      this.timer = requestAnimationFrame(() => this.run());
    },
    keypress(event) {
      if (event.code === "Space") {
        this.animated = !this.animated;
      }
    },
    canvasClick(event) {
      const { offsetX, offsetY } = event;
      this.circles.forEach(circle => {
        if (circle.contain(offsetX, offsetY)) {
          circle.isFilled = !circle.isFilled;
        }
      });
    }
  }
};
</script>

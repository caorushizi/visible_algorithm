<template>
  <div class="divide-the-money">
    <h1>有趣的分钱问题</h1>
    <AlgoCanvas
      ref="canvas"
      :height="canvasHeight"
      :width="canvasWidth"
    ></AlgoCanvas>
  </div>
</template>

<script>
import utils from "@/assets/script/utils";
import mixins from "@/mixins";

export default {
  name: "divide-the-money",
  mixins: [mixins],
  data() {
    return {
      canvasWidth: 800,
      canvasHeight: 500,
      money: []
    };
  },
  methods: {
    init() {
      for (let i = 0; i < 100; i++) {
        this.money.push(100);
      }
    },
    run() {
      this.canvas.clearCanvas();
      // 绘制数据
      const w = this.canvasWidth / this.money.length;
      for (let i = 0; i < this.money.length; i++) {
        if (this.money[i] > 0) {
          this.canvas.setFillColor(this.canvas.colors.blue);
          this.canvas.fillRectangle(
            i * w + 1,
            this.canvasHeight / 2 - this.money[i],
            w - 1,
            this.money[i]
          );
        } else {
          this.canvas.setFillColor(this.canvas.colors.red);
          this.canvas.fillRectangle(
            i * w + 1,
            this.canvasHeight / 2,
            w - 1,
            -this.money[i]
          );
        }
      }

      // 更新数据
      for (let k = 0; k < 50; k++) {
        for (let i = 0; i < this.money.length; i++) {
          const j = utils.getRandomInt(0, 100);
          this.money[i] -= 1;
          this.money[j] += 1;
        }
      }

      this.money.sort(utils.compareFn);
      this.timer = requestAnimationFrame(() => this.run());
    }
  }
};
</script>

<style scoped lang="scss"></style>

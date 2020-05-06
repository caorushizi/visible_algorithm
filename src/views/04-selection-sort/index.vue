<template>
  <div class="selection-sort">
    <h1>选择排序法</h1>
    <AlgoCanvas
      ref="canvas"
      :height="canvasHeight"
      :width="canvasWidth"
    ></AlgoCanvas>
  </div>
</template>

<script>
import mixins from "../../mixins";
import SelectionSortData from "./selection-sote-data";

export default {
  name: "index",
  mixins: [mixins],
  data() {
    return {
      canvasHeight: 500,
      canvasWidth: 800,
      dataObject: null
    };
  },
  methods: {
    async _setData(orderedIndex, currentCompareIndex, currentMinIndex) {
      this.dataObject.orderedIndex = orderedIndex;
      this.dataObject.currentCompareIndex = currentCompareIndex;
      this.dataObject.currentMinIndex = currentMinIndex;

      await this.sleep(10);
      this.timer && this.paint();
    },
    init() {
      this.dataObject = new SelectionSortData(100, this.canvasHeight);
    },
    paint() {
      this.canvas.clearCanvas();
      // 绘制数据
      const w = this.canvasWidth / this.dataObject.N;
      for (let i = 0; i < this.dataObject.N; i++) {
        if (i < this.dataObject.orderedIndex) {
          this.canvas.setFillColor(this.canvas.colors.red);
        } else {
          this.canvas.setFillColor(this.canvas.colors.gery);
        }

        if (i === this.dataObject.currentCompareIndex) {
          this.canvas.setFillColor(this.canvas.colors.blue);
        }

        if (i === this.dataObject.currentMinIndex) {
          this.canvas.setFillColor(this.canvas.colors.green);
        }

        this.canvas.fillRectangle(
          i * w,
          this.canvasHeight - this.dataObject.get(i),
          w - 1,
          this.dataObject.get(i)
        );
      }
    },
    async run() {
      await this._setData(0, -1, -1);

      // 更新数据
      for (let i = 0; i < this.dataObject.N; i++) {
        let minIndex = i;
        await this._setData(i, -1, minIndex);
        for (let j = i + 1; j < this.dataObject.N; j++) {
          await this._setData(i, j, minIndex);
          if (this.dataObject.get(j) < this.dataObject.get(minIndex)) {
            minIndex = j;
            await this._setData(i, j, minIndex);
          }
        }
        this.dataObject.swap(i, minIndex);
        await this._setData(i + 1, -1, -1);
      }

      await this._setData(0, -1, -1);
    }
  }
};
</script>

<style scoped></style>

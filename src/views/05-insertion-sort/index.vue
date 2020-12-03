<template>
  <div class="05-insertion-sort-page">
    <h1>插入排序法</h1>
    <AlgoCanvas
      ref="canvas"
      :height="canvasHeight"
      :width="canvasWidth"
    ></AlgoCanvas>
  </div>
</template>

<script>
import mixins from "../../mixins";
import InsertionSortData from "./insertion-sort-data";

export default {
  name: "05InsertionSort",
  mixins: [mixins],
  data() {
    return {
      canvasHeight: 500,
      canvasWidth: 800,
      dataObject: null
    };
  },
  methods: {
    async _setData(orderedIndex, currentIndex) {
      this.dataObject.orderedIndex = orderedIndex;
      this.dataObject.currentIndex = currentIndex;

      await this.sleep(10);
      this.timer && this.paint();
    },
    init() {
      this.dataObject = new InsertionSortData(100, this.canvasHeight);
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

        if (i === this.dataObject.currentIndex) {
          this.canvas.setFillColor(this.canvas.colors.blue);
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
      await this._setData(0, -1);
      for (let i = 0; i < this.dataObject.N; i++) {
        await this._setData(i, i);
        for (
          let j = i;
          j > 0 && this.dataObject.get(j) < this.dataObject.get(j - 1);
          j--
        ) {
          this.dataObject.swap(j, j - 1);
          await this._setData(i + 1, j - 1);
        }
      }
      await this._setData(this.dataObject.N, -1);

      this.paint();
    }
  }
};
</script>

<style scoped lang="scss"></style>

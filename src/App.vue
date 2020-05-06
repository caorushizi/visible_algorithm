<template>
  <div id="app">
    <aside class="aside-wrapper">
      <router-link class="view-page" tag="div" to="/">看得见的算法</router-link>
      <router-link class="view-page" tag="div" to="/01-start-with-canvas">
        开始使用 canvas
      </router-link>
      <router-link class="view-page" tag="div" to="/02-divide-the-money">
        有趣的分钱问题
      </router-link>
      <router-link class="view-page" tag="div" to="/03-monte-carlo-method">
        蒙特卡洛方法
      </router-link>
      <router-link class="view-page" tag="div" to="/04-selection-sort">
        选择排序法
      </router-link>
    </aside>
    <router-view class="main-wrapper" />
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  color: #303133;

  .aside-wrapper {
    width: 200px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f0f0f0;
    padding: 15px 0;
    overflow-y: auto;

    .view-page {
      color: #2c3e50;
      cursor: pointer;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
      height: 40px;
      min-height: 40px;
      line-height: 40px;
      padding: 0 15px;

      &:hover {
        color: #0086ff;
      }

      &.router-link-exact-active {
        color: #0086ff;
        background: #e3f7ff;
        border-right: 2px solid #0086ff;
      }
    }
  }

  .main-wrapper {
    flex: 1;
    padding: 15px 55px;
    overflow-y: auto;
  }
}
</style>

<template>
  <div class="test">
    <!-- 直接引用进度条组件 -->
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
    <p>test elemntUI</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "test-element",
  components: {},
};
</script>

<style>
</style>

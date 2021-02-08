<template>
  <div id="overview">
      <el-container>
      <el-header>装维室数据展示</el-header>
      <el-container>
        <el-aside width="300px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

import NavMenu from '../components/NavMenu'

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu
  }
}
</script>
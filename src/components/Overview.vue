<template>
  <div id="overview">
      <el-container>
      <el-header>装维室数据展示</el-header>
      <el-container>
        <el-aside width="300px">
          <navmenu @changeMenu="changeMenu"></navmenu>
        </el-aside>
        <el-main>
          <mains :menuIndex="menuIndex"></mains>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

import NavMenu from '../components/NavMenu';
import Mains from '../components/Main';

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'mains': Mains
  },
  data(){
    return {
      //菜单标志
      menuIndex: 0,
    }
  },
  methods: {
    /**
     * 子组件调用该函数改变菜单当前选择状态
     */
    changeMenu(meunIndex) {
      this.menuIndex = meunIndex;
    }
  }
}
</script>
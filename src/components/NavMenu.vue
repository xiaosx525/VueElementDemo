<template>
  <el-row class="tac">
    <el-col :span="30">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="0" @click="emitChange(0)">
          <i class="el-icon-menu"></i>
          <span slot="title">终端速率不匹配（万）</span>
        </el-menu-item>
        <el-menu-item index="1" @click="emitChange(1)">
          <i class="el-icon-menu"></i>
          <span slot="title">光宽+ITV全程转化率</span>
        </el-menu-item>
        <el-menu-item index="2" @click="emitChange(2)">
          <i class="el-icon-menu"></i>
          <span slot="title">宽带1小时预约率</span>
        </el-menu-item>
        <el-menu-item index="3" @click="emitChange(3)">
          <i class="el-icon-menu"></i>
          <span slot="title">宽带2小时装机</span>
        </el-menu-item>
        <el-menu-item index="4" @click="emitChange(4)">
          <i class="el-icon-menu"></i>
          <span slot="title">改约率</span>
        </el-menu-item>
        <el-menu-item index="5" @click="emitChange(5)">
          <i class="el-icon-menu"></i>
          <span slot="title">测速达标率</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      /** 
       * 调用父组件方法 传递菜单状态
      */
      emitChange(menuIndex) {
        this.$emit('changeMenu', menuIndex);
      }

    }
  }
</script>
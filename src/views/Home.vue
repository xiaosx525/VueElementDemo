<template>
  <div class="home">
   <h2>这里是首页</h2>
   <test-element>1111</test-element>
  </div>
</template>

<script>
/**
 * 引入自己定义的组件
 */
import TestElement from '@/components/TestElement';
export default {
  name: 'Home',
  //注册组件
  components: {
    TestElement
  }
}
</script>

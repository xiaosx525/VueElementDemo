<template>
  <div class="main">
      <h2>{{menuIndex}}</h2>
  </div>
</template>

<script>
export default {
    name: "Mains",
props: {
    //接受父组件传进来的变量
    menuIndex: {
        type: Number,
        default: 0
    }
},
watch: {
    menuIndex: {
        deep: true,
        handler() {
            console.log(this.menuIndex)
        }
    }
}
}
</script>

<style>

</style>
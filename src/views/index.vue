<!-- 首页内容 -->
<template>
    <div>
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
    name: 'index',
    data() {
        return {
            title: '我是首页'
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../src/styles/index.scss";


</style>
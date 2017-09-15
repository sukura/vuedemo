<!-- 左侧导航 -->
<template>
    <el-menu :default-active="curIndex" class="el-menu-vertical-demo" theme="dark" :unique-opened="true" router @select="navSelect">
        <el-menu-item index="index">首页</el-menu-item>
        <el-submenu index="error">
            <template slot="title">错误页面</template>
            <el-menu-item index="error1">404</el-menu-item>
            <el-menu-item index="error2">500</el-menu-item>
        </el-submenu>
        <el-menu-item index="form">表单</el-menu-item>
        <el-submenu index="assembly">
            <template slot="title">功能模块</template>
            <el-menu-item index="basic">form</el-menu-item>
            <el-menu-item index="datepage">日期时间</el-menu-item>
            <el-menu-item index="error1">选项3-3</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    // components: { SidebarItem },
    computed: {
        // ...mapGetters(['permission_routers'])
    },
    data() {
        return {
            curIndex: 'index'
        }
    },
    methods: {
        navSelect(index) {
            this.curIndex = index;
        }
    },
    mounted(){
        // this.$router.push(this.curIndex);
        // console.log(this.curIndex);
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
    min-height: 100%;
    border-radius: 0 !important;
    background-color: #324157;
}
</style>

<template>
    <el-menu class="navbar" theme="dark" mode="horizontal">
        <div class="title-container">
            <router-link to="/">
                <img class="logo" src="../../assets/logo.png">
                <span>{{ title }}</span>
            </router-link>
        </div>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                {{username}}
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <el-dropdown-item>
                    <span @click="logout" style="display:block;">退出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>

export default {
    computed: {
        username () {
          return this.$store.state.username;
        }
    },
    data() {
        return {
            title: process.env.TITLE,
        };
    },
    methods: {
        logout() {
            this.$router.push({ path: '/' });
            // this.$store.dispatch('LogOut').then(() => {
            //     location.reload();  // 为了重新实例化vue-router对象 避免bug
            // }).catch(error => {
            //     console.log(error);
            // });
        }
    },
    mounted() { // 页面一加载就调用
        // console.log(this.$store.state.username);
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 60px;
    line-height: 60px;
    border-radius: 0 !important;
    background-color: #1f2d3d;
    .title-container {
        height: 60px;
        float: left;
        padding-left: 10px;
        color: #bfcbd9;
        .logo {
            height: 32px;
            vertical-align: middle;
        }
        span {
            font-size: 18px;
            vertical-align: middle;
        }
    }
    .avatar-container {
        height: 60px;
        display: inline-block;
        position: absolute;
        right: 10px;
        .avatar-wrapper {
            cursor: pointer;
            position: relative;
            color: #bfcbd9;
            right: 20px;
            .el-icon-caret-bottom {
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}
</style>

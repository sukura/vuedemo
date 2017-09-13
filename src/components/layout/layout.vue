<template>
    <div class="app-wrapper">
        <!-- 头部 -->
        <div class="navbar-wrapper">
            <navbar></navbar>
        </div>
        <!-- 侧边栏 -->
        <div class="sidebar-wrapper">
            <sidebar></sidebar>
        </div>
        <!-- 右侧面包屑 -->
        <div class="levelbar-wrapper">
            <levelbar></levelbar>
        </div>
        <!-- 右下中间空白 -->
        <div class="main-container">
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, Levelbar, AppMain } from './';
export default {
    name: 'layout',
    components: {
        Navbar,
        Sidebar,
        Levelbar,
        AppMain
    },
    computed: {
        // sidebar() {
        //     return this.$store.state.app.sidebar;
        // }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/mixin.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.hideSidebar {
        .sidebar-wrapper {
            transform: translate(-140px, 0);
            .sidebar-container {
                transform: translate(132px, 0);
            }
            &:hover {
                transform: translate(0, 0);
                .sidebar-container {
                    transform: translate(0, 0);
                }
            }
        }
        .levelbar-wrapper {
            left: 40px;
        }
        .main-container {
            padding-left: 40px;
        }
    }
    .sidebar-wrapper {
        transition: all .28s ease-out;
        width: 180px;
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        z-index: 1002;
        overflow: hidden;
    }
    .sidebar-container {
        transition: all .28s ease-out;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -17px;
        z-index: 1002;
        overflow-y: scroll;
    }
    .navbar-wrapper {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1003;
        overflow: hidden;
    }
    .levelbar-wrapper {
        transition: all .28s ease-out;
        width: 100%;
        position: fixed;
        top: 60px;
        left: 180px;
        z-index: 1001;
        overflow: hidden;
    }
    .main-container {
        transition: all .28s ease-out;
        min-height: 100%;
        padding: 100px 10px 10px 190px;
    }
}
</style>

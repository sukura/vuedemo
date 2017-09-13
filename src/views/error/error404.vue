<!-- 404页面 -->
<template>
    <div class="error">
        <h2>{{error}}</h2>
        <p><img src="../../assets/4042.jpg" alt=""></p>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            error: '咦？跑哪里去了... ...'
        }
    }
}    
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.error {
    text-align: center;
    margin-top: 80px;
    h2 {
        font-weight: normal;
    }
}
</style>
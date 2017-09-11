<template>
    <div class="login">
        <el-form autoComplete="off" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">{{title}}</h3>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="off" @keyup.enter.native="login" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading" @click.native.prevent="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        const validateAccount = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('账号不能为空！'));
            } else if (value !== 'admin') {
                return callback(new Error('账号输入错误'));
            } else {
                callback();
            }

        };
        const validatePwd = (rule, value, callback) => {
            if (!value) {
                callback(new Error('密码不能为空！'));
            } else if (value !== 'admin') {
                callback(new Error('密码输入错误'));
            } else {
                callback();
            }
        };
        return {
            title: process.env.TITLE,
            loginForm: {
                userName: '',
                password: ''
            },
            loginRules: {
                username: [
                    { required: true, trigger: 'blur', validator: validateAccount }
                ],
                password: [
                    { required: true, trigger: 'blur', validator: validatePwd }
                ]
            },
            loading: false
        } 
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    console.log('1241');
                    // this.$router.push({ path: '/layout' });
                    this.$http.post(BASE_URL + '/login', function(data) {
                        console.log(data);
                    });
                    // this.$store.dispatch('Login', this.loginForm).then(() => {
                    //     this.loading = false;
                    //     this.$router.push({ path: '/' });
                    // }).catch(() => {
                    //     this.loading = false;
                    // });
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../src/styles/mixin.scss";
.login {
    @include relative;
    height: 100vh;
    background-color: #2d3a4b;
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    input {
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: #eeeeee;
        height: 47px;
    }
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
    }
    .title {
        font-size: 30px;
        color: #eeeeee;
        margin: 0 auto 20px auto;
        text-align: center;
        font-weight: bold;
        .logo {
            height: 40px;
            vertical-align: middle;
            margin-right: 10px;
        }
    }
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
    .el-button {
        width: 100%;
    }
}
</style>
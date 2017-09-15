<!-- 表单里面的基本配置 -->
<template>
    <div>
        <!-- 单选按钮 -->
        <el-radio-group v-model="radio">
            <el-radio :label="1">备选项1</el-radio>
            <el-radio :label="2">备选项2</el-radio>
            <el-radio :label="3">备选项3</el-radio>
        </el-radio-group>
        <el-radio-group v-model="radio" disabled>
            <el-radio :label="1">备选项1</el-radio>
            <el-radio :label="2">备选项2</el-radio>
            <el-radio :label="3">备选项3</el-radio>
        </el-radio-group>
        <el-button type="primary" @click="radioChecked">获取单选按钮</el-button>
        <hr/>
        <!-- 全选复选框 -->
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <el-button type="primary" class="mt20 block" @click="radioChecked2">获取多选按钮</el-button>
        <hr/>
        <!-- 下拉框 普通的 -->
        <el-select v-model="value3" placeholder="请选择">
            <el-option v-for="(item,index) in options" :label="item.label" :key="index" :value="item.label"></el-option>
        </el-select>
        <!-- 可清空数据的下拉框 -->
        <el-select v-model="value4" placeholder="请选择" clearable>
            <el-option v-for="(item,index) in options" :label="item.label" :key="index" :value="item.label"></el-option>
        </el-select>    
        <!-- 可多选的 -->
        <el-select v-model="value5" placeholder="请选择" multiple>
            <el-option v-for="(item,index) in options" :label="item.label" :key="index" :value="item.label"></el-option>
        </el-select>
        <!-- 可输入查询的 -->
        <el-select v-model="value6" placeholder="请选择" filterable>
            <el-option v-for="(item,index) in options" :label="item.label" :key="index" :value="item.label"></el-option>
        </el-select>
        <el-button type="primary" class="mt20 block" @click="selectChecked">获取select</el-button>
        <hr/>
        <el-row>
            <el-col :span="8">
                <p>输入框</p>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <p>带icon的输入框</p>
                <el-input placeholder="请输入内容" icon="search" v-model="input"></el-input>
                <p>可自适应高度的文本域</p>
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
                <p>复合型输入框1</p>
                <el-input placeholder="请输入内容" v-model="input4">
                    <template slot="prepend">Http://</template>
                    <template slot="append">.com</template>
                </el-input>
                <p>复合型输入框2</p>
                <el-input placeholder="请输入内容" v-model="input5">
                    <el-select v-model="select" class="w" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="search"></el-button>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        data() {
            return {
                radio: 3,
                checkList: ['选中且禁用', '复选框 B'],
                input: '',
                textarea2: '',
                input4: '',
                input5: '',
                select: '',
                checkAll: true,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true,
                value3: '黄金糕',
                value4: '黄金糕',
                value5: ['黄金糕'],
                value6: '',
                options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }, {
                      value: '3',
                      label: '蚵仔煎'
                    }, {
                      value: '4',
                      label: '龙须面'
                    }, {
                      value: '5',
                      label: '北京烤鸭'
                    }
                ],
            }
        },
        methods: {
            radioChecked() { // 获取单选按钮数据
                this.showAlert(this.radio);
            },
            handleCheckAllChange(event) { // 点击全选
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) { // 点击单个的复选框
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            radioChecked2() { // 获取全选按钮数据
                this.showAlert(this.checkedCities);
            },
            selectChecked() { // 获取下拉框数据
                this.showAlert(this.value3+'...|...'+this.value4+'...|...'+this.value5+'...|...'+this.value6);
            },
            showAlert(info) {
                this.$alert(info, '提示', {
                    confirmButtonText: '确定',
                        callback: action => {
                            // 点击确定后执行
                            this.$message({type: 'success', message: '成功'});
                    }
                });
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mt20 {
    margin-top: 20px;
}
.w {
    width: 110px;
}
</style>
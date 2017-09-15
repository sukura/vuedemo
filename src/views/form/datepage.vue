<!-- 日期时间插件 -->
<template>
    <div>
        <el-row>
            <el-col :span="8">
                <p>固定时间范围</p>
                <el-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                    }">
                </el-time-select>
                <el-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime
                    }">
                </el-time-select>
            </el-col>
            <el-col :span="4">
                <p>任意时间范围</p>
                <el-time-picker
                    is-range
                    v-model="value3"
                    placeholder="选择时间范围">
                </el-time-picker>
            </el-col>
            <el-col :span="8">
                <p>任意时间点</p>
                <el-time-picker
                    v-model="value2"
                    :picker-options="{
                      selectableRange: '8:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                </el-time-picker>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p>基础版日期</p>
                <div class="block">
                    <el-date-picker
                      v-model="date1"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions0">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="6">
                <p>带快捷选项</p>
                <div class="block">
                    <el-date-picker
                      v-model="date2"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions1">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p>周</p>
                <div class="block">
                    <el-date-picker
                        v-model="date3"
                        type="week"
                        format="yyyy 第 WW 周"
                        placeholder="选择周">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="6">
                <p>月</p>
                <div class="block">
                    <el-date-picker
                        v-model="date4"
                        type="month"
                        placeholder="选择月">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="6">
                <p>年</p>
                <div class="block">
                    <el-date-picker
                        v-model="date5"
                        align="left"
                        type="year"
                        placeholder="选择年">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p>日期范围</p>
                 <div class="block">
                    <el-date-picker
                        v-model="date6"
                        type="daterange"
                        placeholder="选择日期范围">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="8">
                <p>日期范围带快捷选项</p>
                <div class="block">
                    <el-date-picker
                        v-model="date7"
                        type="daterange"
                        align="left"
                        placeholder="选择日期范围"
                        :picker-options="pickerOptions2">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <p>日期时间带快捷选项</p>
                <div class="block">
                    <el-date-picker
                        v-model="date8"
                        type="datetime"
                        placeholder="选择日期时间"
                        align="left"
                        :picker-options="pickerOptions3">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="8">
                <p>日期时间带快捷选项</p>
                <div class="block">
                    <el-date-picker
                        v-model="date8"
                        type="datetime"
                        placeholder="选择日期时间"
                        align="left"
                        :picker-options="pickerOptions3">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                startTime: '',
                endTime: '',
                value2: '',
                value3: [new Date(2017, 9, 14, 10, 10), new Date(2017, 9, 14, 11, 10)],
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                date5: '',
                date6: '',
                date7: '',
                date8: '',
                date9: '',
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                        }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                        }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                          picker.$emit('pick', [start, end]);
                        }
                      }, {
                        text: '最近一个月',
                        onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                          picker.$emit('pick', [start, end]);
                        }
                      }, {
                        text: '最近三个月',
                        onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                          picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                pickerOptions3: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                        }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                        }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-row {
    margin-top: 20px;
}
</style>
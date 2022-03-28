<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <!-- user CARD -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-7-19</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <!-- table CARD -->
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <!-- 在el-table-column中用prop属性来对应对象中的键名即可填入数据 -->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userImg: require("../../assets/images/user.png"),

      tableData: [
          {
            name: 'oppo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: 'vivo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '苹果',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '小米',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '三星',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '魅族',
           todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          }
        ],
      
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
    };
  },
};
</script>

<style scoped>
/* .user {
  position: relative;;
}
img {
  display: inline-block;
  width:80px;
  height: 80px;
  border-radius: 50%;
}
.userInfo {
  position: absolute;
  top: 44px;
  left:140px;
  margin-left: 20px;
  display: inline-block;
}
.name {
  font-weight:bold;
  font-size:22px;
}
.access {
  font-size:12px;
  color:gray;
} */
</style>
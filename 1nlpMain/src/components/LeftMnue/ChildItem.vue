<template>
  <div class="menu-wrapper">
    <template v-if="menuData.children || (showService && menuData.serviceList) ">
      <el-submenu :index="menuData.id" :key="menuData.id"  >
        <template slot="title">
          <svg-icon class="font16" :icon-class="menuData.icon" ></svg-icon>
          <span class="font16" :title="menuData.name">{{ menuData.name }}</span>
        </template>
        <template v-if ="showService && menuData.serviceList">
          <child-item :showService="showService" v-for="item in menuData.serviceList" :key="item.id" :menuData="item"/>
        </template>
        <template v-else>
          <child-item v-for="item in menuData.children" :showService="showService" :key="item.id" :menuData="item"/>
        </template>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :index="menuData.id" >
        <svg-icon class="font16" :icon-class="menuData.icon || ''" ></svg-icon>
        <span class="font16" slot="title" :title="menuData.name || menuData.serviceName">{{ menuData.name || menuData.serviceName }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name:'ChildItem',
  props: ['menuData','showService'],
}
</script>

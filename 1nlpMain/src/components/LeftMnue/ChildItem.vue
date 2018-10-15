<template>
  <div class="menu-wrapper">
    <el-submenu v-if="menuData.children" :index="menuData.id" :key="menuData.id"  >
      <template slot="title">
        <svg-icon class="font16" :icon-class="menuData.icon" ></svg-icon>
        <span class="font16">{{ menuData.name }}</span>
      </template>
      <child-item :menuData="menuData.children"/>
    </el-submenu>
    
    <template v-else-if="menuData.length>0">
      <el-menu-item v-for="child in menuData" :index="child.id" :key="child.id">
        <svg-icon class="font16" :icon-class="child.icon" ></svg-icon>
        <span class="font16" slot="title">{{ child.name }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-menu-item :index="menuData.id" >
        <svg-icon class="font16" :icon-class="menuData.icon" ></svg-icon>
        <span class="font16" slot="title">{{ menuData.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name:'ChildItem',
  props: ['menuData'],
}
</script>

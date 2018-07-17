<template>
  <el-dialog
    title=""
    :visible.sync="centerDialogVisible"
    width="35%"
    >
    <LoginContent @closeDialog="closeDialog"></LoginContent>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span> -->
  </el-dialog>
</template>

<script>
import LoginContent from "@/components/Login/content"
export default {
  name: 'login',
  props: {
    visible: {
      type: Boolean,
      required: true,
    }
  },
  components:{
    LoginContent
  },
  data () {
    return {
      centerDialogVisible: this.visible
    }
  },
  methods:{
    closeDialog(val){
      this.centerDialogVisible = val
    }
  }
  ,
  watch: {
    visible(val) {
      this.centerDialogVisible = val
    },
    centerDialogVisible(val){
      this.$emit("login",val)
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

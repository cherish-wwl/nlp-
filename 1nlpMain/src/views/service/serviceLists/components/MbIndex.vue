<template>
  <div>
   
  </div>
</template>
<script>
import { getThirdServiceList } from '@/api/serviceLists'
import Cookies from 'js-cookie'
export default {
  props:["MenusList"],
  methods:{
    init(){
      
      var servicId = Cookies.get("service_id")
      console.log("1111111111"+servicId)
      var data ={
        class_id:servicId, //id
      }
      getThirdServiceList(data).then(responce =>{
        console.log(responce.data)
          // this.thridList = responce.data 
         
        })
    },
    
  },
  mounted(){
    this.init()
  }
}
</script>


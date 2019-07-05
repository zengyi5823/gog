<template>
    <ul class="cardbox"> 
        <div class="container d-flex justify-content-between">
            <Card v-for="(item,index) in 4" :key="index" class="cardone">{{item}}</Card>
        </div>
    </ul>
</template>
<script>
export default {
    data(){
        return {
          
        }
    }
}
</script>
<style scpoed>
.cardbox{
    margin-top:50px;
}
@media (min-width: 1200px) {
    .container{
        display: flex;
        justify-content:space-between;
    }
    .cardbox{
        /* display: flex;
        justify-content:space-between; */
        margin-top:50px;
         /* margin-left:18%;
        margin-right:18%; */
        margin-right: 20px;
    }
}
 @media (min-width: 992px) and (max-width: 1200px) {
    .container {
    max-width: 1140px;
    margin:0 auto;
    display: flex;
    justify-content:space-between;
    }
    .cardbox{
        padding-left: 0;
    }
    .cardone{
        width:90%;height:90%;
        margin-left:20px;
    }
}

@media (min-width: 768px) and (max-width: 992px){
  .container {
    max-width:900px;
     display: flex;
    justify-content:space-between;
  }
  .cardbox{
        padding-left: 0;
    }
  .cardone{
        width:90%;height:70%;
        margin-left:8px;
    }
}
@media (min-width: 576px) and (max-width: 768px){
  .container {
    max-width:760px;
    display: flex;
    justify-content:space-between;
    /* flex-wrap: wrap */
  }
  .cardbox{
        padding-left: 0; 
  }
  .cardone{
        width:120%;height:70%;
        margin-left:8px;
        margin-top:10px;
   }
}
@media (max-width:576px){
    .container {
    max-width:500px;
    display: flex;
    justify-content:left;
    flex-wrap:wrap
  }
  .cardbox{
        padding-left: 0; 
  }
  .cardone{
        width:45%!important;height:30%;
        margin-left:8px;
        margin-top:10px;
   }
}
</style>
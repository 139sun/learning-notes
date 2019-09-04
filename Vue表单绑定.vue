<template>
  <div class="home">
   <div class="function">
     请输入用户id: <input type="text" v-model = 'userId'>
     <button @click="search">查询</button> <button @click="addUser">添加用户</button>
   </div>
   <table border="1">
     <tr>
       <th>id</th>
       <th>地址</th>
       <th>添加时间</th>
        <th>学校</th>
       <th>性别</th>
       <th>名称</th>
        <th>电话号码</th>
       <th>年龄</th>
     </tr>
     <tr  v-for="item in lists" :key="item.id" @dblclick="revise(item)">
         <td>{{item.id}}</td>
       <td>{{item.address}}</td>
       <td>{{item.addTime}}</td>
        <td>{{item.school}}</td>
       <td>{{item.sex}}</td>
       <td>{{item.name}}</td>
        <td>{{item.tel}}</td>
       <td>{{item.age}}</td>
     </tr>
   </table>
   <div class="page">
     <div>总数:{{listlength}}条  
    <select v-model="selected" @change="updateList">
    <option >5</option>
    <option>10</option>
    <option>20</option>
    <option>30</option>
    <option>50</option>
  </select>
  </div>
  <button v-for="item in pageNum" :key="item" value="item" @click="updatepages(item)">{{item}}</button>
   </div>
   <div class="mask" v-show="ifShow" @click="ifShow = false">
     <div class="block" @click.stop>
       <ul>
      <li class="adress">请输入地址: <input type="text" v-model="obj.address" ></li>  
     <li class="school">请输入学校: <input type="text" v-model="obj.school"></li> 
      <li class="sex">请输入性别: 男<input type="radio" v-model="obj.sex" name="sex" value='男' id="sex">女<input type="radio" value='女' v-model="obj.sex" name="sex"></li>
      <li class="name">请输入名称: <input type="text" v-model="obj.name" ></li>
      <li class="tel">请输入电话号码 :<input type="text" v-model="obj.tel" ></li> 
      <li class="age">请输入年龄 :<input type="text" v-model="obj.age"></li>
      </ul>  
      <button @click="change" v-show="!ifAdd">修改</button>
       <button @click="add" v-show="ifAdd">添加用户</button>
        <button @click="del" v-show="!ifAdd">删除当前用户</button>
        </div>   
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
// import qs from 'qs'
// import Mock from 'mockjs'
export default {
  name: 'home',
  data() {
    return {
      list:'',
      userId:'',
      ifShow:false,
      ifAdd:true,
      userList:'',
      selected:5,
      pageNum:1,
      listlength:'',
      obj : {
        name:'',
        school:'',
        sex:'',
        address:'',
        age:'',
        tel:'',
        id:'',
        // addTime:new Date().toLocaleString(),
      }
    }
  },
  components: {
  },
  computed: {
    lists(){
      return this.userList?[this.userList]:this.list
    }
  },
  methods: {  
    requestList(){
     this.$ajax.get('/list',{params:{
      start:this.pageNum,
      limit:this.selected,
    }}).then(res=>{
     this.list = res.data.data.list;
    this.listlength = res.data.data.totalRow;
    this.pageNum = res.data.data.totalPage;
    //  console.log(res.data.data,this.list.length)
     })
    },
    updateList(){
      console.log(this.selected)
      this.requestList();
    },
    updatepages(item){
      this.pageNum = item;
      this.requestList();
    },
    search(){
      if(this.userId){
       this.userList =  this.list.find(el=>el.id == this.userId);
       console.log(this.userList);
      }
    },
    revise(item){
      this.ifShow = true;
      this.ifAdd = false;
      this.obj = item;
     
    },
    addUser(){
      this.ifShow = true;
      this.ifAdd = true;
    },
    change(){
      this.$ajax.post('/update',this.obj)
      this.ifShow = false;
    },
    del(){
      // this.$ajax.get('/del',{params:{
      //   id:this.obj.id,
      // }})
      this.$ajax.get('/del?id=${this.obj.id}')
      this.ifShow = false;
       this.requestList();
    },
    add(){
  this.$ajax.post('/save',this.obj).then(
    ()=>this.ifShow = false
  )
  // this.obj.addTime = new Date().toLocaleString();
  // console.log(this.obj);
   this.requestList();
    }
  },
  created() {
    this.requestList();
  },
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
button{
  margin:10px 20px;
}
  table{
     border-collapse:collapse;
    th,td{
      padding:10px 20px;
    }
  }
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
   .block{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    ul{
      display:flex;
      flex-flow: column;
      justify-content: flex-end;
      color:white;
      li{
        margin:20px;
      }
    }
    }
  }
</style>
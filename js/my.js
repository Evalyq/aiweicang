var my = new Vue({
             el:"#main",
             data:{
                phone:"",
                password:"",
             },
             mounted:function(){

             },
             methods:{
                login:function(){
                   var that = this;
                   $.ajax({
                   	  url:'https://api.iweicang.com/v1/index.php?c=members&a=login',
                   	  dataType:'json',
                   	  type:'post',
                   	  data:{
                          mobile:that.phone,
                          password:that.password,
                   	  },
                   	  success:function(res){
                          alert(res.msg);
                          console.log(res.token);
                          // if(res.token){
                          // 
                          $.cookie("token",res.token);
                          var a = $.cookie("token");
                          console.log(a);
                   	  },
                   	  error:function(res){
                          
                   	  }
                   })
                }
             }
	    })
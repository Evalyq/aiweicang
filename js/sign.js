 var my = new Vue({
             el:"#main",
             data:{
                phone:"",
                password:"",
                code:"",
                referee:"",
             },
             mounted:function(){

             },
             methods:{
             	geticon:function(){
             	   var that = this;
                   $.ajax({
                   	  url:'https://api.iweicang.com/v1/index.php?c=members&a=send_reg_code',
                   	  dataType:'json',
                   	  type:'post',
                   	  data:{
                          mobile:that.phone,
                   	  },
                   	  success:function(res){
                          alert(res.msg);
                   	  },
                   	  error:function(res){
                          alert(111);
                   	  }
                   })
             	},
              regist:function(){
                var that = this;
                   $.ajax({
                   	  url:'https://api.iweicang.com/v1/index.php?c=members&a=register',
                      dataType:'json',
                      type:'post',
                      data:{
                          mobile:that.phone,
                          password:that.password,
                          repassword:that.password,
                          code:that.code,
                          referee:that.referee,
                          type:1,
                      },
                      success:function(res){
                          // if()
                          alert(res.msg);
                      },
                      error:function(res){
                          alert(res.responseJSON.msg);
                          // console.log(res.responseJSON.msg);
                      }

                   })
              },
             }
	    })
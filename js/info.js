var info = new Vue({
	el:"#main",
	data:{
       shopinfo:{},
       num:1,
       maskShow:false,
	},
	mounted:function(){
        this.getInfo();
	},
	methods:{
        getInfo:function(){
        	 var that = this;
             $.ajax({
	           	  url:"https://api.iweicang.com/v1/index.php?c=goods&a=detail",
	           	  dataType:'json',
	           	  type:'get',
	           	  data:{
	                  id:getQuery().id,
	           	  },
	           	  success:function(res){
	                  that.shopinfo = res;
	                  console.log(res);
	              },
	           	  error:function(res){
	                  alert(111);
	           	  }
            })
        },
        addCart:function(){
            this.maskShow = true;
        },
        add:function(){
        	this.num = this.num + 1;
        },
        reduce:function(){
        	if(this.num > 0){
        	   this.num = this.num - 1;
        	}else{
        		this.num = 0;
        	}        	
        },
        clear:function(){
           this.maskShow = false;
        },
        sure:function(){
             
        }
	}
})
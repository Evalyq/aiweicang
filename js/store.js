var store = new Vue({
	el:"#main",
	data:{
		classify:[
		    {
	            id: 35,
	            name: "翡翠玉石",
	            img: "images/mall/emerald.png"
	        },
	        {
	            id: 33,
	            name: "彩色宝石",
	            img: "images/mall/gemstone.png"
	        },
	        {
	            id: 32,
	            name: "金银饰品",
	            img: "images/mall/goldOrnaments.png"
	        },
	        {
	            id: 17,
	            name: "天然木饰",
	            img: "images/mall/treeOrnaments.png"
	        },
	        {
	            id: 37,
	            name: "艺术精品",
	            img: "images/mall/art.png"
	        },
	        {
	            id: 111,
	            name: "品茶论道",
	            img: "images/mall/tea.png"
	        },
	        {
	            id: 38,
	            name: "收藏至宝",
	            img: "images/mall/collection.png"
	        },
	        {
	            id: 65,
	            name: "更多分类",
	            img: "images/mall/moreType.png"
	        }
	    ],
	    SpeLists:{},
	    TjLists:{},
	},
	mounted:function(){
		// this.getSpeList();
        this.getTjList();
	},
	methods:{
		// getSpeList:function(){
		// 	var that = this;
		// 	$.ajax({
		// 		url:"https://www.iweicang.com/v1/index.php?c=news&a=goodsArticle",
		// 		dataType:"json",
		// 		type:"get",
		// 		data:{},
		// 		success:function(res){
  //                   that.SpeLists = res;
  //                   console.log(res);
		// 		},
		// 		error:function(res){
		// 			alert("接口失败");
		// 			console.log(res);
		// 		}
		// 	})
		// },
		getTjList:function(){
			var that = this;
			$.ajax({
                url:"https://api.iweicang.com/v1/index.php?c=goods&a=recommendDetail",
                dataType:"json",
				type:"get",
				data:{},
				success:function(res){
                    that.TjLists = res;
                    console.log(res);
				},
				error:function(res){
					alert("接口失败")
				}
			})
		}
	}
})
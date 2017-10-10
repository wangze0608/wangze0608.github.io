var vm = new Vue({
	el: "#app",
	data:{
		static:1,
		msgList:[],
		page:0,
		noMore:false,
		scroll:'',
	},
	mounted:function () {
		this.$nextTick(function () {
			// this.getIntDate();
			this.getDateDrop();
			var self = this;
			
			// $(window).scroll(function () {
			// 	let scrollTop = $(this).scrollTop();
			// 	let scrollHeight = $(document).height();
			// 	let windowHeight = $(this).height();
			//
			// 	if(scrollTop + windowHeight   === scrollHeight && self.noMore == false) {
			// 		self.getMoreDate();
			// 	}
			// })
		});
	},
	watch:{
		// page:function () {
		// 	if( this.page == 4) {
		// 		console.log(this.page);
		// 		return this.noMore =true;
		// 	}
		// },
	},
	methods:{
		getIntDate: function () {
			let  _this = this;
			this.$http.get('./data'+_this.page+'.json',{id:1,page:_this.page}).then(function (res) {
				_this.msgList = res.body.data;
				_this.page++;
			});
		},
		getMoreDate:function () {
			console.log('sssss');
			var _this = this;
			if(!this.noMore ) {
				this.static = 1;
				this.$http.get('./data'+_this.page+'.json',{id:1,page:_this.page}).then(function (res) {
					console.log(res.body.data.length);
					if (res.body.data.length > 0 ) {
						_this.msgList = _this.msgList.concat(res.body.data);
						_this.page++;
						this.static = 1;
					} else {
						this.static = 0;
						this.noMore = true;
					}
					
				});
			} else {
				this.static = 2;
				console.log('没有更多数据了');
			}
			
		},
		getDateDrop:function () {
			var _this = this;
			$('#app').dropload({
				scrollArea : window,
				domUp : {
					domClass   : 'dropload-up',
					domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
					domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
					domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
				},
				domDown : {
					domClass   : 'dropload-down',
					domRefresh : '<div class="dropload-refresh">↑上拉加载更多-自定义内容</div>',
					domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>',
					domNoData  : '<div class="dropload-noData">暂无数据-自定义内容</div>'
				},
				
				loadDownFn : function(me){
					
					$.ajax({
						type: 'POST',
						url: './data'+_this.page+'.json',
						dataType: 'json',
						success: function(data){
							var arrLen = data.data.length;
							if(arrLen > 0){
								_this.msgList = _this.msgList.concat(data.data);
								console.log(_this.msgList);
								_this.page++;
							}else{
								// 锁定
								me.lock();
								// 无数据
								me.noData();
							}
							// 每次数据插入，必须重置
							me.resetload();
						},
						error: function(xhr, type){
							alert('Ajax error!');
							// 即使加载出错，也得重置
							me.resetload();
						}
					});
				},
				threshold : 50
			});
		}
	},
});
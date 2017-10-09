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
			this.getIntDate();
			var self = this;
			$(window).scroll(function () {
				let scrollTop = $(this).scrollTop();
				let scrollHeight = $(document).height();
				let windowHeight = $(this).height();
				
				if(scrollTop + windowHeight  === scrollHeight && self.noMore == false) {
					self.getMoreDate();
				}
			})
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
	},
});
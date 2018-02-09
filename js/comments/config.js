require.config({
	baseUrl:'js/',
	paths:{
		jquery:'jquery-3.3.1.min',
		bootstrap:'bootstrap',
		popper:'comments/popper',
		swiper:'../plugins/swiper4.0/js/swiper-4.1.0.min'
	},
	
	map:{
		'*' : {
			'css':'js/comments/css.min.js'
		}
	},
	shim:{
		bootstrap:[
			// 'css!../plugins/bootstrap-4.0.0/css/bootstrap.css'
		],
		swiper:[
			// 'css!../plugins/swiper4.0/css/swiper-4.1.0.min.css'
		]
	}
});
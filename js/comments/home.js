require(['config'],function (config) {
	require(['jquery','bootstrap','swiper'],function ($,bootstrap,Swiper) {
		var swiper = new Swiper('.slide-full', {
			direction: 'vertical',
			slidesPerView: 1,
			spaceBetween: 0,
			mousewheel: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
		
		var swiper2 = new Swiper('.slide_x', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop:true,
			coverflowEffect: {
				rotate: 70,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows : true,
			},
			pagination: {
				el: null,
			},
		});
		
	});
});


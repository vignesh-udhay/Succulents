$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.content').offset().top - 300) {

			$('#word1').addClass('showWord');
			$('#word2').addClass('showWord');
			$('#word3').addClass('showWord');
			$('#p1').addClass('showPara');
			$('#p2').addClass('showPara');

		}

	if(wScroll > $('.how').offset().top - 400) {

			$('#w1').addClass('wShow');
			$('#w2').addClass('wShow');
			$('#w3').addClass('wShow');
			$('#w4').addClass('wShow');
			$('#w5').addClass('wShow');

		}

	if(wScroll > $('.how').offset().top - 400) {

			$('#rule1').addClass('showRule');
			$('#rule2').addClass('showRule');
			$('#rule3').addClass('showRule');
			$('#rule4').addClass('showRule');
			$('.box p').addClass('showDesc');
			$('.box').addClass('showShadow');

		}

});
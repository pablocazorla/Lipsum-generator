lipsum = function(){
	var lipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque diam, lobortis quis bibendum eu, tincidunt vitae risus. Vivamus bibendum dapibus venenatis. In sem nunc, faucibus vitae vestibulum vitae, euismod et est. Maecenas sit amet tellus elit. Maecenas id lacus sit amet turpis cursus consectetur. Fusce ullamcorper feugiat libero, eget congue diam cursus ac. Proin sed nisi ut est cursus elementum eu eget ipsum. Vivamus lobortis, mi at pulvinar vestibulum, mi massa tristique erat, sed auctor felis odio vestibulum diam. Fusce ut ipsum cursus massa sodales tristique. Duis cursus mollis purus eu fringilla. Aliquam tempor lectus eu eros molestie luctus. Morbi vitae enim id ipsum tempor scelerisque at et ligula. Phasellus tempor dolor faucibus quam rutrum non semper velit accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed velit at tortor laoreet posuere quis sit amet nisi. Maecenas tempus neque non erat adipiscing sollicitudin. Maecenas lacinia viverra auctor. Donec eros dolor, molestie nec faucibus eget, dictum nec mauris. In hac habitasse platea dictumst. Aenean vitae blandit dolor. Sed fringilla felis non nisl iaculis a blandit metus scelerisque. Curabitur quis lectus dolor, scelerisque tincidunt diam. In odio libero, accumsan sit amet aliquet eu, vulputate quis sapien. Donec ac lectus sapien. Fusce dapibus, metus in molestie sodales, dui tortor fringilla lectus, et ornare nisi urna sed metus. Duis nibh diam, euismod rutrum tempus in, viverra consequat magna. Pellentesque sit amet odio eget diam accumsan pellentesque. Sed eget leo metus, vitae rhoncus est. Donec vel nulla ac massa malesuada egestas quis ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum tellus eget justo molestie a vestibulum urna pretium. Curabitur vehicula magna ac elit porta vulputate. Curabitur convallis, ligula a pretium posuere, est dui tristique purus, venenatis mollis erat diam vitae nisl. Nam tristique egestas egestas. Aliquam adipiscing euismod tortor posuere viverra. Praesent sodales ipsum quis mauris posuere rutrum. Sed nibh tortor, iaculis eget ullamcorper mattis, rhoncus sed neque. Praesent euismod lacinia sem sed sagittis. Fusce mollis risus placerat risus varius sit amet porttitor magna commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum, augue a pulvinar ultrices, erat erat posuere orci, eget fermentum lectus purus vel elit. Morbi risus sapien, mollis nec accumsan eget, ornare in libero. Cras eu massa nisl, ac auctor diam. Fusce dictum rutrum auctor. Quisque semper eleifend rhoncus. Aliquam erat volutpat. Vestibulum pharetra aliquet tincidunt. Sed egestas lobortis enim in vestibulum. Suspendisse potenti. Proin et lobortis lectus. Etiam commodo sodales odio, malesuada interdum tellus dignissim sed. Aliquam ornare congue vestibulum. Maecenas turpis tellus, suscipit nec laoreet in, bibendum quis arcu. Etiam risus lacus, vestibulum nec tincidunt in, tempor eu nibh. Praesent urna ipsum, lacinia sed gravida sit amet, placerat vitae ipsum. Etiam a odio libero. Duis pulvinar dolor sed mauris faucibus quis fringilla mauris tempor. Nulla laoreet ullamcorper felis, sit amet semper purus dignissim vel.',
		
		
	html = '',
	txt = '',
	$lipsumResultTxt = $('#lipsumResultTxt'),
	$lipsumResultHtml = $('#lipsumResultHtml'),
	$lipsumHtmlOption = $('#lipsumHtmlOption'),
	caseText = 'capitalize', // capitalize, upperCase, lowerCase
	current = 'p',
	type = {
		p : {
			name : 'p',
			count : 3,
			min : 200,
			max : 400
		}
	},
	
		
	//Functions			
	applyCase = function(str){
		switch(caseText){
			case 'lowerCase':
				return str.toLowerCase();
				break;
			case 'UpperCase':
				return str.toUpperCase();
				break;
			default :
				return str.charAt(0).toUpperCase() + str.slice(1);
				break;
		};
	},
	random = function(num){
		return Math.round(Math.random()*num);
	},
	get = function(minChart,maxChart){
		var numChart = minChart + random(maxChart - minChart),
			preInitChart = random(lipsumText.length-numChart),
			initChart = lipsumText.indexOf(' ',preInitChart)+1,
			endChart = lipsumText.lastIndexOf(' ',initChart+numChart)-1;
		return applyCase(lipsumText.substring(initChart,endChart));
	},
	draw = function(){
		txt = html = '';
		switch(current){
			case 'p':				
				for(var i=0;i<type.p.count;i++){
					var t = get(type.p.min,type.p.max);
					txt += '<p>'+t+'.</p>';
					html += '&lt;p&gt;'+t+'.&lt;/p&gt;\n\n';	
				};
				break;
			
			default :
			//
				break;
		};
		$lipsumResultTxt.html(txt);
		$lipsumResultHtml.html(html);
	},
	changeToHtml = function(){
		if($lipsumHtmlOption.attr('checked')){
			$lipsumResultTxt.hide();
			$lipsumResultHtml.show();
		}else{
			
			$lipsumResultTxt.show();
			$lipsumResultHtml.hide();
		}
	}
	
	
	
	
	
	
	
	
	;
	changeToHtml();
	draw();
	
	$lipsumHtmlOption.change(function(){
		changeToHtml();
	});
	
	
	
};
$('document').ready(lipsum);

$(function youtubeElement(){
	$('#hoge a').on('click' , function(e){
		e.preventDefault();//リンクの停止
		$(this).parent().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/DeGkiItB9d8?start=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	});
});
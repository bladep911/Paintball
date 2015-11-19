function scrollImage(){
  var image = $('#web-logo');
  var title = $('#web-title');
  
  var scroll = $(window).scrollTop();
  var ht = image.height();
  
  //use jquery animate
  if(image.queue().length > 0){
  	return;
  }
  
  if(scroll < 200 && ht < 140){
    //image resize
    image.animate({height: '140'}, 500);
	//title move
    title.animate({'margin-left': '0'}, 500, scrollImage);
  } 
  
  if(scroll >= 200 && ht > 72){
    image.animate({height: '72'}, 500);
	//title move
    title.animate({'margin-left': '-60'}, 500, scrollImage);
  }
}


$(window).scroll(scrollImage);
$(function (){
   $('body > header .nav_two .nav_bar_item').mouseover(function (){
      
      for(i=0;i < $('body > header .nav_two .nav_bar_item').length;i++){
          src_init = 
                  $('body > header .nav_two .nav_bar_item').
                  eq(i).find('> div > .icon').attr('src-init');
          $('body > header .nav_two .nav_bar_item').
                  eq(i).find('> div > .icon').attr('src',src_init);
          $('body > header .nav_two .nav_bar_item').
                  eq(i).find('> div > .label').css('color','#989898');
      }
      src_hover = $(this).find('> div > .icon').attr('src-hover');
      $(this).find('> div > .icon').attr('src',src_hover);
      $(this).find('> div > .label').css('color','#df0fd6');
      
      $('body > header .nav_one .drop_down_menu > .item .drop_down:visible').hide();
      $('body > header .nav_two .nav_bar_item .sub_menu:visible').hide();
      $(this).find('.sub_menu').show();
   });
   
   $('body > header .nav_one .drop_down_menu > .item').mouseover(function (){
      $('body > header .nav_two .nav_bar_item .sub_menu:visible').hide();
      $('body > header .nav_one .drop_down_menu > .item .drop_down:visible').hide();
      $(this).find('.drop_down').show();
   });
   
   isSearchBoxHidden = true;
   $('body > header .nav_one .search_box_icon').click(function (){
       $('body > header .nav_two:visible').hide();
      if(isSearchBoxHidden){
          $('body > header .nav_one .search_box').fadeIn('slow');
          isSearchBoxHidden = false;
      }
        else{
            $('body > header .nav_one .search_box').fadeOut('slow');
            isSearchBoxHidden = true;
        }
   });
   
   isNabBarHidden = true;
   $('body > header .nav_one .menu_icon').click(function (){
       $('body > header .nav_one .search_box:visible').hide();
      if(isNabBarHidden){
          $('body > header .nav_two').fadeIn('slow');
          isNabBarHidden = false;
      }
        else{
            $('body > header .nav_two').fadeOut('slow');
            isNabBarHidden = true;
        }
   });
});
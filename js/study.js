$(function(){
     const bg_l = $('.wrap_left');
     console.log(bg_l);

     const bg_r = $('.wrap_right');
     console.log(bg_r);

     const r = $('.wrap_title_word');
          r.css({
               'background' : 'white',
               'color' : '#707070',
          });


          r.on('click', function() {
               l.css({
                    'background' : 'white',
                    'color' : '#707070',
                });
 
                r.css({
                     'background' : '#1BC7C9',
                     'color' : 'white',
                });

                bg_r.css({
                    'display' : 'block',
               });

               bg_l.css({
                    'display' : 'none',
               });
 
      }); 
     
     const l = $('.wrap_title_gam');
          l.css({
               'background' : '#1D5699',
               'color' : 'white',
          });


          l.on('click', function() {
               r.css({
                    'background' : 'white',
                    'color' : '#707070',
                });
 
                l.css({
                    'background' : '#1D5699',
                    'color' : 'white',
               });

               bg_l.css({
                    'display' : 'block',
               });

               bg_r.css({
                    'display' : 'none',
               });
 
      }); 
     
});
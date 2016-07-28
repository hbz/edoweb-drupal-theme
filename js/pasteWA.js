(function($){
    Drupal.behaviors.edoweb_drupal_theme_paste = {
      attach: function (context, settings) {

        $('.field-item[contenteditable="true"]', context).once(function() {
          $(this).bind('paste', function(e){

            // prevent execution of paste
            e.preventDefault();

            // get clipboard data as plain text
            var text = '';

            // code for debugging purposes
            /*
             $.each($.browser, function(i, val){
              $('body').append("<h1>" + i + " : <span>" + val + "</span></h1>");
            });
            */

            // integrate check for ie11 as ie 11 does't support default method
            if (($.browser.msie || $.browser.mozilla) && $.browser.version >= 11 && $.browser.version <= 12){
               text = window.clipboardData.getData("text");
               if ( !text ){
                 text='&nbsp;';
               }
            }else {
               text = e.originalEvent.clipboardData.getData("text/plain");
            }

            // concat clipboard plain text with existing content of contenteditable element 
            var concattext = $(this).html().substr(0, window.getSelection().anchorOffset) + text + $(this).html().substr(window.getSelection().anchorOffset);

            $(this).empty().append( concattext );

          });
        });
      }
    }

})(jQuery);

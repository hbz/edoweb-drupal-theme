(function($){

    Drupal.behaviors.edoweb_drupal_theme_paste = {
    attach: function (context, settings) {

      $$('.field-item').attr('contenteditable','true').each(function() {
        $(this).on('paste', function(e){

         // prevent execution of paste
         e.preventDefault();
      
         // get clipboard data as plain text
         var text = e.originalEvent.clipboardData.getData("text/plain");

         var concattext = $(this).html().substr(0, window.getSelection().anchorOffset) + text + $(this).html().substr(window.getSelection().anchorOffset);
      
         $(this).empty().append( concattext );
      
      });
    });
  }

})(jQuery);

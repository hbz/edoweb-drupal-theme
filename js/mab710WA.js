(function($){

    Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-subject-chain', context).once(function() {
        //$(this).after('<div class="field field-name-edoweb-field-toggle"><div class="field-label">Alle Schlagwörter anzeigen <span class="octicon octicon-triangle-right"</span></div></div>');
        $('.field-name-field-mab-710').hide();
        
      });

    } 
  };

})(jQuery);

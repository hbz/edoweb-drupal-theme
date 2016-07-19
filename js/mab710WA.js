(function($){

    Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-subject-chain .field-item').once(function() {
      $('.field-name-field-edoweb-field-mab710').hide();
        
      });

    } 
  };

})(jQuery);

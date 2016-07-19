(function($){

    Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-subject-chain .field-item', context).once(function() {
        $(this).append('<div class="field-item toggleButton">mehr&nbsp;<span class="octicon octicon-triangle-right"</div>');
        $('.field-name-field-mab-710').hide();
        
      });

    } 
  };

})(jQuery);

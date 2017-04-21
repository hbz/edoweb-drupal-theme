(function($) {



  Drupal.behaviors.edoweb_drupal_notationWA = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-rpb-subject .field-item .lbznotation:contains("rpb_")').each(function() {
	$(this).parent().hide();
      });
    }
  };

})(jQuery);



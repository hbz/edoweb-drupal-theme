(function($) {



  Drupal.behaviors.edoweb_drupal_notationWA = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-rpb-subject .field-item').each(function() {
        var notationAttr = $(this).find('a.resolved').attr('data-curie').replace(/https:\/\/w3id.org\/lobid\/rpb2#n/,'')
        .replace(/:n/, '');
        $(this).prepend('<div class="lbznotation">' + notationAttr + '</div>');
        
        // now hide item-field if it is of RPB Raumnotation 
        $(".lbznotation:contains('rpbr_')").parent().hide(); 
    
      });
    }
  };

})(jQuery);



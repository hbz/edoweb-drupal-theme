(function($) {
  Drupal.behaviors.edoweb_drupal_notationWA = {
    attach: function (context, settings) {
      $('.rpbSubject a[title]').each(function() {
        var notationAttr = $(this).attr('href');
	var result = notationAttr.replace(/^.*rpb.?%23/,'').replace(/.$/, "");
        $(this).prepend(result);    
      });
    }
  };

})(jQuery);



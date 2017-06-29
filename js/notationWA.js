(function($) {
  Drupal.behaviors.edoweb_drupal_notationWA = {
    attach: function (context, settings) {
      $('.rpbSubject a[title]').each(function() {
        var notationAttr = $(this).attr('href');
	var result = notationAttr.replace(/^.*rpb.?%23n?/,'').replace(/.$/, "");
	  if(notationAttr.indexOf("rpb%23nr") == -1){
            $(this).prepend(result);    
	}else{
	    // We do not show URIs that contain rpb#nr 
	    // because the LBZ does not want them to show up
	    // in repository
	    $(this).parents("li").hide();
	}
      });
    }
  };

})(jQuery);



(function($) {



  Drupal.behaviors.edoweb_drupal_isbn10_format = {
    attach: function (context, settings) {

      var serviceurl = "https://index.hbz-nrw.de/";
      var service = "_es2/_isbn?value=";
      // Use callback if Service is JSONP
      //var callback = "&callback=?";
      var callback = "";

      $('.field-name-field-edoweb-isbn10 .field-item').once(function(){
        
        var isbn = $(this).html();
        getIsbnFormatted();
  
  
        function getIsbnFormatted (){
          var isbn = $('.field-item').html();
          var url = serviceurl + service + isbn + callback;
    
          $.getJSON(url, function(json) {
            $(this).html(json.result.isbn10formatted);
       
            });
          };
  

      });
    }
  };

})(jQuery);

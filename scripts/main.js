(function(){
  'use strict';
  $(document).ready(function(){

    $('#flower-items').find('a').on('click', function(e){
      e.preventDefault();


      var $desc = $('#flower-description');

      switch($(this).attr('href')) {
        case 'fragments/calla.html' :
          $desc.load('fragments/calla.html');
          break;
        case 'fragments/sunflowers.html' :
          $desc.load('fragments/sunflowers.html');
          break;
        case 'fragments/iris.html' :
          $desc.load('fragments/iris.html');
          break;
        case 'fragments/alstromeria.html' :
          $desc.load('fragments/alstromeria.html');
          break;
      }


//initial command to test
//      $('#flower-description').load('fragments/calla.html');



    });


});
})();

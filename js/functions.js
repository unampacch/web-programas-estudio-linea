window.onload = function () {
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.shuffle-container');
    
    var shuffleInstance = new Shuffle(element, {
      itemSelector: 'div'
    }); 
      
      $('.shuffle-filter li').on('click',function(e){
        e.preventDefault();
        $('.shuffle-filter li a').removeClass('active');
        $(this).addClass('active'); 
        var keyword = $(this).attr('data-target');
        shuffleInstance.filter(keyword);
      });
      
    }
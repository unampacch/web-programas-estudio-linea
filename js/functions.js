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

    new PureCounter({
      selector: '.purecounter',
      duration: 2,
      delay: 10,
      repeat: true,
      decimals: 0,
      legacy: true,
      filesizing: false,
      currency: false,
      separator: false,
  });

  wow = new WOW(
    {
      offset: 0,
      mobile: true,
    }
  )
  wow.init();

  $("div[id^='myModal']").each(function () {
    var currentModal = $(this);
    currentModal.find(".btn-next").click(function () {
      currentModal.modal("hide");
      currentModal
        .closest("div[id^='myModal']")
        .one("hidden.bs.modal", function (e) {
          $(this).nextAll("div[id^='myModal']").first().modal("show");
        });
    });
    //PREV
    currentModal.find(".btn-prev").click(function () {
      currentModal.modal("hide");
      currentModal
        .closest("div[id^='myModal']")
        .one("hidden.bs.modal", function (e) {
          $(this).prevAll("div[id^='myModal']").first().modal("show");
        });
    });
  });
  
  
  
  
  
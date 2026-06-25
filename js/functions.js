// window.onload = function () {
//     var Shuffle = window.Shuffle;
//     var element = document.querySelector('.shuffle-container');
    
//     var shuffleInstance = new Shuffle(element, {
//       itemSelector: 'div'
//     }); 
      
//       $('.shuffle-filter li').on('click',function(e){
//         e.preventDefault();
//         $('.shuffle-filter li a').removeClass('active');
//         $(this).addClass('active'); 
//         var keyword = $(this).attr('data-target');
//         shuffleInstance.filter(keyword);
//       });
//     } 

// window.onload = function() {
//   var Shuffle = window.Shuffle;
//   var element = document.querySelector('.shuffle-container');

//   // Add "active" class to the first li on page load
//   document.querySelector('.shuffle-filter li:first-child').classList.add('active');

//   var shuffleInstance = new Shuffle(element, {
//     itemSelector: 'div'
//   });

//   $('.shuffle-filter li').on('click', function(e) {
//     e.preventDefault();

//     // Remove "active" class from all li elements
//     $('.shuffle-filter li').removeClass('active');

//     // Add "active" class to the clicked li element
//     $(this).addClass('active');

//     var keyword = $(this).attr('data-target');
//     shuffleInstance.filter(keyword);
//   });
// };

window.onload = function() {
  var Shuffle = window.Shuffle;
  var element = document.querySelector('.shuffle-container');
  var firstFilter = document.querySelector('.shuffle-filter li:first-child');

  if (!Shuffle || !element || !firstFilter || typeof $ === 'undefined') {
    return;
  }

  firstFilter.classList.add('active');

  var shuffleInstance = new Shuffle(element, {
    itemSelector: 'div',
    group: document.querySelector('.shuffle-filter li.active').dataset.target
  });

  $('.shuffle-filter li').on('click', function(e) {
    e.preventDefault();

    $('.shuffle-filter li').removeClass('active');
    $(this).addClass('active');

    var keyword = $(this).attr('data-target').split(',');

    shuffleInstance.filter(keyword);
  });
};

if (typeof PureCounter !== 'undefined') {
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
}

if (typeof WOW !== 'undefined') {
  var wow = new WOW(
    {
      offset: 0,
      mobile: true,
    }
  )
  wow.init();
}

document.addEventListener("DOMContentLoaded", function () {
  var serviceDelayMessage = document.querySelector(".service-delay-message");
  var serviceDelayEnabled = serviceDelayMessage && serviceDelayMessage.dataset.avisoActivo !== "false";
  var hasLoginError = new URLSearchParams(window.location.search).get("errorcode") === "3";

  if (!serviceDelayMessage || !serviceDelayEnabled || hasLoginError || typeof bootstrap === "undefined") {
    return;
  }

  var serviceDelayModal = new bootstrap.Modal(serviceDelayMessage);

  serviceDelayModal.show();
});
  

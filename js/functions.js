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

  // Add "active" class to the first li on page load
  document.querySelector('.shuffle-filter li:first-child').classList.add('active');

  var shuffleInstance = new Shuffle(element, {
    itemSelector: 'div', // Adjust selector if using different elements
    // Key modification: Initially filter for the first active group
    group: document.querySelector('.shuffle-filter li.active').dataset.target
  });

  $('.shuffle-filter li').on('click', function(e) {
    e.preventDefault();

    // Remove "active" class from all li elements
    $('.shuffle-filter li').removeClass('active');

    // Add "active" class to the clicked li element
    $(this).addClass('active');

    // Get the data-target value as a string array for filtering
    var keyword = $(this).attr('data-target').split(',');

    // Apply the filtering to Shuffle.js
    shuffleInstance.filter(keyword);
  });
};


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
  
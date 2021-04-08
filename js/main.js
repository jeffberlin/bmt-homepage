// opens dropdown menu on hover
$('div.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').toggleClass('show');
});

// handles scroll event on down arrow click
$(".down-arrow").click(function() {
  $('html, body').animate({
    scrollTop: $('#section').offset().top
  }, 'slow')
});

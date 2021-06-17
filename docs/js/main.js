// opens dropdown menu on hover
$('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').toggleClass('show');
});

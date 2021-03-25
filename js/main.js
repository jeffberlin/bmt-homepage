// $('li.dropdown').hover(function() {
//   $(this).find('.dropdown-menu').toggleClass('show');
// });

const menu = $("li.dropdown");
menu.on("mouseenter mouseleave", () => {
  menu.toggleClass("show");
});
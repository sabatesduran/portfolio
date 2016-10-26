$(document).ready(function() {

  // Change minimum height of all the sections
  $('section').css('min-height', $(window).height());

  $('#content').scroll(function(event){

    position = $('#content').scrollTop();

    section_heights = get_section_heights();

    if (position < section_heights["about-me"]) {
      change_menu("about-me");
    } else if (position < (section_heights["about-me"] + section_heights["work"])) {
      change_menu("work");
    } else if (position < (section_heights["about-me"] + section_heights["work"] + section_heights["github-projects"])) {
      change_menu("github-projects");
    } else {
      change_menu("contact");
    }

  });

  create_scroll_animations();

  function create_scroll_animations() {
    get_sections().forEach(function(id) {
      $('#' + id).click(function(event) {
        var target = $(this.hash);
        console.log(target);
        $('#content').animate({
            scrollTop: target.offset().top
          }, 1000);
      });
    });
  }
});

function get_sections() {
  return ['about-me', 'work', 'github-projects', 'contact'];
}

function get_section_heights() {
  heights = {}
  get_sections().forEach(function(id) {
    heights[id] =  $('#' + id).height();
  });
  return heights;
}

function change_menu(section) {
  get_sections().forEach(function(s) {
    if (s === section) {
      $('#' + s + '-navbar').addClass('navbar-active');
    } else {
      $('#' + s + '-navbar').removeClass('navbar-active');
    }
  });
  return false;
}

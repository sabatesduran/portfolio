$.getJSON('data/data.json', function(data) {
    create_social_links(data.social);
});

function create_social_links(social) {
  $(social).each(function(index, sn) {
    var link = document.createElement("a");
    link.setAttribute("href", sn.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("class", "btn-floating btn-large waves-effect waves-light " + sn.color);

    var icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-2x " + sn.icon);
    link.appendChild(icon);

    var social_links = document.getElementById("social-links");
    social_links.appendChild(link);
  });
}

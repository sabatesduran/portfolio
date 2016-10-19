$.getJSON('data/data.json', function(data) {
    add_text_to_id("name", data.name);
    add_text_to_id("profession", data.profession);
    create_social_links(data.social_links);
});

function add_text_to_id(id, value) {
  var t = document.createTextNode(value);
  document.getElementById(id).appendChild(t);
}

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

function add_text_to_id(id, value) {
  var t = document.createTextNode(value);
  document.getElementById(id).appendChild(t);
}

function create_social_links(social) {
  social.forEach(function(sn) {
    var link = document.createElement("a");
    link.setAttribute("href", sn.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("class", sn.color);

    var icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-2x " + sn.icon);
    link.appendChild(icon);

    var social_links = document.getElementsByClassName("social-links");
    social_links[0].appendChild(link);
  });
}

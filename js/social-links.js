function add_text_to_id(id, value) {
  let t = document.createTextNode(value);
  document.getElementById(id).appendChild(t);
}

function create_social_links(social) {
  social.forEach(function(sn) {
    let link = document.createElement("a");
    link.setAttribute("href", sn.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("class", sn.color);

    let icon = document.createElement("i");
    icon.setAttribute("class", `fa-2x ${sn.icon}`);
    link.appendChild(icon);

    let social_links = document.getElementsByClassName("social-links");
    social_links[0].appendChild(link);
  });
}

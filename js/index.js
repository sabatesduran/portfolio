// Write text for custom data
$.getJSON('data/data.json', function(data) {
    add_text_to_id("name", data.name);
    add_text_to_id("profession", data.profession);
    create_social_links(data.social_links);
});

// Create github cards
$.getJSON('https://api.github.com/users/sabatesduran/repos', function(data) {
  $(data).each(function(index, repo) {
    if(!repo.fork) {
      create_github_card(repo);
    }
  });
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
    link.setAttribute("class", sn.color);

    var icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-2x " + sn.icon);
    link.appendChild(icon);

    var social_links = document.getElementsByClassName("social-links");
    social_links[0].appendChild(link);
  });
}

function create_github_card(repo_info) {
  var card = document.createElement("div");
  card.setAttribute("class", "card");

  var link = document.createElement("a");
  link.setAttribute("href", repo_info.html_url);
  link.setAttribute("target", "_blank");

  var name = document.createTextNode(repo_info.name);
  link.appendChild(name);

  var description = document.createElement("p");
  description.setAttribute("class", "card-description");

  var description_text = document.createTextNode(repo_info.description);
  description.appendChild(description_text);

  var info = document.createElement("p");

  var stars = document.createElement("span");

  var star = document.createElement("i");
  star.setAttribute("class", "fa fa-star");
  var star_number = document.createTextNode(" " + repo_info.stargazers_count + " ");
  stars.appendChild(star);
  stars.appendChild(star_number);

  var language = document.createElement("span");
  language.setAttribute("class", "card-language");
  var language_icon = document.createElement("i");
  language_icon.setAttribute("class", "fa fa-circle " + repo_info.language.toLowerCase());
  var repo_language = document.createTextNode(" " + repo_info.language);
  language.appendChild(language_icon);
  language.appendChild(repo_language);

  info.appendChild(stars);
  info.appendChild(language);

  card.appendChild(link);
  card.appendChild(description);
  card.appendChild(info);

  var projects = document.getElementsByClassName("cards");
  projects[0].appendChild(card);
}

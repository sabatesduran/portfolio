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

  if(repo_info.homepage !== "" && repo_info.homepage !== null) {
    var homepage = document.createElement("span");
    homepage.setAttribute("class", "live-demo");

    var homepage_link = document.createElement("a");
    homepage_link.setAttribute('href', repo_info.homepage);
    var homepage_icon = document.createElement("i");
    homepage_icon.setAttribute("class", "fa fa-external-link");

    var homepage_link_text = document.createTextNode(" Live demo");
    homepage_link.appendChild(homepage_icon);
    homepage_link.appendChild(homepage_link_text);

    homepage.appendChild(homepage_icon);
    homepage.appendChild(homepage_link);
    info.appendChild(homepage);
  }

  card.appendChild(link);
  card.appendChild(description);
  card.appendChild(info);

  var projects = document.querySelector(".cards");
  projects.appendChild(card);
}

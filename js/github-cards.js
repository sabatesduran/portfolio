function create_github_card(repoInfo) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let link = document.createElement("a");
  link.setAttribute("href", repoInfo.html_url);
  link.setAttribute("target", "_blank");

  let name = document.createTextNode(repoInfo.name);
  link.appendChild(name);

  let description = document.createElement("p");
  description.setAttribute("class", "card-description");

  let descriptionText = document.createTextNode(repoInfo.description);
  description.appendChild(descriptionText);

  let info = document.createElement("div");
  info.classList.add("d-flex", "flex-wrap");

  let stars = document.createElement("span");

  let star = document.createElement("i");
  star.setAttribute("class", "fa fa-star");
  let starNumber = document.createTextNode(` ${repoInfo.stargazers_count} `);
  stars.appendChild(star);
  stars.appendChild(starNumber);

  let language = document.createElement("span");
  language.setAttribute("class", "card-language");
  let languageIcon = document.createElement("i");
  languageIcon.setAttribute(
    "class",
    `fa fa-circle ${repoInfo.language.toLowerCase()}`
  );
  let repoLanguage = document.createTextNode(` ${repoInfo.language}`);
  language.appendChild(languageIcon);
  language.appendChild(repoLanguage);

  info.appendChild(stars);
  info.appendChild(language);

  if (repoInfo.homepage !== "" && repoInfo.homepage !== null) {
    let homepage = document.createElement("span");
    homepage.setAttribute("class", "live-demo");

    let homepageLink = document.createElement("a");
    homepageLink.setAttribute("href", repoInfo.homepage);
    let homepageIcon = document.createElement("i");
    homepageIcon.setAttribute("class", "fas fa-external-link-alt");

    let homepageLinkText = document.createTextNode(" Live demo");
    homepageLink.appendChild(homepageIcon);
    homepageLink.appendChild(homepageLinkText);

    homepage.appendChild(homepageIcon);
    homepage.appendChild(homepageLink);
    info.appendChild(homepage);
  }

  card.appendChild(link);
  card.appendChild(description);
  card.appendChild(info);

  let projects = document.querySelector(".cards");
  projects.appendChild(card);
}

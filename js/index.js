// Get data file
fetch("data/data.json")
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(data => {
    add_text_to_id("name", data.name);
    add_text_to_id("job", data.job);
    create_social_links(data.social_links);
  });

// Get Github API data
fetch("https://api.github.com/users/sabatesduran/repos")
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(data => {
    data.forEach(repo => {
      if (!repo.fork) {
        create_github_card(repo);
      }
    });
  });

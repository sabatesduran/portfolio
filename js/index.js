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

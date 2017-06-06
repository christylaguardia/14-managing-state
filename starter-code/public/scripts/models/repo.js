'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // xCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // What it does: makes the ajax call to github and returns all the repository data
  // Where it's used: aboutController.index in aboutController.js
  // What it calls: no other functions called
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

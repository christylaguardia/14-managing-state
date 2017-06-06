'use strict';

(function(module) {
  const aboutController = {};

  // xCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // What it does: 1) hide other sections 2) get the repos 3) then show the repos
  //  it is called from routes on the the /about url
  //  it calls requestRepos in repos.js and repoView index in repoView.js
  aboutController.index = () => {
    //$('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);

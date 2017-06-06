'use strict';

(function(module) {
  const repoView = {};

  // QUESTION: why is this not repoView.ui = function() {}
  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // xCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // What it's doing:
  //  1) emptys the existing list repos
  //  2) hides all siblings of about
  //  3) add all the repos to the end of the aboout page ul that have a name
  // Where it's called: aboutController.index in aboutController.js
  // What it calls: ui function above
  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);

'use strict';

(function(module) {
    // xCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
    // What it does:
    //  1) compile the Handlebars template
    //  2) get the count of words for each author and adds to the author-stats page
    //  3) then update the blog-stats article count
    //  4) then updates the blog-stats word count (for all articles)
    // Where it's called: Article.fetchAll below
    // What it calls:
    //  Handlebars.compile in handlebars.js
    //  Article.numWordsByAuthor in article.js
    //  Article.numWordsAll in article.js
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());

      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(window);

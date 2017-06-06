(function() {
  const newArticle = {};

  // xCOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // What it does:
  //  1) showing all sections sith class tab-content
  //  2) hiding the export-field label
  //  3) enable select all text when focused on article-json
  //  4) enable creating new article object when each form field is filled out
  // Where it's called: below
  // What it calls: newArticle.create below
  newArticle.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function() {
      $(this).select();
    });
    $('#new-form').on('change', newArticle.create);
  };

  newArticle.create = function() {
    $('#articles').empty();
    let formArticle = new Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: $('#article-published:checked').length ? new Date() : null
    });
    $('#articles').append(formArticle.toHtml('#article-template'));
    $('pre code').each((i, block) => hljs.highlightBlock(block));
    $('#export-field').show();
    $('#article-json').val(JSON.stringify(formArticle) + ',');
  };

  newArticle.initNewArticlePage();
})();

//create API call for camper news API, call needs to repeat and get all the news entries, then create variables with each required piece of information
$.get("http://www.freecodecamp.com/news/hot", function (news) {
  news.forEach(function(news) {
    var title = news.headline;
    var link = news.link;
    var pic = news.author.picture;
    var votes = news.rank;
    var postdate = news.timeposted;
    var author = news.author.username;
    $('.cards').append("<div class='card'><div class='userpic'><img src='" + pic + "'></div><div class='cardinfo'><a href='" + link + "'>" + title + "</a><div class='author'>by - " + author + "</div><div class='votes'><span class='glyphicon glyphicon-thumbs-up'></span>" + votes + "</div></div></div>");

  });
  });

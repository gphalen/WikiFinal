
  $(document).ready(function () {
    
     var articles1 = $('.articles1');
    var articles2 = $('.articles2');
     var articles3 = $('.articles3');
     var articles4 = $('.articles4');
     var articles5 = $('.articles5');
     var articles6 = $('.articles6');
     var articles7 = $('.articles7');
     var articles8 = $('.articles8');
     var articles9 = $('.articles9');
     var articles10 = $('.articles10');
    var input = $('input');
    var button = $('button');
    var toSearch = '';
    var searchUrl = 'https://en.wikipedia.org/w/api.php';

    var ajaxArticleData = function () {
        $.ajax({
            url: searchUrl,
            dataType: 'jsonp',
            data: {
                //main parameters
                action: 'query',
                format: 'json',

                generator: 'search',
                    //parameters for generator

            }


        });
    }
    
    var ajaxArticleData = function () {
        $.ajax({
            url: searchUrl,
            dataType: 'jsonp',
            data: {
                //main parameters
                action: 'query',
                format: 'json',

                generator: 'search',
              
              prop: 'extracts',
              exchars: 200,
                    //parameters for generator
                    gsrsearch: toSearch,
                    gsrnamespace: 0,
                    gsrlimit: 10,
              
            }

          
        }
              
               )
    
                    //var pages = json.query.pages;

                                var pageElement = $('<div>');

 //pageElement.append($('<h2>').text(page.title));
                    //articles.append(search);

    }
    input.autocomplete({
        source: function (request, response) {
            $.ajax({
                url: searchUrl,
                dataType: 'jsonp',
                data: {
                    'action': "opensearch",
                    'format': "json",
                    'search': request.term
                },
                success: function (data) {
                    response(data[1]);
                }
            });
        }
    });

$("button").click(function(e){

articles1.empty();
articles2.empty();
articles3.empty();
articles4.empty();
articles5.empty();
articles6.empty();
articles7.empty();
articles8.empty();
articles9.empty();
articles10.empty();










 var search = document.getElementById("test").value;
    //alert(search);
//ajaxArticleData();
  //articles.append(search);
  $.ajax({
  url: 'http://en.wikipedia.org/w/api.php',
  data: { action: 'query', list: 'search', srsearch: search, prop: 'revisions', rvprop: 'content',  format: 'json' },
  dataType: 'jsonp',
  success: function (x) {
        var site=x.query.search[0].title;
    var site2=x.query.search[1].title;
    var site3=x.query.search[2].title;
    var site4=x.query.search[3].title;
    var site5=x.query.search[4].title;
    var site6=x.query.search[5].title;
    var site7=x.query.search[6].title;
    var site8=x.query.search[7].title;
    var site9=x.query.search[8].title;
    var site10=x.query.search[9].title;
        var str=site;
    var str2=site2;
var str3=site3;
var str4=site4;
    var str5=site5;
var str6=site6;
var str7=site7;
var str8=site8;
var str9=site9;
var str10=site10;





    var sit=x.query.search[0].title.replace(/ /g,"_");
     var sit2=x.query.search[1].title.replace(/ /g,"_");
     var sit3=x.query.search[2].title.replace(/ /g,"_");
     var sit4=x.query.search[3].title.replace(/ /g,"_");
     var sit5=x.query.search[4].title.replace(/ /g,"_");
     var sit6=x.query.search[5].title.replace(/ /g,"_");
     var sit7=x.query.search[6].title.replace(/ /g,"_");
     var sit8=x.query.search[7].title.replace(/ /g,"_");
     var sit9=x.query.search[8].title.replace(/ /g,"_");
     var sit10=x.query.search[9].title.replace(/ /g,"_");
    
     var result=str.link("http://www.wikipedia.com/wiki/"+sit);
      var result2=str2.link("http://www.wikipedia.com/wiki/"+sit2);
      var result3=str3.link("http://www.wikipedia.com/wiki/"+sit3);
      var result4=str4.link("http://www.wikipedia.com/wiki/"+sit4);
      var result5=str5.link("http://www.wikipedia.com/wiki/"+sit5);
      var result6=str6.link("http://www.wikipedia.com/wiki/"+sit6);
      var result7=str7.link("http://www.wikipedia.com/wiki/"+sit7);
      var result8=str8.link("http://www.wikipedia.com/wiki/"+sit8);
    var result9=str9.link("http://www.wikipedia.com/wiki/"+sit9);
        var result10=str10.link("http://www.wikipedia.com/wiki/"+sit10);
    articles1.append( result);
    
    articles2.append( result2);
    articles3.append( result3);
    articles4.append( result4);
    articles5.append( result5 );
    articles6.append( result6);
    articles7.append( result7);
    articles8.append( result8);
    articles9.append( result9);
    articles10.append( result10);
  }
});
  

});
})

 
  
  //var playListURL='http://en.wikipedia.org/w/api.php?format=json&action=query&titles=search&prop=revisions&rvprop=content&callback=?';
  

/*
  $.getJSON(playListURL ,function(data) {
        $.each(data.query.pages, function(i, item) {
            articles.append(item.title);

        });
    });
    */
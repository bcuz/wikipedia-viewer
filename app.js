$(function() {

    var getData = function() {
    $.ajax({
    type: 'GET',
    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&page=Jimi_Hendrix&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        },
})

    }

  //   var queryData = {
  //   action: "query",
  //   titles: "warner",
  //   format: "json"
  // };

//     .done(function(result){
//     console.log(result);
// })
//   .fail(function(jqXHR, error){ //this waits for the ajax to return with an error promise object
//     // console.log(jqXHR);
//   });

    getData()
});
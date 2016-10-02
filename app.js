$(function() {

    var getData = function(title) {
    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=1&namespace=0&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data[data.length - 1]);
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

    getData("kurt warner")
});
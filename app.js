$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty

    // preview text from the page, too

    var viewData = function(results) {
      for (item in results) {
        $("body").append("<p>" + results[item] + "</p>")
      }
    }

    var getData = function(title) {
    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=10&namespace=0&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data[data.length - 1]);

            viewData(data[data.length - 1])
        },
})

    }

    $("form").submit(function(e) {
    e.preventDefault();
    getData($("input").val())
    })

    getData("kurt warner")


});
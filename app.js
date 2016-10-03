$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty

    var viewData = function(item) {
      var link_array = item[3]
        var result = $('.templates .pages').clone();


        var index_to_cut = item.indexOf("wiki/")
        var link_name = item.slice(index_to_cut + "wiki/".length).replace(/_/g, " ")
        var userElem = result.find("a");
        userElem.attr('href', item)
        userElem.text(link_name)

        var repElem = result.find(".reputation");
        repElem.text(user.user.reputation)
        // link name not perfect

      return result;

    }

    var getData = function(title) {
    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=10&namespace=0&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            for (item in data[3]) {
                var done = viewData(data[3][item])
                $('.results').append(done);
            }
        },
})

    }

    $("form").submit(function(e) {
    e.preventDefault();
    $("div").html('')
    getData($("input").val())

    })

    getData("kurt warner")


});
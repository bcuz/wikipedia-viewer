$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty

    var viewLink = function(item) {
        // console.log(item);
        var result = $('.templates .pages').clone();

        for (thing in item[3]) {
        var index_to_cut = item[3][thing].indexOf("wiki/")
        var link_name = item[3][thing].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")
        var userElem = result.find("a");
        userElem.attr('href', item[3][thing])
        userElem.text(link_name)


        }
        // there's an array of titles

      return result;



        // var repElem = result.find(".reputation");
        // repElem.text(user.user.reputation)
        // link name not perfect


    }

    var getData = function(title) {
    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=10&namespace=0&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            // the data being in different arrays makes things screwy
            // Wrong

                console.log(data);
            for (item in data) {
                var done = viewLink(data[item])
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
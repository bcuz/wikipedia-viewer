$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty
        var count = 0;

    var viewLink = function(item) {

        var templatize = function(snippet) {
            var result = $('.templates .pages').clone();

            var repElem = result.find("p");
            repElem.text(snippet)



            // should prolly be appended right here
            // it was returning, but
            $('.results').append(result);
        }

        count += 1;
        // console.log(count);
        if (count === 4) {
        var desired_array = item;
        var track = 1;

        for (title in desired_array) {
            var index_to_cut = desired_array[title].indexOf("wiki/")
            var link_name = desired_array[title].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")


            $(".pages:nth-child(" + track + ") a").text(link_name)
            track += 1;
            // var userElem = result.find("a");
            // userElem.attr('href', title)
            // userElem.text(link_name)
        }

    } else if (count === 3 ) {
        var desired_array = item;
        // console.log(desired_array);
        for (snippet in desired_array) {
            templatize(desired_array[snippet])


        }
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

            for (item in data) {
                // the goal here is to pass all the arrays tho
                // not just the array with the link info
                // passing each array within the big array

                // each time around its an array, but right now I just want the
                // last one
                // console.log(data[item]);

                viewLink(data[item])
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
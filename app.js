$(function() {
    $("input[type='text']").val("");
    // random article easy

    // need to acct for search not having a result
    // if array is empty
        var count = 0;

    var viewLink = function(item) {


        // dont necessarily need this funct
        var templatize = function(snippet) {
            console.log(snippet);
            var result = $('.templates .pages').clone();

            var repElem = result.find("a");
            // seems like this should work
            // following the same pattern
            repElem.text(snippet)

            $('.results').append(result);
        }

        count += 1;
        // console.log(count);
        if (count === 4) {
        var desired_array = item;
        var track = 1;

        for (title in desired_array) {
            // could just use the titles they give
            // titles are the second thing, so they would form the template

            var index_to_cut = desired_array[title].indexOf("wiki/")
            var link_name = desired_array[title].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")


            $(".pages:nth-child(" + track + ") a").text(link_name)
            $(".pages:nth-child(" + track + ") a").attr('href', desired_array[title])
            track += 1;
        }
        count = 0;
            // reverse this order yo
    } else if (count === 3 ) {
        var desired_array = item;
        // for (snippet in desired_array) {
        //     templatize(desired_array[snippet])


        // }
    } else if (count === 2) {
        var desired_array = item;

        for (title in desired_array) {
            templatize(desired_array[title])
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
                if (data[item].length === 0) {
                    alert("No results")
                    break;
                };
                // console.log(data[item]);
                viewLink(data[item])
            }

        },
})

    }

    $("form").submit(function(e) {
    e.preventDefault();

    $(".results").html('')

    getData($("input").val())

    })

    getData("kurt warner")


});
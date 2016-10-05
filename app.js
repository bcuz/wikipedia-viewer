$(function() {
    $("input[type='text']").val("");

    // make the entire paragraph a link

    var count = 0;

    var viewLink = function(item) {
        //  save a popped var?

        // dont necessarily need this funct
        var templatize = function(snippet) {
            var result = $('.templates .pages').clone();

            var repElem = result.find("a");
            repElem.text(snippet)

            $('.results').append(result);
        }

        count += 1;
        // console.log(count);
        if (count === 4) {
        var desired_array = item;
        var track = 1;

        for (title in desired_array) {

            $(".pages:nth-child(" + track + ") a").attr('href', desired_array[title])
            track += 1;
        }
        count = 0;
            // reverse this order
    } else if (count === 3 ) {
        var desired_array = item;
        var track = 1;

        for (snippet in desired_array) {
            $(".pages:nth-child(" + track + ") p").text(desired_array[snippet])
            track += 1;


        }
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

    // getData("kurt warner")

    $("input[type='reset'").on("click", function(e) {
    e.preventDefault();
    $("input[type='text']").val("");
    $(".results").html('')
  })


});
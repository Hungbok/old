$(document).ready(function () {
    readTextFile("/data/free-game.json", function (text) {
        let data = JSON.parse(text);
        let pHtml = '<div class="watching-history">' + $('.watching-history').html() + '</div>';
        let nHtml = '';
        $('.watching-history').remove();
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{input}", v.input);
            res = res.replace("{label}", v.label);
            res = res.replace("{div}", v.div);
            res = res.replace("{history_item}", v.history_item);
            res = res.replace("{start}", v.start);
            res = res.replace("{start_date}", v.start_date);
            res = res.replace("{end}", v.end);
            res = res.replace("{end_date}", v.end_date);
            res = res.replace("{logo}", v.logo);
            res = res.replace("{year}", v.year);
            res = res.replace("{year_value}", v.year_value);
            res = res.replace("{title}", v.title);
            res = res.replace("{title_title}", v.title_title);
            res = res.replace("{link_first}", v.link_first);
            res = res.replace("{link_second}", v.link_second);
            res = res.replace("{link_third}", v.link_third);
            res = res.replace("{link_fourth}", v.link_fourth);
            res = res.replace("{link_fifth}", v.link_fifth);
            res = res.replace("{link_first_class}", v.link_first_class);
            res = res.replace("{link_second_class}", v.link_second_class);
            res = res.replace("{link_third_class}", v.link_third_class);
            res = res.replace("{link_fourth_class}", v.link_fourth_class);
            res = res.replace("{link_fifth_class}", v.link_fifth_class);
            res = res.replace("{link_first_value}", v.link_first_value);
            res = res.replace("{link_second_value}", v.link_second_value);
            res = res.replace("{link_third_value}", v.link_third_value);
            res = res.replace("{link_fourth_value}", v.link_fourth_value);
            res = res.replace("{link_fifth_value}", v.link_fifth_value);
            res = res.replace("{background}", v.background);
            nHtml += res;
        });
        $('.watching-history-list').after(nHtml);
        setTimeout(function(){
          $('.cards').attr("class", "cards");
          $('#loader').attr("class", "loader hidden");
        }, 2000);
    });
});
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
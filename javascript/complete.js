$(document).ready(function () {
    readTextFile("/data/history/complete.json", function (text) {
        let data = JSON.parse(text);
        let pHtml = '<div class="watching-history y2022">' + $('.watching-history.y2022').html() + '</div>';
        let nHtml = '';
        $('.watching-history.y2022').remove();
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{input}", v.input);
            res = res.replace("{label}", v.label);
            res = res.replace("{div}", v.div);
            res = res.replace("{history_item}", v.history_item);
            res = res.replace("{card-link}", v.card_link);
            res = res.replace("{watched}", v.watched);
            res = res.replace("{thumbnail}", v.thumbnail);
            res = res.replace("{type}", v.type);
            res = res.replace("{type_value}", v.type_value);
            res = res.replace("{year}", v.year);
            res = res.replace("{year_value}", v.year_value);
            res = res.replace("{episode}", v.episode);
            res = res.replace("{episode_value}", v.episode_value);
            res = res.replace("{title_ko}", v.title_ko);
            res = res.replace("{title_ko_title}", v.title_ko_title);
            res = res.replace("{title_en}", v.title_en);
            res = res.replace("{title_en_title}", v.title_en_title);
            res = res.replace("{title_ja}", v.title_ja);
            res = res.replace("{title_ja_title}", v.title_ja_title);
            res = res.replace("{title}", v.title);
            res = res.replace("{title_title}", v.title_title);
            res = res.replace("{tag}", v.tag);
            res = res.replace("{tag_value}", v.tag_value);
            res = res.replace("{subtitle_first}", v.subtitle_first);
            res = res.replace("{subtitle_second}", v.subtitle_second);
            res = res.replace("{subtitle_third}", v.subtitle_third);
            res = res.replace("{subtitle}", v.subtitle);
            res = res.replace("{subtitle_first_class}", v.subtitle_first_class);
            res = res.replace("{subtitle_second_class}", v.subtitle_second_class);
            res = res.replace("{subtitle_third_class}", v.subtitle_third_class);
            res = res.replace("{subtitle_class}", v.subtitle_class);
            res = res.replace("{background}", v.background);
            res = res.replace("{poster}", v.poster);
            nHtml += res;
        });
        $('.watching-history-2022-list').after(nHtml);
        setTimeout(function(){
          $('.cards').attr("class", "cards");
          $('#loader').attr("class", "loader hidden");
        }, 1000);
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

lightbox.option({
    'disableScrolling': true,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true
  })
$(document).ready(function () {
    readTextFile("data/game-data.json", function (text) {
        let data = JSON.parse(text);
        let pHtml = '<tr class="table-row">' + $('.table-row').html() + '</tr>';
        let nHtml = '';
        $('.table-row').remove();
        $('#itemCount').val(data.length);
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{title}", v.title);
            res = res.replace("{stitle}", v.search_title);
            res = res.replace("{htitle}", v.hover_title);
            res = res.replace("{titleko}", v.title_ko);
            res = res.replace("{stitleko}", v.search_title_ko);
            res = res.replace("{htitleko}", v.hover_title_ko);
            res = res.replace("{titleja}", v.title_ja);
            res = res.replace("{stitleja}", v.search_title_ja);
            res = res.replace("{htitleja}", v.hover_title_ja);
            res = res.replace("{category}", v.category);
            res = res.replace("{type}", v.type);
            res = res.replace("{genre}", v.genre);
            res = res.replace("{platform}", v.platform);
            res = res.replace("{hplatform}", v.hover_platform);
            res = res.replace("{platform2}", v.platform2);
            res = res.replace("{hplatform2}", v.hover_platform2);
            res = res.replace("{platform3}", v.platform3);
            res = res.replace("{hplatform3}", v.hover_platform3);
            res = res.replace("{platform4}", v.platform4);
            res = res.replace("{hplatform4}", v.hover_platform4);
            res = res.replace("{platform5}", v.platform5);
            res = res.replace("{hplatform5}", v.hover_platform5);
            res = res.replace("{platform6}", v.platform6);
            res = res.replace("{hplatform6}", v.hover_platform6);
            res = res.replace("{platform7}", v.platform7);
            res = res.replace("{hplatform7}", v.hover_platform7);
            res = res.replace("{platform8}", v.platform8);
            res = res.replace("{hplatform8}", v.hover_platform8);
            res = res.replace("{platform9}", v.platform9);
            res = res.replace("{hplatform9}", v.hover_platform9);
            res = res.replace("{platform10}", v.platform10);
            res = res.replace("{hplatform10}", v.hover_platform10);
            res = res.replace("{episode}", v.episode);
            res = res.replace("{hepisode}", v.hover_episode);
            res = res.replace("{runningtime}", v.runningtime);
            res = res.replace("{hrunningtime}", v.hover_runningtime);
            res = res.replace("{artist}", v.artist);
            res = res.replace("{hartist}", v.hover_artist);
            res = res.replace("{album}", v.album);
            res = res.replace("{halbum}", v.hover_album);
            res = res.replace("{rating}", v.rating);
            res = res.replace("{hrating}", v.hover_rating);
            res = res.replace("{release}", v.release);
            res = res.replace("{hrelease}", v.hover_release);
            res = res.replace("{airing}", v.airing);
            res = res.replace("{hairing}", v.hover_airing);
            res = res.replace("{finishing}", v.finishing);
            res = res.replace("{season}", v.season);
            res = res.replace("{part}", v.part);
            res = res.replace("{logo}", v.logo);
            res = res.replace("{thumb}", v.thumbnail);
            res = res.replace("{wall}", v.wallpaper);
            res = res.replace("{bg}", v.background);
            res = res.replace("{cap}", v.capsule);
            res = res.replace("{hero}", v.hero);
            res = res.replace("{link}", v.link);
            nHtml += res;
        });
        $('thead').after(nHtml);
        setTimeout(function () {
            $('.custom-pagination').rpmPagination({
                limit: parseInt($('#pageLimit').val()),
                total: parseInt($('#itemCount').val()),
                domElement: '.table-row'
            });
        }, 100);
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
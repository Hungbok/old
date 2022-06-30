var streamersw = ["woowakgood"];

 var twitchapiw = "https://api.twitch.tv/helix/users?login=" ;
  var tipw = twitchapiw + streamersw;
    tipw = tipw.replace(/,/g, "&login=");

var twitchapiw2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipw2 = twitchapiw2 + streamersw;
    tipw2 = tipw2.replace(/,/g, "&user_login=");  

    var logow;
    var channelw;
    var statusw;
    var titlew
    var imagew;
    var linkw;
    var viewerw;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipw,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsew) {
 for (i = 0; i <= streamersw.length; i++){
   logow = responsew.data[i].display_name;
   imagew = responsew.data[i].profile_image_url;
   channelw = responsew.data[i].id;
   linkw = "https://www.twitch.tv/woowakgood";

    $("#woowakgood").append("<a class='twitch' id = '" + logow + "'><img class = 'imagewsml' src ='" + imagew + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipw2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsew2) {
  for (var j = 0; j < streamersw.length; j++) {
   if (responsew.data[i].id === responsew2.data[j].user_id)
   {statusw = "online"
    viewerw = responsew2.data[j].viewerw_count;
    titlew = responsew2.data[j].titlew;
    var child = document.getElementById(logow);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvw = document.getElementById('iframe');
  var parenttvw = iframetvw.parentNode;
  parenttvw.removeChild(iframetvw);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channelw: logow,
        theme: "white",
        chat: "mobile",
        allwowfullscreen: "false",
        layout: "video"
      });

    $("#woowakgood").prepend("<a class='twitch' href='" + linkw + "'><img class = 'imagewsml' src ='" + imagew + "'><p class = 'name' >" + logow + "</p><p class='view'>" + viewerw + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function togglew(e) {
    var allw = document.getElementsByClassName('togglewoffline');

    for(var i = 0; i < allw.length; i++) {
        // First make allw of the elements with the same class hidden.
        if (allw[i].style.display === 'none') {
            allw[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {allw[i].style.display = 'none';}
    }
}

function togglew2(f) {
    var allw = document.getElementsByClassName('togglewonline');

      var allw2 = document.getElementsByClassName('togglewoffline');

    for(var k = 0; k < allw.length; k++) {
        // First make allw of the elements with the same class hidden.
        if (allw[k].style.display === 'none') {
            allw[k].style.display = 'flex';
        }

        else {
        allw[k].style.display = 'none'
     }
    }
}

function togglew3(g) {
    var allw = document.getElementsByClassName('row');

    for(var l = 0; l < allw.length; l++) {
        // First make allw of the elements with the same class hidden.
        if (allw[l] !== this) {
            allw[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersi = ["vo_ine"];

 var twitchapii = "https://api.twitch.tv/helix/users?login=" ;
  var tipi = twitchapii + streamersi;
    tipi = tipi.replace(/,/g, "&login=");

var twitchapii2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipi2 = twitchapii2 + streamersi;
    tipi2 = tipi2.replace(/,/g, "&user_login=");  

    var logoi;
    var channeli;
    var statusi;
    var titlei
    var imagei;
    var linki;
    var vieweri;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipi,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsei) {
 for (i = 0; i <= streamersi.length; i++){
   logoi = responsei.data[i].display_name;
   imagei = responsei.data[i].profile_image_url;
   channeli = responsei.data[i].id;
   linki = "https://www.twitch.tv/vo_ine";

    $("#vo_ine").append("<a class='twitch' id = '" + logoi + "'><img class = 'imageisml' src ='" + imagei + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipi2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsei2) {
  for (var j = 0; j < streamersi.length; j++) {
   if (responsei.data[i].id === responsei2.data[j].user_id)
   {statusi = "online"
    vieweri = responsei2.data[j].vieweri_count;
    titlei = responsei2.data[j].titlei;
    var child = document.getElementById(logoi);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvi = document.getElementById('iframe');
  var parenttvi = iframetvi.parentNode;
  parenttvi.removeChild(iframetvi);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channeli: logoi,
        theme: "white",
        chat: "mobile",
        alliowfullscreen: "false",
        layout: "video"
      });

    $("#vo_ine").prepend("<a class='twitch' href='" + linki + "'><img class = 'imageisml' src ='" + imagei + "'><p class = 'name' >" + logoi + "</p><p class='view'>" + vieweri + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function togglei(e) {
    var alli = document.getElementsByClassName('toggleioffline');

    for(var i = 0; i < alli.length; i++) {
        // First make alli of the elements with the same class hidden.
        if (alli[i].style.display === 'none') {
            alli[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {alli[i].style.display = 'none';}
    }
}

function togglei2(f) {
    var alli = document.getElementsByClassName('toggleionline');

      var alli2 = document.getElementsByClassName('toggleioffline');

    for(var k = 0; k < alli.length; k++) {
        // First make alli of the elements with the same class hidden.
        if (alli[k].style.display === 'none') {
            alli[k].style.display = 'flex';
        }

        else {
        alli[k].style.display = 'none'
     }
    }
}

function togglei3(g) {
    var alli = document.getElementsByClassName('row');

    for(var l = 0; l < alli.length; l++) {
        // First make alli of the elements with the same class hidden.
        if (alli[l] !== this) {
            alli[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersv = ["viichan6"];

 var twitchapiv = "https://api.twitch.tv/helix/users?login=" ;
  var tipv = twitchapiv + streamersv;
    tipv = tipv.replace(/,/g, "&login=");

var twitchapiv2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipv2 = twitchapiv2 + streamersv;
    tipv2 = tipv2.replace(/,/g, "&user_login=");  

    var logov;
    var channelv;
    var statusv;
    var titlev
    var imagev;
    var linkv;
    var viewerv;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipv,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsev) {
 for (i = 0; i <= streamersv.length; i++){
   logov = responsev.data[i].display_name;
   imagev = responsev.data[i].profile_image_url;
   channelv = responsev.data[i].id;
   linkv = "https://www.twitch.tv/viichan6";

    $("#viichan6").append("<a class='twitch' id = '" + logov + "'><img class = 'imagevsml' src ='" + imagev + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipv2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsev2) {
  for (var j = 0; j < streamersv.length; j++) {
   if (responsev.data[i].id === responsev2.data[j].user_id)
   {statusv = "online"
    viewerv = responsev2.data[j].viewerv_count;
    titlev = responsev2.data[j].titlev;
    var child = document.getElementById(logov);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvv = document.getElementById('iframe');
  var parenttvv = iframetvv.parentNode;
  parenttvv.removeChild(iframetvv);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channelv: logov,
        theme: "white",
        chat: "mobile",
        allvowfullscreen: "false",
        layout: "video"
      });

    $("#viichan6").prepend("<a class='twitch' href='" + linkv + "'><img class = 'imagevsml' src ='" + imagev + "'><p class = 'name' >" + logov + "</p><p class='view'>" + viewerv + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function togglev(e) {
    var allv = document.getElementsByClassName('togglevoffline');

    for(var i = 0; i < allv.length; i++) {
        // First make allv of the elements with the same class hidden.
        if (allv[i].style.display === 'none') {
            allv[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {allv[i].style.display = 'none';}
    }
}

function togglev2(f) {
    var allv = document.getElementsByClassName('togglevonline');

      var allv2 = document.getElementsByClassName('togglevoffline');

    for(var k = 0; k < allv.length; k++) {
        // First make allv of the elements with the same class hidden.
        if (allv[k].style.display === 'none') {
            allv[k].style.display = 'flex';
        }

        else {
        allv[k].style.display = 'none'
     }
    }
}

function togglev3(g) {
    var allv = document.getElementsByClassName('row');

    for(var l = 0; l < allv.length; l++) {
        // First make allv of the elements with the same class hidden.
        if (allv[l] !== this) {
            allv[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersl = ["lilpaaaaaa"];

 var twitchapil = "https://api.twitch.tv/helix/users?login=" ;
  var tipl = twitchapil + streamersl;
    tipl = tipl.replace(/,/g, "&login=");

var twitchapil2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipl2 = twitchapil2 + streamersl;
    tipl2 = tipl2.replace(/,/g, "&user_login=");  

    var logol;
    var channell;
    var statusl;
    var titlel
    var imagel;
    var linkl;
    var viewerl;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipl,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsel) {
 for (i = 0; i <= streamersl.length; i++){
   logol = responsel.data[i].display_name;
   imagel = responsel.data[i].profile_image_url;
   channell = responsel.data[i].id;
   linkl = "https://www.twitch.tv/lilpaaaaaa";

    $("#lilpaaaaaa").append("<a class='twitch' id = '" + logol + "'><img class = 'imagelsml' src ='" + imagel + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipl2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsel2) {
  for (var j = 0; j < streamersl.length; j++) {
   if (responsel.data[i].id === responsel2.data[j].user_id)
   {statusl = "online"
    viewerl = responsel2.data[j].viewerl_count;
    titlel = responsel2.data[j].titlel;
    var child = document.getElementById(logol);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvl = document.getElementById('iframe');
  var parenttvl = iframetvl.parentNode;
  parenttvl.removeChild(iframetvl);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channell: logol,
        theme: "white",
        chat: "mobile",
        alllowfullscreen: "false",
        layout: "video"
      });

    $("#lilpaaaaaa").prepend("<a class='twitch' href='" + linkl + "'><img class = 'imagelsml' src ='" + imagel + "'><p class = 'name' >" + logol + "</p><p class='view'>" + viewerl + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function togglel(e) {
    var alll = document.getElementsByClassName('toggleloffline');

    for(var i = 0; i < alll.length; i++) {
        // First make alll of the elements with the same class hidden.
        if (alll[i].style.display === 'none') {
            alll[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {alll[i].style.display = 'none';}
    }
}

function togglel2(f) {
    var alll = document.getElementsByClassName('togglelonline');

      var alll2 = document.getElementsByClassName('toggleloffline');

    for(var k = 0; k < alll.length; k++) {
        // First make alll of the elements with the same class hidden.
        if (alll[k].style.display === 'none') {
            alll[k].style.display = 'flex';
        }

        else {
        alll[k].style.display = 'none'
     }
    }
}

function togglel3(g) {
    var alll = document.getElementsByClassName('row');

    for(var l = 0; l < alll.length; l++) {
        // First make alll of the elements with the same class hidden.
        if (alll[l] !== this) {
            alll[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersj = ["jingburger"];

 var twitchapij = "https://api.twitch.tv/helix/users?login=" ;
  var tipj = twitchapij + streamersj;
    tipj = tipj.replace(/,/g, "&login=");

var twitchapij2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipj2 = twitchapij2 + streamersj;
    tipj2 = tipj2.replace(/,/g, "&user_login=");  

    var logoj;
    var channelj;
    var statusj;
    var titlej
    var imagej;
    var linkj;
    var viewerj;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipj,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsej) {
 for (i = 0; i <= streamersj.length; i++){
   logoj = responsej.data[i].display_name;
   imagej = responsej.data[i].profile_image_url;
   channelj = responsej.data[i].id;
   linkj = "https://www.twitch.tv/jingburger";

    $("#jingburger").append("<a class='twitch' id = '" + logoj + "'><img class = 'imagejsml' src ='" + imagej + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipj2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsej2) {
  for (var j = 0; j < streamersj.length; j++) {
   if (responsej.data[i].id === responsej2.data[j].user_id)
   {statusj = "online"
    viewerj = responsej2.data[j].viewerj_count;
    titlej = responsej2.data[j].titlej;
    var child = document.getElementById(logoj);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvj = document.getElementById('iframe');
  var parenttvj = iframetvj.parentNode;
  parenttvj.removeChild(iframetvj);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channelj: logoj,
        theme: "white",
        chat: "mobile",
        alljowfullscreen: "false",
        layout: "video"
      });

    $("#jingburger").prepend("<a class='twitch' href='" + linkj + "'><img class = 'imagejsml' src ='" + imagej + "'><p class = 'name' >" + logoj + "</p><p class='view'>" + viewerj + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function togglej(e) {
    var allj = document.getElementsByClassName('togglejoffline');

    for(var i = 0; i < allj.length; i++) {
        // First make allj of the elements with the same class hidden.
        if (allj[i].style.display === 'none') {
            allj[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {allj[i].style.display = 'none';}
    }
}

function togglej2(f) {
    var allj = document.getElementsByClassName('togglejonline');

      var allj2 = document.getElementsByClassName('togglejoffline');

    for(var k = 0; k < allj.length; k++) {
        // First make allj of the elements with the same class hidden.
        if (allj[k].style.display === 'none') {
            allj[k].style.display = 'flex';
        }

        else {
        allj[k].style.display = 'none'
     }
    }
}

function togglej3(g) {
    var allj = document.getElementsByClassName('row');

    for(var l = 0; l < allj.length; l++) {
        // First make allj of the elements with the same class hidden.
        if (allj[l] !== this) {
            allj[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersg = ["gosegugosegu"];

 var twitchapig = "https://api.twitch.tv/helix/users?login=" ;
  var tipg = twitchapig + streamersg;
    tipg = tipg.replace(/,/g, "&login=");

var twitchapig2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipg2 = twitchapig2 + streamersg;
    tipg2 = tipg2.replace(/,/g, "&user_login=");  

    var logog;
    var channelg;
    var statusg;
    var titleg
    var imageg;
    var linkg;
    var viewerg;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipg,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responseg) {
 for (i = 0; i <= streamersg.length; i++){
   logog = responseg.data[i].display_name;
   imageg = responseg.data[i].profile_image_url;
   channelg = responseg.data[i].id;
   linkg = "https://www.twitch.tv/gosegugosegu";

    $("#gosegugosegu").append("<a class='twitch' id = '" + logog + "'><img class = 'imagegsml' src ='" + imageg + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipg2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responseg2) {
  for (var j = 0; j < streamersg.length; j++) {
   if (responseg.data[i].id === responseg2.data[j].user_id)
   {statusg = "online"
    viewerg = responseg2.data[j].viewerg_count;
    titleg = responseg2.data[j].titleg;
    var child = document.getElementById(logog);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvg = document.getElementById('iframe');
  var parenttvg = iframetvg.parentNode;
  parenttvg.removeChild(iframetvg);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channelg: logog,
        theme: "white",
        chat: "mobile",
        allgowfullscreen: "false",
        layout: "video"
      });

    $("#gosegugosegu").prepend("<a class='twitch' href='" + linkg + "'><img class = 'imagegsml' src ='" + imageg + "'><p class = 'name' >" + logog + "</p><p class='view'>" + viewerg + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function toggleg(e) {
    var allg = document.getElementsByClassName('togglegoffline');

    for(var i = 0; i < allg.length; i++) {
        // First make allg of the elements with the same class hidden.
        if (allg[i].style.display === 'none') {
            allg[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {allg[i].style.display = 'none';}
    }
}

function toggleg2(f) {
    var allg = document.getElementsByClassName('togglegonline');

      var allg2 = document.getElementsByClassName('togglegoffline');

    for(var k = 0; k < allg.length; k++) {
        // First make allg of the elements with the same class hidden.
        if (allg[k].style.display === 'none') {
            allg[k].style.display = 'flex';
        }

        else {
        allg[k].style.display = 'none'
     }
    }
}

function toggleg3(g) {
    var allg = document.getElementsByClassName('row');

    for(var l = 0; l < allg.length; l++) {
        // First make allg of the elements with the same class hidden.
        if (allg[l] !== this) {
            allg[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersc = ["cotton__123"];

 var twitchapic = "https://api.twitch.tv/helix/users?login=" ;
  var tipc = twitchapic + streamersc;
    tipc = tipc.replace(/,/g, "&login=");

var twitchapic2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipc2 = twitchapic2 + streamersc;
    tipc2 = tipc2.replace(/,/g, "&user_login=");  

    var logoc;
    var channelc;
    var statusc;
    var titlec
    var imagec;
    var linkc;
    var viewerc;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipc,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsec) {
 for (i = 0; i <= streamersc.length; i++){
   logoc = responsec.data[i].display_name;
   imagec = responsec.data[i].profile_image_url;
   channelc = responsec.data[i].id;
   linkc = "https://www.twitch.tv/cotton__123";

    $("#cotton__123").append("<a class='twitch' id = '" + logoc + "'><img class = 'imagecsml' src ='" + imagec + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipc2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsec2) {
  for (var j = 0; j < streamersc.length; j++) {
   if (responsec.data[i].id === responsec2.data[j].user_id)
   {statusc = "online"
    viewerc = responsec2.data[j].viewerc_count;
    titlec = responsec2.data[j].titlec;
    var child = document.getElementById(logoc);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvc = document.getElementById('iframe');
  var parenttvc = iframetvc.parentNode;
  parenttvc.removeChild(iframetvc);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channelc: logoc,
        theme: "white",
        chat: "mobile",
        allcowfullscreen: "false",
        layout: "video"
      });

    $("#cotton__123").prepend("<a class='twitch' href='" + linkc + "'><img class = 'imagecsml' src ='" + imagec + "'><p class = 'name' >" + logoc + "</p><p class='view'>" + viewerc + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function togglec(e) {
    var allc = document.getElementsByClassName('togglecoffline');

    for(var i = 0; i < allc.length; i++) {
        // First make allc of the elements with the same class hidden.
        if (allc[i].style.display === 'none') {
            allc[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {allc[i].style.display = 'none';}
    }
}

function togglec2(f) {
    var allc = document.getElementsByClassName('toggleconline');

      var allc2 = document.getElementsByClassName('togglecoffline');

    for(var k = 0; k < allc.length; k++) {
        // First make allc of the elements with the same class hidden.
        if (allc[k].style.display === 'none') {
            allc[k].style.display = 'flex';
        }

        else {
        allc[k].style.display = 'none'
     }
    }
}

function togglec3(g) {
    var allc = document.getElementsByClassName('row');

    for(var l = 0; l < allc.length; l++) {
        // First make allc of the elements with the same class hidden.
        if (allc[l] !== this) {
            allc[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersy = ["chunyangkr"];

 var twitchapiy = "https://api.twitch.tv/helix/users?login=" ;
  var tipy = twitchapiy + streamersy;
    tipy = tipy.replace(/,/g, "&login=");

var twitchapiy2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipy2 = twitchapiy2 + streamersy;
    tipy2 = tipy2.replace(/,/g, "&user_login=");  

    var logoy;
    var channely;
    var statusy;
    var titley
    var imagey;
    var linky;
    var viewery;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipy,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responsey) {
 for (i = 0; i <= streamersy.length; i++){
   logoy = responsey.data[i].display_name;
   imagey = responsey.data[i].profile_image_url;
   channely = responsey.data[i].id;
   linky = "https://www.twitch.tv/" + logoy;

    $("#chunyangkr").append("<a class='twitch' id = '" + logoy + "'><img class = 'imagevsml' src ='" + imagey + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipy2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responsey2) {
  for (var j = 0; j < streamersy.length; j++) {
   if (responsey.data[i].id === responsey2.data[j].user_id)
   {statusy = "online"
    viewery = responsey2.data[j].viewery_count;
    titley = responsey2.data[j].titley;
    var child = document.getElementById(logoy);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvy = document.getElementById('iframe');
  var parenttvy = iframetvy.parentNode;
  parenttvy.removeChild(iframetvy);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channely: logoy,
        theme: "white",
        chat: "mobile",
        allyowfullscreen: "false",
        layout: "video"
      });

    $("#chunyangkr").prepend("<a class='twitch' href='" + linky + "'><img class = 'imagevsml' src ='" + imagey + "'><p class = 'name' >" + logoy + "</p><p class='view'>" + viewery + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function toggley(e) {
    var ally = document.getElementsByClassName('toggleyoffline');

    for(var i = 0; i < ally.length; i++) {
        // First make ally of the elements with the same class hidden.
        if (ally[i].style.display === 'none') {
            ally[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {ally[i].style.display = 'none';}
    }
}

function toggley2(f) {
    var ally = document.getElementsByClassName('toggleyonline');

      var ally2 = document.getElementsByClassName('toggleyoffline');

    for(var k = 0; k < ally.length; k++) {
        // First make ally of the elements with the same class hidden.
        if (ally[k].style.display === 'none') {
            ally[k].style.display = 'flex';
        }

        else {
        ally[k].style.display = 'none'
     }
    }
}

function toggley3(g) {
    var ally = document.getElementsByClassName('row');

    for(var l = 0; l < ally.length; l++) {
        // First make ally of the elements with the same class hidden.
        if (ally[l] !== this) {
            ally[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}

var streamersr = ["111roentgenium"];

 var twitchapir = "https://api.twitch.tv/helix/users?login=" ;
  var tipr = twitchapir + streamersr;
    tipr = tipr.replace(/,/g, "&login=");

var twitchapir2 = "https://api.twitch.tv/helix/streams?user_login=" ;
  var tipr2 = twitchapir2 + streamersr;
    tipr2 = tipr2.replace(/,/g, "&user_login=");  

    var logor;
    var channelr;
    var statusr;
    var titler
    var imager;
    var linkr;
    var viewerr;

$.ajax({
    type: "GET",
    dataType: "json",
    url: tipr,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },
    success: function(responser) {
 for (i = 0; i <= streamersr.length; i++){
   logor = responser.data[i].display_name;
   imager = responser.data[i].profile_image_url;
   channelr = responser.data[i].id;
   linkv = "https://www.twitch.tv/111roentgenium";

    $("#111roentgenium").append("<a class='twitch' id = '" + logor + "'><img class = 'imagevsml' src ='" + imager + "'><p class = 'name' >&nbsp;</p></a>");

   $.ajax({
    type: "GET",
     dataType: "json",
     async: false,
    url: tipr2,
 headers: {
    'Client-ID': 'ndnd9fge7fevtvtm2ury70hku65rru',
    'Authorization': 'Bearer yed8kqk5ugad62b54ufnrygpejttbl'
 },

 success: function(responser2) {
  for (var j = 0; j < streamersr.length; j++) {
   if (responser.data[i].id === responser2.data[j].user_id)
   {statusr = "online"
    viewerr = responser2.data[j].viewerr_count;
    titler = responser2.data[j].titler;
    var child = document.getElementById(logor);
    var parent = child.parentNode;
    parent.removeChild(child);

  var iframetvr = document.getElementById('iframe');
  var parenttvr = iframetvr.parentNode;
  parenttvr.removeChild(iframetvr);
  new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channelr: logor,
        theme: "white",
        chat: "mobile",
        allrowfullscreen: "false",
        layout: "video"
      });

    $("#111roentgenium").prepend("<a class='twitch' href='" + linkr + "'><img class = 'imagevsml' src ='" + imager + "'><p class = 'name' >" + logor + "</p><p class='view'>" + viewerr + "</p></a>");
   }
 else {

      }
      }
  }

 });
 }
    }
});

 function toggler(e) {
    var allr = document.getElementsByClassName('toggleroffline');

    for(var i = 0; i < allr.length; i++) {
        // First make allr of the elements with the same class hidden.
        if (allr[i].style.display === 'none') {
            allr[i].style.display = 'flex';
        }

        // Then make the clicked element visible.
        else {allr[i].style.display = 'none';}
    }
}

function toggler2(f) {
    var allr = document.getElementsByClassName('toggleronline');

      var allr2 = document.getElementsByClassName('toggleroffline');

    for(var k = 0; k < allr.length; k++) {
        // First make allr of the elements with the same class hidden.
        if (allr[k].style.display === 'none') {
            allr[k].style.display = 'flex';
        }

        else {
        allr[k].style.display = 'none'
     }
    }
}

function toggler3(g) {
    var allr = document.getElementsByClassName('row');

    for(var l = 0; l < allr.length; l++) {
        // First make allr of the elements with the same class hidden.
        if (allr[l] !== this) {
            allr[l].style.display = 'flex';
        }

        // Then make the clicked element visible.
        g.style.visibility = 'visible';
    }
}
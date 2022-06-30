// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function change() {
  var modelCbs = document.querySelectorAll(".models input[type='checkbox']");
  var processorCbs = document.querySelectorAll(".processors input[type='checkbox']");
  var filters = {
    models: getClassOfCheckedCheckboxes(modelCbs),
    processors: getClassOfCheckedCheckboxes(processorCbs)
  };

  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  var classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      var cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("rel"));
      }
    }
  }

  return classes;
}

function filterResults(filters) {
  var rElems = document.querySelectorAll(".result li");
  var hiddenElems = [];

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (var i = 0; i < rElems.length; i++) {
    var el = rElems[i];

    if (filters.models.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.models.length; j++) {
        var filter = filters.models[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.processors.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.processors.length; j++) {
        var filter = filters.processors[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
  }

  for (var i = 0; i < rElems.length; i++) {
    rElems[i].style.opacity = "1";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (var i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.opacity = "0.3";
  }
}

function sortJSON(data, key) {
  return data.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

$("select").change(function() {
  var choice = $(this).val();
  var record = sortJSON(secureFormsJson.records, choice);
  
  $("thead").html("");
  
  for (var r = 0; r < record.length; r++) {
  $("table thead").append("<tr>" +
    "<td>" + record[r].FormName + "</td>" +
    "<td>" + record[r].FormId + "</td>" +
    "<td>" + record[r].Tags + "</td>" +
    "<td>" + record[r].Creator + "</td>" +
    "<td>" + record[r].CreateDate + "</td>" +
    "<td>" + record[r].URL + "</td>" +
    "</tr>");
  }
}); 

var record = sortJSON(secureFormsJson.records, "id");

for (var r = 0; r < record.length; r++) {
  $("table").append("<tr>" +
    "<td>" + record[r].FormName + "</td>" +
    "<td>" + record[r].FormId + "</td>" +
    "<td>" + record[r].Tags + "</td>" +
    "<td>" + record[r].Creator + "</td>" +
    "<td>" + record[r].CreateDate + "</td>" +
    "<td>" + record[r].URL + "</td>" +
    "</tr>");
  }

if (secureFormsJson.records.length > 0) {
  $("table").show();
} else {
  $("div.emp").show();
}
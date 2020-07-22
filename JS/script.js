
function rst(){
  var btn = $("#rst");
  btn.click(function(){
    location.reload();
  })
}

function getTable(){
  var table = $(".free");
  table.click(getApi);
}

function getApi(){
  var tg = $(this);
  $.ajax({
    url : 'https://flynn.boolean.careers/exercises/api/random/int',
    method: 'GET',
    success: function(data, state) {
      var success = data['success'];
      var value = data['response'];

      if (success) {
        console.log(value);
        if (value <= 5 && tg.hasClass("free")) {
          tg.text(value).addClass("yellow written").removeClass("green free");

        }

        else if (value > 5 && tg.hasClass("free")) {
          tg.text(value).addClass("green written").removeClass("yellow free");

        }

      } else {
        console.log("Error");
      }

    },
    error: function(request, state, error){
      console.log("error");
    }
  })
}


function init (){
getTable();
rst();
}


$(document).ready(init);

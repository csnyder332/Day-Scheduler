$("#currentDay").html(moment().format("LL"));

$(document).ready(function () {
  $("#task").click(function () {
    $("#task").text("");
  });
});

var hourAudit = function () {
  var currentHour = moment().hour();

  for (var i = 8; i < 18; i++) {
    var taskArea = $("#task-" + i);
    if (currentHour > i) {
      $(taskArea).addClass("past");
    } else if (currentHour === i) {
      $(taskArea).addClass("present");
    } else {
      $(taskArea).addClass("future");
    }
  }
};

hourAudit();
setInterval(function () {
    hourAudit();
  }, 1000 * 60 * 60);

{
  $(".saveBtn").click(function () {
    var hr8 = document.getElementById("task-8").value;
    localStorage.setItem("text8", hr8);
    var hr9 = document.getElementById("task-9").value;
    localStorage.setItem("text9", hr9);
    var hr10 = document.getElementById("task-10").value;
    localStorage.setItem("text10", hr10);
    var hr11 = document.getElementById("task-11").value;
    localStorage.setItem("text11", hr11);
    var hr12 = document.getElementById("task-12").value;
    localStorage.setItem("text12", hr12);
    var hr13 = document.getElementById("task-13").value;
    localStorage.setItem("text13", hr13);
    var hr14 = document.getElementById("task-14").value;
    localStorage.setItem("text14", hr14);
    var hr15 = document.getElementById("task-15").value;
    localStorage.setItem("text15", hr15);
    var hr16 = document.getElementById("task-16").value;
    localStorage.setItem("text16", hr16);
    var hr17 = document.getElementById("task-17").value;
    localStorage.setItem("text17", hr17);
  });
}
{
    var saved8 = localStorage.getItem('text8');
     document.getElementById('task-8').value = saved8;
     var saved9 = localStorage.getItem('text9');
     document.getElementById('task-9').value = saved9;
     var saved10 = localStorage.getItem('text10');
     document.getElementById('task-10').value = saved10;
     var saved11 = localStorage.getItem('text11');
     document.getElementById('task-11').value = saved11;
     var saved12 = localStorage.getItem('text12');
     document.getElementById('task-12').value = saved12;
     var saved13 = localStorage.getItem('text13');
     document.getElementById('task-13').value = saved13;
     var saved14 = localStorage.getItem('text14');
     document.getElementById('task-14').value = saved14;
     var saved15 = localStorage.getItem('text15');
     document.getElementById('task-15').value = saved15;
     var saved16 = localStorage.getItem('text16');
     document.getElementById('task-16').value = saved16;
     var saved17 = localStorage.getItem('text17');
     document.getElementById('task-17').value = saved17;
};





$('#currentDay').html(moment().format('LL'));

$(document).ready(function() {
    $('#task').click(function() {
        $('#task').text('');
    })
});


var hourAudit =function() {
    var currentHour = moment().hour();

    for(var i=8; i<18; i++){
        var taskArea = $("#task-"+i)  
        if(currentHour>i){
            $(taskArea).addClass("past");
        } else if (currentHour === i){
            $(taskArea).addClass("present");
        }else{
            $(taskArea).addClass("future")
        }
    }
}

// $(".saveBtn").on("click", function(){
//     console.log("<save button> was clicked");
//       var index = $(".saveBtn").index(this);
//      console.log(index);
//       tasks[index] = $(this).parent().find("#task").text();
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//   });

// setInterval(function(){
//     hourAudit();},1000*60*60);

hourAudit();
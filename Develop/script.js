
function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update);


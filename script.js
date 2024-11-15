    // time strats
function Clock(){
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    hours = hours <10 ? "0" + hours  :hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    var Time = hours + ":" + minutes + ":" + seconds
    
    document.getElementById("clock").innerHTML = Time

}
Clock();
setInterval(Clock, 1000);
// time ends
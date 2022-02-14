
let count_msg = document.getElementById("t-area");
let set_max = count_msg.getAttribute("maxlength")
function counting(count_msg){
    count_msg.addEventListener('input', function(e) {
    let target = e.target;
    let current_length = target.value.length;
    let cuenta = document.getElementById('cuenta');
    cuenta.innerHTML = current_length+" de "+set_max    
    console.log(current_length) 
})}
    
counting(count_msg)



function makeVisible() {
    item_el = document.getElementById("cuenta")
    item_el.style.visibility = "visible";
}
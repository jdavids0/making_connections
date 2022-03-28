function changeText(){
    document.getElementById('janeDoe').innerText = "Jane Smith"
}

function accept(id){
    var element = document.querySelector(id);
    element.remove();
}

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
}

function minusConn(){
    var value = document.getElementById("connReq").innerHTML;
  /*   console.log(value) */
    value--;
    /* console.log(value) */
    document.getElementById("connReq").innerHTML = value;
}

function addConn(){
    var value = document.getElementById("yourConn").innerHTML;
    value++;
    document.getElementById("yourConn").innerHTML=value;
}
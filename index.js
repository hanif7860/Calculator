function setvalue(e){
    var number= document.getElementById("in")
    number.value +=(e)
}
function eq(){
    var a = document.getElementById("in")
    a.value=eval(a.value)
}
function clr(){
    var a = document.getElementById("in")
    a.value=""
}
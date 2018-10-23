function clearText1() {
  var a = document.getElementById("textfield1").value;
  if ( isNaN(a)){
    var a = document.getElementById("textfield1").value="";
  }

}

function clearText2() {
  var b = document.getElementById("textfield2").value;
  if (isNaN(b)){
    document.getElementById("textfield2").value="";
  }

}

function addFun() {
  var num1 = document.getElementById('textfield1').value;
  var num2 = document.getElementById("textfield2").value;
  var firstAnswer = +num1 + +num2;
    document.getElementById("answer1").value= firstAnswer;
}


function subFun() {
  var num1 = document.getElementById('textfield1').value;
  var num2 = document.getElementById("textfield2").value;
  var secAnswer = +num1 - +num2;
    document.getElementById("answer2").value= secAnswer;
}

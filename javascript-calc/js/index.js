var expression = "";

document.getElementById('exp').innerHTML = expression;

function update(){
  document.getElementById('exp').innerHTML = expression;
}
function clear(){
  expression = "";
  update();
}
function del(){
  expression = expression.substring(0,expression.length-1)
  update();
}

document.getElementById('seven').addEventListener("click", function(){
  expression += "7";
  update();
});
document.getElementById('eight').addEventListener("click", function(){
  expression += "8";
  update();
});
document.getElementById('nine').addEventListener("click", function(){
  expression += "9";
  update();
});
document.getElementById('four').addEventListener("click", function(){
  expression += "4";
  update();
});
document.getElementById('five').addEventListener("click", function(){
  expression += "5";
  update();
});
document.getElementById('six').addEventListener("click", function(){
  expression += "6";
  update();
});
document.getElementById('one').addEventListener("click", function(){
  expression += "1";
  update();
});
document.getElementById('two').addEventListener("click", function(){
  expression += "2";
  update();
});
document.getElementById('three').addEventListener("click", function(){
  expression += "3";
  update();
});
document.getElementById('zero').addEventListener("click", function(){
  expression += "0";
  update();
});
document.getElementById('point').addEventListener("click", function(){
  expression += ".";
  update();
});
document.getElementById('neg').addEventListener("click", function(){
  expression += "00";
  update();
});
document.getElementById('mod').addEventListener("click", function(){
  expression += "%";
  update();
});
document.getElementById('divi').addEventListener("click", function(){
  expression += "/";
  update();
});
document.getElementById('times').addEventListener("click", function(){
  expression += "*";
  update();
});
document.getElementById('minus').addEventListener("click", function(){
  expression += "-";
  update();
});
document.getElementById('plus').addEventListener("click", function(){
  expression += "+";
  update();
});

document.getElementById('cancel').addEventListener("click", clear);
document.getElementById('del').addEventListener("click", del);
document.getElementById('equals').addEventListener("click", equals);

function equals(){
  var l = expression.length-1;
  if(expression.charAt(0) == '+' || expression.charAt(0) == '-' || expression.charAt(0) == '/' || expression.charAt(0) == '*' || expression.charAt(l) == '+' || expression.charAt(l) == '-' || expression.charAt(l) == '/' || expression.charAt(l) == '*'){
    expression = "Error"
    update();
    expression = "";
  }else{
    var res = eval(expression);
    expression = res;
    update();
    expression = "";
  }
}
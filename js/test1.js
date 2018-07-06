
var myClass = {
    x: 0,
    y: 0,

     function cClass(x, y){

    }
};

var val1 = document.getElementById("var1");
var val2 = document.getElementById("var2");
var pOut = document.getElementById("pOut");

var mClass = new myClass;
myclass.x = val1.value;
myclass.y = val2.value;

var buttonAdd = document.getElementById("MyAdd");
var buttonSub = document.getElementById("sub");
var buttonMul = document.getElementById("multiply");
var buttonDiv = document.getElementById("divide");

buttonAdd.addEventListener("click", Add);
buttonSub.addEventListener("click", Sub);
buttonMul.addEventListener("click", Mul);
buttonDiv.addEventListener("click", Div);

console.log("loading...");
console.log("done");
pOut.innerHTML = "running...";

var runDevOut = 0;


function Add(){
    console.log("add");
    pOut.innerHTML = val1.value + val2.value;
}
function Sub(){
    console.log("Sub");
    pOut.innerHTML = val1.value-val2.value;
}
function Mul(){
    console.log("Mul");
    pOut.innerHTML = val1.value*val2.value;
}
function Div(){
    console.log("Div");
    pOut.innerHTML = val1.value%val2.value;
}

var myClass = {
    x: 0,
    y: 0
};





/*

$('#add').click(function(){
    var action = 0;
    //var val1 = $('#var1').val();
    //var val2 = $('#var2').val();
    var val3 = myfunction(action);
    $('#list').append('<li>' + val3 + '</li>');
});

$('#sub').click(function(){
    var action = 1;
    var val3 = myfunction(action);
    $('#list').append('<li>' + val3 + '</li>');
});

$('#multiply').click(function(){
    var action = 2;
    var val3 = myfunction(action);
    $('#list').append('<li>' + val3 + '</li>');
});

$('#divide').click(function(){
    var action = 3;
    var val3 = myfunction(action);
    $('#list').append('<li>' + val3 + '</li>');
   
});

function myfunction(action){
    //var val1 = document.getElementById("var1");
    console.warn(val1);
    var val2 = $('#var2').val();
    console.warn(val1 + ", " + val2 + " : "  + action);

    if(action == 0){ 
        return val1+val2;
    }
    if(action == 1){
        return val1-val2;
    }
    if(action == 2){
        return val1*val2;
    }
    if(action == 3){
        return val1%val2;
    }
};

for(var i = 0; i < 3; i++){
    $('#list').append("<li class='mylist'>" + "bonuslist " + i + "</li>");
}





*/
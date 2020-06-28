// function write(){
//     console.log("1");
// }
// function writ(){
//     console.log("2");
// }

// function getname(){
//     var box = document.getElementById("box");
//     console.log(box.value);
//     box.value = "";
// }

//  function setName(){
//      var box = document.getElementById('box');
//      box.value = "Hassan"
// var para = document.getElementById('para');
// para.innerHTML = "Hello Brother";
//  }

//  setName();

function buttns(num){ 
   
    var butt = document.getElementById('box');
    box.value += num; 
    
    
}
function clearEvery(){
    var butt = document.getElementById('box');
    box.value = "";
}

function getresult(){
    var butt = document.getElementById('box');
    var t = eval(box.value);
    box.value = eval(box.value);
    alert(eval(box.value));
   box.value = "";


}
function getroot(){
    var butt = document.getElementById('box');
    box.value = Math.sqrt(box.value);
}
function ln(){
    
    var butt = document.getElementById('box');
    box.value = Math.LN2(box.value);

}
function lg(){
    
    var butt = document.getElementById('box');
    box.value = Math.log(box.value);

}
function sinvalue(){
    
    var butt = document.getElementById('box');
    box.value = Math.sin(box.value);

}
function cosvalue(){
    
    var butt = document.getElementById('box');
    box.value = Math.cos(box.value);

}
function tanvalue(){
    
    var butt = document.getElementById('box');
    box.value = Math.tan(box.value);

}
function stnd(){
    document.getElementById("sn").style.display="none";
    document.getElementById("tn").style.display="none";
    document.getElementById("cs").style.display="none";
    document.getElementById("pi").style.display="none";
    document.getElementById("fac").style.display="none";
    document.getElementById("sq").style.display="none";
    document.getElementById("ln").style.display="none";
    document.getElementById("lg").style.display="none";
    document.getElementById("10x").style.display="none";

}
function sctfc(){
    
    document.getElementById("sn").style.display="block";
    document.getElementById("tn").style.display="block";
    document.getElementById("cs").style.display="block";
    document.getElementById("pi").style.display="block";
    document.getElementById("fac").style.display="block";
    document.getElementById("sq").style.display="block";
    document.getElementById("ln").style.display="block";
    document.getElementById("lg").style.display="block";
    document.getElementById("10x").style.display="block";
    
}

var myprofilforms01 = document.querySelector(".myprofilforms01 a");
myprofilforms01.addEventListener("click", inputundiableds01);

function inputundiableds01() {

    var myprofilforms02 = document.querySelector(".myprofilforms01 a span");
    myprofilforms02.textContent = "Update";
    myprofilforms01.classList.toggle("updatetxtshow01");

    var inputdispled01 = document.querySelectorAll(".myprofilforms01 input");
    for(var i = 0; i < inputdispled01.length; i++) {
        inputdispled01[i].disabled = false;
    }

    if(!myprofilforms01.classList.contains("updatetxtshow01")) {
        myprofilforms02.textContent = "Edit";
        for(var i = 0; i < inputdispled01.length; i++) {
        inputdispled01[i].disabled = true;
    }
    }
    

}


// Shipping and billing tabs part start here 

var shipbillbtn01 = document.querySelector(".wrapbillshipboxes01");
shipbillbtn01.addEventListener("click", shipbillfun01);
function shipbillfun01(e) {

    if(e.target.classList.contains("spbleditbtn01")) {
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0]);
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("fordisableinput01");

        if(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("fordisableinput01")) {
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("fordisableinput02")

            var inputdispled01 = document.querySelectorAll(".fordisableinput01 input");
            var selectinput01 = document.querySelectorAll(".fordisableinput01 select");

            var textareas01 = document.querySelectorAll(".fordisableinput01 textarea");
            // textareas01.disabled = false;

            for(var i = 0; i < inputdispled01.length; i++) {
                    inputdispled01[i].disabled = false;
                }

            for(var i = 0; i < selectinput01.length; i++) {
                selectinput01[i].disabled = false;
                }

            for(var i = 0; i < textareas01.length; i++) {
                textareas01[i].disabled = false;
                }

            e.target.textContent = "Update";
            
        }  
        if(!e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("fordisableinput01")) {
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("fordisableinput02")
                var inputdispled01 = document.querySelectorAll(".fordisableinput02 input");
                for(var i = 0; i < inputdispled01.length; i++) {
                    inputdispled01[i].disabled = true;
                    
                }
                var selectinput02 = document.querySelectorAll(".fordisableinput02 select");
                for(var i = 0; i < selectinput02.length; i++) {
                    selectinput02[i].disabled = true;
                }

                var textareas01 = document.querySelectorAll(".fordisableinput02 textarea");
                for(var i = 0; i < textareas01.length; i++) {
                    textareas01[i].disabled = true;
                }

                e.target.textContent = "Edit";

                var textareas02 = document.querySelector(".fordisableinput02 textarea");
                textareas02.disabled = true;
                
            }            
    
    }

    if(e.target.classList.contains("spbldeletebtn01")) {
        console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
}
// Shipping and billing tabs part end here

// My orders tabs part start here
var myprmywishlist01 = document.querySelector(".myprmywishlist01");
myprmywishlist01.addEventListener("click", myprmyorderclks01);
function myprmyorderclks01(e) {
    if(e.target.classList.contains("fa-trash-o")) {
        let remove = e.target.parentElement.parentElement.parentElement.parentElement;
        remove.remove();
    }
}
// My orders tabs part end here

// My setting tabs part start here
var myprmysetting02 = document.querySelector(".myprmysetting02 .myprmyboxes01 a");
myprmysetting02.addEventListener("click", myprmysetopcl01);
function myprmysetopcl01(e) {
    var myprmysetdisopcl01 = document.querySelector(".myprmysetting02 .myprmysetdisopcl01");
    myprmysetdisopcl01.classList.toggle("myprmysetdisopcl02");

    myprmysetting02.classList.toggle("textadds01");

    if(myprmysetting02.classList.contains("textadds01")) {
        myprmysetting02.textContent = "Change Password Open";
    } else {
        myprmysetting02.textContent = "Change Password";
    }
}
// My setting tabs part end here

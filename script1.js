let faqs=document.querySelectorAll(".bru");
let ans1=document.querySelector("#what");
let ans2=document.querySelector("#how");
let ans3=document.querySelector("#Where");
let ans4=document.querySelector("#cancel");
let ans5=document.querySelector("#WhereN");
let ans6=document.querySelector("#kids");
let next=document.querySelector(".hello");
let show=document.querySelector(".firstslot");
let slidebar=document.querySelector("#slidebar");
let slidebar2=document.querySelector("#hellback");
let trends=document.querySelectorAll(".trending");
let trends2=document.querySelectorAll(".trending1");
let cancel=document.querySelectorAll("#cancel1");
let email="";
let sum="";
let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
trends.forEach((trend)=>{
    function info(){
        iid=trend.getAttribute("id");
        sum=iid+sum;
        console.log(sum);
        console.log("you clicked ",iid);
        if(iid=="pehela"){
            document.querySelector("#prothom").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#prothom").style.display="none";
                   
                   
                })
            });
        }

        else if(iid=="dusra"){
            document.querySelector("#dwitiya").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#dwitiya").style.display="none";
                })
            });
        }

        else if(iid=="teesra"){
            document.querySelector("#trithiya").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#trithiya").style.display="none";
                })
            });
        }

        else if(iid=="choutha"){
            document.querySelector("#chaturthi").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#chaturthi").style.display="none";
                })
            });
        }

        else if(iid=="pancham"){
            document.querySelector("#panchami").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#panchami").style.display="none";
                })
            });
        }

        else if(iid=="sashth"){
            document.querySelector("#sashthi").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#sashthi").style.display="none";
                })
            });
        }

        else if(iid=="sapt"){
            document.querySelector("#saptami").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#saptami").style.display="none";
                })
            });
        }

        else if(iid=="asth"){
            document.querySelector("#ashthami").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#ashthami").style.display="none";
                })
            });
        }

        else if(iid=="nav"){
            document.querySelector("#navami").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#navami").style.display="none";
                })
            });
        }

        else if(iid=="dash"){
            document.querySelector("#dashami").style.display="block";
            cancel.forEach((cancelEach)=>{
                cancelEach.addEventListener("click",()=>{
                   document.querySelector("#dashami").style.display="none";
                })
            });
        }

    }

    trend.addEventListener("click",info);
})
slidebar.addEventListener("click",()=>{
    console.log("slided");
    show.style.display="none";
    next.style.display="flex";
})

hellback.addEventListener("click",()=>{
    console.log("slided back");
    next.style.display="none";
    show.style.display="flex";
})


const inp= document.querySelector("#iny");
console.log(inp);
console.log(inp.value);

const btns=document.querySelectorAll(".boxes button");
console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener("click",(evt)=>{
        evt.preventDefault();
        //console.log(inp.value);
         email=inp.value;
         console.log(email);
         window.open("welcomeback.html","_blank");
         
    })
})
let bc=2345
const myData=bc;
const encoded= encodeURIComponent(myData);
document.querySelector('a').href=`welcomeback.html?data=${encoded}`;
























faqs.forEach((faq)=>{
    function ans(){
        aid=faq.getAttribute("id");
        console.log("Faq was clicked ",aid);
        if(aid==="1stq"){
            count1=count1+1;
            console.log(count1);
            if (count1%2 !=0){
                ans1.style.display="block";
                document.querySelector("#firstspan").innerText="X";
                document.querySelector("#firstspan").style.fontSize="40px";
    
            }
            else{
                ans1.style.display="none";
                document.querySelector("#firstspan").innerText="+";
                document.querySelector("#firstspan").style.fontSize="60px";
            }    
            // ans2.style.display="none";
            // ans3.style.display="none";
            // ans4.style.display="none";
            // ans5.style.display="none";
            // ans6.style.display="none";
                /*document.querySelector("#secondspan").innerText="+";
                document.querySelector("#secondspan").style.fontSize="60px";
                document.querySelector("#thirdspan").innerText="+";
                document.querySelector("#thirdspan").style.fontSize="60px"; 
                document.querySelector("#fourthspan").innerText="+";
                document.querySelector("#fourthspan").style.fontSize="60px";
                document.querySelector("#fifthspan").innerText="+";
                document.querySelector("#fifthspan").style.fontSize="60px";
                document.querySelector("#sixthspan").innerText="+";
                document.querySelector("#sixthspan").style.fontSize="60px";*/
        }


        else if(aid==="2ndq"){
            count2=count2+1;
            console.log(count2);
            if(count2%2 !=0){
                ans2.style.display="block";
                document.querySelector("#secondspan").innerText="X";
                document.querySelector("#secondspan").style.fontSize="40px";
            }
            else{
                ans2.style.display="none";
                document.querySelector("#secondspan").innerText="+";
                document.querySelector("#secondspan").style.fontSize="60px";
            }
            // ans1.style.display="none";
            // ans3.style.display="none";
            // ans4.style.display="none";
            // ans5.style.display="none";
            // ans6.style.display="none";
                /*document.querySelector("#firstspan").innerText="+";
                document.querySelector("#firstspan").style.fontSize="60px";
                document.querySelector("#thirdspan").innerText="+";
                document.querySelector("#thirdspan").style.fontSize="60px"; 
                document.querySelector("#fourthspan").innerText="+";
                document.querySelector("#fourthspan").style.fontSize="60px";
                document.querySelector("#fifthspan").innerText="+";
                document.querySelector("#fifthspan").style.fontSize="60px";
                document.querySelector("#sixthspan").innerText="+";
                document.querySelector("#sixthspan").style.fontSize="60px";*/
            
        }


        else if(aid==="3rdq"){
            count3=count3+1;
            console.log(count3)
            if(count3%2 !=0){
                ans3.style.display="block";
                document.querySelector("#thirdspan").innerText="X";
                document.querySelector("#thirdspan").style.fontSize="40px";
            }
            else{
                ans3.style.display="none";
                document.querySelector("#thirdspan").innerText="+";
                document.querySelector("#thirdspan").style.fontSize="60px";   
            }
            
            // ans1.style.display="none";
            // ans2.style.display="none";
            // ans4.style.display="none";
            // ans5.style.display="none";
            // ans6.style.display="none";
              /*  document.querySelector("#secondspan").innerText="+";
                document.querySelector("#secondspan").style.fontSize="60px";
                document.querySelector("#firstspan").innerText="+";
                document.querySelector("#firstspan").style.fontSize="60px"; 
                document.querySelector("#fourthspan").innerText="+";
                document.querySelector("#fourthspan").style.fontSize="60px";
                document.querySelector("#fifthspan").innerText="+";
                document.querySelector("#fifthspan").style.fontSize="60px";
                document.querySelector("#sixthspan").innerText="+";
                document.querySelector("#sixthspan").style.fontSize="60px";*/
            
        }
        else if(aid==="4thq"){
            count4=count4+1;
            console.log(count4);
            if(count4%2!=0){
                ans4.style.display="block";
                document.querySelector("#fourthspan").innerText="X";
                document.querySelector("#fourthspan").style.fontSize="40px";
            }
            else{
                ans4.style.display="none";
                document.querySelector("#fourthspan").innerText="+";
                document.querySelector("#fourthspan").style.fontSize="60px";
            }
            
            // ans1.style.display="none";
            // ans2.style.display="none";
            // ans3.style.display="none";
            // ans5.style.display="none";
            // ans6.style.display="none";
                /*document.querySelector("#secondspan").innerText="+";
                document.querySelector("#secondspan").style.fontSize="60px";
                document.querySelector("#thirdspan").innerText="+";
                document.querySelector("#thirdspan").style.fontSize="60px"; 
                document.querySelector("#firstspan").innerText="+";
                document.querySelector("#firstspan").style.fontSize="60px";
                document.querySelector("#fifthspan").innerText="+";
                document.querySelector("#fifthspan").style.fontSize="60px";
                document.querySelector("#sixthspan").innerText="+";
                document.querySelector("#sixthspan").style.fontSize="60px";*/

        }
        else if(aid==="5thq"){
            count5=count5+1
            console.log(count5);
            if(count5%2!=0){
                ans5.style.display="block";
                document.querySelector("#fifthspan").innerText="X";
                document.querySelector("#fifthspan").style.fontSize="40px";
                
            }
            else{
                ans5.style.display="none";
                document.querySelector("#fifthspan").innerText="+";
                document.querySelector("#fifthspan").style.fontSize="60px";
            }
            
            // ans1.style.display="none";
            // ans2.style.display="none";
            // ans3.style.display="none";
            // ans4.style.display="none";
            // ans6.style.display="none";
            /*document.querySelector("#secondspan").innerText="+";
                document.querySelector("#secondspan").style.fontSize="60px";
                document.querySelector("#thirdspan").innerText="+";
                document.querySelector("#thirdspan").style.fontSize="60px"; 
                document.querySelector("#fourthspan").innerText="+";
                document.querySelector("#fourthspan").style.fontSize="60px";
                document.querySelector("#firstspan").innerText="+";
                document.querySelector("#firstspan").style.fontSize="60px";
                document.querySelector("#sixthspan").innerText="+";
                document.querySelector("#sixthspan").style.fontSize="60px";*/
            
        }
        else if(aid==="6thq"){
            count6=count6+1;
            console.log(count6);
            if(count6%2!=0){
                ans6.style.display="block";
                document.querySelector("#sixthspan").innerText="X";
                document.querySelector("#sixthspan").style.fontSize="40px";
            }
            else{
                ans6.style.display="none";
                document.querySelector("#sixthspan").innerText="+";
                document.querySelector("#sixthspan").style.fontSize="60px";
            }
            
            // ans1.style.display="none";
            // ans2.style.display="none";
            // ans3.style.display="none";
            // ans4.style.display="none";
            // ans5.style.display="none";
            /*document.querySelector("#secondspan").innerText="+";
                document.querySelector("#secondspan").style.fontSize="60px";
                document.querySelector("#thirdspan").innerText="+";
                document.querySelector("#thirdspan").style.fontSize="60px"; 
                document.querySelector("#fourthspan").innerText="+";
                document.querySelector("#fourthspan").style.fontSize="60px";
                document.querySelector("#fifthspan").innerText="+";
                document.querySelector("#fifthspan").style.fontSize="60px";
                document.querySelector("#firstspan").innerText="+";
                document.querySelector("#firstspan").style.fontSize="60px";*/
        }




    }
    faq.addEventListener("click",ans)
});
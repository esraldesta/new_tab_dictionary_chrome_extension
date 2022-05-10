console.log("sending message from newtab script");
document.getElementById("submitbtn").addEventListener("click",(data)=>{
   const word= document.getElementById("myinput").value
   console.log("sending the word");
   chrome.runtime.sendMessage({"name":word},(mydata)=>{
    console.log("this is the data",mydata);
    mymain = document.getElementById("mymain")
    document.body.appendChild(mymain)
    for(data of mydata){
       var meaning = data["shortdef"] 
       const par= document.createElement("p")
       par.innerText = meaning  
       mymain.appendChild(par)
    }

    });
})


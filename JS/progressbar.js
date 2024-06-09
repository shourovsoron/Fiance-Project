let ProgressBar = document.querySelectorAll(".Progressbar");
let Allprogress = document.querySelector(".Progressbar");



Array.from(ProgressBar).forEach((progressitem)=>{
    let ProgressDone = document.createElement("div");

    let ProgressparentNode = progressitem.parentNode.parentNode;

    let ProgressDisplay = ProgressparentNode.querySelector(".ProgressDisplay");
    ProgressDone.classList="ProgressDone";
    // ProgressDisplay.classList="ProgressDisplay";


    progressitem.appendChild(ProgressDone); 
    // progressitem.appendChild(ProgressDisplay); 
 
    let ProgressValue = progressitem.getAttribute("data-num");
 
    let counter = 0;


    setInterval(()=>{
        if(counter>=ProgressValue){
            clearInterval;
            
        }else{
            counter = counter + 1;          
            ProgressDisplay.innerText = counter+"%";
            ProgressDone.style.maxWidth = `${counter}%`;

            if(counter>=90){
                ProgressDone.style.background = "#A3DC2F";
            }
           

           
        }
    },10)

   

  
   
  
});




// function progressStart(){


// }

// Allprogress.addEventListener("screen", progressStart);
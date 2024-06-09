let ProgressBar = document.querySelectorAll(".Progressbar");
let Allprogress = document.querySelector(".Progressbar");

function startProgress(){


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


}

startProgress()


document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById('AllProgress');

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is in view!');


          // Call your function here

          Array.from(ProgressBar).forEach((progressitem)=>{
            let ProgressDone = progressitem.querySelectorAll(".ProgressDone");
    
            ProgressDone.forEach((everyitem)=>{
                everyitem.remove();

            })
          });
          startProgress()
          
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: .4 // Trigger the callback when 100% of the target is visible
    });

    observer.observe(target);

    // function yourFunction() {
    //   alert('The target element is now visible on the screen!');
    // }
  });




// function progressStart(){


// }

// Allprogress.addEventListener("screen", progressStart);
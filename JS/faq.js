const faq = document.querySelector(".allfaq")




function activeFAQ(faq){
    // console.log("opened");

    const currentFAQ = faq.parentNode;
    
    const active = document.querySelector(".active-faq");
  
    if (active && !currentFAQ.classList.contains("active-faq")) {
      active.classList.remove("active-faq");
      const currentFAQbtn = active.querySelector(".faq-open-btn");
      currentFAQbtn.innerHTML="+";
    }
  
    currentFAQ.classList.toggle("active-faq");
    const currentFAQbtn = currentFAQ.querySelector(".faq-open-btn");
    // currentFAQbtn.innerHTML="-";

    if(currentFAQbtn.innerHTML=="-"){
        currentFAQbtn.innerHTML="+";
    }else if(currentFAQbtn.innerHTML=="+"){
        currentFAQbtn.innerHTML="-";
    }



    

 
}


const counts = document.querySelectorAll('.count')
counts.forEach((counter) => {
   
      
        // if(count < target){
           
        //     setTimeout(upData, 1)
        // }else{
        //  counter.innerText = target
        // }   

        const target = counter.getAttribute('data-target');
        let count = 0;
        console.log(target);


        setInterval(()=>{
            if(count>=target){
                clearInterval;
                
            }else{
                count = count+1;
                counter.innerText = count+"%";

               
            }
        },15)
});
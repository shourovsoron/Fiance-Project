
function startCounter(){

    const counts = document.querySelectorAll('.count')
    counts.forEach((counter) => {
   

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
        },10)
    });

}
startCounter()


document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector('.count');

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is in view!');


          // Call your function here

          startCounter()
          
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



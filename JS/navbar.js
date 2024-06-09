const navbar = document.getElementById("main-menu");
const body = document.getElementsByTagName("body");
const header = document.getElementById("header");
const mobileMenu = document.createElement("ul");
const mobileDrwaer = document.createElement("div");
const mobileDrwaerContent = document.createElement("div");
const mobileDrwaerbtns = document.createElement("div");
mobileDrwaerbtns.classList="mobileDrawerbtn";

const headerRight = document.querySelector(".header-right-btn");
const headerArea = document.querySelector(".header-area");

const crossbtn=document.createElement("a");
const OpenMenu=document.createElement("a");

crossbtn.classList="closebtn";
OpenMenu.classList="OpenMenu";

crossbtn.innerHTML=`<i class="fa-regular fa-circle-xmark"></i>`;
OpenMenu.innerHTML=`<i class="fa-solid fa-bars"></i>`;


headerArea.appendChild(OpenMenu);

mobileDrwaer.classList="mobileDrawer";
mobileDrwaerContent.classList="mobileDrawerContent";



//Append Child in Mobile Drawer//

mobileDrwaerContent.appendChild(mobileMenu);
mobileDrwaerContent.appendChild(crossbtn);
mobileDrwaerContent.appendChild(mobileDrwaerbtns);
mobileDrwaer.appendChild(mobileDrwaerContent);


const myMenu = navbar.querySelector("ul")





window.addEventListener("resize", resizeFunction);

function resizeFunction(){
    if(window.innerWidth<776){

        navbar.classList.add("hidden"); 
        OpenMenu.style.display="inline-block"
        
        Array.from(myMenu.children).forEach((menuItem)=>{
            mobileMenu.appendChild(menuItem);
            header.appendChild(mobileDrwaer);
            // mobileDrwaer.classList.add("ShowDrawer");      
        
        });

        Array.from(headerRight.children).forEach((btnItem)=>{
            mobileDrwaerbtns.appendChild(btnItem);
          
        })
        
        
    }else{
        navbar.classList.remove("hidden"); 
        OpenMenu.style.display="none"

        Array.from(mobileMenu.children).forEach((menuItem)=>{
            myMenu.appendChild(menuItem);
            // mobileDrwaer.classList.remove("ShowDrawer"); 
            

        })

        Array.from(mobileDrwaerbtns.children).forEach((btnItem)=>{
            headerRight.appendChild(btnItem);
        })
          
    }
}


if(window.innerWidth<776){
    navbar.classList.add("hidden"); 
    OpenMenu.style.display="inline-block"

    Array.from(myMenu.children).forEach((menuItem)=>{
        mobileMenu.appendChild(menuItem);
        header.appendChild(mobileDrwaer);
        // mobileDrwaer.classList.add("ShowDrawer");
    
    });

    Array.from(headerRight.children).forEach((btnItem)=>{
        mobileDrwaerbtns.appendChild(btnItem);
    })
    
    
}else{
    navbar.classList.remove("hidden"); 
    OpenMenu.style.display="none"

    Array.from(mobileMenu.children).forEach((menuItem)=>{
        myMenu.appendChild(menuItem);
        // mobileDrwaer.classList.remove("ShowDrawer"); 
        

    })

    Array.from(mobileDrwaerbtns.children).forEach((btnItem)=>{
        headerRight.appendChild(btnItem);
    })
      
}

crossbtn.addEventListener("click", ()=>{
    mobileDrwaer.classList.remove("ShowDrawer"); 
});

OpenMenu.addEventListener("click", ()=>{
    mobileDrwaer.classList.toggle("ShowDrawer"); 
});

mobileDrwaerContent.addEventListener("click", (e)=>{
    // mobileDrwaer.classList.toggle("ShowDrawer"); 
    if(e.target.tagName == "A"){
        mobileDrwaer.classList.remove("ShowDrawer"); 
    }
        // console.log(e.target.tagName)
});




console.log(header);


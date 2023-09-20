    
    const  handle=()=> {
      let chemin;
      const tableau=document.querySelectorAll("#change");
      tableau.forEach((element)=>{
        element.addEventListener("click",()=>{
          chemin=element.attributes["1"].value
          console.log(chemin)
         const banniere=document.querySelector("#BANNER");
          banniere.style.backgroundImage=`url(${chemin})`
        });
      });
 } ;     
  handle();  
  
   
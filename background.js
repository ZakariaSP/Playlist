
       var backg1 = document.getElementById("backg1");
       backg1.addEventListener("click", ()=>{
         change_color("backg1");
       });
       var backg2 = document.getElementById("backg2");
       backg2.addEventListener("click", ()=>{
         change_color("backg2");  
       });
       var backg3 = document.getElementById("backg3");
       backg3.addEventListener("click", ()=>{
        change_color("backg3"); 
       });

       if(localStorage.getItem("Color")==null){
        document.getElementById("header").style.background = "#6495ed";
        document.getElementById("foot").style.background = "#6495ed";
       }
       change_color(localStorage.getItem("Color"));
       
    function change_color(color){
        if(color=="backg1"){
          document.getElementById("header").style.background = "#6495ed";
          document.getElementById("foot").style.background = "#6495ed";
         
        }else if(color=="backg2"){
            document.getElementById("header").style.background = "rgb(252, 82, 82)"; 
            document.getElementById("foot").style.background = "rgb(252, 82, 82)"; 
            
        }else if(color=="backg3"){
            document.getElementById("header").style.background = "#51f0bb";
            document.getElementById("foot").style.backgroundColor = "#51f0bb";
             
        }
        localStorage.setItem("Color",color);
    }


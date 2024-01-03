$(document).ready (() =>{

    var hit = 0
        var misses = 0
        


    
       

        $("#belgica").click (() => {
            $("#belgica").css("background-color", "green");
            hit++;
            console.log("Acertos = " + hit);

            if (hit==1) { alert ("CORRETO")
        
               
                $('#seta_q1').attr("href",'Nivel2.html')}
             
            else if (hit==2){
                alert ("ERRO! Opção inválida.")

} if (hit==1) {$ ("#c01").html(hit)};    


       
            
})         
        $ ("#alemanha").click (()=>{
            $("#alemanha").css("background-color", "red");
            misses++;
            console.log ("Erros = " + misses);
            if (misses<=2) {alert ("INCORRETO")}

            if (misses>=2) {var myTimeout = setTimeout(myUrl, 1000)
 
    
 function myUrl() { location.href = 'file:///C:/Users/grautecnico/Suellen/Flag-Quiz-jquery-main/GameOver.html'}
            }
            
            
            
            

            if (misses<=2) {$ ("#c00").html(misses)};
        })

        $ ("#andorra").click (()=>{
            $("#andorra").css("background-color", "red");
            misses++;
            console.log ("Erros = " + misses);
            if (misses>=1) { alert ("INCORRETO")}

            if (misses>=2) {var myTimeout = setTimeout(myUrl, 1000)
 
    
 function myUrl() { location.href = 'file:///C:/Users/grautecnico/Suellen/Flag-Quiz-jquery-main/GameOver.html'}}


             
            
            if (misses<=2) {$ ("#c00").html(misses)} 
  





})

})

$(document).ready (() =>{


$("#alemanha").on("click", function(){
  $(this).prop("disabled", true);
})

$("#andorra").on("click", function(){
  $(this).prop("disabled", true);
}) })

    
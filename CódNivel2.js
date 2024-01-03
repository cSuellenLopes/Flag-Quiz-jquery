$(document).ready (() =>{

    var hit = 0
        var misses = 0
        
    
    
    
       
    
        $("#dinamarca").click (() => {
            $("#dinamarca").css("background-color", "green");
            hit++;
            console.log("Acertos = " + hit);
    
            if (hit==1) { alert ("CORRETO")
        
               
                $('#seta_2quest').attr("href",'Nivel3.html')}
             
            else if (hit==2){
                alert ("ERRO! Opção inválida.")
    
    } if (hit==1) {$ ("#c01").html(hit)};    
    
    
       
            
    })         
        $ ("#finlandia").click (()=>{
            $("#finlandia").css("background-color", "red");
            misses++;
            console.log ("Erros = " + misses);
            if (misses<=2) {alert ("INCORRETO")}
    
            if (misses>=2) {var myTimeout = setTimeout(myUrl, 1000)
    
    
    function myUrl() { location.href = 'file:///C:/Users/grautecnico/Suellen/Flag-Quiz-jquery-main/GameOver.html'}
            }
            
            
            
            
    
            if (misses<=2) {$ ("#c00").html(misses)};
        })
    
        $ ("#suiça").click (()=>{ 
      $("#suiça").css("background-color", "red");
            misses++;
            console.log ("Erros = " + misses);
            if (misses>=1) { alert ("INCORRETO")}
    
            if (misses>=2) {var myTimeout = setTimeout(myUrl, 1000)
    
    
    function myUrl() { location.href = 'file:///C:/Users/grautecnico/Suellen/Flag-Quiz-jquery-main/GameOver.html'}}
    
    
            
            
            if (misses<=2) {$ ("#c00").html(misses)} 
    
    
    
    
    
    
    })
    
    })
    
    
    
    
    $(document).ready (() =>{
    
    
    $("#suiça").on("click", function(){
      $(this).prop("disabled", true);
    })
    
    $("#finlandia").on("click", function(){
      $(this).prop("disabled", true);
    }) })
    
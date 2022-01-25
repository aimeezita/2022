function valida(){
    let nome = document.getElementById("autoSizingInput")
    if(nome.value ==""){
        alert("Nome não informado");
        nome.focus();
    }
    else{
        let resposta = window.confirm("Deseja enviar os dados agora?");
        if(resposta)
         true; alert("Dados enviados com sucesso")
         
        
    }}


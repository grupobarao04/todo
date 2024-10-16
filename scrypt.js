const novaTarefa = document.getElementById('novaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const Listatarefa = document.getElementById('listaTarefa');

btnAddTarefa.addEventListener('click', function(){
    const tarefa = novaTarefa.Value;
   
     // se a tarefa for diferente de vazia execulta 
    if(tarefa !=  " "){

    const li =  document.createElement('li');
    
    li.textContent = novaTarefa;
    
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener('click', function(){
        li.remove();
    });


    li.appendChild(botaoRemover);
    Listatarefa.appendChild(li);

    novaTarefa.value = "";
    }
    


    

});
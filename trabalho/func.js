 //recebendo tarefas
 var tar = document.getElementById('ta')
 //vetor pra guardar as tarefas e ajudar nos futuros testes
 var vetor = []
 //lista de tarefas
 var selta = document.getElementById('seltar')
 //variáveis pra guardar o índice das tarefass
 var ind 


//função pra verificar se a tarefa já foi adicionada
function existe() {
    //verificar se a tarefa já está guardada no array
    if (vetor.indexOf(tar.value)== -1) {
        return true//retornar 'afirmativo'
    } else {
        return false//retornar 'negativo'
    }
    
}

 //funçãoo pra adicionar tarefas
function adicionar() {
    //criando itens pra listar as tarefas
    var list = document.createElement('option')

    //adicionar uma ação
    list.setAttribute('onclick','apagar()')


    //verificar existe uma tarefa para adicionar
    if (ta.value.length==0) {
        //Informando que é preciso digitar uma tarefa
        window.alert('Sem tarefa para adicionar')
    }else{
        //verificar se a tarefa já existe
        if (existe()) {
            
            //guardando a tarefa no vetor
            vetor.push(tar.value)

            //pegando o índice do tarefa do vetor
            ind = vetor.indexOf(tar.value)

            //inserir tarefa no item, tirando do vetor
            list.text = vetor[ind]

            //inserindo a tarefa na lista
            selta.appendChild(list)
            
            //apagar o texto no input das tarefas
            tar.value = ''
            //Manter o foco no input
            tar.focus()
        } else {
            //tarefa não pode ser adicionada
            window.alert('Tarefa já existente')
        }
    }
    
}

//Apagar uma tarefas
function apagar() {
    //vai apagar
    var res = window.confirm('Pretendes Apagar a tarefa: '+selta.value+'?')//vai a presentar na tela a tarefa que foi clickada
    //mostrar que botão foi clickado
    //window.alert('Resposta: '+res)
    if (res == true) {
        window.alert('Vamos apagar essa tarefa')//avisando que vamos apagar
        ind = vetor.indexOf(selta.value)//founding the indexOf the element into the aray
        vetor[ind] = ''//apagando o elemento do vetor

        var op = document.createElement('option')//craindo uma tag option dynamicamente
        op.text = selta.value//colocando a tarefa selecionada dentro da opção

        //apagando da lista
        
        
    } else {
        window.alert('Não vamos apagar essa tarefa')//avisando que não vamos apagar
    }
}
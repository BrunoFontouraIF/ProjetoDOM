/* Variavel do "radio", um significa que urgente está marcado, e zero significa que não urgente está marcado!!*/
var x = 1;


/* Função dos "radios" */

function seturgente() {

    document.getElementById("radiourg").checked = true;
    x = 1;

}

function setnaourgente() {

    document.getElementById("radiourg").checked = false;
    x = 0;

}

/* Função para inserir uma nota */

function inserir() {
	
	var n = document.getElementById("nota");
    var campo = n.value.trim();

    if (campo == "") {
		
        alert("Não há nada escrito no campo de texto para inserir!");
        return;
		
    }
	
    if (x == 1) {

        var criar = document.createElement("li");
        criar.innerText = document.getElementById("nota").value;
        criar.id = "item"

        var urg = document.getElementById("urgente");
        urg.appendChild(criar);

    } else {

        var criar = document.createElement("li");
        criar.innerText = document.getElementById("nota").value;
        criar.id = "item"

        var nonurg = document.getElementById("naourgente");
        nonurg.appendChild(criar);

    }
	
	/* Isso, logo abaixo, esvazia o campo de texto depois que a nota é inserida */
	n.value = "";
	

}

/* Função para remover uma nota */

function remover() {
	
	var urg = document.getElementById("urgente");
    var naourg = document.getElementById("naourgente");

    if (x == 1) {
		
        if (urg.lastElementChild) {
			
            urg.removeChild(urg.lastElementChild);
			
        } else {
			
            alert("Esta lista já está vazia; não é possível remover um item dela.");
        
		}
		
    } else {
		
        if (naourg.lastElementChild) {
			
            naourg.removeChild(naourg.lastElementChild);
			
        } else {
			
            alert("Esta lista já está vazia; não é possível remover um item dela.");
			
        }
    }
}

/* Limpar todos os itens de uma lista */

function limpar() {
	
	var urg = document.getElementById("urgente");
	var naourg = document.getElementById("naourgente");

	if (x == 1) {
        
		if (urg.children.length == 0) {
			
            alert("Não há itens nesta lista para remover.");
            return;
			
        }

        if (confirm("Remover todos os itens da lista selecionada?")) {
			
            urg.innerHTML = "";
            alert("Lista esvaziada.");
			
        }
		
    } else {
        
		if (naourg.children.length == 0) {
			
            alert("Não há itens nesta lista para remover.");
            return;
			
        }

        if (confirm("Remover todos os itens da lista selecionada?")) {
			
            naourg.innerHTML = "";
            alert("Lista esvaziada.");
			
        }
    }
}
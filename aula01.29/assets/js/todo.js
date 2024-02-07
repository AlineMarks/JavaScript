class Tarefa {
	constructor(titulo, data, horario, descricao ){
		this.titulo = titulo
		this.descricao = descricao
		this.data = data
		this.horario = horario
		
		
	}

	validarDados() {
		for (let i in this) {
			if (this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
	}
}

// classe banco de dados
class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if (id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	recuperarTodosRegistros() {

		//array de tarefa
		let tarefas = Array()

		let id = localStorage.getItem('id')

		//recuperar todas as tarefa cadastradas em localStorage
		for (let i = 1; i <= id; i++) {

			//recuperar a tafera
			let tarefa = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if (tarefa === null) {
				continue
			}
			tarefa.id = i
			tarefas.push(tarefa)
		}

		return tarefas
	}

	pesquisar(tarefa) {

		let tarefasFiltradas = Array()
		tarefasFiltradas = this.recuperarTodosRegistros()
		console.log(tarefasFiltradas);
		console.log(tarefa)

		//titulo
		if (tarefa.titulo != '') {
			tarefasFiltradas = tarefasFiltradas.filter(d => d.titulo == tarefa.titulo)
		}

		//data
		if (tarefa.data != '') {
			tarefasFiltradas = tarefasFiltradas.filter(d => d.data == tarefa.data)
		}

		//horario
		if (tarefa.horario != '') {
			tarefasFiltradas = tarefasFiltradas.filter(d => d.horario == tarefa.horario)
		}

		//descricao
		if (tarefa.descricao != '') {
			tarefasFiltradas = tarefasFiltradas.filter(d => d.descricao == tarefa.descricao)
		}

		return tarefasFiltradas

	}

	remover(id) {
		localStorage.removeItem(id)
	}
}


let bd = new Bd()


function cadastrarTarefas() {

	let titulo = document.getElementById('titulo')
	let descricao = document.getElementById('descricao')
	let data = document.getElementById('data')
	let horario = document.getElementById('horario')


	let tarefa = new Tarefa(
		titulo.value,
		horario.value,
		data.value,
		descricao.value,
	)


	if (tarefa.validarDados()) {
		bd.gravar(tarefa)

		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'tarefa foi cadastrada com sucesso!'
		document.getElementById('modal_btn').innerHTML = 'Voltar'
		document.getElementById('modal_btn').className = 'btn btn-success'

		//dialog de sucesso
		$('#modalRegistratarefa').modal('show')

		titulo.value = ''
		horario.value = ''
		data.value = ''
		descricao.value = ''

	} else {

		document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
		document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
		document.getElementById('modal_btn').className = 'btn btn-danger'

		//dialog de erro
		$('#modalRegistraTarefa').modal('show')
	}
}

function carregaListaTarefas(tarefas = Array(), filtro = false) {

	if (tarefas.length == 0 && filtro == false) {
		tarefas = bd.recuperarTodosRegistros()
	}

	let listatarefas = document.getElementById("listatarefas")
	listatarefas.innerHTML = ''
	tarefas.forEach(function (d) {

		//Criando a linha (tr)
		var linha = listatarefas.insertRow();

		//Criando as colunas (td)
		linha.insertCell(0).innerHTML = `${d.horario} - ${d.data}`

		linha.insertCell(1).innerHTML = d.titulo
		linha.insertCell(2).innerHTML = d.descricao

		let cellAcoes = linha.insertCell(3);
		let btnConcluir = document.createElement('button');
		btnConcluir.id = `btnConcluir_${d.id}`;
		btnConcluir.className = d.concluida ? 'btn btn-success' : 'btn btn-secondary';
		btnConcluir.innerHTML = d.concluida ? 'Concluído' : 'Concluir';
		btnConcluir.onclick = function () {
			toggleConcluir(d.id);
		};
		cellAcoes.appendChild(btnConcluir);


		//Criar o botão de exclusão
		let btn = document.createElement('button')
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="fa fa-times"  ></i>'
		btn.id = `id_tarefa_${d.id}`
		btn.onclick = function () {
			let id = this.id.replace('id_tarefa_', '')
			//alert(id)
			bd.remover(id)
			window.location.reload()
		}
		linha.insertCell(4).append(btn)
		console.log(d)
	})

}

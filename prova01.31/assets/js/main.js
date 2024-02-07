class  ClinicaConsulta{
	constructor(nome, cpf, data, horario, procedimento) {
		this.nome = nome
		this.cpf = cpf
		this.data = data
		this.horario = horario
		this.procedimento = procedimento
	}

	validarDados() {
		for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
	}
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
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

		//array de despesas
		let consultas = Array()

		let id = localStorage.getItem('id')

		//recuperar todas as despesas cadastradas em localStorage
		for(let i = 1; i <= id; i++) {

			//recuperar a despesa
			let consulta = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(consulta === null) {
				continue
			}
			consulta.id = i
			consultas.push(consulta)
		}

		return consultas
	}

	pesquisar(consulta){

		let consultasFiltradas = Array()
		consultasFiltradas = this.recuperarTodosRegistros()


		//ano
		if(consulta.nome != ''){
			consultasFiltradas = consultasFiltradas.filter(d => d.nome == consulta.nome)
		}

        if(consulta.cpf != ''){
			consultasFiltradas = consultasFiltradas.filter(d => d.cpf == consulta.cpf)
		}
        
        if(consulta.data != ''){
			consultasFiltradas = consultasFiltradas.filter(d => d.data == consulta.data)
		}
                
        if(consulta.horario != ''){
			consultasFiltradas = consultasFiltradas.filter(d => d.horario == consulta.horario)
		}
        if(consulta.procedimento != ''){
			consultasFiltradas = consultasFiltradas.filter(d => d.procedimento == consulta.procedimento)
		}


		
		return consultasFiltradas

	}

	remover(id){
		localStorage.removeItem(id)
	}
}

let bd = new Bd()

function cadastrarConsulta() {

	let nome = document.getElementById('nome')
	let cpf = document.getElementById('cpf')
	let data = document.getElementById('data')
	let horario = document.getElementById('horario')
	let procedimento = document.getElementById('procedimento')

	let consulta = new ClinicaConsulta(
        nome.value, 
		cpf.value, 
		data.value, 
		horario.value, 
		procedimento.value
	)


	if(consulta.validarDados()) {
		bd.gravar(consulta)

		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'Sua consulta foi marcada com sucesso!'
		document.getElementById('modal_btn').innerHTML = 'Voltar'
		document.getElementById('modal_btn').className = 'btn btn-success'

		//dialog de sucesso
		$('#modalRegistraConsulta').modal('show') 

		nome.value = '' 
		cpf.value = ''
		data.value = ''
		horario.value = ''
		procedimento.value = ''
		
	} else {
		
		document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
		document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
		document.getElementById('modal_btn').className = 'btn btn-danger'

		//dialog de erro
		$('#modalRegistraConsulta').modal('show') 
	}
}


function carregaListaConsultas(consultas = Array(), filtro = false) {

    if(consultas.length == 0 && filtro == false){
		consultas = bd.recuperarTodosRegistros() 
	}
    

	let listaConsultas = document.getElementById("listaConsultas")
    listaConsultas.innerHTML = ''
	consultas.forEach(function(d){
		var linha = listaConsultas.insertRow();

        linha.insertCell(0).innerHTML = `${d.data} - ${d.horario}` 

        switch(d.procedimento){
			case '1': d.tipo = 'Consulta'
				break
			case '2': d.tipo = 'Radiofrequência'
				break
			case '3': d.tipo = 'Massagem modeladora '
				break
			case '4': d.tipo = 'Drenagem linfática'
				break
			case '5': d.tipo = 'Corrente Aussie'
				break
            case '6': d.tipo = 'Botox'
				break
			
		}
        
		linha.insertCell(1).innerHTML = d.nome
        linha.insertCell(2).innerHTML = d.cpf
		linha.insertCell(3).innerHTML = d.procedimento

		//Criar o botão de exclusão
		let btn = document.createElement('button')
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="fa fa-times"  ></i>'
		btn.id = `id_consulta_${d.id}`
		btn.onclick = function(){
			let id = this.id.replace('id_consulta_','')
			bd.remover(id)
			window.location.reload()
		}
		linha.insertCell(4).append(btn)
	})

 }
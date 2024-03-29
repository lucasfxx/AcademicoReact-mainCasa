class AlunoService {

    getAll(){
        const alunos = localStorage.getItem('alunos')
        return alunos ? JSON.parse(alunos) : []


    }
    get(id){

    }

    create(dados){
        const alunos = this.getAll()
        alunos.push(dados)
        localStorage.setItem('alunos', JSON.stringify(alunos))


    }

    update(id, dados){
        const alunos = this.getAll()
            alunos.splice(id, 1, dados)
            localStorage.setItem('alunos', JSON.stringify(alunos))

    }

    delete(id){
        const alunos = this.getAll()
            alunos.splice(id, 1)
            localStorage.setItem('alunos', JSON.stringify(alunos))

    }

}
export default new AlunoService()
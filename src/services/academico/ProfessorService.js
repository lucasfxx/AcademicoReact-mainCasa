class ProvessorService {

    getAll(){
        const professores = localStorage.getItem('professores')
        return professores ? JSON.parse(professores) : []


    }
    get(id){

    }

    create(dados){
        const professores = this.getAll()
        professores.push(dados)
        localStorage.setItem('professores', JSON.stringify(professores))


    }

    update(id, dados){

    }

    delete(id){

    }

}
export default new ProvessorService()
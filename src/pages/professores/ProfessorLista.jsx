import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom"
import ProfessorService from "../../services/academico/ProfessorService"

const ProfessorLista = () => {

    const[professores, setProfessores] = useState([])

    useEffect(()=>{

        setProfessores(ProfessorService.getAll())
        }, [])


    
  return (
    <div> 
        <h1>Professores</h1>

        <Link className='btn btn-info mb-3' to={'/professores/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Matricula</th>
                        <th>salario</th>
                        <th>email</th>
                        <th>telefone</th>
                        <th>cep</th>
                        <th>Logadouro</th>
                        <th>complemento</th>
                        <th>numero</th>
                        <th>bairro</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {professores.map((item, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default ProfessorLista
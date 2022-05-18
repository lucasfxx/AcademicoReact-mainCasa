import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaPlus } from 'react-icons/fa';
import { BiCool} from 'react-icons/bi';
import { Link } from "react-router-dom"
import ProfessorService from "../../services/academico/ProfessorService"

const ProfessorLista = () => {

    const[professores, setProfessores] = useState([])

    useEffect(()=>{

        setProfessores(ProfessorService.getAll())
        }, [])

        function apagar(id){
            if(window.confirm("Tem certeza?"))
            ProfessorService.delete(id)
            setProfessores(ProfessorService.getAll())
            }
    


    
  return (
    <div> 
        <h1>Professores</h1>

        <Link className='btn btn-info mb-3' to={'/professores/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><BiCool/></th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Matricula</th>
                        <th>Salario</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Cep</th>
                        <th>Logadouro</th>
                        <th>Complemento</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {professores.map((item, i) => (
                        <tr key={i}>
                            <td>
                               <Link to={'/professores/' + i}><BsPencilFill /></Link>{''}

                            <AiTwotoneDelete onClick={()=>apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
                            <td>{item.salario}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                            <td>{item.logadouro}</td>
                            <td>{item.complemento}</td>
                            <td>{item.numero}</td>
                            <td>{item.bairro}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default ProfessorLista
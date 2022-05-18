import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaPlus } from 'react-icons/fa';
import { BiCool} from 'react-icons/bi';
import { Link } from "react-router-dom"
import AlunoService from "../../services/academico/AlunoService"

const AlunoLista = () => {

    const[alunos, setAlunos] = useState([])

    useEffect(()=>{

        setAlunos(AlunoService.getAll())
        }, [])

        function apagar(id){
            if(window.confirm("Tem certeza?"))
            AlunoService.delete(id)
            setAlunos(AlunoService.getAll())
            }
    


    
  return (
    <div> 
        <h1>Alunos</h1>

        <Link className='btn btn-info mb-3' to={'/alunos/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><BiCool/></th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Matricula</th>
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
                    {alunos.map((item, i) => (
                        <tr key={i}>
                            <td>  
                                <Link to={'/alunos/' + i}><BsPencilFill /></Link>{''}

                            <AiTwotoneDelete onClick={()=>apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
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
export default AlunoLista
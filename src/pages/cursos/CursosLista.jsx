import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BsPencilFill} from 'react-icons/bs';
import { FaPlus} from 'react-icons/fa';
import { AiTwotoneDelete} from 'react-icons/ai';
import { BiCool} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import CursoService from '../../services/academico/CursoService';

const CursoLista = () => {

    const[cursos, setCursos] = useState([])

    useEffect(()=>{

        setCursos(CursoService.getAll())
        }, [])

        function apagar(id){
        if(window.confirm("Tem certeza?"))
        CursoService.delete(id)
        setCursos(CursoService.getAll())
        }

        
    
  return (
    <div> 
        <h1>Cursos</h1>

        <Link className='btn btn-info mb-3' to={'/cursos/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><BiCool/></th>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((item, i) => (
                        <tr key={i}>
                            <td>
                               <Link to={'/cursos/' + i}><BsPencilFill /></Link>{''}

                                <AiTwotoneDelete onClick={()=>apagar(i)} className='text-danger' />

                                            </td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default CursoLista
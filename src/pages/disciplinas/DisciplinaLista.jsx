import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BsPencilFill} from 'react-icons/bs';
import { FaPlus} from 'react-icons/fa';
import { AiTwotoneDelete} from 'react-icons/ai';
import { BiCool} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import DisciplinaService from '../../services/academico/DisciplinaService';

const DisciplinaLista = () => {

    const[disciplinas, setDisciplinas] = useState([])

    useEffect(()=>{

        setDisciplinas(DisciplinaService.getAll())
        }, [])

        function apagar(id){
        if(window.confirm("Tem certeza?"))
        DisciplinaService.delete(id)
        setDisciplinas(DisciplinaService.getAll())
        }

        
    
  return (
    <div> 
        <h1>Disciplinas</h1>

        <Link className='btn btn-info mb-3' to={'/disciplinas/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><BiCool/></th>
                        <th>Nome</th>
                        <th>Curso</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item, i) => (
                        <tr key={i}>
                            <td>
                               <Link to={'/disciplinas/' + i}><BsPencilFill /></Link>{''}

                                <AiTwotoneDelete onClick={()=>apagar(i)} className='text-danger' />

                                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default DisciplinaLista
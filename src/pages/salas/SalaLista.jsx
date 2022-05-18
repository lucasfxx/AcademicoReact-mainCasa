import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BsPencilFill} from 'react-icons/bs';
import { FaPlus} from 'react-icons/fa';
import { AiTwotoneDelete} from 'react-icons/ai';
import { BiCool} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SalaService from '../../services/academico/SalaService';

const SalaLista = () => {

    const[salas, setSalas] = useState([])

    useEffect(()=>{

        setSalas(SalaService.getAll())
        }, [])

        function apagar(id){
        if(window.confirm("Tem certeza?"))
        SalaService.delete(id)
        setSalas(SalaService.getAll())
        }

        
    
  return (
    <div> 
        <h1>Salas</h1>

        <Link className='btn btn-info mb-3' to={'/salas/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><BiCool/></th>
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {salas.map((item, i) => (
                        <tr key={i}>
                            <td>
                               <Link to={'/salas/' + i}><BsPencilFill /></Link>{''}

                                <AiTwotoneDelete onClick={()=>apagar(i)} className='text-danger' />

                                            </td>
                            <td>{item.nome}</td>
                            <td>{item.capacidade}</td>
                            <td>{item.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default SalaLista
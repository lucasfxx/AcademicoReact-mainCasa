import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BsPencilFill} from 'react-icons/bs';
import { FaPlus} from 'react-icons/fa';
import { AiTwotoneDelete} from 'react-icons/ai';
import { BiCool} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SemestreService from '../../services/academico/SemestreService';

const SemestreLista = () => {

    const[semestres, setSemestres] = useState([])

    useEffect(()=>{

        setSemestres(SemestreService.getAll())
        }, [])

        function apagar(id){
        if(window.confirm("Tem certeza?"))
        SemestreService.delete(id)
        setSemestres(SemestreService.getAll())
        }

        
    
  return (
    <div> 
        <h1>Semestres</h1>

        <Link className='btn btn-info mb-3' to={'/semestres/create'}><FaPlus /> Novo</Link>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><BiCool/></th>
                        <th>Nome</th>
                        <th>Data_Inicio</th>
                        <th>Data_Fim</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((item, i) => (
                        <tr key={i}>
                            <td>
                               <Link to={'/semestres/' + i}><BsPencilFill /></Link>{''}

                                <AiTwotoneDelete onClick={()=>apagar(i)} className='text-danger' />

                                            </td>
                            <td>{item.nome}</td>
                            <td>{item.data_inicio}</td>
                            <td>{item.data_fim}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default SemestreLista
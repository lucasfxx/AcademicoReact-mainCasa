import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import SemestreService from '../../services/academico/SemestreService';
import semestreValidator from '../../validadors/semestreValidator';



  const Semestres = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
      if (params.id) {
      const semestre = SemestreService.get(params.id)

      for (let campo in semestre) {
        setValue(campo, semestre[campo])
      }
    }
  }, [])

  function salvar(dados) {


    if(params.id){
      SemestreService.update(params.id, dados)
    } else {
      SemestreService.create(dados)
    }
  
    Navigate('/semestres')
    
  }

  return (
    <div>
      <h1>Semestre</h1>

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome } type="text" {...register("nome", semestreValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data_inicio">
          <Form.Label>data_inicio: </Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="text" {...register("data_inicio", semestreValidator.data_inicio)} />
          {errors.data_inicio && <span>{errors.data_inicio.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data_fim">
          <Form.Label>data_fim: </Form.Label>
          <Form.Control isInvalid={errors.data_fim} type="text" {...register("data_fim", semestreValidator.data_fim)} />
          {errors.data_fim && <span>{errors.data_fim.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Semestres
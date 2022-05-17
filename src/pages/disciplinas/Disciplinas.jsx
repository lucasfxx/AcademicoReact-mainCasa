import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DisciplinaService from '../../services/academico/DisciplinaService';
import disciplinaValidator from '../../validadors/disciplinaValidator';



const Disciplinas = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    
    DisciplinaService.create(dados)
    Navigate('/disciplinas')
    
  }

  return (
    <div>
      <h1>Disciplina</h1>

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome } type="text" {...register("nome", disciplinaValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso: </Form.Label>
          <Form.Control isInvalid={errors.curso } type="text" {...register("curso", disciplinaValidator.curso)} />
          {errors.curso && <span>Campo Obrigatório</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Disciplinas
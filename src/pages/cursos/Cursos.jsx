import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import CursoService from '../../services/academico/CursoService';
import cursoValidator from '../../validadors/cursoValidator';



  const Cursos = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
      if (params.id) {
      const curso = CursoService.get(params.id)

      for (let campo in curso) {
        setValue(campo, curso[campo])
      }
    }
  }, [])

  function salvar(dados) {


    if(params.id){
      CursoService.update(params.id, dados)
    } else {
      CursoService.create(dados)
    }
  
    Navigate('/cursos')
    
  }

  return (
    <div>
      <h1>Curso</h1>

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome } type="text" {...register("nome", cursoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração: </Form.Label>
          <Form.Control isInvalid={errors.duracao } type="text" {...register("duracao", cursoValidator.curso)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>Modalidade: </Form.Label>
          <Form.Control isInvalid={errors.modalidade } type="text" {...register("modalidade", cursoValidator.modalidade)} />
          {errors.modalidade && <span>{errors.modalidade.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Cursos
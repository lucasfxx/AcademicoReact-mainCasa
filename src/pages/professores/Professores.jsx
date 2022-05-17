import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import professorValidator from '../../validadors/professorValidator';
import ProfessorService from '../../services/academico/ProfessorService';


const Professores = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  function salvar(dados) {
    
    ProfessorService.create(dados)
    Navigate('/professores')
    
  }
  return (
    <div>
      <h1>Professores</h1>

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome } type="text" {...register("nome", professorValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>matricula: </Form.Label>
          <Form.Control isInvalid={errors.matricula } type="text" {...register("matricula", professorValidator.matricula)} />
          {errors.matricula && <span>{errors.matricula.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Salario: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Cep: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Logadouro: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Numero: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>
      </div>
  )
}

export default Professores
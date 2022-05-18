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
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>salario: </Form.Label>
          <Form.Control isInvalid={errors.salario } type="number" {...register("salario", professorValidator.salario)} />
          {errors.salario && <span>{errors.salario.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>email: </Form.Label>
          <Form.Control isInvalid={errors.email } type="number" {...register("email", professorValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone } type="number" {...register("telefone", professorValidator.telefone)} />
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>cep: </Form.Label>
          <Form.Control isInvalid={errors.cep } type="number" {...register("cep", professorValidator.cep)} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="logadouro">
          <Form.Label>logadouro: </Form.Label>
          <Form.Control isInvalid={errors.logadouro } type="number" {...register("logadouro", professorValidator.logadouro)} />
          {errors.logadouro && <span>{errors.logadouro.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>complemento: </Form.Label>
          <Form.Control isInvalid={errors.complemento } type="number" {...register("complemento", professorValidator.complemento)} />
          {errors.complemento && <span>{errors.complemento.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>numero: </Form.Label>
          <Form.Control isInvalid={errors.numero } type="number" {...register("numero", professorValidator.numero)} />
          {errors.numero && <span>{errors.numero.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>bairro: </Form.Label>
          <Form.Control isInvalid={errors.bairro } type="number" {...register("bairro", professorValidator.bairro)} />
          {errors.bairro && <span>{errors.bairro.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>
      </div>
  )
}
export default Alunos
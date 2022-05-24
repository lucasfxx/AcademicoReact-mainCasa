import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import alunoValidator from '../../validadors/alunoValidator';
import AlunoService from '../../services/academico/AlunoService';
import { mask } from 'remask';


const Alunos = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  useEffect(() => {
    if (params.id) {
    const aluno = AlunoService.get(params.id)

    for (let campo in aluno) {
      setValue(campo, aluno[campo])
    }

  }
  
}, [])
  function salvar(dados) {
    if(params.id){
      AlunoService.update(params.id, dados)
    } else {
      AlunoService.create(dados)
    }
    Navigate('/alunos')
    
  }
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Alunos</h1>

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome } type="text" {...register("nome", alunoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf } type="text" 
          {...register("cpf", alunoValidator.cpf)}
          mask="999.999.999-99" onChange={handleChange} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>matricula: </Form.Label>
          <Form.Control isInvalid={errors.matricula } type="text" {...register("matricula", alunoValidator.matricula)} />
          {errors.matricula && <span>{errors.matricula.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>email: </Form.Label>
          <Form.Control isInvalid={errors.email } type="text" {...register("email", alunoValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone } type="text" 
          {...register("telefone", alunoValidator.telefone)} 
          mask="99 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>cep: </Form.Label>
          <Form.Control isInvalid={errors.cep } type="text" {...register("cep", alunoValidator.cep)} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="logadouro">
          <Form.Label>logadouro: </Form.Label>
          <Form.Control isInvalid={errors.logadouro } type="text" {...register("logadouro", alunoValidator.logadouro)} />
          {errors.logadouro && <span>{errors.logadouro.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>complemento: </Form.Label>
          <Form.Control isInvalid={errors.complemento } type="text" {...register("complemento", alunoValidator.complemento)} />
          {errors.complemento && <span>{errors.complemento.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>numero: </Form.Label>
          <Form.Control isInvalid={errors.numero } type="number" {...register("numero", alunoValidator.numero)} />
          {errors.numero && <span>{errors.numero.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>bairro: </Form.Label>
          <Form.Control isInvalid={errors.bairro } type="text" {...register("bairro", alunoValidator.bairro)} />
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
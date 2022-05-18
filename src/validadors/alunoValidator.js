const alunoValidator = {
    nome: {
        
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    cpf: {
        

        minLength: {
            value: 11,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 11,
            message: "O valor mínimo é 11"
        },
    },
    matricula: {
        
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 10,
            message: "O valor mínimo é 20"
        },
    },
    email: {
        
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 100,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 10,
            message: "O valor mínimo é 15"
        },
    },
    telefone: {
        
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 25,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 8,
            message: "O valor mínimo é 8"
        },
    },
    cep: {
        
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 25,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 8,
            message: "O valor mínimo é 8"
        },
    },
    logadouro: {
         minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
            },
       
        maxLength: {
            value: 100,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 8,
            message: "O valor mínimo é 8"
        },
    },
    complemento: {
        
       
        maxLength: {
            value: 100,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 2,
            message: "O valor mínimo é 20"
        },
    },
    numero: {
        
        minLength: {
            value: 2,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 2,
            message: "O valor mínimo é 20"
        },
    },
    bairro: {
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
            },
       
        maxLength: {
            value: 100,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 8,
            message: "O valor mínimo é 8"
        },
     
    },

}

export default alunoValidator
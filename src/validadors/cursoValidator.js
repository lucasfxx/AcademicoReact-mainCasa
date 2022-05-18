const cursoValidator = {
nome: {
    required: "O campo Nome é Obrigatório",
    minLength: {
        value: 3,
        message: "Qtd mínimas de caracteres não informado"
    },
    maxLength: {
        value: 50,
        message: "Qtd máxima de caracteres ultrapassada"
    },
    min: {
        value: 3,
        message: "O valor mínimo é 6"
    },
},
duracao: {
    minLength: {
        value: 3,
        message: "Qtd mínima de caracteres não informado"
    },
    maxLength: {
        value: 11,
        message: "Qtd máxima de caracteres ultrapassada"
    },
    min: {
        value: 3,
        message: "O valor mínimo é 3"
    },
    
},

modalidade: {
    required: "O campo Nome é Obrigatório",
    minLength: {
        value: 1,
        message: "Qtd mínima de caracteres não informado"
    },
    maxLength: {
        value: 1,
        message: "Qtd máxima de caracteres ultrapassada"
    },
    min: {
        value: 1,
        message: "O valor mínimo é 1"
    },
},
}

export default cursoValidator
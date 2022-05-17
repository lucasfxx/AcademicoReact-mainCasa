const professorValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 10,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    cpf: {
        required: "O campo Nome é Obrigatório",

        minLength: {
            value: 14,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 14,
            message: "O valor mínimo é 3"
        },
    },
    Matricula: {
        
        minLength: {
            value: 20,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 25,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 20,
            message: "O valor mínimo é 20"
        },
    },

}

export default professorValidator
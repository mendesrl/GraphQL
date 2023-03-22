const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
    scalar Date 

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float

    }

    #Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: String
        hora: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
    }
    
`
const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            return produto.preco - produto.desconto
        }
    },
    Usuario: {
        salario(usuario){
            return usuario.salario_real
        }
    },
    Query: {
        ola() {
            return 'Basta retornar uma string'
        },
        horaCerta() {
            const date = new Date().toISOString().slice(0,10);
            return date
        },
        hora() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: "Larissa",
                email: "lalla@gmail.com",
                idade: 30,
                salario_real: 1345.67,
                vip: true
            }
        },
        produtoEmDestaque() {
            return {
                nome: "Larissa",
                preco: 100.00,
                desconto: 50.00,
            }  
        }

    },
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url})=>{
    console.log(`listening ${url}`)
})
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

    #Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: String
        hora: Date
        usuarioLogado: Usuario
    }

    
`
const resolvers = {
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
        }

    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url})=>{
    console.log(`listening ${url}`)
})
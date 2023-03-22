const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
    scalar Date 

    #Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: String
        hora: Date
    }
`
const resolvers = {
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
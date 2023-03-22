const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
    #Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: String
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
const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");

const perfis = [
  {
    id: 1,
    nome: "Admin",
  },
  {
    id: 2,
    nome: "Comum",
  },
];

const usuarios = [
  {
    id: 1,
    nome: "Apollo",
    email: "apollo@gmail.com",
    idade: 19,
    perfil_id: 1,
  },
  {
    id: 2,
    nome: "Larios",
    email: "larios@gmail.com",
    idade: 20,
    perfil_id: 2,
  },
];

const resolvers = {
  Produto: {
    precoComDesconto(produto) {
      return produto.preco - produto.desconto;
    },
  },
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
    perfil(usuario) {
      const selecionados = perfis.filter((p) => p.id === usuario.perfil_id);

      return selecionados ? selecionados[0] : null;
    },
  },
  Query: {
    ola() {
      return "Basta retornar uma string";
    },
    horaCerta() {
      const date = new Date().toISOString().slice(0, 10);
      return date;
    },
    hora() {
      return new Date();
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: "Larissa",
        email: "lalla@gmail.com",
        idade: 30,
        salario_real: 1345.67,
        vip: true,
      };
    },
    produtoEmDestaque() {
      return {
        nome: "Larissa",
        preco: 100.0,
        desconto: 50.0,
      };
    },
    numerosMegaSena() {
      return [3, 5, 6, 7, 8];
    },
    usuarios() {
      return usuarios;
    },
    usuario(_, args) {
      const selecionados = usuarios.filter((u) => u.id === args.id);

      return selecionados ? selecionados[0] : null;
    },
    perfis() {
      return perfis;
    },
    perfil(_, args) {
      const selecionados = perfis.filter((p) => p.id === args.id);

      return selecionados ? selecionados[0] : null;
    },
  },
};
const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`listening ${url}`);
});

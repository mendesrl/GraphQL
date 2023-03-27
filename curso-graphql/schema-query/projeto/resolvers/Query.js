const { usuarios, perfis } = require("../data/db");

module.exports = {
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
};

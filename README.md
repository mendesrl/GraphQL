# GraphQL: Criando APIs Profissionais e Flexíveis

## Conceito Básico

Na stack de desenvolvimento ele
existe onde esta minha API Rest, o GraphQL é uma alternativa que tanto pode substituir o REST como trabalhar em conjunto dentro de uma mesma aplicação, você pode ter:
- Serviços REST
- Alem de ter uma api GraphQL executando
- ou você pode usar a api para encapsular varias aplicações REST
- alem de trazer flexibilidade que um REST não entregaria
- Pradões de organização de aplicações real em backend

## O que é GraphQL?
- GraphQL é uma linguagem de consulta para Api
- é uma forma de pedir para sua Api o que você quer obter de resposta e isso acaba tirando um pouco a responsabilidade do servidor e coloca essa responsabilidade para sua aplicação frontend
- Sua aplicação frontend vai dizer o que ela quer e em resposta a api GraphQL vai mandas somente os dados que foram solicitados

##  GraphQL vs REST
- **Rest:** você utiliza multiplas urls para retornar um conjunto especifico de dados
- **GraphQL:** você utiliza uma unica url e a partir dela você passa o corpo da requisição, alem de permitir obter os dados de fontes distintas

## Como os Dados são Organizado?
```
{ 
    maes {
        id
        nome
        idade
        filhos {
            nome idade
        }
    } 
}
```
##  GraphQL : Vantagens e Desvantagens 
GraphQL é uma tecnologia de consulta de dados criada pelo Facebook em 2015, que tem como objetivo fornecer uma maneira mais eficiente e flexível de buscar e manipular dados de uma API. Abaixo estão algumas vantagens e desvantagens do GraphQL:

Vantagens do GraphQL:

Redução do tráfego de rede: uma das maiores vantagens do GraphQL é que ele permite que o cliente especifique exatamente quais dados precisa, evitando a busca e o envio de informações desnecessárias. Isso ajuda a reduzir o tamanho das requisições e respostas, economizando largura de banda e melhorando o desempenho da aplicação.

Flexibilidade: com o GraphQL, os clientes podem definir sua própria estrutura de dados, em vez de serem limitados pela estrutura definida pela API. Isso permite que as aplicações sejam mais flexíveis e adaptáveis às necessidades do usuário.

Redução da complexidade no lado do cliente: com o GraphQL, o cliente não precisa se preocupar com a complexidade da API e pode fazer solicitações para várias fontes de dados com uma única consulta.

Evolução da API: o GraphQL permite que a API evolua sem interromper os clientes existentes. Novos campos e tipos podem ser adicionados à API sem afetar os clientes existentes.

Desvantagens do GraphQL:

Curva de aprendizado: o GraphQL pode ser mais complexo do que outras tecnologias de consulta de dados. É necessário aprender sua sintaxe e como projetar esquemas para aproveitar ao máximo seus recursos.

Mais difícil de configurar: implementar uma API GraphQL pode ser mais difícil do que implementar uma API RESTful. É preciso configurar o servidor GraphQL corretamente e definir o esquema da API de forma adequada.

Problemas de segurança: o GraphQL pode ser vulnerável a ataques de injeção de consultas, como acontece em outras tecnologias de consulta de dados. Os desenvolvedores precisam tomar medidas para proteger a API contra esses tipos de ataques.

Tamanho do pacote: como o GraphQL requer um parser para interpretar as consultas e transformá-las em chamadas de dados, o tamanho do pacote pode ser maior em comparação com outras tecnologias de consulta de dados, o que pode afetar o desempenho da aplicação.

Em resumo, o GraphQL tem várias vantagens, como a redução do tráfego de rede, flexibilidade e evolução da API, mas também apresenta algumas desvantagens, como uma curva de aprendizado mais íngreme e problemas de segurança. No geral, a escolha entre o uso do GraphQL ou outras tecnologias de consulta de dados depende do contexto específico da aplicação e de suas necessidades.

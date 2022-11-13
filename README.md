# Sistema de Login com TypeScript, NodeJS, Express, JWT e Bcrypt

## Sobre o projeto

Este projeto foi desenvolvido com o intuito de aprender mais sobre o desenvolvimento de APIs com NodeJS, TypeScript, Express, JWT e Bcrypt.

## Tecnologias utilizadas

- NodeJS
- TypeScript
- Express
- JWT
- Bcrypt
- TypeORM
- SQLite
- Jest
- Supertest
- ESLint
- Prettier

## Criando o projeto

Para criar o projeto, execute o comando abaixo:

```bash
mkdir api-login && cd api-login

yarn init -y

yarn add typescript ts-node body-parser express http-status 
yarn add @types/node @types/body-parser @types/express @types/http-status --D
```

## Configurando o o Package.json

```json
  "scripts": {
    "start:dev": "nodemon",
    "build": "npx tsc","    
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback",
  },

}
```

## Configurando o TypeScript

Para configurar o TypeScript, execute o comando abaixo:

```bash

yarn tsc --init

```

## Como executar o projeto

```bash
# clonar repositório
git clone

# entrar na pasta do projeto
cd

# instalar dependências
yarn

# executar o projeto
yarn dev
```

## Como executar os testes

```bash
# clonar repositório
git clone

# entrar na pasta do projeto
cd

# instalar dependências
yarn

# executar os testes
yarn test
```

## Autor

Rodrigo Rangel

[![Linkedin Badge](https://img.shields.io/badge/-Rodrigo%20Rangel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rodrigo-rangel-a80810170/)](https://www.linkedin.com/in/rodrigo-rangel-5b1b4b1b3/) [![GitHub Badge](https://img.shields.io/badge/-Rodrigo%20Rangel-black?style=flat-square&logo=github&logoColor=white&link=https://www.linkedin.com/in/rodrigo-rangel-a80810170/)](https://github.com/Hangell/hangell)

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

## Agradecimentos

- [Hangell](https://hangell.org/)
- [Rodrigo Rangel](https://github.com/Hangell/hangell)

## Referências

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Dúvidas

Caso tenha alguma dúvida, entre em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/rodrigo-rangel-5b1b4b1b3/).

## Contribuições

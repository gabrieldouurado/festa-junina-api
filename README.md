# Festa Junina API
O projeto foi construido o frameword **NestJS** e o ORM **Prisma** para acessar o banco de dados.

Todo o projeto foi construido aplicando princípios SOLID e design patterns como Repository, in-memory database e mappers.

## Executando o projeto

1. Criação do banco de dados usando o docker
Para criar o banco de dados, pode ser usado o seguinte comando:
``docker run --name festa-junina-db -e POSTGRES_DB=festa-junina-db-test -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres``

gerando o container do banco de dados usando o comando acima, a URL de conexão com o banco, ficará dessa forma:
``postgresql://postgres:postgres@localhost:5432/festa-junina-db-test?schema=public``

2. Executar as migrações
É necessário executar as migrações para montar o banco de dados da maneira correta.
``npx prisma migrate dev``

3. Instalação de dependência
``npm install``

4. Execução em modo de desenvolvimento
``npm run start``

Para buildar o projeto, basta executar o comando
``npm run start:prod``

## Padronização de código
O projeto usa o ESLint e o Prettier para padronização e estilização de código.

Para corrigir os problemas de lint, utilizar o comando:

``npm run lint``

## Variáveis de ambiente
Para que o projeto funcione corretamente, é necessário que as variáveis sejam configuradas corretamente. É necessário alterar o arquivo ``.env`` encontrado na raiz do projeto. Também existe um arquivo chamado ``.env.example`` ele é um arquivo de exemplo com as variáveis de ambiente presentes no projeto.

Variáveis:
- DATABASE_URL -> É a URL de conexão com o banco de dados


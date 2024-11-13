# Uma API de gerenciamento de usuários e posts com Docker e Mysql

É uma API desenvolvida com Node.js utilizando o Express como framework no gerenciamento de usuários e posts. A aplicação permite a criação e manipulação de dados de usuários e posts, com persistência em um banco de dados MySQL, utilizando o TypeORM para interação com o banco. A arquitetura da aplicação foi projetada para ser executada em contêineres Docker, garantindo que o ambiente de desenvolvimento seja isolado e facilmente replicável em qualquer máquina. O Docker Compose foi utilizado para orquestrar os serviços de aplicação e banco de dados, permitindo um fácil processo de build e execução da aplicação. Além disso, a aplicação foi configurada para ser escalável e facilmente mantida, utilizando boas práticas como variáveis de ambiente e arquivos de configuração.

## Ferramentas uilizadas no projeto:

![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

# Estruturação do projeto

```
NomeDoProjeto/
├── node_modules/                    
├── src/                             
│   ├── entity/                      
│   │   ├── Post.ts                  
│   │   └── User.ts                  
│   ├── db.test.ts                   
│   └── index.ts                     
├── Dockerfile                       
├── README.md                        
├── docker-compose.yml               
├── init.sql                         
├── package-lock.json                
├── package.json                     
└── tsconfig.json                    
```

## 1º Passo: Criação das Tabelas no `init.sql`

Dentro do arquivo `init.sql`, crie as seguintes tabelas:

### Tabela `user`
- **id** – Tipo: `Int`, autoincremental, chave primária (PK).
- **firstName** – Tipo: `Varchar(100)`, não nulo.
- **lastName** – Tipo: `Varchar(100)`, não nulo.
- **email** – Tipo: `Varchar(100)`, não nulo.

### Tabela `post`
- **id** – Tipo: `Int`, autoincremental, chave primária (PK).
- **title** – Tipo: `Varchar(100)`, não nulo.
- **description** – Tipo: `Varchar(100)`, não nulo.
- **userId** – Tipo: `Int`, não nulo (chave estrangeira referenciando a tabela `user`).

---

## 2º Passo: Criação das Entidades `User` e `Post`

Dentro da pasta `src/Entity`, crie as entidades correspondentes às tabelas `User` e `Post`.

---

## 3º Passo: Configurar endpoints `users` e `posts`

Dentro de `src/index.ts`, configure dois endpoints `users` & `posts`

---

## 4º Passo: Configuração do Dockerfile

Configure o `Dockerfile` da aplicação para garantir que ela seja construída corretamente no ambiente Docker.

---

## 5º Passo: Teste da Aplicação

Execute os seguintes comandos para testar a aplicação:

1. **Subir a aplicação utilizando Docker Compose**:
   ```bash
   docker compose up --build
   docker exec -it <Container Name> /bin/sh
   
   ```

   Dentro do container, execute o teste:
   ```bash
   npm test
   ```

## 6º Passo: Crie um fork desse repositório e submita o código preenchido nele.
Crie um Pull Request para a brach master nos enviando o código

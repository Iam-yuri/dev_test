# Uma API de gerenciamento de usuários e posts com Docker e Mysql

É uma API desenvolvida com Node.js utilizando o Express como framework no gerenciamento de usuários e posts. A aplicação permite a criação e manipulação de dados de usuários e posts, com persistência em um banco de dados MySQL, utilizando o TypeORM para interação com o banco. A arquitetura da aplicação foi projetada para ser executada em contêineres Docker, garantindo que o ambiente de desenvolvimento seja isolado e facilmente replicável em qualquer máquina. O Docker Compose foi utilizado para orquestrar os serviços de aplicação e banco de dados, permitindo um fácil processo de build e execução da aplicação. Além disso, a aplicação foi configurada para ser escalável e facilmente mantida, utilizando boas práticas como variáveis de ambiente e arquivos de configuração.

## Ferramentas uilizadas no projeto:

![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-00000F?style=for-the-badge&logo=sql&logoColor=white)

# Estruturação do projeto

```
dev_test/
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

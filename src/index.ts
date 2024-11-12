import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Post } from './entity/Post';

const app = express();
app.use(express.json());

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test_db",
  entities: [User,Post],
  synchronize: true,
});

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const initializeDatabase = async () => {
  await wait(20000);
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
    process.exit(1);
  }
};

initializeDatabase();

//Endpoint para a criação de um novo usuário (alterado)
app.post('/users', async (req, res) => {
  try{
    const userRepository = AppDataSource.getRepository(User);
    const newUser = userRepository.create(req.body);
    const savedUser = await userRepository.save(newUser);
    res.status(201).json(savedUser);
  } catch (error){
    console.error("Error ao criar o usuário:", error);
    res.status(500).json({ message: "Erro ao criar o usuário" });
  }
});

//Endpoint para criar um novo post (alterado)
app.post('/posts', async (req, res) => {
  try{
    const postRepository = AppDataSource.getRepository(Post);
    const newPost = postRepository.create(req.body);
    const savedPost = await postRepository.save(newPost);
    res.status(201).json(savedPost);
  } catch (error){
    console.error("Erro ao criar o post:", error);
    res.status(500).json({ message: "Erro ao criar o post" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

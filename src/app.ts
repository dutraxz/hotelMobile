import express from "express";
import { Request, Response, NextFunction } from "express";
import rotaTarefa from "./routes/tarefaRoutes";

const app = express();
app.use(express.json());

app.use("/tarefas", rotaTarefa);



// //rota parametro api/quartos/1
// app.get("/parametro/:nome", (req: Request, res: Response, next: NextFunction) =>{
//     const nome = req.params.nome;
//     console.log("Rota de Parametro - Cliente digitou", nome);
//     res.send(`você digitou o nome: ${nome}`);
// });

// //rota query(opcional): /query ? ini
// app.get("/query", (req: Request, res: Response, next: NextFunction) =>{
//     const nome = req.query.nome;
//     console.log ("Rota de Query - Cliente digitou", nome);
//     res.send(`você digitou o nomeee: ${nome}`);
// });

// //rotas parametro no corpo
// app.get("/corpo", (req: Request, res: Response, next: NextFunction) =>{
//     const nome = req.body;
//     console.log ("Variavel dentro do corpo - Cliente digitou", nome);
//     res.send(`você digitou o nome: ${nome}`);
// });

// // rota generica
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello World!!");
// });

// rota de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Erro na requisição");
});

export default app;

import { Request, Response, NextFunction } from "express"


function getTarefa(req: Request, res: Response, next: NextFunction){
    res.send("pegar todas tarefas")
}
function getTarefas(req: Request, res: Response, next: NextFunction){
    res.send("pegar uma tarefa")
}
function criarTarefa(req: Request, res: Response, next: NextFunction){
    res.send("criar uma tarefa")
}
function atualizarTarefa(req: Request, res: Response, next: NextFunction){
    res.send("atualizar uma tarefa")
}
function deletarTarefa(req: Request, res: Response, next: NextFunction){
    res.send("deletar uma tarefa")
}

export default{
  getTarefas, getTarefa,
  criarTarefa, atualizarTarefa, deletarTarefa
};


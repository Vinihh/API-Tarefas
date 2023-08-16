import { Router } from "express";
import { listarTarefas, inserir,tarefasFinalizadas } from "../repository/tarefaRepository.js";

let endpoints = Router();

endpoints.post('/tarefa/inserir', async (req, resp) => {
    let tarefa = req.body;
    let dados = await inserir(tarefa) 
    resp.send(dados) 
})

endpoints.put('/tarefa/alterar', async (req, resp) => {
    let tarefa = req.body;
    let dados = await tarefasFinalizadas(tarefa) 
    resp.send(dados) 
})

endpoints.get('/tarefas/finalizada', async(req,resp) =>{
    let dados = await tarefasFinalizadas()
    resp.send(dados)
    
    
})

endpoints.get('/tarefas', async(req,resp) =>{
    let dados = await listarTarefas()
    resp.send(dados)
    
    
})

export default endpoints;
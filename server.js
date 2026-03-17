const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

/* BANCO DE DADOS */

const db = new sqlite3.Database("./academia.db")

db.run(`
CREATE TABLE IF NOT EXISTS alunos(
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT,
plano TEXT,
treino TEXT,
professor TEXT
)
`)

/* CADASTRAR ALUNO */

app.post("/alunos",(req,res)=>{

const {nome,plano,treino,professor}=req.body

db.run(
"INSERT INTO alunos(nome,plano,treino,professor) VALUES(?,?,?,?)",
[nome,plano,treino,professor]
)

res.json({mensagem:"Aluno cadastrado"})

})

/* LISTAR ALUNOS */

app.get("/alunos",(req,res)=>{

db.all("SELECT * FROM alunos",(err,rows)=>{

res.json(rows)

})

})

/* EXCLUIR */

app.delete("/alunos/:id",(req,res)=>{

db.run("DELETE FROM alunos WHERE id=?",[req.params.id])

res.json({mensagem:"Aluno removido"})

})

/* SERVIDOR */

app.listen(3000,()=>{

console.log("Servidor rodando na porta 3000")

})
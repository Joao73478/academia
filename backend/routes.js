const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/opcoes", async (req,res)=>{

const [planos] = await db.query("SELECT * FROM planos");
const [treinos] = await db.query("SELECT * FROM treinos");
const [professores] = await db.query("SELECT * FROM professores");

res.json({planos,treinos,professores});

});

router.post("/matriculas", async (req,res)=>{

const {plano,treino,professor} = req.body;

await db.query(
"INSERT INTO matriculas (plano_id,treino_id,professor_id,status_id) VALUES (?,?,?,1)",
[plano,treino,professor]
);

res.json({msg:"Matricula criada"});

});

module.exports = router;
document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.querySelector('input[type="text"]').value;
let plano = document.querySelectorAll("select")[0].value;
let treino = document.querySelectorAll("select")[1].value;
let professor = document.querySelectorAll("select")[2].value;

let aluno = {
nome: nome,
plano: plano,
treino: treino,
professor: professor
};

let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

alunos.push(aluno);

localStorage.setItem("alunos", JSON.stringify(alunos));

alert("Matrícula realizada com sucesso!");

});
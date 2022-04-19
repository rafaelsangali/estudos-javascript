// exibir receitas
const fs = require("fs");


const exibirReceitas = () => {
  const rawData = fs.readFileSync("database.json");
  const listaDeReceitas = JSON.parse(rawData);
  listaDeReceitas.forEach((receita) => {
    const { titulo, ingredientes, vegano } = receita;
    console.log("--------------------------------");
    console.log(`Título: ${titulo}`);

    console.log("Ingredientes:");
    ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente}`);
    });

    console.log("É vegano? ", vegano ? "Sim" : "Não");
    console.log("--------------------------------");
  });
}
console.log(exibirReceitas());



//cadastrar receitas

const cadastrarReceita = (
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const rawData = fs.readFileSync("data.json");
  const listaDeReceitas = JSON.parse(rawData);
  const indiceUltimaReceita = listaDeReceitas.length - 1;

  const novaReceita = {
    id: listaDeReceitas[indiceUltimaReceita].id + 1,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  fs.writeFileSync("database.json", JSON.stringify(listaDeReceitas));

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};



// deletar receitas

const deletarReceita = (id) => {
  const rawData = fs.readFileSync("database.json");
  const listaDeReceitas = JSON.parse(rawData);
  const indiceReceita = listaDeReceitas.findIndex((receita) => {
    return receita.id === id;
  });

  if (indiceReceita === -1) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas.splice(indiceReceita, 1);
  fs.writeFileSync("database.json", JSON.stringify(listaDeReceitas));
  console.log("Receita deletada com sucesso!");
};
//import { Button } from "./components/Button";
//import { soma, multiplica } from "./utils/math";
import { Item } from "./components/Item";
const app = document.getElementById("app");
// Pega o formulário do HTML
const form = document.getElementById("form");
// Pega o input de texto
const input = document.getElementById("inputName");
// Pega a lista onde os itens vão aparecer
const list = document.getElementById("itemList");
// Array que guarda os itens
let itens = [];
// Função para salvar itens no localStorage
function salvarItens() {
    localStorage.setItem("itens", JSON.stringify(itens.map(item => item.name)));
}
// Carrega itens salvos ao abrir a página
window.onload = function () {
    const itensSalvos = localStorage.getItem("itens");
    if (itensSalvos) {
        const nomes = JSON.parse(itensSalvos);
        nomes.forEach(nome => {
            const item = new Item(nome, () => removerItem(item));
            item.render(list);
            itens.push(item);
        });
    }
};
// Função para remover item do array e atualizar localStorage
function removerItem(item) {
    itens = itens.filter(i => i !== item);
    salvarItens();
}
// Adiciona novo item ao enviar formulário
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value === "")
        return;
    const item = new Item(input.value, () => removerItem(item));
    item.render(list);
    itens.push(item);
    salvarItens();
    input.value = "";
});
/*// Criar botão
const btn = new Button("Calcular");
btn.onClick(() => {
  const resultado = soma(5, 7);
  const produto = multiplica(5, 7);
  alert(`Soma: ${resultado}, Produto: ${produto}`);
});

btn.render(app);*/
//# sourceMappingURL=main.js.map
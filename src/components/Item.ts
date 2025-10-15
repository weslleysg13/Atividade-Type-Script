export class Item {
  name: string;
  element: HTMLLIElement;

  constructor(name: string, private removeCallback?: () => void) {
    this.name = name;
    this.element = document.createElement("li");
    this.element.textContent = name + " ";

    // Cria botão remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.addEventListener("click", () => this.remove());
    this.element.appendChild(removeBtn);
  }

  render(list: HTMLElement) {
    list.appendChild(this.element);
  }

  remove() {
    this.element.remove();
    // Chama função para atualizar array e localStorage
    if (this.removeCallback) {
      this.removeCallback();
    }
  }
}
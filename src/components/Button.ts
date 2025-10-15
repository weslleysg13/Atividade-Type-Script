export class Button {
  label: string;
  element: HTMLButtonElement;

  constructor(label: string) {
    this.label = label;
    this.element = document.createElement("button");
    this.element.textContent = label;
    this.element.className = "btn";
  }

  onClick(callback: () => void) {
    this.element.addEventListener("click", callback);
  }

  render(container: HTMLElement) {
    container.appendChild(this.element);
  }
}
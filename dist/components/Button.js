export class Button {
    constructor(label) {
        this.label = label;
        this.element = document.createElement("button");
        this.element.textContent = label;
        this.element.className = "btn";
    }
    onClick(callback) {
        this.element.addEventListener("click", callback);
    }
    render(container) {
        container.appendChild(this.element);
    }
}
//# sourceMappingURL=Button.js.map
export declare class Item {
    private removeCallback?;
    name: string;
    element: HTMLLIElement;
    constructor(name: string, removeCallback?: (() => void) | undefined);
    render(list: HTMLElement): void;
    remove(): void;
}
//# sourceMappingURL=Item.d.ts.map
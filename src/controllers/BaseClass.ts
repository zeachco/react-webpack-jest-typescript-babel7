export class BaseClass {
    constructor(public name: string) {}
    public async wait(ms=1000) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
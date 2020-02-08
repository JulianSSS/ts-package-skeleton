const greetingPrefix = 'Hello';
const greetingSuffix = '!';

export class Greeter {
    get name(): string {
        return this._name;
    }

    private readonly _name: string;
    private _greetingString: string = '';

    constructor(greetedName: string) {
        this._name = greetedName;
        this.generateGreetingString();
    }

    private generateGreetingString(): void {
        this._greetingString = `${greetingPrefix} ${this._name}${greetingSuffix}`;
    }

    public greet(callback: (greeting: string) => void): void {
        callback(this._greetingString);
    }
}

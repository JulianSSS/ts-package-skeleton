import { Greeter } from '../index';

// @ts-ignore
global.console = {
    warn: jest.fn(),
    log: jest.fn()
};

test('Test the Greeter Construction', () => {
    const greeter = new Greeter('World');
    expect(greeter).toBeTruthy();
});

test('Test Name Setting and Getting', () => {
    expect(new Greeter('World').name).toBe('World');
    expect(new Greeter('').name).toBe('');
});

test('Greeting Logging', () => {
    const greeter = new Greeter('World');
    const consoleLogger = (greeting: string) => console.log(greeting);
    greeter.greet(consoleLogger);
    expect(console.log).toHaveBeenCalledWith('Hello World!');
});

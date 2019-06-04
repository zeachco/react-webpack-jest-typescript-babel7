import autobind from 'autobind-decorator'
import { BaseClass } from 'src/controllers/BaseClass';
import { clamp } from 'src/utils/legacy-deconstruct';
import fixDigits from 'src/utils/legacy-default';

// const log = (target: any, name: string, descriptor: PropertyDescriptor) => {
//     const fn = descriptor.value;
//     descriptor.value = function (...args) {
//         console.error(`${name} was called with `, ...args);
//         fn.call(this, ...args);
//     }
//     return descriptor;
// }

const log = (logName?: string) => {
    const log = (target: any, name: string, descriptor: PropertyDescriptor) => {
        const fn = descriptor.value;
        descriptor.value = function (...args) {
            console.error(`${logName || name} was called with `, ...args);
            fn.call(this, ...args);
        }
        return descriptor;
    }
    return log;
}

@autobind
export class Test extends BaseClass {
    constructor(
        private word: string = 'no name'
    ) {
        super('TestClass');
        setTimeout(this.print, 2000);
    }

    @log("printou!")
    public async print() {
        console.error('autobind', this.greet());
        console.error('legacy exports deconstruct', clamp(5, 2, 3));
        console.error('legacy exports default', fixDigits(5.123456, 2));
        await this.wait(300);
        console.error('async / await');
    }

    @log()
    setName(name: string) {
        this.name = name;
    }

    @log()
    public greet() {
        return [this.name, this.word].join(': ');
    }
}

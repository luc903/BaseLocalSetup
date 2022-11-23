import { sayHello } from './greet';

function Test(str: string): number {
    if(str.length) {
        console.log(sayHello('Luc'));
        return 5;
    }

    return 6;
}

Test('a');
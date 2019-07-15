interface Animate {
    head: number;
    body: number;
    foot: number;
    eat(food: string): void;
    say(word: string): string;
}

class Dog implements Animate {
    head = 1;
    body = 1;
    foot = 1;

    eat(food:string) {
        console.log(food);
    }

    say(word:string) {
        return word;
    }
}

enum Color { Red, Green, Blue };
const b: object = Color;
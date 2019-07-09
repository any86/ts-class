interface Animate {
    head:number;
    body:number;
    foot:number;
    eat(food:string):void;
    say(word:string):string;
}

class Dog implements Animate{
    head=1;
    body=1;
    foot=1;
    
    eat(food){
        console.log(food);
    }

    say(word){
        return word;
    }
}
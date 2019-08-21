declare namespace lib {
    let a:number;
    function b(n:number):string;
    interface ABC{
        ab:number;
        (s:string):string[];
    }
}

type A = lib.ABC
type B = Sizzle.Selectors



declare var n:number

n=123


export namespace A {
    export const  s  = 'sss123';
    export class A1{
        constructor(){
            console.log('A1');
        }
    }
}

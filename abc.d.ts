declare var n: number;
declare let s: string;
declare const o: object;
declare function f(s: string): number;
declare enum dir {
    top,
    right,
    bottom,
    left
}

declare namespace MyPlugin {
    var n:number;
    var s:string;
    var f:(s:string)=>number;
}


interface ABC{
    a:1|2|3,
    b:'t'|'s',
    c:'中'|'国'
}
interface A {
    a:number,
    b:string
}
let obj:A = {a:123,b:'456'};

let n:number|string;
for(let i = 0;i<10;i++) {
    if(i < 5) n = 10;
    else n = '100';
}
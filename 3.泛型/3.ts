function convert<T>(n:T):T{
    n.length
    return n;
}

let n = [1];
let a = convert<any[]>(n);

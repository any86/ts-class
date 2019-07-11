
function convert<T>(input:T):T{
    return input;
}
interface Convert {
    <T>(input:T):T
}

let a:Convert = convert
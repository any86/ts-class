interface Goods<T>{
    id:number;
    title: string;
    size: T;
}


let apple:Goods<string> = {id:1,title: '苹果', size: 'large'};
let shoes:Goods<number> = {id:1,title: '苹果', size: 43};

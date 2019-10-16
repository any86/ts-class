// new global.String(123).fancyFormat({fancinessLevel:123});




const isString = (val: any):boolean => typeof val === 'string'
let aa:null|string = Math.random() < 0.5? null: '123';

if(isString(aa)){
    aa.substring(0,1);
}
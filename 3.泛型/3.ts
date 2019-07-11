function echo<T>(array: T&{length:number}): T {
    console.log(array+1); // 报错, T此时不仅代表数组, 如果非数组是没有length属性的
    return array;
}
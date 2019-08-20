/^(?:[1-9]|[1-9]\d{1}|[1-2]\d{2}|3[0-5]\d|36[0-5])$/.test(365) // 365

function genRule(number) {
    if ('number' !== typeof number) throw '请输入number类型的数字';
    const numberString = String(number);
    const {
        length
    } = numberString;
    const headerNumber = Number(numberString[0]);
    const tempArr1 = [];
    const tempArr2 = [];
    for (let i = 0; i < length; i++) {
        if (i < length - 1) {
            tempArr2.push(genFixHeaderPart(number, i + 1));
            // 
            tempArr1.push(`[1-9]\\d{${i}}`);
        } else {
            if (0 < headerNumber - 1) {
                tempArr1.push(`[0-${headerNumber-1}]\\d{${length-1}}`);
            }
        }
    }
    return new RegExp(`^(?:${[...tempArr1, ...tempArr2].join('|')})$`);
}



function genFixHeaderPart(number, fixLength = 1) {
    const numberString = String(number);
    const {
        length
    } = numberString;
    if (fixLength >= length) throw '已确定的位数不能大于等于数字位数'

    const tempArr = [];

    for (let i = 0; i < fixLength; i++) {
        tempArr.push(numberString[i]);
    }

    // 适配位
    // 当前非最后一位
    if (1 < length - fixLength) {
        let max = Number(numberString[fixLength]) - 1;
        if(0 > max) max = 0 ;

        tempArr.push(0 === max ? `[0]`:`[0-${max}]`);
    } 
    // 适配位是最后一位
    else {
        const max = Number(numberString[fixLength]);
        tempArr.push(0 === max ? `[0]`:`[0-${max}]`);
    }

    for (let i = 0; i < length - fixLength - 1; i++) {
        tempArr.push(`\\d`);
    }

    return tempArr.join('');
}

// genFixHeaderPart(151, 2)


const NUM = 140
const rule = genRule(NUM);

// 测试
for (let i = 1; i < NUM; i++) {
    if (!rule.test(i)) {
        console.warn(i);
    }
}
console.log(`匹配1-${NUM}完毕, 正则: ${rule}`)
let str1 = 'rwer321,dad,adas,ytruty,yihgf';
let str2 = '"ha,ua",sa,da,""da,da"",dad';
let str3 = 'dasd,""asddad"",fsfsf,gdfg,1';
let str4 = '"ha,ua",sa,da,"""da,da""",dad'

function done(str) {
    str += ',';
    let len = str.length;
    let deep = 0;
    let flag = 0;
    let start = 0;
    let end = 0;
    let res = [];
    let pos = 0;
    while (pos < len) {
        if (str[pos] === '"'&&flag!==1) {
            flag = 1;
            start = pos;
            while(str[pos]==='"') {
                deep++;
                pos++;
            }
        }else if(str[pos]==='"'&& flag===1) {
            res.push(str.slice(start+1,pos+deep-1));
            pos+=deep;
            start = pos+1;
            deep=0;
            flag=0;
        }else if(str[pos]===','&&flag===0) {
            res.push(str.slice(start,pos));
            start = pos+1;
        }
        pos++;
    }
    res = res.join("|");
    return res;
}

console.log(done(str1));
console.log(done(str2));
console.log(done(str3));
console.log(done(str4));
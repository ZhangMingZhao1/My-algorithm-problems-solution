
let str1 = 'rwer321,dad,adas,ytruty,yihgf';
let str2 = '"hfg,utyut",sasa,dadas,""dada,dasd"",dad';
let str3 = 'dasd,""asddad"",fsfsf,gdfg,1';



// dada, adads|dada|dasd
// dasd|"asddad"|fsfsf|gdfg|1

function done(str) {
  let res = [];
  str += ",";


  let Pa1 = /""([^"]+)""/;
  let re1 = new RegExp(Pa1,'g');
  let ans1 = str.match(re1);
  console.log(ans1);
  if(ans1.length!==null) {
    ans1.map(function(d,i){
      // console.log(d);
      // d = d.replace(",","^001");
      // console.log(d);
      str = str.replace(d+",", d.slice(1,-1)+"|");
    });
  };

  let Pa2 = /"([^"]+)",/;
  let re2 = new RegExp(Pa2,'g');
  let ans2 = str.match(re2);
  console.log(ans2);
  
  if(ans2.length!==null) {
    ans2.map(function(d,i){
      // d = d.replace(",","^001");
      str = str.replace(d,d.slice(1,-2)+"|");
    });
  };

  // let Pa3 = /[^"|]+,/;
  // let re3 = new RegExp(Pa3,'g');
  // let ans3 = str.match(re3);
  // console.log(ans3);
  
  // if(ans3.length!==null) {
  //   ans3.map(function(d,i){
  //     str = str.replace(d,d.slice(1,-2)+"|");
  //   });
  // };
  // console.log(str);
  // str.split(',').map(function(d,i) {
  //   res.push(d);
  // });
  // let ans = res.join('|');


  // console.log(str);

  // let re = new RegExp(Pattern,'g');
  // let Pattern = /"(.*)"/;

  // let re = new RegExp(Pattern,'g');

  // let tmp;
  // let res = str.split(',').map(function(d,i) {
  //   let flag = 0;
  //   let len = d.length;
  //   if(d[len-1]==='"') {
  //     tmp += d;
  //     flag = 1;
  //   }
  //   if(flag) {
  //     return tmp.slice(1,-1);
  //   }
  //   tmp = d;
  //   if(d[0]!=='"') {
  //     return d;
  //   }
  // });

  // let len = str.length;
  // for(let i = 0; i < len; i++) {

  // }
  console.log(str);
}

done(str2);
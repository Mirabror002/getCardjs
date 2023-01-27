 
let str ='Open Web Academy '
function repeatStr(){
  return str.repeat(15)
}
console.log(repeatStr())




let str='8600123456789123'

function getCriditCard(num){
if (num >= 0 && num.length == 16 && num !== String){
  console.log(num.slice(0, 4)+"********"+num.slice(12,16));
  if(num.slice(0, 4) == 8600){
    console.log('Uzcard kartasi')
    } else if(num.slice(0, 4) == 9860){
      console.log('Humo kartasi')
    }
}else{
console.log('Karta raqam xato kiritildi')
}
}
getCriditCard(str)





let str = 'mirabror'
function firstUpperStr(name){
  console.log(name[0].toUpperCase()+name.substring(1));
}
firstUpperStr(str)




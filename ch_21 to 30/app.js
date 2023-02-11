

let value=parseFloat(prompt('Enter a value: '))
const text='hamza ali'


value=Math.ceil(value)

const sliceText=text.slice(0,value)

console.log(value,sliceText)
let reverse=""
for(let i=sliceText.length-1;i>=0;i--){

   reverse= reverse.concat(sliceText[i])
    
}


 alert(reverse)

 console.log(reverse)
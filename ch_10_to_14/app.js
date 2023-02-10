

const a=Number(prompt('Enter num1:'))
const b=Number(prompt('Enter num2:'))
const operation=prompt('Enter the symbol:')


if(operation==='+'){
    var result=a+b
}
else if(operation==='-'){
    var result=a-b
}
else if(operation==='*'){
    var result=a*b
}
else if(operation==='/'){
    var result=a/b
}

else if(operation==='%'){
    var result=a%b
}

alert(`${a}${operation}${b} = ${result}`)
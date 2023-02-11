

let string=prompt('Enter a value as text: ')


string=string.toLowerCase()

let arr=string.split(" ")

let val=''
arr.forEach(element =>{
    val+=element[0].toUpperCase() + element.substring(1)+ " "
})
console.log(val)


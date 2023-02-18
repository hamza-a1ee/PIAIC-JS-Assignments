
const totalMarks=500
const marks=[]
let sum=0
for(let i=0;i<5; i++){

    marks.push(Number(prompt(`Enter marks for course ${i+1}: `)))
    sum+=marks[i]
}

const percent=(sum*100)/totalMarks

console.log(percent)

switch(true){
    case (percent>=90 && percent<=100):
        console.log('A+')
        break
        
    case (percent>=75 && percent<=89):
        console.log('A')
        break
    
    case(percent>=60 && percent<=74):
        console.log('B')
        break
    case(percent>=45 && percent<=60):
        console.log('C')
        break
    case (percent>=30 && percent<=44):
        console.log('D')
        break
            
   
}





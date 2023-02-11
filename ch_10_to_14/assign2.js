
var totalMarks=500

const course1=Number(prompt('Enter marks of course 1: '))
const course2=Number(prompt('Enter marks of course 2: '))
const course3=Number(prompt('Enter marks of course 3: '))
const course4=Number(prompt('Enter marks of course 4: '))
const course5=Number(prompt('Enter marks of course 5: '))

const obtained=course1+course2+course3+course4 + course5

const percentage=(obtained*100)/totalMarks

alert(`Percentage: ${percentage}`)



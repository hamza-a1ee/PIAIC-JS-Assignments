
var courses=[]

const course1=prompt('Enter course 1 name: ')
const course2=prompt('Enter course 2 name: ')
const course3=prompt('Enter course 3 name: ')
const course4=prompt('Enter course 4 name: ')
const course5=prompt('Enter course 5 name: ')

courses.push(course1,course2,course3,course4,course5)


alert(courses)

courses.splice(courses.indexOf(course1),1,prompt(`Enter value to replace ${course1}`))
courses.splice(courses.indexOf(course2),1,prompt(`Enter value to replace ${course2}`))
courses.splice(courses.indexOf(course3),1,prompt(`Enter value to replace ${course3}`))
courses.splice(courses.indexOf(course4),1,prompt(`Enter value to replace ${course4}`))
courses.splice(courses.indexOf(course5),1,prompt(`Enter value to replace ${course5}`))

alert(courses)


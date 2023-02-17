// const userName=prompt('Enter your name: ')
// const date=prompt('Enter date of your birth: ')
// const month=prompt('Enter month of your birth: ')
// const year=prompt('Enter year of your birth: ')


// console.log(`Hello ${userName}  Good Morning.`)

const birthTime=new Date('24 november, 2001') //birthday according to pakistan standard


const todayDate=new Date()
const todayDay=todayDate.getDate()
const todayMonth=todayDate.getMonth()
const todayYear=todayDate.getFullYear()


let calculateAge=0


if(todayMonth>birthTime.getMonth()){ calculateAge=todayYear - birthTime.getFullYear()}
else if(todayMonth== birthTime.getMonth()){ 
    if(todayDay >= birthTime.getDate()){ calculateAge=todayYear-birthTime.getFullYear()}
    else{
        calculateAge=todayYear-birthTime.getFullYear() - 1
    }
    

}
else{
    calculateAge=todayYear - birthTime.getFullYear() - 1


}


let birthMonth=12 - birthTime.getMonth()
birthMonth+= birthMonth
console.log(birthMonth)

let days=



let num=0
function factoralize(val){
    if(val==0 || val==1){
        return 1
    }
    return val=val*factoralize(val-1)

}


console.log(factoralize(Number(prompt('Enter a value: '))))
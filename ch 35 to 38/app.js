//assing 1

function capitalizeFirstLetter(word){

    word=word.toLowerCase()
    let result=' '
    const arr=word.split(' ')
    for(let i=0; i<arr.length; i++){
        result+=arr[i].charAt(0).toUpperCase() + arr[i].substring(1) + " "


    }

    return result
}


console.log(capitalizeFirstLetter(prompt('Enter a value: ')))




class Stack{
    constructor(){
        this.item=[]
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        if(this.item.length==0) return 'no tasks found'
        this.item.pop()
    }

    top(){
        return this.item[this.item.length - 1]
    }

    isEmpty(){
        return this.item.length==0
    }



}

function createJob(){
    const job=new Stack()
    const validate=Number(prompt('Enter 1 to enter a task or 0 to close.'))

    if(validate){
    let check=true
    while(check){
        
        if(job.isEmpty()){  console.log('no jobs found yet')}
        

        
        const input=Number(prompt('1. push task \n2. pop task'))
        if(input===1){
            const task=prompt(`Enter your task: `)    
            job.push(task)
            console.clear()
            printJobs(job)
        }
        else{
            job.pop()
            console.clear()
            printJobs(job)
        }
    }
}
else{
    alert('Thanks for using our app.')
}
}

function printJobs(job){
    job.item.forEach(element=>{
        console.log(element)
    })
}


createJob()
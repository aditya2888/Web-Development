let todo = [];

let req = prompt("Enter the task you want to do today:");

while(true){

    if(req == "quit" || "Quit"){

        console.log("quiting app");
        break;
    }

    if(req == "list" || "List"){

        console.log("Adding the tasks");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }

        console.log("Tasks added");
    }

    else if(req == "add" || "Add"){
        
        let task = prompt("Enter the task you want to add:");

        todo.push(task);

        console.log("Task added");
    } 
       
    else if( req == "delete" || "Delete"){

        let idx = prompt("Enter the index to be deleted:");

        todo.splice(idx, 1);
        console.log("Task deleted");
    } 
    
    else{

        prompt("Wrong input entered, enter the correct one");

    
    }

    req = prompt("Enter the task you want to do today:");
}
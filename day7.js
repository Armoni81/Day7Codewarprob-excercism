/*When visitors come to the amusement park 
for the first time, they need to 
register by entering their name 
and age in a terminal and agreeing to the 
terms and conditions. Of course, 
they also need to buy a ticket. 
Each ticket has an identifier like H32AZ123.

Write a function createVisitor that accepts three arguments.

The name of the visitor.
The age of the visitor.
The identifier of the ticket that the visitor bought.
The function should return an object that holds this information.
 The keys in the object should be called name, 
 age and ticketId. */

 /*function createVisitor(name,age,id){

    var obj = {
        name: name,
        age: age,
        id: id
    }

    return obj
 }

 console.log(createVisitor('Verena Nardi', 45, 'H32AZ123')) */

 //PART 2 Revoke the ticket
// 
/*const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };
function revokeTicket(visitor){
    
    visitor.ticketId= null
    return visitor
}
console.log(revokeTicket(visitor)) */



function pillars(num_pill,dist,width){

    var total = 0;
    if (num_pill ==1){
        total = 0;
    }
    else{
        var total_pill_width = ((num_pill -2)*width); //gets the total width of the pillar
        var total_dist = ((num_pill -1)*(dist *100));
        total+= (total_pill_width +total_dist)
    }
    return total
}
console.log(pillars(2,4,4))


4 -2 * 4 = 8
4 -1 * 4 *100


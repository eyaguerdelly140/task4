let users = [
    { name: "sarah", comment: "j'aime ce poste <3" },
    { name: "monya", comment: "le poste est null :( " },
    { name: "carlos", comment: "salut l'algérie" }
]

function MoodDetect(users) {
  
   let Comments = ["j'aime ce poste <3", "le poste est null :("]

   for (let user of users){
      if (user.comment === Comments[1]) {
            user.etat = "triste";
            delete user.comment;
        }
        
         if (Comments.includes(user.comment) == false) {
            user.etat = "neutre";
            delete user.comment;
        }
        if (user.comment === Comments[0]) {
            user.etat = "heureux";
            delete user.comment;
        }   
     
     }
     return users; 
};
  
  
    

console.log(MoodDetect(users));
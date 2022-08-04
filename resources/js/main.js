fetch("https://www.balldontlie.io/api/v1/teams")
.then(res => res.json())
.then(data => {
    
    console.log(data);

    document.querySelector('button').addEventListener('click',getTeam)

   
    function getTeam(teamName){

        

        //For Loop to grab every team given in the API
        for(let i = 0; i<data.data.length;i++){

            //Stores userinput for future comparison
            let userInput = document.querySelector('input').value;

            //Storing the team name that is retreived from the API
            let teamName = data.data[i].name;

            //Comparison between a team and userInput
            if(userInput === teamName){
             let teamID = data.data[i].id;  //console.log(teamID);

             //Inserting the userInput into the h2.
             document.getElementById("team").textContent = userInput;

             return teamID; //Returns the team id...


            }


         }


    }
  
//Grabbing the players

    fetch("https://www.balldontlie.io/api/v1/players/?per_page=100")
        .then(res => res.json())
        .then(data => {
         console.log(data);

         document.querySelector('button').addEventListener('click',findPlayers);



         function findPlayers(){
        //Saved the teamID value that was returned by the getTeam function.
         let playersTeamID = getTeam();
            //Loop to get of the player content in the API.
            for(let i = 0; i<data.data.length;i++){


                let ListOfPlayersTeamID = data.data[i].team.id;


                //If statement that prints every player that plays for a certain team.

                if (playersTeamID == ListOfPlayersTeamID){

                    console.log(data.data[i].team.name);

                    //Place team name into the H2
                   // document.querySelector('h2').innerText(data.data[i].team.name);


                   const teamName = document.createElement('li');
                   teamName.textContent = data.data[i].first_name +" "+ data.data[i].last_name;
                   document.querySelector('ul').appendChild(teamName);




                    console.log(data.data[i].first_name +" "+ data.data[i].last_name);
                }

            }
        }

  
        })

        .catch(err => {
            console.log('error' + err);
        })

            console.log(getTeam);

        })

        .catch(err => {
        console.log('error' + err);
})

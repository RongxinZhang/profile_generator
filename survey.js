const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileObject = {};

rl.question("What do you listen to while doing that? ", function(songs) {

  profileObject.songs = songs;

  rl.question('What\'s your name? Nicknames are also acceptable :) ', (nickNames) => {

    profileObject.nickNames = nickNames;

    rl.question("What's an activity you like doing? ", (activities) => {

      profileObject.activities = activities;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {

        profileObject.meal = meal;

        rl.question("What's your favourite thing to eat for that meal? ", (mealItem) => {

          profileObject.mealItem = mealItem;

          rl.question("Which sport is your absolute favourite? ", (sport) => {

            profileObject.sport = sport;
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {

              profileObject.superPower = superPower;

              for (const key in profileObject) {
                if (profileObject.hasOwnProperty(key)) {
                  const el = profileObject[key];
                  console.log(`${key} is ${el}`);
                }
              }

              rl.close();

            });
      
          });
    
        });
  
      });

    });
  });
});
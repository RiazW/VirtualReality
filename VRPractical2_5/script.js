/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/




let maze = [
  "---xxxxxxxxxxxxxxx-------",
  "h-h----h-------xxxh------",
  "h--x---h--h-xxxx--h------",
  "h----h-hxxh--h---xh------------",
  "h-----x----xx---h-h--------",
  "h-h-h--h-h-h------h-------",
  "h-hxhh--x-----h---h------",
  "h-h-hh---xxxxxxxxx---------",
  "hxh--h---h--------h-----",
  "h---xh--xxxxxx--xxh------",
  "hx--hh-h----------h-----",  
  "h----h-h--xxxxx--xh------",
  "h-xxx----h--h--h-h----",
  "hh-h-hx--h-----h--h-----",
  "h-h-hh---h-hxxxxxx---",
  "-xxxxh--x-----xx--h---",
  "-----h-hh----hx-h-h------",
  "-----h-h----x-------",
  "-----h--xx-h--xxxxh-------",
  "-----h-----h-h----h---",
  "------xxxxx---x-h-h-",
  "-----------h----h--",
  "------------xxxxxx------",

];
/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");

    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c,1,r)
      }
      else if(cols[c] == "h"){
        new Wall(c, 1, r, "horizontal");
 
      }
    }

  }

})


/* Challenge 3
  Choose a technique to traverse the each character in the string.
*/ 
/* Challenge 4
   Make an appropriate decision based on the characters you chose to enter 
   in the maze.  Create an instance of the corresponding object.
*/
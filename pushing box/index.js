// Define leve  
let levels =0;

// get all button
  let prel=document.getElementById("prel")
  let nextl=document.getElementById("nextl")
  let regame=document.getElementById("regame")
  let nth=document.getElementById("nth")

// Define steps
let steps = 0;

// Get map background information
let oWrap = document.getElementById('bckgr');

// Record information
let gelement = {
  wall: { color: 'red', data: 1 },
  target: { color: 'black', data: 2 },
  box: { color: 'yellow', data: 3 },
  player: { color: 'green', data: 4 }
};

// Define player position
let playerX = 0;
let playerY = 0;

// Create map
CreateMap(levels);

// Analyze information of the map
function CreateMap(levels) {
      steps = 0;
      oWrap.innerHTML = '';
      displayl(levels)

  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      switch (gMap[levels][x * 16 + y]) {
        // case 0:
        //   CreateElements(x, y,"white","none");
        //   break;
        case gelement.wall.data:
          CreateElements(x, y, gelement.wall.color,"wall");
          break;
        case gelement.target.data:
          CreateElements(x, y, gelement.target.color,"target");
          break;
        case gelement.box.data:
          CreateElements(x, y, gelement.box.color,"box");
          break;
        case gelement.player.data:
          CreateElements(x, y, gelement.player.color,"player");
          break;
      }
    }
  }
}

function CreateElements(x, y,color,name) {  
  let newDiv = document.createElement('div');

  // appendChild requires creating a node before inserting it into the parent element
  oWrap.appendChild(newDiv);

  newDiv.className=name
  newDiv.style.cssText =
    'left:' + x * 42 + 'px;' +
    'top:' + y * 42 + 'px;' +
    'z-index:' + (x * y) + ';' +
    'width:42px;' +
    'height:42px;' +
    // 'background-color:' + color + ';'+
    'position:absolute;';
  newDiv.x = x;
  newDiv.y = y;

}

// get position of player
// let tnone=document.getElementsByClassName("none")
let twall=document.getElementsByClassName("wall")
let ttarget=document.getElementsByClassName("target")
let tbox=document.getElementsByClassName("box")
let tplayer=document.getElementsByClassName("player")


// control player's move
document.addEventListener("keydown",(event)=>{

let _flag=0,_flag1=0,_flag2=0

 switch(event.key){
  // move to the right
  case "d":
    _flag=0,_flag1=0,_flag2=0
// to justify whether there is wall on the right
    for(let j=0;j<twall.length;j++){
      if(tplayer[0].x+1==twall[j].x&&tplayer[0].y==twall[j].y){_flag=1;  break;}}
// to justify whether there are two boxes on the right
    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<tbox.length;i++){
        if(tbox[j].x+1==tbox[i].x&&tbox[j].y==tbox[i].y){_flag1=1; break;}
      }
      if(tplayer[0].x+1==tbox[j].x&&tplayer[0].y==tbox[j].y&&_flag1==1){break;}
      _flag1=0
    }     
// to justify whether the box is next to the wall
    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<twall.length;i++){
        if(tbox[j].x+1==twall[i].x&&tbox[j].y==twall[i].y){_flag2=1; break;}
      }
      if(tplayer[0].x+1==tbox[j].x&&tplayer[0].y==tbox[j].y&&_flag2==1){break;}
      _flag2=0
    }   
  // pushing the box
      if(_flag==0&&_flag1==0&&_flag2==0){
        for(let i=0;i<tbox.length;i++){
          if(tplayer[0].x+1==tbox[i].x&&tplayer[0].y==tbox[i].y){
            CreateElements(tbox[i].x+1,tbox[i].y, gelement.box.color,"box");
            tbox[i].parentNode.removeChild(tbox[i])
            CreateElements(tplayer[0].x+1, tplayer[0].y, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

            _flag=1
            break;
          }
        }
          if(_flag==0){
            CreateElements(tplayer[0].x+1, tplayer[0].y, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

          }
      pass(tbox)
     }
  break;
 

  // move to the left
  case "a":
    _flag=0,_flag1=0,_flag2=0
// to justify whether there is wall on the right
    for(let j=0;j<twall.length;j++){
      if(tplayer[0].x-1==twall[j].x&&tplayer[0].y==twall[j].y){_flag=1;  break;}}
// to justify whether there are two boxes on the right
    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<tbox.length;i++){
        if(tbox[j].x-1==tbox[i].x&&tbox[j].y==tbox[i].y){_flag1=1; break;}
      }
      if(tplayer[0].x-1==tbox[j].x&&tplayer[0].y==tbox[j].y&&_flag1==1){break;}
      _flag1=0
    }     

    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<twall.length;i++){
        if(tbox[j].x-1==twall[i].x&&tbox[j].y==twall[i].y){_flag2=1; break;}
      }
      if(tplayer[0].x-1==tbox[j].x&&tplayer[0].y==tbox[j].y&&_flag2==1){break;}
      _flag2=0
    }   
  // pushing the box
      if(_flag==0&&_flag1==0){
        for(let i=0;i<tbox.length;i++){
          if(tplayer[0].x-1==tbox[i].x&&tplayer[0].y==tbox[i].y){
            CreateElements(tbox[i].x-1,tbox[i].y, gelement.box.color,"box");
            tbox[i].parentNode.removeChild(tbox[i])

            CreateElements(tplayer[0].x-1, tplayer[0].y, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

            _flag=1
            break;
          }
        }
          if(_flag==0){
            CreateElements(tplayer[0].x-1, tplayer[0].y, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

          }
      pass(tbox)
     }
  break;


  // move to the below
  case "s":
    _flag=0,_flag1=0,_flag2=0
// to justify whether there is wall on the right
    for(let j=0;j<twall.length;j++){
      if(tplayer[0].y+1==twall[j].y&&tplayer[0].x==twall[j].x){_flag=1;  break;}}
// to justify whether there are two boxes on the right
    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<tbox.length;i++){
        if(tbox[j].y+1==tbox[i].y&&tbox[j].x==tbox[i].x){_flag1=1; break;}
      }
      if(tplayer[0].y+1==tbox[j].y&&tplayer[0].x==tbox[j].x&&_flag1==1){break;}
      _flag1=0
    }     

    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<twall.length;i++){
        if(tbox[j].y+1==twall[i].y&&tbox[j].x==twall[i].x){_flag2=1; break;}
      }
      if(tplayer[0].y+1==tbox[j].y&&tplayer[0].x==tbox[j].x&&_flag2==1){break;}
      _flag2=0
    }   
  // pushing the box
      if(_flag==0&&_flag1==0){
        for(let i=0;i<tbox.length;i++){
          if(tplayer[0].y+1==tbox[i].y&&tplayer[0].x==tbox[i].x){
            CreateElements(tbox[i].x,tbox[i].y+1, gelement.box.color,"box");
            tbox[i].parentNode.removeChild(tbox[i])

            CreateElements(tplayer[0].x, tplayer[0].y+1, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

            _flag=1
            break;
          }
        }
          if(_flag==0){
            CreateElements(tplayer[0].x, tplayer[0].y+1, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

          }
        pass(tbox)  
     }
  break;


  // move to the top
  case "w":
    _flag=0,_flag1=0,_flag2=0
// to justify whether there is wall on the right
    for(let j=0;j<twall.length;j++){
      if(tplayer[0].y-1==twall[j].y&&tplayer[0].x==twall[j].x){_flag=1;  break;}}
// to justify whether there are two boxes on the right
    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<tbox.length;i++){
        if(tbox[j].y-1==tbox[i].y&&tbox[j].x==tbox[i].x){_flag1=1; break;}
      }
      if(tplayer[0].y-1==tbox[j].y&&tplayer[0].x==tbox[j].x&&_flag1==1){break;}
      _flag1=0
    }     

    for(let j=0;j<tbox.length;j++){
      for(let i=0;i<twall.length;i++){
        if(tbox[j].y-1==twall[i].y&&tbox[j].x==twall[i].x){_flag2=1; break;}
      }
      if(tplayer[0].y-1==tbox[j].y&&tplayer[0].x==tbox[j].x&&_flag2==1){break;}
      _flag2=0
    }   
  // pushing the box
      if(_flag==0&&_flag1==0){
        for(let i=0;i<tbox.length;i++){
          if(tplayer[0].y-1==tbox[i].y&&tplayer[0].x==tbox[i].x){
            CreateElements(tbox[i].x,tbox[i].y-1, gelement.box.color,"box");
            tbox[i].parentNode.removeChild(tbox[i])

            CreateElements(tplayer[0].x, tplayer[0].y-1, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

            _flag=1
            break;
          }
        }
          if(_flag==0){
            CreateElements(tplayer[0].x, tplayer[0].y-1, gelement.player.color,"player");
            tplayer[0].parentNode.removeChild(tplayer[0])

          }
      pass(tbox)
     }
     
  break;
    }
  })



  // previous level
  prel.onclick=function (){
    if(levels==0){
      alert("this is already the first level")
    }
    else{
      levels-=1
      CreateMap(levels)
    }
  }

  // next level 
  nextl.onclick=function(){
    if(levels==gMap.length){
      alert("this is already the last level")
    }
    else{
      levels+=1
      CreateMap(levels)
    }
  }

  // restart
  regame.onclick=function(){
    CreateMap(levels)
  }

  // display the level
  function displayl(levels){
    nth.textContent=`level ${levels+1}`
  }

  // pass the game
  function pass(tbox) {
    let num = 0;
    steps++;
    let ttarget = document.getElementsByClassName('target');
    for (let i = 0; i < tbox.length; i++) {
        for (let j = 0; j < ttarget.length; j++) {
            if (tbox[i].x == ttarget[j].x && tbox[i].y == ttarget[j].y) {
                num++
            }
        }
    }
    if (num == ttarget.length) {

        setTimeout(
            function () {
                alert(`恭喜通关
你一共走了${steps}步。
点击确定进入下一关。`)
                levels++;
                CreateMap(levels);
            }, 100
        )

    }}
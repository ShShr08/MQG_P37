var canvas;
var gameState = 0;
var concount;
var database;
var con
var qiz
var ques;
var allcon

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  qiz = new Quiz();
  qiz.getState();
  qiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4)
  {
    qiz.update(1);
  }
  if(gameState===1)
  {
    qiz.play();
  }
}

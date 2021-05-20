class Quiz{
    constructor(){

    }

    getState(){
        var gsR  = database.ref('gS');
        gsR.on("value",function(data){
           gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var ccR = await database.ref('contestantCount').once("value");
            if(ccR.exists()){
                contestantCount = ccR.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }  

    play(){
      question.hide();
      background("green");
      textSize(40);
      text("Result of Quiz",120,70);
      Contestant.gcI()
      if(allContestants!==null){
        var display_position = 260;
        for(var plr in allContestants){
            var correctAns="2";
            if(correctAns===allContestants[plr].answer)
            fill("green");
            else
            fill("red");
            display_position+=30;
            textSize(25);
            text(allContestants[plr].name+": "+allContestants[plr].answer,120,display_position)
            }
        }
    }
}

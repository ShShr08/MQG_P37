class Question{
    constructor(){
        this.i1 =  createInput("Name");
        this.i2 =  createInput("Correct option");
        this.t =  createElement('h2');
        this.q =  createElement('h2');
        this.o1 =  createElement('h2');
        this.o2 =  createElement('h2');
        this.o3 = createElement('h2');
        this.b = createButton('Enter');
    }

    hide(){
       this.i1.hide();
       this.i2.hide();
       this.b.hide();
       this.t.hide();
    }

    display(){
        this.t.html("M Q G");
        this.t.position(350,0);
        this.q.html("Question: What's (3^7*3+7)^3");
        this.q.position(70,80);
        this.o1.html("1: 283334482432" );
        this.o1.position(150,125);
        this.o2.html("2: 71293012");
        this.o2.position(150,155);
        this.o3.html("3: 181390421038");
        this.o3.position(230,200);

        this.i1.position(150,230);
        this.i2.position(300,230);
        this.b.position(225,280);

        this.button.mousePressed(()=>{
            this.t.hide();
            this.i1.hide();
            this.i2.hide();
            this.b.hide();
            c.name = this.i1.value();
            c.answer = this.input2.value();
            contestantCount+=1;
            c.index = contestantCount;
            c.update();
            c.updateCount(contestantCount);
        })
    }
}
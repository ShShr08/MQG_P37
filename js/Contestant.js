class Contestant{
    constructor(){
    this.index=null;
    this.name=null;
    this.answer=0;
    }

    getCount(){
        var ccR = database.ref('contestantCount');
        ccR.on("value",(data)=>{
        contestantCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
        contestantCount:count
        });
    }

    update(){
        var cI = "contestants/contestant" + this.index;
        database.ref(cI).set({
        name:this.name,
        ans:this.ans
        });
    }

    static gcI(){
        var ciR = database.ref('contestants');
        ciR.on("value",(data)=>{
        aC = data.val();
        });
    }
}
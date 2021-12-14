class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      this.input2 = createInput("Enter Correct Option No..");
      this.submit = createButton('Submit');
      this.reset = createButton('Reset');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      //this.button2.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("My Quiz Game #2");
      this.title.position(350, 0);
  
      this.question.html("Question: What Goes Up But Never Goes Down" );
      this.question.position(200, 100);
      this.option1.html("A1: A Plane " );
      this.option1.position(200, 120);
      this.option2.html("A2: Age" );
      this.option2.position(200, 140);
      this.option3.html("A3: Growth " );
      this.option3.position(200, 160);
      this.option4.html("A4: None Of The Above" );
      this.option4.position(200, 180);
  
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.submit.position(290, 300);
      this.reset.position(360, 300);
  
      this.submit.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
      this.reset.mousePressed(()=>{
        contestant.updateCount(0)
        quiz.update(0)
        var ref = database.ref("contestants")
        ref.remove()
      })
    }
  }
 
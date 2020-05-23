class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. What are your hobbies?");
        this.radio = createRadio('h3');
        this.radio.option('Sports');
        this.radio.option('Swimming');
        this.radio.option('Reading Stories');
        this.radio.option('Others');
        this.question2 = createElement('h3', "Q2. What is your ambition?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Doctor');
        this.radio1.option('Engineer');
        this.radio1.option('Police');
        this.radio1.option('Others');
        this.question3 = createElement('h3', "Q3. What is your favourite lunch?");
        this.radio2 = createRadio('h3');
        this.radio2.option('Briyani');
        this.radio2.option('Lemon Rice');
        this.radio2.option('Curd Rice');
        this.radio2.option('Others');
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}
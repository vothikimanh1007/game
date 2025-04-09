let currentQuestionIndex = 0;
let score = 0;
let studentName = '';
let questions = [
    {
        question: "What does the equals() method in Java do?",
        options: ["Compare two objects by their memory address", "Compare two objects by their content", "Perform arithmetic with two objects", "Create a new object from an existing one"],
        answer: 1
    },
    {
        question: "How is a 2D array declared in Java?",
        options: ["int[] array = new int[2][3];", "int[][] array = new int[2][3];", "int array[][] = new int[2][3];", "All of the above"],
        answer: 1
    },
    {
        question: "What does the reducer() method in the Fraction class do?",
        options: ["Reduces the numerator and denominator of a fraction to their simplest form", "Increases the numerator and denominator of a fraction", "Compares two fractions", "Does nothing"],
        answer: 0
    },
    {
        question: "What is the purpose of the instanceof operator in Java?",
        options: ["To check the data type of an object", "To check the class type of an object at runtime", "To check the validity of input data", "To compare two objects"],
        answer: 1
    },
    {
        question: "When two Rectangle objects have the same area, what does the equals() method return?",
        options: ["TRUE", "FALSE", "Compile-time error", "Undefined"],
        answer: 0
    },
    {
        question: "Which class in Java can compare two objects based on their properties?",
        options: ["Object", "String", "Integer", "Math"],
        answer: 0
    },
    {
        question: "To compare two Fraction objects in the Fraction class, what should we do?",
        options: ["Compare the numerator only", "Compare the denominator only", "Compare the simplified numerator and denominator", "Cannot compare"],
        answer: 2
    },
    {
        question: "What does the keyword extends do in Java?",
        options: ["Create a child class that inherits from a parent class", "Create a new class unrelated to the parent class", "Create a new object from the current class", "Does nothing"],
        answer: 0
    },
    {
        question: "What does the super() keyword in Java do?",
        options: ["Access methods and properties of the parent class", "Create a new object from the parent class", "Call a method from the child class", "Does nothing"],
        answer: 1
    },
    {
        question: "In Java, which relationship does the method overriding represent?",
        options: ["Inheritance and Method Overloading", "Polymorphism and Method Overloading", "Encapsulation and Constructor Overloading", "Only Inheritance"],
        answer: 1
    },
    {
        question: "What is the purpose of the @Override annotation in Java?",
        options: ["Indicate that the method will override the method from the parent class", "Create a new method not present in the parent class", "Run a method from the parent class", "Does nothing"],
        answer: 0
    },
    {
        question: "What does the getSalary() method in the Manager class do?",
        options: ["Calculate the salary of a regular employee", "Calculate the salary of a manager with additional bonuses", "Does not implement salary calculation", "Does nothing"],
        answer: 0
    },
    {
        question: "What is the output when the equals() method compares two Rectangle objects with equal areas?",
        options: [" true", " false", "Compile-time error", "Undefined"],
        answer: 1
    },
    {
        question: "Which of the following is an example of Method Overriding?",
        options: ["Changing the method signature in the subclass", "Re-implementing a parent method in the child class", "Changing the parameter type in the method", "Overloading the method"],
        answer: 0
    },
    {
        question: "What will the following code print? Developer dev = new Developer('Alice'); System.out.println(dev.title());",
        options: ["Developer", "Employee", "Alice", "Trudy"],
        answer: 0
    },
    {
        question: "What does the super() keyword in a subclass constructor do?",
        options: ["Calls a constructor from the parent class", "Creates a new object", "Runs a method from the parent class", "Does nothing"],
        answer: 2
    },
    {
        question: "What does the instanceof operator check?",
        options: ["Checks the class type of an object at runtime", "Checks if the object is null", "Compares two objects", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following is true about inheritance?",
        options: ["The child class can inherit properties and methods from the parent class", "The child class cannot inherit constructors", "The child class can inherit private variables", "Inheritance is not possible in Java"],
        answer: 0
    },
    {
        question: "In Java, how do we define a subclass?",
        options: ["By using the keyword extends", "By using the keyword super", "By using the keyword new", "By using the keyword class"],
        answer: 1
    },
    {
        question: "Which of the following is a true statement about inheritance?",
        options: ["The child class can inherit properties and methods from the parent class", "The child class cannot inherit constructors", "The child class can inherit private variables", "Inheritance is not possible in Java"],
        answer: 0
    },
    {
        question: "How can a subclass access the properties of its parent class?",
        options: ["Using the super() keyword", "By redefining the properties", "By using the this() keyword", "By using the call() method"],
        answer: 0
    },
    {
        question: "Which of the following statements is true about the `super` keyword?",
        options: ["It refers to the parent class object", "It refers to the current class object", "It can only be used in constructors", "None of the above"],
        answer: 0
    },
    {
        question: "What is the primary purpose of inheritance in Object-Oriented Programming?",
        options: ["Code reuse", "Data encapsulation", "Multiple inheritance", "Polymorphism"],
        answer: 0
    },
    {
        question: "Which keyword is used to inherit properties from a superclass in Java?",
        options: ["extends", "super", "this", "inherits"],
        answer: 0
    },
    {
        question: "What does the 'super' keyword in Java do?",
        options: ["Invokes the parent class constructor", "Defines a subclass", "Inherits variables from superclass", "Overwrites methods"],
        answer: 0
    },
    {
        question: "What does method overriding achieve in Java?",
        options: ["Method with the same signature in subclass", "Creating a new method", "Multiple constructors in a class", "Class inheritance"],
        answer: 0
    },
    {
        question: "Which method annotation is used for method overriding?",
        options: ["@Override", "@OverrideMethod", "@Inherited", "@Super"],
        answer: 0
    },
    {
        question: "What is the output of the following code? 'System.out.println(emp);' in the provided 'TestOverride' program",
        options: ["Bob: Employee", "Alice: Developer", "Trudy: Developer", "Error"],
        answer: 0
    },
    {
        question: "What is the superclass of the Developer class in the example?",
        options: ["Employee", "Person", "Object", "Manager"],
        answer: 0
    },
    {
        question: "What keyword is used to call the constructor of the superclass?",
        options: ["super", "this", "parent", "base"],
        answer: 0
    },
    {
        question: "In the 'Person' class, which method returns the name of the person?",
        options: ["getName()", "getPersonName()", "setName()", "toString()"],
        answer: 0
    },
    {
        question: "What is the result of calling 'emp1.toString()' when 'emp1' is of type Employee, but initialized as a Developer?",
        options: ["Trudy: Developer", "Bob: Employee", "Trudy: Employee", "Error"],
        answer: 0
    },
    {
        question: "Which class inherits from the 'Person' class?",
        options: ["Teacher", "Employee", "Manager", "Developer"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'getSalary()' method in the Manager class?",
        options: ["Calculate the salary including position bonus", "Calculate base salary", "Assign salary coefficient", "Update employee details"],
        answer: 0
    },
    {
        question: "What does the method 'bonusByPosition()' calculate in the Manager class?",
        options: ["Position bonus", "Employee bonus", "Yearly bonus", "Salary coefficient"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'OrderManager' class in the Seven-Eleven system?",
        options: ["Handles sales transactions", "Manages stock inventory", "Creates promotional offers", "Generates invoices"],
        answer: 0
    },
    {
        question: "What is the additional surcharge for hot food items in the Seven-Eleven system?",
        options: ["5,000 VND", "3,000 VND", "10,000 VND", "No surcharge"],
        answer: 0
    },
    {
        question: "In the Seven-Eleven system, what happens when a customer orders 'Vietnamese Iced Coffee'?",
        options: ["It applies a promotion where one item is free", "The order is automatically cancelled", "It adds 5,000 VND to the total", "It receives a size discount"],
        answer: 0
    },
    {
        question: "Which class in the Seven-Eleven system represents food items?",
        options: ["FoodItem", "Product", "BeverageItem", "OrderManager"],
        answer: 0
    },
    {
        question: "What happens when the stock of a product is not sufficient in 'OrderManager'?",
        options: ["The product is skipped", "The order is refunded", "The system shows an error", "The order is automatically cancelled"],
        answer: 0
    },
    {
        question: "Which class is responsible for managing the list of products in Seven-Eleven?",
        options: ["SevenElevenOrderManager", "Product", "FoodItem", "OrderManager"],
        answer: 0
    },
    {
        question: "What is the 'calculateFinalPrice()' method used for in the Product class?",
        options: ["Calculates final price with discounts", "Calculates stock quantity", "Lists product attributes", "Applies promotions"],
        answer: 0
    },
    {
        question: "What attribute in the 'BeverageItem' class defines the size of the beverage?",
        options: ["size", "hot", "stock", "price"],
        answer: 0
    },
    {
        question: "Which of the following classes represents a general product sold at Seven-Eleven?",
        options: ["Product", "FoodItem", "BeverageItem", "OrderManager"],
        answer: 0
    },
    {
        question: "Which class handles the sales transactions and stock updates in Seven-Eleven?",
        options: ["OrderManager", "Product", "SevenElevenOrderManager", "FoodItem"],
        answer: 0
    },
    {
        question: "What method in the 'OrderManager' class is responsible for processing customer orders?",
        options: ["processOrder()", "findProduct()", "calculateTotal()", "updateStock()"],
        answer: 0
    },
    {
        question: "In the 'Employee' class, which constructor initializes an employee's name?",
        options: ["Employee(String name)", "Employee()", "Employee(String name, String address)", "Employee(int id)"],
        answer: 0
    },
    {
        question: "What happens when a method in Java has the 'final' keyword?",
        options: ["It cannot be overridden", "It can be overridden", "It cannot be inherited", "It must have a constructor"],
        answer: 0
    },
    {
        question: "Which of the following is a method defined in the 'Employee' class?",
        options: ["title()", "getTitle()", "calculateSalary()", "setTitle()"],
        answer: 0
    },
    {
        question: "In the Seven-Eleven system, which item is adjusted based on the size (S, M, L)?",
        options: ["BeverageItem", "Product", "FoodItem", "OrderManager"],
        answer: 0
    },
    {
        question: "What is the 'toString()' method used for in the 'Person' class?",
        options: ["To return a string representation of the person", "To print out the address", "To store the name", "To initialize the person object"],
        answer: 0
    },
    {
        question: "What method in the 'Teacher' class returns the subject of the teacher?",
        options: ["getSubject()", "setSubject()", "getName()", "getAddress()"],
        answer: 0
    },
    {
        question: "Which class would you use to simulate a real store experience, including processing orders?",
        options: ["SevenElevenOrderManager", "Product", "FoodItem", "OrderManager"],
        answer: 0
    }	
];

// Load leaderboard from localStorage if available
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

function startGame() {
    studentName = document.getElementById("studentName").value;
    if (studentName) {
        document.getElementById("welcome").style.display = 'none';
        document.getElementById("quizContainer").style.display = 'block';
        loadQuestion();
        showLeaderboard(); // Show the current leaderboard on the game start
    } else {
        alert("Please enter your name!");
    }
}

function loadQuestion() {
    let question = questions[currentQuestionIndex];
    let questionHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="answers-container">
    `;
    
    question.options.forEach((option, index) => {
        questionHTML += `
            <div>
                <input type="radio" name="question" value="${index}" id="answer${index}">
                <label for="answer${index}">${option}</label>
            </div>
        `;
    });

    questionHTML += `
        </div>
        </div>
    `;

    document.getElementById("questionsContainer").innerHTML = questionHTML;
}

function nextQuestion() {
    let selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        let answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestionIndex].answer) {
            score += 10;  // Change the points per correct answer here
        }
    } else {
        alert("Please select an answer!");
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load the next question
    } else {
        document.getElementById("quizContainer").style.display = 'none';
        document.getElementById("result").style.display = 'block';
        document.getElementById("score").textContent = `Your score: ${score}`;
    }
}

function submitScore() {
    // Add the player's name and score to the leaderboard
    leaderboard.push({ name: studentName, score: score });
    leaderboard.sort((a, b) => b.score - a.score);  // Sort leaderboard by highest score

    // Store leaderboard in localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Show updated leaderboard after submitting score
    showLeaderboard();

    document.getElementById("result").style.display = 'none';
    document.getElementById("leaderboard").style.display = 'block';
}

function showLeaderboard() {
    // Show top 5 players in the leaderboard
    let leaderboardHtml = '';
    let topPlayers = leaderboard.slice(0, 5);  // Get top 5 players
    topPlayers.forEach(player => {
        leaderboardHtml += `<li>${player.name}: ${player.score}</li>`;
    });

    document.getElementById("scoreBoard").innerHTML = leaderboardHtml;
}

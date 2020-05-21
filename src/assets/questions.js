// categories: forms, syntax, HTML language info, CSS language info, Javascript language info, functions, variables,

let questions = {
    "HTML": [
        {
            "questionId": "001",
            "questionCategory": "html",
            "category": "forms",
            "difficulty": "medium",
            "question": "Which is the correct request type on the 'action' attribute?",
            "answers": [
                { "ans": "GRAB", "selected": "false" },
                { "ans": "GET", "selected": "false" },
                { "ans": "SNATCH", "selected": "false" },
                { "ans": "REMOVE", "selected": "false" }
            ],
            "correctAnswer": "GET"
        },
        {
            "questionId": "002",
            "questionCategory": "html",
            "difficulty": "easy",
            "category": "forms",
            "question": "Which is the correct tag for taking user input",
            "answers": [
                { "ans": "Input", "selected": "false" },
                { "ans": "Select", "selected": "false" },
                { "ans": "Textarea", "selected": "false" },
                { "ans": "All Of The Above", "selected": "false" }
            ],
            "correctAnswer": "All Of The Above"
        },
        {
            "questionId": "003",
            "questionCategory": "html",
            "difficulty": "easy",
            "category": "HTML language info",
            "question": "What does HTML Stand for?",
            "answers": [
                { "ans": "Highlighted Template Markup Language", "selected": "false" },
                { "ans": "Hyper Text Markup Language", "selected": "false" },
                { "ans": "Hyperlinks and Text Markup Language", "selected": "false" },
                { "ans": "Home Tool Markup Language", "selected": "false" }
            ],
            "correctAnswer": "Hyper Text Markup Language"
        },
        {
            "questionId": "004",
            "questionCategory": "html",
            "difficulty": "easy",
            "category": "forms",
            "question": "What is the proper way to hide a password in forms?",
            "answers": [
                { "ans": "<input type='hashed'></input>", "selected": "false" },
                { "ans": "<input type='password'></input>", "selected": "false" },
                { "ans": "<input type='password'/>", "selected": "false" },
                { "ans": "<input type='hidden'/>", "selected": "false" }
            ],
            "correctAnswer": "<input type='password'/>"
        },
        {
            "questionId": "005",
            "questionCategory": "html",
            "difficulty": "medium",
            "category": "forms",
            "question": "What attribute do you use to get an input element focused when the form loads?",
            "answers": [
                { "ans": "autofocus", "selected": "false" },
                { "ans": "auto-focus", "selected": "false" },
                { "ans": "auto-focus='true'", "selected": "false" },
                { "ans": "focus='true'", "selected": "false" }
            ],
            "correctAnswer": "autofocus"
        },
        {
            "questionId": "006",
            "questionCategory": "html",
            "difficulty": "easy",
            "category": "HTML language info",
            "question": "HTML is a programming language.",
            "answers": [
                { "ans": "true", "selected": "false" },
                { "ans": "false", "selected": "false" },
            ],
            "correctAnswer": "false"
        },
        {
            "questionId": "007",
            "questionCategory": "html",
            "difficulty": "easy",
            "category": "HTML language info",
            "question": "All HTML code renders the same for each browser.",
            "answers": [
                { "ans": "false", "selected": "false" },
                { "ans": "true", "selected": "false" }
            ],
            "correctAnswer": "false"
        },
        {
            "questionId": "008",
            "questionCategory": "html",
            "difficulty": "easy",
            "category": "forms",
            "question": "To have an input field you need the <form> tag around it",
            "answers": [
                { "ans": "true", "selected": "false" },
                { "ans": "false", "selected": "false" }
            ],
            "correctAnswer": "false"
        },
        {
            "questionId": "009",
            "questionCategory": "html",
            "difficulty": "medium",
            "category": "forms",
            "question": "Which of the following is NOT a new form element type in HTML5?",
            "answers": [
                { "ans": "color", "selected": "false" },
                { "ans": "url", "selected": "false" },
                { "ans": "date-local", "selected": "false" },
                { "ans": "time", "selected": "false" }
            ],
            "correctAnswer": "date-local"
        },
        {
            "questionId": "010",
            "questionCategory": "html",
            "difficulty": "medium",
            "category": "misc",
            "question": "How would you insert the Copyright sign in HTML?",
            "answers": [
                { "ans": "@copyright", "selected": "false" },
                { "ans": "copyright", "selected": "false" },
                { "ans": "@copy", "selected": "false" },
                { "ans": "&copy", "selected": "false" }
            ],
            "correctAnswer": "&copy"
        },
        {
            "questionId": "011",
            "questionCategory": "html",
            "difficulty": "medium",
            "category": "misc",
            "question": "What is an empty element?",
            "answers": [
                { "ans": "An element where you haven't added text: <p> </p>", "selected": "false" },
                { "ans": "HTML elements where no content can be added: <hr>", "selected": "false" },
                { "ans": "An Input tag with no placeholder value", "selected": "false" }
            ],
            "correctAnswer": "HTML elements where no content can be added: <hr>"
        }
    ],
    "CSS": [
        {
            "questionId": "334",
            "questionCategory": "css",
            "difficulty": "easy",
            "category": "syntax",
            "question": "What are the proper selectors for classes, tags, and id's?",
            "answers": [
                { "ans": "Tagname: '@h1' class: '#h1' id: '.h1'", "selected": "false"},
                { "ans": "Tagname: 'h1' class: '.h1' id: '#h1'", "selected": "false" },
                { "ans": "Tagname: 'h1' class: '#h1' id: '.h1'", "selected": "false" },
                { "ans": "Tagname: '.h1' class: '#h1' id: 'h1'", "selected": "false" }
            ],
            "correctAnswer": "Tagname: 'h1' class: '.h1' id: '#h1'"
        },
        {
            "questionId": "335",
            "questionCategory": "css",
            "difficulty": "easy",
            "category": "syntax",
            "question": "What is the correct syntax for media queries?",
            "answers": [
                { "ans": "@media only screen and (max-width: 600px)", "selected": "false" },
                { "ans": "(max-width: 600px)", "selected": "false" },
                { "ans": "media only screen and (max-width: 600px)", "selected": "false" },
                { "ans": "@media (max-width: 600px)", "selected": "false" }
            ],
            "correctAnswer": "@media only screen and (max-width: 600px)"
        }, 
        {
            "questionId": "336",
            "questionCategory": "css",
            "difficulty": "easy",
            "category": "CSS language info",
            "question": "What does CSS stand for?",
            "answers": [
                { "ans": "Continuing Style Sheets", "selected": "false" },
                { "ans": "Colorful Style Sheet", "selected": "false" },
                { "ans": "Cascading Sacred Sheets", "selected": "false" },
                { "ans": "Cascading Style Sheets", "selected": "false" }
            ],
            "correctAnswer": "Cascading Style Sheets"
        },
        {
            "questionId": "337",
            "questionCategory": "css",
            "difficulty": "medium",
            "category": "syntax",
            "question": "Which is the proper syntax for comments",
            "answers": [
                { "ans": "`this is a comment", "selected": "false" },
                { "ans": "// this is a comment //", "selected": "false" },
                { "ans": "// this is a comment", "selected": "false" },
                { "ans": "/* this is a comment */", "selected": "false" }
            ],
            "correctAnswer": "// this is a comment"
        },
        {
            "questionId": "338", 
            "questionCategory": "css",
            "difficulty": "medium",
            "category": "syntax",
            "question": "How would you add a black border, with 7px on the left, 8px on the right, and 10px on the top and bottom",
            "answers": [
                { "ans": "border: black 10px 8px 10px 7px", "selected": "false" },
                { "ans": "border-width: 10px 8px 10px 7px", "selected": "false" },
                { "ans": "border-width: 8px 10px 7px 10px", "selected": "false" },
                { "ans": "border: black 8px 10px 7px 10px", "selected": "false" }
            ],
            "correctAnswer": "border-width: 10px 8px 10px 7px"
        },
        {
            "questionId": "339",
            "questionCategory": "css",
            "difficulty": "medium",
            "category": "syntax",
            "question": "How do you select all p elements inside a div element?",
            "answers": [
                { "ans": "div + p", "selected": "false" },
                { "ans": "div < p", "selected": "false" },
                { "ans": "div-p", "selected": "false" },
                { "ans": "div p", "selected": "false" }
            ],
            "correctAnswer": "div p"
        },
        {
            "questionId": "340",
            "questionCategory": "css",
            "difficulty": "easy",
            "category": "CSS language info",
            "question": "How many ways is it possible to include CSS style in your HTML?",
            "answers": [
                { "ans": "2", "selected": "false" },
                { "ans": "4", "selected": "false" },
                { "ans": "1", "selected": "false" },
                { "ans": "3", "selected": "false" }
            ],
            "correctAnswer": "3"
        },
        {
            "questionId": "341",
            "questionCategory": "css",
            "difficulty": "medium",
            "category": "misc",
            "question": "What is the universal selector?",
            "answers": [
                { "ans": "A custom selector made for selecting what elements you want", "selected": "false" },
                { "ans": "A selector made for selecting all HTML elements", "selected": "false" },
                { "ans": "A custom selector made for selecting all elements", "selected": "false" },
                { "ans": "A selector made for selecting all elements with classes or ID's", "selected": "false" }
            ],
            "correctAnswer": "A selector made for selecting all HTML elements"
        },
        {
            "questionId": "342",
            "questionCategory": "css",
            "difficulty": "medium",
            "category": "misc",
            "question": "What is the difference between inline, embedded and external style sheets?",
            "answers": [
                { "ans": "External is in the head tag, inline is an attribute in the tag, embedded is a seperate file", "selected": "false" },
                { "ans": "External is in the head tag, inline is a seperate file, embedded is an attribute in the tag", "selected": "false" },
                { "ans": "External is a seperate file, inline is in the head tag, embedded is an attribute in the tag", "selected": "false" },
                { "ans": "External is a seperate file, inline is an attribute in the tag, embedded is in the head tag", "selected": "false" }
            ],
            "correctAnswer": "External is a seperate file, inline is an attribute in the tag, embedded is in the head tag"
        }
    ],
    "Javascript": [
        {
            "questionId": "667",
            "questionCategory": "javascript",
            "difficulty": "easy",
            "category": "variables",
            "question": "What is the scope of the 'Let' variable declaration?",
            "answers": [
                { "ans": "Functional", "selected": "false" },
                { "ans": "Global", "selected": "false" },
                { "ans": "Block", "selected": "false" },
                { "ans": "All Of The Above", "selected": "false" }
            ],
            "correctAnswer": "Block"
        },
        {
            "questionId": "668",
            "questionCategory": "javascript",
            "difficulty": "medium",
            "category": "functions",
            "question": "What is a callback?",
            "answers": [
                { "ans": "An imported Node Module", "selected": "false" },
                { "ans": "A way to create an instance of a class", "selected": "false" },
                { "ans": "A function passed as a argument to a function", "selected": "false" },
                { "ans": "A way to pass data back through a function call", "selected": "false" }
            ],
            "correctAnswer": "A function passed as a argument to a function"
        },
        {
            "questionId": "669",
            "questionCategory": "javascript",
            "difficulty": "easy",
            "category": "syntax",
            "question": "How would you modify this element: <p id='target'>hello </p>",
            "answers": [
                { "ans": "getElementById('target').text == 'hello world'", "selected": "false" },
                { "ans": "document.getElementById('target').innerHTML = 'hello world'", "selected": "false" },
                { "ans": "document.getElementById('target').HTML = 'hello world'", "selected": "false" },
                { "ans": "document.getElementByName('target').innerHTML = 'hello world'", "selected": "false" }
            ],
            "correctAnswer": "document.getElementById('target').innerHTML = 'hello world'"
        }
    ],
}

export default questions;
const questions = [
  {
    id: 1,
    category: "Software Engineering",
    type: "multiple_choice",
    questions: [
      {
        number: 1,
        question: "What is the primary function of a Software Engineer?",
        correct_answer:
          "Designing, developing, and maintaining software systems.",
        incorrect_answers: [
          "Creating visual designs for marketing campaigns.",
          "Managing product strategy and vision.",
          "Building hardware systems.",
        ],
      },
      {
        number: 2,
        question:
          "What is the main responsibility of a Software Engineer during the software development lifecycle?",
        correct_answer:
          "Writing and testing code, ensuring functionality and performance.",
        incorrect_answers: [
          "Managing project timelines and resources.",
          "Designing the product's user interface.",
          "Developing marketing materials for the software.",
        ],
      },
      {
        number: 3,
        question:
          "How does a Software Engineer ensure the quality of the software they develop?",
        correct_answer:
          "By writing tests, debugging code, and performing code reviews.",
        incorrect_answers: [
          "By managing customer support and feedback.",
          "By creating marketing campaigns for the software.",
          "By designing the user interface for the product.",
        ],
      },
      {
        number: 4,
        question:
          "Which programming language is most commonly used by Software Engineers for web development?",
        correct_answer: "JavaScript.",
        incorrect_answers: [
          "Adobe Photoshop.",
          "Python (with libraries like Matplotlib).",
          "Jira.",
        ],
      },
      {
        number: 5,
        question:
          "What is the primary focus of a Software Engineer when developing a new software application?",
        correct_answer:
          "Writing clean, efficient, and maintainable code to meet user requirements.",
        incorrect_answers: [
          "Designing the marketing strategy for the software.",
          "Managing the project's financial aspects.",
          "Creating the product's user interface design.",
        ],
      },
      {
        number: 6,
        question:
          "What is the primary function of version control systems like Git?",
        correct_answer:
          "To track changes in code and manage collaboration among developers.",
        incorrect_answers: [
          "To manage project timelines.",
          "To design the user interface of the software.",
          "To test software functionality.",
        ],
      },
      {
        number: 7,
        question:
          "Which of the following is a commonly used programming language for building web applications?",
        correct_answer: "JavaScript.",
        incorrect_answers: ["PHP.", "Java.", "R."],
      },
      {
        number: 8,
        question: "What does 'Agile' refer to in software development?",
        correct_answer:
          "A methodology focused on iterative development and customer feedback.",
        incorrect_answers: [
          "A programming language for developing mobile apps.",
          "A testing framework for automated tests.",
          "A framework for building user interfaces.",
        ],
      },
      {
        number: 9,
        question:
          "Which software development process involves continuous integration and delivery?",
        correct_answer: "DevOps.",
        incorrect_answers: ["Waterfall.", "Scrum.", "Kanban."],
      },
      {
        number: 10,
        question: "What is the purpose of a unit test in software development?",
        correct_answer:
          "To test individual components or functions of the software in isolation.",
        incorrect_answers: [
          "To test the entire system as a whole.",
          "To validate user interfaces.",
          "To analyze security vulnerabilities.",
        ],
      },
      {
        number: 11,
        question:
          "Which of the following is a key principle of Object-Oriented Programming (OOP)?",
        correct_answer: "Encapsulation.",
        incorrect_answers: [
          "Concurrency.",
          "Memory management.",
          "Regular expressions.",
        ],
      },
      {
        number: 12,
        question: "What is the purpose of a software framework?",
        correct_answer:
          "To provide a structure and reusable code for building applications.",
        incorrect_answers: [
          "To manage hardware resources.",
          "To optimize database queries.",
          "To improve user interface design.",
        ],
      },
      {
        number: 13,
        question:
          "Which of the following is a widely-used framework for building front-end web applications?",
        correct_answer: "React.",
        incorrect_answers: ["Node.js.", "Bootstrap.", "Django."],
      },
      {
        number: 14,
        question:
          "What is the role of a database index in software development?",
        correct_answer: "To speed up data retrieval in a database.",
        incorrect_answers: [
          "To prevent unauthorized data access.",
          "To store backup copies of data.",
          "To reduce storage space in a database.",
        ],
      },
      {
        number: 15,
        question:
          "Which of the following is a common database management system (DBMS)?",
        correct_answer: "MySQL.",
        incorrect_answers: ["Docker.", "Kubernetes.", "TensorFlow."],
      },
    ],
  },
  {
    id: 2,
    category: "Data Scientist",
    type: "multiple_choice",
    questions: [
      {
        number: 1,
        question: "What is the primary function of a Data Scientist?",
        correct_answer:
          "Analyzing large datasets to extract meaningful insights.",
        incorrect_answers: [
          "Designing software applications.",
          "Managing the product lifecycle.",
          "Developing marketing strategies.",
        ],
      },
      {
        number: 2,
        question:
          "What is the main responsibility of a Data Scientist during a project?",
        correct_answer: "Building models and algorithms to analyze data.",
        incorrect_answers: [
          "Writing and editing content for websites.",
          "Managing the development of product features.",
          "Creating visual designs for marketing campaigns.",
        ],
      },
      {
        number: 3,
        question:
          "How does a Data Scientist ensure the accuracy of their models?",
        correct_answer:
          "By cleaning data, selecting relevant features, and validating models.",
        incorrect_answers: [
          "By writing code to enhance the product's frontend.",
          "By developing the product's backend infrastructure.",
          "By creating marketing strategies for the product.",
        ],
      },
      {
        number: 4,
        question:
          "What is a common tool used by Data Scientists for data analysis?",
        correct_answer: "Python (with libraries like Pandas and NumPy).",
        incorrect_answers: [
          "Adobe Illustrator.",
          "Visual Studio Code.",
          "Jira.",
        ],
      },
      {
        number: 5,
        question:
          "What is the primary focus of a Data Scientist when working with big data?",
        correct_answer:
          "Extracting insights to inform business decisions and strategies.",
        incorrect_answers: [
          "Designing the user interface of an application.",
          "Managing the product development process.",
          "Testing the software for bugs.",
        ],
      },
      {
        number: 6,
        question:
          "What is the primary goal of feature engineering in data science?",
        correct_answer:
          "To create meaningful input features that improve the performance of machine learning models.",
        incorrect_answers: [
          "To clean and preprocess data.",
          "To split data into training and testing sets.",
          "To evaluate model performance.",
        ],
      },
      {
        number: 7,
        question: "Which of the following is a type of unsupervised learning?",
        correct_answer: "Clustering.",
        incorrect_answers: [
          "Regression.",
          "Classification.",
          "Anomaly detection.",
        ],
      },
      {
        number: 8,
        question:
          "What is the purpose of cross-validation in machine learning?",
        correct_answer:
          "To assess the generalizability of a model by splitting the data into multiple training and validation sets.",
        incorrect_answers: [
          "To increase the size of the dataset.",
          "To improve model accuracy on training data.",
          "To perform feature selection.",
        ],
      },
      {
        number: 9,
        question:
          "What does PCA (Principal Component Analysis) help with in data science?",
        correct_answer: "Dimensionality reduction.",
        incorrect_answers: [
          "Data cleaning and preprocessing.",
          "Feature engineering.",
          "Model evaluation.",
        ],
      },
      {
        number: 10,
        question:
          "Which of the following is an example of a classification algorithm?",
        correct_answer: "Logistic Regression.",
        incorrect_answers: [
          "K-means clustering.",
          "Linear Regression.",
          "Principal Component Analysis.",
        ],
      },
      {
        number: 11,
        question:
          "Which of the following is a popular data manipulation library for Python?",
        correct_answer: "Pandas.",
        incorrect_answers: ["TensorFlow.", "NumPy.", "Matplotlib."],
      },
      {
        number: 12,
        question:
          "What does the confusion matrix help to evaluate in classification models?",
        correct_answer:
          "It helps to visualize the performance of a classification model by showing the actual vs predicted values.",
        incorrect_answers: [
          "It calculates the total error in regression models.",
          "It measures the variance in model predictions.",
          "It assesses the feature importance in the model.",
        ],
      },
      {
        number: 13,
        question:
          "Which of the following is a popular ensemble learning algorithm?",
        correct_answer: "Random Forest.",
        incorrect_answers: [
          "Logistic Regression.",
          "K-Nearest Neighbors.",
          "Support Vector Machine.",
        ],
      },
      {
        number: 14,
        question: "What is overfitting in a machine learning model?",
        correct_answer:
          "When the model learns the noise in the training data and fails to generalize well to new data.",
        incorrect_answers: [
          "When the model performs poorly on both training and testing data.",
          "When the model underperforms on training data.",
          "When the model is too simple to capture the data patterns.",
        ],
      },
      {
        number: 15,
        question:
          "Which of the following is a key challenge in working with unstructured data?",
        correct_answer:
          "Difficulty in cleaning and preparing data for analysis.",
        incorrect_answers: [
          "Lack of storage space.",
          "Difficulty in processing data with traditional SQL queries.",
          "Lack of visualization tools.",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Graphic Designer",
    type: "multiple_choice",
    questions: [
      {
        number: 1,
        question: "What is the primary function of a Graphic Designer?",
        correct_answer: "Creating visual concepts to communicate ideas.",
        incorrect_answers: [
          "Developing software applications.",
          "Writing and editing content for websites.",
          "Managing product development timelines.",
        ],
      },
      {
        number: 2,
        question:
          "What is the main responsibility of a Graphic Designer in a project?",
        correct_answer: "Designing layouts, logos, and visual content.",
        incorrect_answers: [
          "Coding the website and its functionalities.",
          "Managing the marketing campaign for the design.",
          "Developing the product's backend structure.",
        ],
      },
      {
        number: 3,
        question:
          "How does a Graphic Designer ensure their designs meet client needs?",
        correct_answer:
          "By understanding the target audience and collaborating with clients.",
        incorrect_answers: [
          "By developing complex code to enhance functionality.",
          "By conducting marketing campaigns for the product.",
          "By managing the product development process.",
        ],
      },
      {
        number: 4,
        question:
          "What tool is most commonly used by Graphic Designers for digital design work?",
        correct_answer: "Adobe Photoshop.",
        incorrect_answers: ["Visual Studio Code.", "Microsoft Word.", "Jira."],
      },
      {
        number: 5,
        question:
          "What is the primary focus of a Graphic Designer during the creative process?",
        correct_answer:
          "Visually representing concepts in an aesthetically pleasing and functional way.",
        incorrect_answers: [
          "Managing product release schedules.",
          "Developing backend systems.",
          "Conducting market research on products.",
        ],
      },
      {
        number: 6,
        question: "What is the main purpose of typography in graphic design?",
        correct_answer:
          "To communicate messages clearly and effectively through the use of fonts and styles.",
        incorrect_answers: [
          "To create complex digital art designs.",
          "To arrange images and icons in a visually appealing way.",
          "To write the content of the design.",
        ],
      },
      {
        number: 7,
        question:
          "Which tool is widely used by graphic designers for creating vector illustrations?",
        correct_answer: "Adobe Illustrator.",
        incorrect_answers: ["CorelDRAW.", "Photoshop.", "InDesign."],
      },
      {
        number: 8,
        question:
          "What is the primary focus of a graphic designer when creating a logo?",
        correct_answer:
          "To create a unique and memorable design that represents a brand or company.",
        incorrect_answers: [
          "To write the brand's slogan.",
          "To develop a marketing campaign for the brand.",
          "To manage the brand's social media presence.",
        ],
      },
      {
        number: 9,
        question:
          "Which of the following is an important principle in graphic design?",
        correct_answer: "Balance.",
        incorrect_answers: ["Complexity.", "Redundancy.", "Monotony."],
      },
      {
        number: 10,
        question: "What does 'CMYK' refer to in graphic design?",
        correct_answer:
          "A color model used for print, based on cyan, magenta, yellow, and black.",
        incorrect_answers: [
          "A file format for images.",
          "A type of font used in web design.",
          "A vector design software.",
        ],
      },
      {
        number: 11,
        question:
          "Which of the following is a key element of a user-friendly website design?",
        correct_answer: "Clear navigation and intuitive interface.",
        incorrect_answers: [
          "Using as many colors as possible.",
          "Having a complex layout with lots of text.",
          "Optimizing the website for mobile devices.",
        ],
      },
      {
        number: 12,
        question:
          "What is the primary purpose of using grids in graphic design?",
        correct_answer:
          "To structure and align elements in a design to create balance and consistency.",
        incorrect_answers: [
          "To randomly place elements in a design.",
          "To avoid using any alignment.",
          "To reduce the need for creativity.",
        ],
      },
      {
        number: 13,
        question:
          "Which software is most commonly used for photo editing in graphic design?",
        correct_answer: "Adobe Photoshop.",
        incorrect_answers: ["Final Cut Pro.", "Illustrator.", "InDesign."],
      },
      {
        number: 14,
        question: "What is the purpose of 'negative space' in graphic design?",
        correct_answer:
          "To create visual balance and emphasize the main elements of a design.",
        incorrect_answers: [
          "To add more details to the design.",
          "To fill empty spaces with images.",
          "To reduce the size of the design.",
        ],
      },
      {
        number: 15,
        question: "What is 'RGB' used for in graphic design?",
        correct_answer:
          "A color model used for digital screens based on red, green, and blue.",
        incorrect_answers: [
          "A type of design software.",
          "A printing technique.",
          "A file format for images.",
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Product Manager",
    type: "multiple_choice",
    questions: [
      {
        number: 1,
        question: "What is the primary function of a Product Manager?",
        correct_answer: "Defining product vision, strategy, and roadmap.",
        incorrect_answers: [
          "Designing product UI/UX.",
          "Developing code for the product.",
          "Testing the product's functionality.",
        ],
      },
      {
        number: 2,
        question:
          "What is the main responsibility of a Product Manager during product development?",
        correct_answer:
          "Coordinating between stakeholders, ensuring the product meets customer needs.",
        incorrect_answers: [
          "Building the product's backend infrastructure.",
          "Managing the product's marketing campaigns.",
          "Creating the product's user interface.",
        ],
      },
      {
        number: 3,
        question:
          "What is a Product Manager's role in defining product features?",
        correct_answer:
          "Gathering customer feedback and aligning features with business goals.",
        incorrect_answers: [
          "Designing and developing the features themselves.",
          "Testing the product's features for bugs.",
          "Managing the project timelines for feature releases.",
        ],
      },
      {
        number: 4,
        question:
          "How does a Product Manager ensure the success of a product after launch?",
        correct_answer:
          "Tracking product performance and iterating based on user feedback.",
        incorrect_answers: [
          "Developing marketing materials for the product.",
          "Writing technical documentation for the product.",
          "Building new features for the product without user input.",
        ],
      },
      {
        number: 5,
        question:
          "What is the primary focus of a Product Manager during the product lifecycle?",
        correct_answer:
          "Ensuring the product aligns with market needs and business objectives.",
        incorrect_answers: [
          "Managing the product's codebase.",
          "Developing marketing strategies for the product.",
          "Handling customer support inquiries.",
        ],
      },
      {
        number: 6,
        question:
          "What is the key responsibility of a product manager during a product's lifecycle?",
        correct_answer:
          "To oversee the product's development, ensuring alignment with customer needs and business goals.",
        incorrect_answers: [
          "To perform user interface design.",
          "To write code and develop the product.",
          "To manage customer service and support.",
        ],
      },
      {
        number: 7,
        question:
          "Which of the following is an essential skill for a product manager?",
        correct_answer: "Strong communication skills.",
        incorrect_answers: [
          "Advanced programming skills.",
          "Graphic design proficiency.",
          "Financial accounting expertise.",
        ],
      },
      {
        number: 8,
        question:
          "How does a product manager ensure that the product meets the market demand?",
        correct_answer:
          "By conducting market research and gathering customer feedback.",
        incorrect_answers: [
          "By designing the product's user interface.",
          "By writing the product's code.",
          "By managing the product's marketing campaigns.",
        ],
      },
      {
        number: 9,
        question: "What is the purpose of a product roadmap?",
        correct_answer:
          "To outline the vision, strategy, and key milestones for the product over time.",
        incorrect_answers: [
          "To design the user interface of the product.",
          "To define the product's marketing strategy.",
          "To create technical documentation for developers.",
        ],
      },
      {
        number: 10,
        question:
          "Which of the following is a key metric for measuring the success of a product?",
        correct_answer: "Customer satisfaction and retention.",
        incorrect_answers: [
          "Number of lines of code written.",
          "Amount of marketing spend.",
          "Number of new hires in the team.",
        ],
      },
      {
        number: 11,
        question: "What is a Minimum Viable Product (MVP)?",
        correct_answer:
          "A product with the least set of features needed to validate an idea with real customers.",
        incorrect_answers: [
          "A fully-featured product ready for market launch.",
          "A prototype with no user testing.",
          "A product built with minimal marketing effort.",
        ],
      },
      {
        number: 12,
        question:
          "How should a product manager handle product development delays?",
        correct_answer:
          "By communicating transparently with stakeholders and adjusting timelines as necessary.",
        incorrect_answers: [
          "By pushing the team to work faster without adjusting expectations.",
          "By ignoring the delays and focusing on the next feature.",
          "By avoiding communication with stakeholders.",
        ],
      },
      {
        number: 13,
        question:
          "What role does a product manager play in cross-functional teams?",
        correct_answer:
          "They act as the liaison between different teams such as engineering, marketing, and sales.",
        incorrect_answers: [
          "They solely focus on product design.",
          "They manage the team’s coding and technical aspects.",
          "They perform customer support tasks.",
        ],
      },
      {
        number: 14,
        question:
          "How does a product manager prioritize features for a product?",
        correct_answer:
          "By evaluating customer needs, business goals, and technical feasibility.",
        incorrect_answers: [
          "By focusing on features that are easiest to implement.",
          "By choosing features based on team preferences.",
          "By focusing on the product's marketing budget.",
        ],
      },
      {
        number: 15,
        question:
          "Which of the following best describes the role of a product manager in Agile development?",
        correct_answer:
          "They prioritize and define the product backlog and ensure that the development team stays focused on the most important features.",
        incorrect_answers: [
          "They write the code and develop the product.",
          "They manage the product’s financial budget.",
          "They are responsible for managing the marketing campaigns.",
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Web Developer",
    type: "multiple_choice",
    questions: [
      {
        number: 1,
        question: "What is the primary function of a Web Developer?",
        correct_answer:
          "Building and maintaining websites and web applications.",
        incorrect_answers: [
          "Designing marketing strategies for web applications.",
          "Writing content for websites.",
          "Managing product development timelines.",
        ],
      },
      {
        number: 2,
        question:
          "What is the main responsibility of a Web Developer during the development process?",
        correct_answer:
          "Writing code to build the front-end and back-end of websites.",
        incorrect_answers: [
          "Designing the user interface for mobile apps.",
          "Managing customer support for web applications.",
          "Developing product strategies for the website.",
        ],
      },
      {
        number: 3,
        question:
          "How does a Web Developer ensure the performance and functionality of a website?",
        correct_answer:
          "By testing code, optimizing load speeds, and debugging errors.",
        incorrect_answers: [
          "By conducting market research for the website's target audience.",
          "By designing marketing campaigns for the site.",
          "By managing financial budgets for web development projects.",
        ],
      },
      {
        number: 4,
        question:
          "Which programming language is most commonly used by Web Developers for front-end development?",
        correct_answer: "JavaScript.",
        incorrect_answers: ["Adobe Illustrator.", "C++.", "SQL."],
      },
      {
        number: 5,
        question:
          "What is the primary focus of a Web Developer when creating a responsive website?",
        correct_answer:
          "Ensuring the website is functional and looks good on all devices and screen sizes.",
        incorrect_answers: [
          "Writing backend code for web applications.",
          "Designing the product's marketing materials.",
          "Managing project timelines for the website launch.",
        ],
      },
      {
        number: 6,
        question:
          "What is the purpose of CSS (Cascading Style Sheets) in web development?",
        correct_answer: "To style the appearance of web pages.",
        incorrect_answers: [
          "To build the back-end of web applications.",
          "To optimize the performance of websites.",
          "To manage the database of a web application.",
        ],
      },
      {
        number: 7,
        question:
          "Which of the following is a common front-end JavaScript framework for building web applications?",
        correct_answer: "Angular.",
        incorrect_answers: ["Ruby on Rails.", "Laravel.", "Spring Boot."],
      },
      {
        number: 8,
        question:
          "Which of the following is used to make a website responsive, adapting to different screen sizes?",
        correct_answer: "Media queries in CSS.",
        incorrect_answers: [
          "Database queries in SQL.",
          "JavaScript functions for DOM manipulation.",
          "AJAX requests for data retrieval.",
        ],
      },
      {
        number: 9,
        question:
          "Which of the following is the best practice for enhancing website performance?",
        correct_answer: "Minifying CSS, JavaScript, and HTML files.",
        incorrect_answers: [
          "Using large image files.",
          "Ignoring browser cache settings.",
          "Disabling JavaScript on the website.",
        ],
      },
      {
        number: 10,
        question:
          "What does SEO (Search Engine Optimization) aim to achieve for a website?",
        correct_answer:
          "Improving the visibility and ranking of the website in search engine results.",
        incorrect_answers: [
          "Increasing the number of website pages.",
          "Improving the website's design and layout.",
          "Enhancing website security features.",
        ],
      },
      {
        number: 11,
        question:
          "Which of the following protocols is commonly used for secure communication between web browsers and servers?",
        correct_answer: "HTTPS.",
        incorrect_answers: ["FTP.", "HTTP.", "SMTP."],
      },
      {
        number: 12,
        question: "What is a 'domain name' in web development?",
        correct_answer:
          "The human-readable address of a website (e.g., www.example.com).",
        incorrect_answers: [
          "The IP address of a website.",
          "The server software that hosts the website.",
          "The framework used to build the website.",
        ],
      },
      {
        number: 13,
        question: "What is the function of JavaScript in web development?",
        correct_answer:
          "To add interactivity and dynamic behavior to web pages.",
        incorrect_answers: [
          "To style the visual layout of a website.",
          "To manage the web server's database.",
          "To handle HTTP requests and responses.",
        ],
      },
      {
        number: 14,
        question:
          "What is the purpose of the DOM (Document Object Model) in web development?",
        correct_answer:
          "To represent the structure and content of a web page as a tree of objects.",
        incorrect_answers: [
          "To optimize web page loading speed.",
          "To store images and media files.",
          "To track user behavior on a website.",
        ],
      },
      {
        number: 15,
        question:
          "Which of the following is a tool used for front-end web development?",
        correct_answer: "Sass (Syntactically Awesome Stylesheets).",
        incorrect_answers: ["MongoDB.", "Node.js.", "Apache."],
      },
    ],
  },
  {
    id: 6,
    category: "AI Specialist",
    type: "multiple_choice",
    questions: [
      {
        number: 1,
        question: "What is the primary function of an AI Specialist?",
        correct_answer:
          "Developing and implementing machine learning models and algorithms.",
        incorrect_answers: [
          "Designing marketing strategies for AI products.",
          "Writing content for AI-related websites.",
          "Managing the user interface design of AI applications.",
        ],
      },
      {
        number: 2,
        question:
          "Which of the following is a core skill for an AI Specialist?",
        correct_answer:
          "Proficiency in programming languages like Python and R.",
        incorrect_answers: [
          "Proficiency in HTML and CSS.",
          "Experience in graphic design software.",
          "Knowledge of database management tools.",
        ],
      },
      {
        number: 3,
        question: "What is machine learning in the context of AI?",
        correct_answer:
          "A method of data analysis that automates analytical model building.",
        incorrect_answers: [
          "A programming language used to develop AI systems.",
          "A user interface design for AI applications.",
          "A hardware technology used in AI models.",
        ],
      },
      {
        number: 4,
        question:
          "Which algorithm is commonly used for classification tasks in AI?",
        correct_answer: "Decision Trees.",
        incorrect_answers: [
          "Random Forests.",
          "K-means clustering.",
          "Convolutional Neural Networks (CNNs).",
        ],
      },
      {
        number: 5,
        question: "What is the primary goal of supervised learning in AI?",
        correct_answer:
          "To learn a function that maps input data to the correct output labels based on labeled training data.",
        incorrect_answers: [
          "To cluster data into different groups based on similarities.",
          "To optimize decisions without labeled data.",
          "To detect anomalies in unsupervised data.",
        ],
      },
      {
        number: 6,
        question:
          "Which of the following is a commonly used deep learning framework?",
        correct_answer: "TensorFlow.",
        incorrect_answers: ["MySQL.", "Pandas.", "Bootstrap."],
      },
      {
        number: 7,
        question: "What is Natural Language Processing (NLP) in AI?",
        correct_answer:
          "A field of AI that focuses on the interaction between computers and human languages.",
        incorrect_answers: [
          "A method of programming AI systems using natural languages.",
          "A technique for processing data from images and videos.",
          "A system used to train deep learning models.",
        ],
      },
      {
        number: 8,
        question: "What is the function of an AI model's training process?",
        correct_answer:
          "To adjust the model's parameters to minimize errors and improve predictions.",
        incorrect_answers: [
          "To design the user interface for AI applications.",
          "To gather and prepare data for analysis.",
          "To conduct user research for AI product development.",
        ],
      },
      {
        number: 9,
        question: "What is reinforcement learning in AI?",
        correct_answer:
          "A type of machine learning where an agent learns by interacting with its environment and receiving feedback in the form of rewards or penalties.",
        incorrect_answers: [
          "A method of data analysis that does not require labeled data.",
          "A technique for clustering data into groups.",
          "A way of training AI models with supervised datasets.",
        ],
      },
      {
        number: 10,
        question:
          "Which AI technique is typically used for object detection in images?",
        correct_answer: "Convolutional Neural Networks (CNNs).",
        incorrect_answers: [
          "Support Vector Machines (SVM).",
          "K-nearest neighbors (K-NN).",
          "Random Forests.",
        ],
      },
      {
        number: 11,
        question:
          "Which of the following is a key application of AI in healthcare?",
        correct_answer: "Predictive analytics for patient outcomes.",
        incorrect_answers: [
          "Designing the user interface for medical software.",
          "Managing patient records in a database.",
          "Creating marketing strategies for healthcare products.",
        ],
      },
      {
        number: 12,
        question: "What is the purpose of overfitting in AI models?",
        correct_answer:
          "When a model is trained too well on training data and performs poorly on unseen data.",
        incorrect_answers: [
          "When a model learns to generalize well to new data.",
          "When the model learns the training data with minimal errors.",
          "When a model makes predictions based on historical data.",
        ],
      },
      {
        number: 13,
        question:
          "What type of neural network is commonly used for sequence data, like time-series or text?",
        correct_answer: "Recurrent Neural Networks (RNNs).",
        incorrect_answers: [
          "Convolutional Neural Networks (CNNs).",
          "Generative Adversarial Networks (GANs).",
          "Deep Belief Networks (DBNs).",
        ],
      },
      {
        number: 14,
        question:
          "Which of the following is a common challenge in AI development?",
        correct_answer: "Bias in training data leading to unfair predictions.",
        incorrect_answers: [
          "Difficulty in writing code for AI systems.",
          "Lack of available machine learning algorithms.",
          "Limited access to cloud computing resources.",
        ],
      },
      {
        number: 15,
        question:
          "Which AI method is used to generate realistic images, audio, or text based on existing data?",
        correct_answer: "Generative Adversarial Networks (GANs).",
        incorrect_answers: [
          "Reinforcement Learning.",
          "Decision Trees.",
          "Support Vector Machines (SVM).",
        ],
      },
    ],
  },
  {
    "id": 7,
    "category": "Digital Marketing Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary goal of digital marketing?",
        "correct_answer": "To promote products or services through online channels to drive traffic and conversions.",
        "incorrect_answers": [
          "To design product packaging.",
          "To manage a team of marketers.",
          "To write content for websites."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a common digital marketing tactic?",
        "correct_answer": "Search Engine Optimization (SEO).",
        "incorrect_answers": [
          "Print advertising.",
          "Direct mail campaigns.",
          "Event sponsorship."
        ]
      },
      {
        "number": 3,
        "question": "What does PPC stand for in digital marketing?",
        "correct_answer": "Pay-per-click.",
        "incorrect_answers": [
          "Private product catalog.",
          "Public promotion campaign.",
          "Product positioning and classification."
        ]
      },
      {
        "number": 4,
        "question": "Which platform is best known for social media marketing?",
        "correct_answer": "Facebook.",
        "incorrect_answers": [
          "Spotify.",
          "LinkedIn.",
          "Google Ads."
        ]
      },
      {
        "number": 5,
        "question": "What is the purpose of a landing page in digital marketing?",
        "correct_answer": "To convert visitors into leads or customers by offering a specific product or service.",
        "incorrect_answers": [
          "To provide company information.",
          "To entertain visitors with interactive content.",
          "To showcase the company’s social media profiles."
        ]
      },
      {
        "number": 6,
        "question": "What does SEO focus on to improve website visibility?",
        "correct_answer": "Optimizing a website's content and structure for search engines.",
        "incorrect_answers": [
          "Running paid ads on search engines.",
          "Designing the website’s user interface.",
          "Increasing social media followers."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is an example of inbound marketing?",
        "correct_answer": "Creating engaging blog posts to attract potential customers.",
        "incorrect_answers": [
          "Sending cold emails to prospective clients.",
          "Buying display ad space on third-party websites.",
          "Using paid search ads to target specific keywords."
        ]
      },
      {
        "number": 8,
        "question": "What is A/B testing in digital marketing?",
        "correct_answer": "Testing two versions of a webpage or ad to determine which one performs better.",
        "incorrect_answers": [
          "Creating alternative versions of a product.",
          "Sending ads to different age groups.",
          "Testing different types of social media content."
        ]
      },
      {
        "number": 9,
        "question": "Which of the following is a key metric for measuring digital marketing success?",
        "correct_answer": "Conversion rate.",
        "incorrect_answers": [
          "Page load time.",
          "Click-through rate (CTR).",
          "Number of followers."
        ]
      },
      {
        "number": 10,
        "question": "What is the purpose of content marketing?",
        "correct_answer": "To create valuable, relevant content that attracts and engages a target audience.",
        "incorrect_answers": [
          "To create advertisements for TV.",
          "To sell products directly in the content.",
          "To analyze competitors' marketing strategies."
        ]
      },
      {
        "number": 11,
        "question": "What is the primary function of email marketing in digital marketing?",
        "correct_answer": "To communicate directly with customers and prospects to drive conversions.",
        "incorrect_answers": [
          "To promote new product packaging designs.",
          "To create social media posts for the brand.",
          "To provide customer service and support."
        ]
      },
      {
        "number": 12,
        "question": "What is the difference between organic and paid search results?",
        "correct_answer": "Organic results are based on SEO efforts, while paid results are from paid advertising.",
        "incorrect_answers": [
          "Organic results are faster but less reliable.",
          "Paid results are free but require time investment.",
          "Organic results require paid campaigns for visibility."
        ]
      },
      {
        "number": 13,
        "question": "Which social media platform is most effective for B2B (business-to-business) marketing?",
        "correct_answer": "LinkedIn.",
        "incorrect_answers": [
          "Instagram.",
          "Pinterest.",
          "TikTok."
        ]
      },
      {
        "number": 14,
        "question": "What is a customer persona in digital marketing?",
        "correct_answer": "A detailed representation of an ideal customer based on market research and data.",
        "incorrect_answers": [
          "A segment of the target audience defined by geography.",
          "A visual representation of a product.",
          "A list of all competitors in the market."
        ]
      },
      {
        "number": 15,
        "question": "What does a digital marketing funnel represent?",
        "correct_answer": "The stages a potential customer goes through from awareness to purchase.",
        "incorrect_answers": [
          "The process of product development.",
          "The steps in a marketing research campaign.",
          "The distribution process of marketing materials."
        ],
      },
    ],
  },
  {
    "id": 8,
    "category": "UX/UI Designer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary goal of UX design?",
        "correct_answer": "To enhance the user's experience by making products easy to use and enjoyable.",
        "incorrect_answers": [
          "To create visually appealing designs.",
          "To develop product features.",
          "To improve the speed of the product."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key aspect of UI design?",
        "correct_answer": "The visual elements such as buttons, icons, and layout.",
        "incorrect_answers": [
          "Writing the code for the product.",
          "Creating customer personas.",
          "Conducting user research."
        ]
      },
      {
        "number": 3,
        "question": "What is wireframing in the context of UX/UI design?",
        "correct_answer": "A blueprint that outlines the structure of a webpage or app.",
        "incorrect_answers": [
          "A fully designed, interactive prototype.",
          "The final layout of a website.",
          "A detailed technical specification document."
        ]
      },
      {
        "number": 4,
        "question": "What is the main focus of user-centered design?",
        "correct_answer": "Designing the product based on the needs and feedback of the users.",
        "incorrect_answers": [
          "Focusing only on visual aesthetics.",
          "Designing based on the latest trends.",
          "Implementing new features without user input."
        ]
      },
      {
        "number": 5,
        "question": "What is a persona in UX design?",
        "correct_answer": "A fictional character created to represent a target user segment.",
        "incorrect_answers": [
          "A user interface element.",
          "A type of wireframe.",
          "A feature of a website or app."
        ]
      },
      {
        "number": 6,
        "question": "What is usability testing?",
        "correct_answer": "Testing a product with real users to identify any usability issues.",
        "incorrect_answers": [
          "A test to measure the product's speed.",
          "An evaluation of the product's marketability.",
          "A design critique from the team."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following tools is commonly used for UI design?",
        "correct_answer": "Sketch.",
        "incorrect_answers": [
          "Eclipse.",
          "Microsoft Word.",
          "Sublime Text."
        ]
      },
      {
        "number": 8,
        "question": "What does the term 'responsive design' refer to?",
        "correct_answer": "Designing a website or app to work well on various screen sizes and devices.",
        "incorrect_answers": [
          "Designing products based on the latest trends.",
          "Creating a static layout for desktop devices only.",
          "Designing with a focus on color schemes."
        ]
      },
      {
        "number": 9,
        "question": "What is the purpose of a style guide in UI design?",
        "correct_answer": "To ensure consistency in design elements such as typography, colors, and components.",
        "incorrect_answers": [
          "To define the technical architecture of the product.",
          "To create user personas.",
          "To write the code for the product."
        ]
      },
      {
        "number": 10,
        "question": "What is a prototype in UX/UI design?",
        "correct_answer": "An early model or mock-up of a product used to test functionality and design.",
        "incorrect_answers": [
          "A final product ready for launch.",
          "A detailed project plan.",
          "A user research report."
        ]
      },
      {
        "number": 11,
        "question": "Which principle of design ensures that the user knows where they are on a website or app?",
        "correct_answer": "Visual hierarchy.",
        "incorrect_answers": [
          "Consistency.",
          "Balance.",
          "Contrast."
        ]
      },
      {
        "number": 12,
        "question": "What does A/B testing in UX/UI design involve?",
        "correct_answer": "Comparing two versions of a design to determine which performs better.",
        "incorrect_answers": [
          "Choosing the best color scheme for a website.",
          "Testing different content strategies.",
          "Designing a new product feature."
        ]
      },
      {
        "number": 13,
        "question": "What does the acronym 'F-Shaped Pattern' refer to in UX design?",
        "correct_answer": "A common reading pattern where users focus on the top and left areas of a webpage.",
        "incorrect_answers": [
          "A color scheme used in websites.",
          "A layout design pattern for mobile apps.",
          "A method for creating responsive designs."
        ]
      },
      {
        "number": 14,
        "question": "What is the purpose of a user journey map in UX design?",
        "correct_answer": "To visualize the steps a user takes to accomplish a task within a product.",
        "incorrect_answers": [
          "To outline the technical architecture of a product.",
          "To create a style guide for the product's design.",
          "To define the features of a product."
        ]
      },
      {
        "number": 15,
        "question": "What is accessibility in UX/UI design?",
        "correct_answer": "Designing products to be usable by people with various disabilities.",
        "incorrect_answers": [
          "Creating visually appealing designs.",
          "Focusing solely on aesthetics and color schemes.",
          "Designing products for a specific age group."
        ],
      },
    ],
  },
  {
    "id": 9,
    "category": "Cybersecurity Analyst",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary responsibility of a cybersecurity analyst?",
        "correct_answer": "To protect an organization’s computer systems and networks from cyber threats.",
        "incorrect_answers": [
          "To design and develop software applications.",
          "To create marketing strategies for the organization.",
          "To manage an organization’s database systems."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a common cybersecurity threat?",
        "correct_answer": "Phishing attacks.",
        "incorrect_answers": [
          "Power surges.",
          "Hardware malfunctions.",
          "Software updates."
        ]
      },
      {
        "number": 3,
        "question": "What does a firewall do in cybersecurity?",
        "correct_answer": "It monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
        "incorrect_answers": [
          "It backs up data regularly.",
          "It encrypts all user data on a network.",
          "It prevents unauthorized physical access to servers."
        ]
      },
      {
        "number": 4,
        "question": "What is encryption in the context of cybersecurity?",
        "correct_answer": "The process of converting data into a code to prevent unauthorized access.",
        "incorrect_answers": [
          "The process of scanning for viruses.",
          "The process of backing up data.",
          "The process of blocking unauthorized IP addresses."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is a type of malware?",
        "correct_answer": "Ransomware.",
        "incorrect_answers": [
          "Search engines.",
          "Web browsers.",
          "Operating systems."
        ]
      },
      {
        "number": 6,
        "question": "What is two-factor authentication?",
        "correct_answer": "A security process that requires two methods to verify a user's identity.",
        "incorrect_answers": [
          "A way to improve user experience on websites.",
          "A method to encrypt emails.",
          "A technique to remove viruses from a system."
        ]
      },
      {
        "number": 7,
        "question": "What does the term 'social engineering' refer to in cybersecurity?",
        "correct_answer": "Manipulating people into disclosing confidential information.",
        "incorrect_answers": [
          "An attack on network infrastructure.",
          "The installation of malicious software.",
          "An encryption method used to secure data."
        ]
      },
      {
        "number": 8,
        "question": "What is a VPN (Virtual Private Network)?",
        "correct_answer": "A service that encrypts your internet connection to protect your data and ensure privacy.",
        "incorrect_answers": [
          "A type of malware.",
          "A method for creating strong passwords.",
          "A software for scanning computer viruses."
        ]
      },
      {
        "number": 9,
        "question": "What is the role of an Intrusion Detection System (IDS)?",
        "correct_answer": "To monitor network traffic for suspicious activity and potential threats.",
        "incorrect_answers": [
          "To block malicious IP addresses.",
          "To provide a backup solution for data.",
          "To scan for known viruses in real-time."
        ]
      },
      {
        "number": 10,
        "question": "What is a DDoS (Distributed Denial of Service) attack?",
        "correct_answer": "An attack that overwhelms a server with traffic to make it unavailable to users.",
        "incorrect_answers": [
          "An attack that steals sensitive user data.",
          "An attack that infects computers with ransomware.",
          "An attack that hijacks user accounts."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following is a best practice for securing passwords?",
        "correct_answer": "Using complex, unique passwords and changing them regularly.",
        "incorrect_answers": [
          "Using the same password for all accounts.",
          "Sharing passwords with colleagues to ensure access.",
          "Writing passwords on sticky notes for easy access."
        ]
      },
      {
        "number": 12,
        "question": "What is a vulnerability scan?",
        "correct_answer": "A process that detects weaknesses or flaws in a network or system.",
        "incorrect_answers": [
          "A process of encrypting sensitive data.",
          "A method of scanning for spam emails.",
          "A process of cleaning up outdated software."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is NOT a common cybersecurity measure?",
        "correct_answer": "Running outdated software.",
        "incorrect_answers": [
          "Applying security patches.",
          "Using firewalls.",
          "Encrypting sensitive data."
        ]
      },
      {
        "number": 14,
        "question": "What is the primary purpose of a penetration test?",
        "correct_answer": "To simulate a cyber attack and identify vulnerabilities in a system.",
        "incorrect_answers": [
          "To repair hardware failures.",
          "To recover lost data.",
          "To manage user access permissions."
        ]
      },
      {
        "number": 15,
        "question": "What is the purpose of security patches?",
        "correct_answer": "To fix vulnerabilities in software that could be exploited by cybercriminals.",
        "incorrect_answers": [
          "To update the user interface.",
          "To remove unnecessary files from a system.",
          "To improve system performance."
        ]
      }
    ]
  },
  {
    "id": 10,
    "category": "Mobile App Developer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary responsibility of a mobile app developer?",
        "correct_answer": "To design, develop, and maintain mobile applications for various platforms.",
        "incorrect_answers": [
          "To create marketing strategies for apps.",
          "To design graphics for apps.",
          "To manage app store accounts."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following programming languages is commonly used for Android app development?",
        "correct_answer": "Java.",
        "incorrect_answers": [
          "Swift.",
          "C#.",
          "PHP."
        ]
      },
      {
        "number": 3,
        "question": "What is the main function of the Android SDK (Software Development Kit)?",
        "correct_answer": "It provides tools, libraries, and APIs to develop Android applications.",
        "incorrect_answers": [
          "It stores app data.",
          "It manages user interface design.",
          "It handles app updates."
        ]
      },
      {
        "number": 4,
        "question": "What is the primary difference between native and hybrid mobile apps?",
        "correct_answer": "Native apps are developed specifically for a platform, while hybrid apps are built to run across multiple platforms.",
        "incorrect_answers": [
          "Native apps are always more expensive than hybrid apps.",
          "Hybrid apps are faster than native apps.",
          "Native apps work only in one programming language."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is the main programming language for iOS app development?",
        "correct_answer": "Swift.",
        "incorrect_answers": [
          "Java.",
          "Python.",
          "C++."
        ]
      },
      {
        "number": 6,
        "question": "What is the function of an API in mobile app development?",
        "correct_answer": "It allows the app to interact with other software systems and services.",
        "incorrect_answers": [
          "It manages the app's user interface.",
          "It controls app performance.",
          "It stores app data locally."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is an important factor to consider when designing a mobile app's user interface?",
        "correct_answer": "Usability and responsiveness on various screen sizes.",
        "incorrect_answers": [
          "The app's file size.",
          "The complexity of the codebase.",
          "The number of programming languages used."
        ]
      },
      {
        "number": 8,
        "question": "What does 'responsive design' refer to in mobile app development?",
        "correct_answer": "Designing the app to provide an optimal experience on different screen sizes and resolutions.",
        "incorrect_answers": [
          "Using complex animations in the app interface.",
          "Building the app using a single language for all platforms.",
          "Optimizing the app for only one specific device."
        ]
      },
      {
        "number": 9,
        "question": "What is the purpose of the mobile app testing phase?",
        "correct_answer": "To identify and fix bugs, ensure app functionality, and optimize performance.",
        "incorrect_answers": [
          "To create the marketing strategy for the app.",
          "To design the user interface.",
          "To update the app's data storage."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following is a commonly used framework for cross-platform mobile app development?",
        "correct_answer": "React Native.",
        "incorrect_answers": [
          "WordPress.",
          "Node.js.",
          "Angular."
        ]
      },
      {
        "number": 11,
        "question": "What is the purpose of a mobile app's backend?",
        "correct_answer": "It handles data storage, user authentication, and server-side logic.",
        "incorrect_answers": [
          "It designs the mobile app's user interface.",
          "It manages the app's marketing strategy.",
          "It runs on the user's mobile device."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is an example of a mobile app architecture?",
        "correct_answer": "MVC (Model-View-Controller).",
        "incorrect_answers": [
          "API (Application Programming Interface).",
          "DNS (Domain Name System).",
          "FTP (File Transfer Protocol)."
        ]
      },
      {
        "number": 13,
        "question": "What is the significance of app store optimization (ASO)?",
        "correct_answer": "It helps improve the visibility of the app in app stores and increase downloads.",
        "incorrect_answers": [
          "It speeds up the app's load time.",
          "It adds security features to the app.",
          "It creates the app's user interface design."
        ]
      },
      {
        "number": 14,
        "question": "What is the function of push notifications in mobile apps?",
        "correct_answer": "To send updates, alerts, or promotions to users even when they are not actively using the app.",
        "incorrect_answers": [
          "To improve the app's speed.",
          "To help users navigate the app interface.",
          "To store data on the user's device."
        ]
      },
      {
        "number": 15,
        "question": "What is the purpose of using version control in mobile app development?",
        "correct_answer": "To track changes in the codebase, collaborate with other developers, and manage app versions.",
        "incorrect_answers": [
          "To optimize the app's UI design.",
          "To test the app's features before release.",
          "To store user data securely."
        ]
      }
    ]
  },
  {
    "id": 11,
    "category": "Blockchain Developer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary function of a blockchain?",
        "correct_answer": "To securely store and share data in a decentralized manner.",
        "incorrect_answers": [
          "To manage centralized databases.",
          "To develop cryptocurrencies.",
          "To store data in a single server."
        ]
      },
      {
        "number": 2,
        "question": "What is a blockchain consensus algorithm?",
        "correct_answer": "A mechanism used to agree on the validity of transactions in a decentralized network.",
        "incorrect_answers": [
          "A method of encrypting user data.",
          "A type of network connection.",
          "A method for storing blockchain data."
        ]
      },
      {
        "number": 3,
        "question": "Which of the following is a widely used blockchain consensus algorithm?",
        "correct_answer": "Proof of Work (PoW).",
        "incorrect_answers": [
          "Hashing.",
          "Proof of Stake (PoS).",
          "SHA-256."
        ]
      },
      {
        "number": 4,
        "question": "What is a smart contract in blockchain development?",
        "correct_answer": "A self-executing contract with the terms of the agreement directly written into code.",
        "incorrect_answers": [
          "A blockchain transaction protocol.",
          "A legal document stored on the blockchain.",
          "A type of data storage system."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is a key feature of blockchain technology?",
        "correct_answer": "Decentralization.",
        "incorrect_answers": [
          "Centralized control.",
          "Encryption.",
          "Distributed computing."
        ]
      },
      {
        "number": 6,
        "question": "What is a cryptocurrency?",
        "correct_answer": "A digital or virtual currency that uses cryptography for security and operates on a blockchain.",
        "incorrect_answers": [
          "A traditional government-issued currency.",
          "A form of digital payment system.",
          "A type of online banking service."
        ]
      },
      {
        "number": 7,
        "question": "What is a block in a blockchain?",
        "correct_answer": "A unit of data that contains a list of transactions and is linked to the previous block.",
        "incorrect_answers": [
          "A type of database table.",
          "A user interface element.",
          "A type of encryption key."
        ]
      },
      {
        "number": 8,
        "question": "What does 'mining' refer to in blockchain?",
        "correct_answer": "The process of validating transactions and adding them to the blockchain in exchange for cryptocurrency rewards.",
        "incorrect_answers": [
          "Storing data on a blockchain.",
          "Creating new cryptocurrencies.",
          "Encrypting blockchain data."
        ]
      },
      {
        "number": 9,
        "question": "Which blockchain platform is commonly used for developing decentralized applications (dApps)?",
        "correct_answer": "Ethereum.",
        "incorrect_answers": [
          "Bitcoin.",
          "Ripple.",
          "Litecoin."
        ]
      },
      {
        "number": 10,
        "question": "What is a public key in blockchain?",
        "correct_answer": "A cryptographic key that can be shared with others and is used to receive transactions.",
        "incorrect_answers": [
          "A private key used to access blockchain wallets.",
          "A unique identifier for a blockchain network.",
          "A key used to encrypt blockchain data."
        ]
      },
      {
        "number": 11,
        "question": "What is a private key in blockchain?",
        "correct_answer": "A secret key used to sign transactions and access blockchain accounts.",
        "incorrect_answers": [
          "A key used to encrypt blockchain data.",
          "A public key that is shared with others.",
          "A key used to identify blockchain networks."
        ]
      },
      {
        "number": 12,
        "question": "What is a decentralized application (dApp)?",
        "correct_answer": "An application that runs on a blockchain and operates without a central authority.",
        "incorrect_answers": [
          "An application that runs on a centralized server.",
          "A mobile application that accesses blockchain data.",
          "A software program that stores data in a traditional database."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is a disadvantage of using blockchain technology?",
        "correct_answer": "It can be slower and less scalable than traditional databases.",
        "incorrect_answers": [
          "It is fully centralized.",
          "It is not secure.",
          "It lacks transparency."
        ]
      },
      {
        "number": 14,
        "question": "What is a token in blockchain?",
        "correct_answer": "A digital asset that represents ownership or access to a particular asset or service on the blockchain.",
        "incorrect_answers": [
          "A type of encryption key.",
          "A unit of computation used in mining.",
          "A smart contract."
        ]
      },
      {
        "number": 15,
        "question": "What is the primary purpose of the Bitcoin blockchain?",
        "correct_answer": "To facilitate peer-to-peer transactions in a decentralized, secure manner.",
        "incorrect_answers": [
          "To create smart contracts for various applications.",
          "To store cryptocurrency in digital wallets.",
          "To provide cloud storage for data."
        ]
      }
    ]
  },
  {
    "id": 12,
    "category": "DevOps Engineer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a DevOps engineer?",
        "correct_answer": "To automate and streamline the software development and deployment processes.",
        "incorrect_answers": [
          "To design user interfaces for applications.",
          "To test software for bugs and issues.",
          "To manage databases and storage solutions."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following tools is commonly used for continuous integration in DevOps?",
        "correct_answer": "Jenkins.",
        "incorrect_answers": [
          "GitHub.",
          "Docker.",
          "Kubernetes."
        ]
      },
      {
        "number": 3,
        "question": "What does the term 'Infrastructure as Code' (IaC) mean in DevOps?",
        "correct_answer": "The management and provisioning of computing infrastructure through machine-readable definition files, rather than through physical hardware configuration.",
        "incorrect_answers": [
          "The automation of user interface design.",
          "The use of virtual machines for testing purposes.",
          "The use of version control for databases."
        ]
      },
      {
        "number": 4,
        "question": "Which tool is often used for containerization in DevOps?",
        "correct_answer": "Docker.",
        "incorrect_answers": [
          "Terraform.",
          "Chef.",
          "Nagios."
        ]
      },
      {
        "number": 5,
        "question": "What is the purpose of Kubernetes in DevOps?",
        "correct_answer": "To automate the deployment, scaling, and management of containerized applications.",
        "incorrect_answers": [
          "To store data on cloud servers.",
          "To test the functionality of the code.",
          "To design the user interface of applications."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a primary benefit of continuous delivery in DevOps?",
        "correct_answer": "It allows for faster and more reliable software releases.",
        "incorrect_answers": [
          "It reduces the need for version control.",
          "It ensures data security for applications.",
          "It automates customer support tasks."
        ]
      },
      {
        "number": 7,
        "question": "What is the role of a version control system like Git in DevOps?",
        "correct_answer": "To manage and track changes to source code during development.",
        "incorrect_answers": [
          "To create and manage virtual machines.",
          "To monitor system performance in real time.",
          "To handle user authentication in applications."
        ]
      },
      {
        "number": 8,
        "question": "What is the primary benefit of using a microservices architecture in DevOps?",
        "correct_answer": "It allows for the development of smaller, independently deployable services that can be updated or scaled without affecting the whole application.",
        "incorrect_answers": [
          "It reduces the need for containerization.",
          "It simplifies the codebase for development.",
          "It reduces network traffic between services."
        ]
      },
      {
        "number": 9,
        "question": "What does 'continuous integration' mean in the context of DevOps?",
        "correct_answer": "The practice of automatically integrating code changes into a shared repository frequently to detect and address issues early.",
        "incorrect_answers": [
          "The process of encrypting code before deployment.",
          "The practice of releasing software updates once a year.",
          "The management of network traffic during deployment."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following tools is used for configuration management in DevOps?",
        "correct_answer": "Ansible.",
        "incorrect_answers": [
          "Jenkins.",
          "GitHub.",
          "Docker."
        ]
      },
      {
        "number": 11,
        "question": "What is the purpose of monitoring in a DevOps environment?",
        "correct_answer": "To track the performance and health of applications and infrastructure to ensure smooth operation.",
        "incorrect_answers": [
          "To deploy updates to applications.",
          "To create new applications.",
          "To write code for automated testing."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is a tool used for cloud infrastructure provisioning in DevOps?",
        "correct_answer": "Terraform.",
        "incorrect_answers": [
          "Docker.",
          "Kubernetes.",
          "Chef."
        ]
      },
      {
        "number": 13,
        "question": "What is a common challenge faced by DevOps teams?",
        "correct_answer": "Balancing the speed of delivery with maintaining system stability and security.",
        "incorrect_answers": [
          "Ensuring that all code is written in the same programming language.",
          "Managing the marketing strategy for the product.",
          "Ensuring all software is built without testing."
        ]
      },
      {
        "number": 14,
        "question": "Which of the following best describes the term 'DevSecOps'?",
        "correct_answer": "Integrating security practices into the DevOps process to ensure secure software development.",
        "incorrect_answers": [
          "Automating marketing processes in DevOps.",
          "Managing the user interface of DevOps tools.",
          "Running tests on the final product only."
        ]
      },
      {
        "number": 15,
        "question": "Which cloud platform is commonly used in DevOps for hosting applications?",
        "correct_answer": "Amazon Web Services (AWS).",
        "incorrect_answers": [
          "Google Chrome.",
          "Dropbox.",
          "MySQL."
        ]
      }
    ]
  },
  {
    "id": 13,
    "category": "Data Analyst",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a data analyst?",
        "correct_answer": "To collect, process, and analyze data to help businesses make informed decisions.",
        "incorrect_answers": [
          "To design and develop software applications.",
          "To maintain and secure databases.",
          "To oversee marketing campaigns."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a common tool used for data analysis?",
        "correct_answer": "Microsoft Excel.",
        "incorrect_answers": [
          "Adobe Photoshop.",
          "Jenkins.",
          "Visual Studio."
        ]
      },
      {
        "number": 3,
        "question": "What is data cleaning in the context of data analysis?",
        "correct_answer": "The process of identifying and correcting errors or inconsistencies in datasets.",
        "incorrect_answers": [
          "The process of collecting data from different sources.",
          "The process of visualizing data.",
          "The process of backing up data."
        ]
      },
      {
        "number": 4,
        "question": "Which statistical method is commonly used for data analysis?",
        "correct_answer": "Linear regression.",
        "incorrect_answers": [
          "HTML.",
          "CSS.",
          "JavaScript."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is an example of unstructured data?",
        "correct_answer": "Text data from social media posts.",
        "incorrect_answers": [
          "Excel spreadsheets.",
          "SQL databases.",
          "CSV files."
        ]
      },
      {
        "number": 6,
        "question": "What is a data visualization?",
        "correct_answer": "The graphical representation of data to help understand patterns and trends.",
        "incorrect_answers": [
          "A table of raw data.",
          "A list of statistical methods.",
          "A summary of the data analysis process."
        ]
      },
      {
        "number": 7,
        "question": "Which programming language is commonly used by data analysts for data manipulation and analysis?",
        "correct_answer": "Python.",
        "incorrect_answers": [
          "Java.",
          "Ruby.",
          "Swift."
        ]
      },
      {
        "number": 8,
        "question": "What is the purpose of SQL in data analysis?",
        "correct_answer": "SQL is used to query and manipulate data stored in relational databases.",
        "incorrect_answers": [
          "SQL is used to visualize data.",
          "SQL is used to develop software applications.",
          "SQL is used to manage marketing strategies."
        ]
      },
      {
        "number": 9,
        "question": "What does 'Big Data' refer to?",
        "correct_answer": "Large volumes of data that are too complex to be processed by traditional data management tools.",
        "incorrect_answers": [
          "Small datasets used for analysis.",
          "Data stored on personal computers.",
          "Data analyzed by a single individual."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following is a common type of data analysis?",
        "correct_answer": "Descriptive analysis.",
        "incorrect_answers": [
          "Web development.",
          "Graphic design.",
          "Application programming."
        ]
      },
      {
        "number": 11,
        "question": "What is the purpose of hypothesis testing in data analysis?",
        "correct_answer": "To determine if there is enough statistical evidence to support a particular hypothesis.",
        "incorrect_answers": [
          "To visualize the data.",
          "To clean the data.",
          "To develop predictive models."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is an example of a data modeling technique?",
        "correct_answer": "Decision trees.",
        "incorrect_answers": [
          "JavaScript functions.",
          "HTML tags.",
          "CSS selectors."
        ]
      },
      {
        "number": 13,
        "question": "What is the purpose of a correlation analysis in data analytics?",
        "correct_answer": "To measure the relationship between two variables.",
        "incorrect_answers": [
          "To determine the cause of a data issue.",
          "To predict future data trends.",
          "To clean data for analysis."
        ]
      },
      {
        "number": 14,
        "question": "Which tool is often used for data visualization and analysis?",
        "correct_answer": "Tableau.",
        "incorrect_answers": [
          "Visual Studio.",
          "Photoshop.",
          "WordPress."
        ]
      },
      {
        "number": 15,
        "question": "What is predictive analytics?",
        "correct_answer": "The use of statistical techniques to predict future outcomes based on historical data.",
        "incorrect_answers": [
          "The visualization of past data trends.",
          "The process of cleaning raw data.",
          "The creation of reports from data."
        ]
      }
    ]
  },
  {
    "id": 14,
    "category": "SEO Specialist",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What does SEO stand for?",
        "correct_answer": "Search Engine Optimization.",
        "incorrect_answers": [
          "Search Engine Operations.",
          "Social Engagement Optimization.",
          "Search Engine Outreach."
        ]
      },
      {
        "number": 2,
        "question": "What is the primary goal of SEO?",
        "correct_answer": "To improve the visibility and ranking of a website on search engines.",
        "incorrect_answers": [
          "To create engaging social media content.",
          "To design user-friendly websites.",
          "To increase paid advertising results."
        ]
      },
      {
        "number": 3,
        "question": "Which of the following is a key on-page SEO factor?",
        "correct_answer": "Optimizing title tags and meta descriptions.",
        "incorrect_answers": [
          "Link building.",
          "Increasing the budget for paid ads.",
          "Creating social media accounts."
        ]
      },
      {
        "number": 4,
        "question": "What is keyword research in SEO?",
        "correct_answer": "The process of identifying the most relevant and high-volume keywords for a website's content.",
        "incorrect_answers": [
          "The process of designing web pages.",
          "The process of optimizing backlinks.",
          "The process of analyzing social media performance."
        ]
      },
      {
        "number": 5,
        "question": "What is a backlink in SEO?",
        "correct_answer": "A link from one website to another.",
        "incorrect_answers": [
          "A link to a page within the same website.",
          "A type of keyword research tool.",
          "A social media post related to the website."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is an off-page SEO factor?",
        "correct_answer": "Backlink quality and quantity.",
        "incorrect_answers": [
          "Meta tags optimization.",
          "Image alt text.",
          "URL structure."
        ]
      },
      {
        "number": 7,
        "question": "What does the term 'SERP' stand for?",
        "correct_answer": "Search Engine Results Page.",
        "incorrect_answers": [
          "Social Engagement Results Page.",
          "Site Engagement Ranking Page.",
          "Search Engine Ranking Program."
        ]
      },
      {
        "number": 8,
        "question": "What is 'technical SEO'?",
        "correct_answer": "The process of optimizing website infrastructure to improve crawling and indexing by search engines.",
        "incorrect_answers": [
          "Creating engaging content.",
          "Designing web pages for better user experience.",
          "Building backlinks from other websites."
        ]
      },
      {
        "number": 9,
        "question": "Which of the following tools is commonly used for SEO analysis?",
        "correct_answer": "Google Analytics.",
        "incorrect_answers": [
          "Photoshop.",
          "Jira.",
          "Slack."
        ]
      },
      {
        "number": 10,
        "question": "What is 'content optimization' in SEO?",
        "correct_answer": "The process of creating and refining content to ensure it ranks well in search engines.",
        "incorrect_answers": [
          "Creating content for social media platforms.",
          "Designing interactive websites.",
          "Building backlinks."
        ]
      },
      {
        "number": 11,
        "question": "Which factor does Google use to rank websites?",
        "correct_answer": "Page loading speed.",
        "incorrect_answers": [
          "Only the number of backlinks.",
          "The design of the website.",
          "The number of social media followers."
        ]
      },
      {
        "number": 12,
        "question": "What is 'local SEO'?",
        "correct_answer": "The practice of optimizing a website to rank better for local search queries.",
        "incorrect_answers": [
          "SEO for social media platforms.",
          "SEO for paid advertising campaigns.",
          "SEO for global reach."
        ]
      },
      {
        "number": 13,
        "question": "What is a meta description in SEO?",
        "correct_answer": "A short snippet of text that summarizes the content of a webpage and appears in search engine results.",
        "incorrect_answers": [
          "A list of keywords related to the page.",
          "A description of the website's design.",
          "A link to another webpage."
        ]
      },
      {
        "number": 14,
        "question": "What is a 301 redirect in SEO?",
        "correct_answer": "A permanent redirect from one URL to another.",
        "incorrect_answers": [
          "A temporary redirect from one URL to another.",
          "A type of keyword used for SEO.",
          "A method for compressing images."
        ]
      },
      {
        "number": 15,
        "question": "What is 'Google Panda' in SEO?",
        "correct_answer": "A Google algorithm update that focuses on content quality and penalizes low-quality content.",
        "incorrect_answers": [
          "A tool for tracking keyword rankings.",
          "A method for improving page speed.",
          "A type of backlink strategy."
        ]
      }
    ]
  },
  {
    "id": 15,
    "category": "Full Stack Developer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is a Full Stack Developer responsible for?",
        "correct_answer": "Building both the front-end and back-end of web applications.",
        "incorrect_answers": [
          "Designing user interfaces for websites.",
          "Managing databases and system infrastructure.",
          "Writing the marketing copy for web applications."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a front-end technology?",
        "correct_answer": "JavaScript.",
        "incorrect_answers": [
          "Node.js.",
          "Express.js.",
          "PHP."
        ]
      },
      {
        "number": 3,
        "question": "What is the purpose of a back-end developer?",
        "correct_answer": "To build and maintain the server-side logic, databases, and application infrastructure.",
        "incorrect_answers": [
          "To create the visual elements of a website.",
          "To write the code for SEO optimization.",
          "To manage social media marketing."
        ]
      },
      {
        "number": 4,
        "question": "Which programming language is commonly used for back-end development?",
        "correct_answer": "Node.js.",
        "incorrect_answers": [
          "HTML.",
          "CSS.",
          "Swift."
        ]
      },
      {
        "number": 5,
        "question": "What does the term 'API' stand for in web development?",
        "correct_answer": "Application Programming Interface.",
        "incorrect_answers": [
          "Application Processing Index.",
          "Automated Programming Integration.",
          "Asynchronous Processing Interface."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a popular database used by Full Stack Developers?",
        "correct_answer": "MongoDB.",
        "incorrect_answers": [
          "Adobe Photoshop.",
          "MySQL Workbench.",
          "GitHub."
        ]
      },
      {
        "number": 7,
        "question": "Which front-end framework is often used for building single-page applications (SPAs)?",
        "correct_answer": "React.js.",
        "incorrect_answers": [
          "Bootstrap.",
          "AngularJS.",
          "Django."
        ]
      },
      {
        "number": 8,
        "question": "What is version control used for in full stack development?",
        "correct_answer": "To track changes and manage multiple versions of code over time.",
        "incorrect_answers": [
          "To test the performance of the website.",
          "To create new user interfaces.",
          "To optimize the code for search engines."
        ]
      },
      {
        "number": 9,
        "question": "What is the primary purpose of the 'MVC' architecture in web development?",
        "correct_answer": "To separate the concerns of the application by dividing it into Model, View, and Controller components.",
        "incorrect_answers": [
          "To enhance the visual appearance of the website.",
          "To manage social media profiles.",
          "To manage content on the back-end."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following languages is used to style the front-end of web applications?",
        "correct_answer": "CSS.",
        "incorrect_answers": [
          "JavaScript.",
          "PHP.",
          "SQL."
        ]
      },
      {
        "number": 11,
        "question": "Which tool is commonly used for version control in Full Stack development?",
        "correct_answer": "Git.",
        "incorrect_answers": [
          "Sublime Text.",
          "Visual Studio Code.",
          "Eclipse."
        ]
      },
      {
        "number": 12,
        "question": "What does 'RESTful API' mean in web development?",
        "correct_answer": "An architectural style for designing networked applications, using stateless communication and standard HTTP methods.",
        "incorrect_answers": [
          "A protocol for securing APIs.",
          "A type of database management system.",
          "A method for building UI elements."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is a back-end programming language?",
        "correct_answer": "Python.",
        "incorrect_answers": [
          "HTML.",
          "CSS.",
          "JavaScript."
        ]
      },
      {
        "number": 14,
        "question": "What is 'responsive design' in web development?",
        "correct_answer": "Designing a website that adapts to different screen sizes and devices.",
        "incorrect_answers": [
          "Designing a website for desktop only.",
          "Creating high-quality graphics.",
          "Designing for better SEO ranking."
        ]
      },
      {
        "number": 15,
        "question": "Which tool is commonly used for front-end development?",
        "correct_answer": "Bootstrap.",
        "incorrect_answers": [
          "Node.js.",
          "Django.",
          "MongoDB."
        ]
      }
    ]
  },
  {
    "id": 16,
    "category": "Business Analyst",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Business Analyst?",
        "correct_answer": "To analyze and improve business processes and systems.",
        "incorrect_answers": [
          "To develop software applications.",
          "To manage IT infrastructure.",
          "To write marketing strategies."
        ]
      },
      {
        "number": 2,
        "question": "What is the purpose of a SWOT analysis in business analysis?",
        "correct_answer": "To assess a company's strengths, weaknesses, opportunities, and threats.",
        "incorrect_answers": [
          "To evaluate financial performance.",
          "To analyze marketing trends.",
          "To design business strategies."
        ]
      },
      {
        "number": 3,
        "question": "Which technique is often used by business analysts for gathering requirements?",
        "correct_answer": "Interviews.",
        "incorrect_answers": [
          "Database management.",
          "Code debugging.",
          "Server optimization."
        ]
      },
      {
        "number": 4,
        "question": "Which document defines the needs of the business and provides a roadmap for solutions?",
        "correct_answer": "Business Requirements Document (BRD).",
        "incorrect_answers": [
          "System Design Document.",
          "Project Plan.",
          "Test Cases Document."
        ]
      },
      {
        "number": 5,
        "question": "What is a use case in business analysis?",
        "correct_answer": "A description of how users will interact with a system to achieve a specific goal.",
        "incorrect_answers": [
          "A user interface design.",
          "A budget allocation plan.",
          "A data analysis report."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a key skill for a business analyst?",
        "correct_answer": "Critical thinking.",
        "incorrect_answers": [
          "Graphic design.",
          "SEO optimization.",
          "Web development."
        ]
      },
      {
        "number": 7,
        "question": "What is the purpose of a gap analysis?",
        "correct_answer": "To identify the differences between current and desired business performance.",
        "incorrect_answers": [
          "To design user interfaces.",
          "To assess project timelines.",
          "To track market trends."
        ]
      },
      {
        "number": 8,
        "question": "Which methodology is commonly used by business analysts for project management?",
        "correct_answer": "Agile.",
        "incorrect_answers": [
          "Waterfall.",
          "DevOps.",
          "Lean."
        ]
      },
      {
        "number": 9,
        "question": "Which document provides a detailed description of the solution being developed?",
        "correct_answer": "Functional Specification Document (FSD).",
        "incorrect_answers": [
          "Product Backlog.",
          "Test Cases Document.",
          "System Architecture Document."
        ]
      },
      {
        "number": 10,
        "question": "What is a key challenge for business analysts?",
        "correct_answer": "Balancing stakeholder expectations with project constraints.",
        "incorrect_answers": [
          "Developing the project budget.",
          "Designing the system architecture.",
          "Writing the code for the solution."
        ]
      },
      {
        "number": 11,
        "question": "Which tool is commonly used by business analysts to model business processes?",
        "correct_answer": "Business Process Model and Notation (BPMN).",
        "incorrect_answers": [
          "Microsoft Word.",
          "Excel.",
          "JIRA."
        ]
      },
      {
        "number": 12,
        "question": "What is the goal of requirement elicitation?",
        "correct_answer": "To gather detailed requirements from stakeholders to guide solution development.",
        "incorrect_answers": [
          "To test the solution.",
          "To design the user interface.",
          "To create a project timeline."
        ]
      },
      {
        "number": 13,
        "question": "What is the purpose of a project scope document?",
        "correct_answer": "To define the boundaries of the project and what will be delivered.",
        "incorrect_answers": [
          "To identify risks and issues.",
          "To allocate resources to the project.",
          "To provide a timeline for project phases."
        ]
      },
      {
        "number": 14,
        "question": "What does a Business Analyst do during the 'validation' phase?",
        "correct_answer": "Ensures that the solution meets the business requirements and user needs.",
        "incorrect_answers": [
          "Defines project timelines.",
          "Writes the solution code.",
          "Designs the user interface."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following is NOT typically a responsibility of a Business Analyst?",
        "correct_answer": "Writing system code.",
        "incorrect_answers": [
          "Gathering business requirements.",
          "Creating process models.",
          "Facilitating stakeholder meetings."
        ]
      }
    ]
  },
  {
    "id": 17,
    "category": "Cloud Solutions Architect",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the role of a Cloud Solutions Architect?",
        "correct_answer": "To design and implement cloud-based infrastructure and solutions.",
        "incorrect_answers": [
          "To write backend application code.",
          "To maintain databases on local servers.",
          "To design marketing strategies for cloud services."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a major public cloud provider?",
        "correct_answer": "Amazon Web Services (AWS).",
        "incorrect_answers": [
          "Oracle.",
          "SAP.",
          "VMware."
        ]
      },
      {
        "number": 3,
        "question": "Which architecture is commonly used in cloud computing for scalable applications?",
        "correct_answer": "Microservices architecture.",
        "incorrect_answers": [
          "Monolithic architecture.",
          "Layered architecture.",
          "Client-server architecture."
        ]
      },
      {
        "number": 4,
        "question": "What does 'IaaS' stand for in cloud computing?",
        "correct_answer": "Infrastructure as a Service.",
        "incorrect_answers": [
          "Integration as a Service.",
          "Information as a Service.",
          "Interface as a Service."
        ]
      },
      {
        "number": 5,
        "question": "What is the primary benefit of using cloud computing for businesses?",
        "correct_answer": "Cost savings and scalability.",
        "incorrect_answers": [
          "Increased manual labor.",
          "More control over on-premise infrastructure.",
          "More complex data management."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a key responsibility of a Cloud Solutions Architect?",
        "correct_answer": "Designing cloud-based systems to meet the business needs.",
        "incorrect_answers": [
          "Developing front-end user interfaces.",
          "Maintaining on-premises servers.",
          "Handling customer service issues."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is an example of a Platform as a Service (PaaS) offering?",
        "correct_answer": "Google App Engine.",
        "incorrect_answers": [
          "Amazon EC2.",
          "Microsoft Azure Virtual Machines.",
          "Google Cloud Storage."
        ]
      },
      {
        "number": 8,
        "question": "Which technology is commonly used for cloud-based container orchestration?",
        "correct_answer": "Kubernetes.",
        "incorrect_answers": [
          "Apache Hadoop.",
          "Docker Compose.",
          "Ansible."
        ]
      },
      {
        "number": 9,
        "question": "Which of the following best describes a hybrid cloud environment?",
        "correct_answer": "A mix of public and private cloud resources.",
        "incorrect_answers": [
          "A completely public cloud environment.",
          "A fully private cloud infrastructure.",
          "A cloud service used only for data storage."
        ]
      },
      {
        "number": 10,
        "question": "What is 'serverless' computing?",
        "correct_answer": "A cloud computing model where the cloud provider manages the infrastructure, and the user only focuses on code.",
        "incorrect_answers": [
          "A model where users manage all infrastructure themselves.",
          "A service for only running databases in the cloud.",
          "A service that provides only cloud storage."
        ]
      },
      {
        "number": 11,
        "question": "Which cloud service model provides computing resources over the internet?",
        "correct_answer": "IaaS (Infrastructure as a Service).",
        "incorrect_answers": [
          "PaaS (Platform as a Service).",
          "SaaS (Software as a Service).",
          "DaaS (Data as a Service)."
        ]
      },
      {
        "number": 12,
        "question": "What is the purpose of cloud security?",
        "correct_answer": "To ensure that cloud data and applications are protected from unauthorized access and breaches.",
        "incorrect_answers": [
          "To ensure the hardware is secure.",
          "To manage employee access to on-premise servers.",
          "To analyze user behavior."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is a benefit of cloud-native applications?",
        "correct_answer": "Scalability and flexibility.",
        "incorrect_answers": [
          "Limited deployment options.",
          "Increased server costs.",
          "Reduced performance."
        ]
      },
      {
        "number": 14,
        "question": "What is a primary consideration when choosing a cloud provider?",
        "correct_answer": "The provider's security and compliance standards.",
        "incorrect_answers": [
          "The cost of the provider's advertising.",
          "The provider's marketing reputation.",
          "The provider's server location."
        ]
      },
      {
        "number": 15,
        "question": "What is a common challenge faced by Cloud Solutions Architects?",
        "correct_answer": "Ensuring that cloud resources are optimized for performance and cost.",
        "incorrect_answers": [
          "Writing user interface code.",
          "Managing customer service issues.",
          "Developing the back-end code."
        ]
      }
    ]
  },
  {
    "id": 18,
    "category": "Game Developer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Game Developer?",
        "correct_answer": "To design, create, and program video games.",
        "incorrect_answers": [
          "To write scripts for marketing.",
          "To manage the company’s budget.",
          "To create artwork for games."
        ]
      },
      {
        "number": 2,
        "question": "Which game engine is commonly used for developing 3D games?",
        "correct_answer": "Unity.",
        "incorrect_answers": [
          "Photoshop.",
          "AutoCAD.",
          "WordPress."
        ]
      },
      {
        "number": 3,
        "question": "Which programming language is often used for game development?",
        "correct_answer": "C++.",
        "incorrect_answers": [
          "HTML.",
          "CSS.",
          "Python."
        ]
      },
      {
        "number": 4,
        "question": "What is a key skill for a Game Developer?",
        "correct_answer": "Problem-solving and logical thinking.",
        "incorrect_answers": [
          "Graphic design.",
          "Project management.",
          "Marketing expertise."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is an example of a game genre?",
        "correct_answer": "First-person shooter.",
        "incorrect_answers": [
          "HTML5.",
          "Node.js.",
          "CSS3."
        ]
      },
      {
        "number": 6,
        "question": "What does a game developer do during the 'beta' phase of game development?",
        "correct_answer": "Test the game to identify bugs and improve functionality.",
        "incorrect_answers": [
          "Design the game’s graphics.",
          "Launch the game to the public.",
          "Write the marketing plan."
        ]
      },
      {
        "number": 7,
        "question": "What is the purpose of an API in game development?",
        "correct_answer": "To allow communication between different software components of the game.",
        "incorrect_answers": [
          "To store game assets.",
          "To encrypt game data.",
          "To build game user interfaces."
        ]
      },
      {
        "number": 8,
        "question": "Which of the following is a common game development framework?",
        "correct_answer": "Unreal Engine.",
        "incorrect_answers": [
          "Laravel.",
          "Django.",
          "Angular."
        ]
      },
      {
        "number": 9,
        "question": "What does 'AI' refer to in the context of game development?",
        "correct_answer": "Artificial intelligence, used to create behavior for non-player characters.",
        "incorrect_answers": [
          "Advanced interface.",
          "Algorithmic integration.",
          "Asset interaction."
        ]
      },
      {
        "number": 10,
        "question": "What is the primary function of shaders in game development?",
        "correct_answer": "To control how objects and surfaces are rendered in the game’s graphics.",
        "incorrect_answers": [
          "To create the game’s storyline.",
          "To manage game audio.",
          "To store the game’s user data."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following is a popular game development platform for mobile devices?",
        "correct_answer": "Unity.",
        "incorrect_answers": [
          "Visual Studio.",
          "WordPress.",
          "Eclipse."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is a challenge in game development?",
        "correct_answer": "Balancing gameplay mechanics.",
        "incorrect_answers": [
          "Creating an HTML website.",
          "Writing user interfaces.",
          "Developing security protocols."
        ]
      },
      {
        "number": 13,
        "question": "What is 'game physics' in the context of game development?",
        "correct_answer": "Simulating real-world physical forces, such as gravity, within a game.",
        "incorrect_answers": [
          "Creating game animations.",
          "Designing in-game characters.",
          "Handling multiplayer networking."
        ]
      },
      {
        "number": 14,
        "question": "What is 'multiplayer functionality' in a video game?",
        "correct_answer": "The ability for multiple players to interact and play the game together online.",
        "incorrect_answers": [
          "An option to change the game’s graphics settings.",
          "The ability to share game progress on social media.",
          "Managing the game’s advertisements."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following languages is commonly used in game development?",
        "correct_answer": "C#.",
        "incorrect_answers": [
          "HTML.",
          "PHP.",
          "Swift."
        ]
      }
    ]
  },
  {
    "id": 19,
    "category": "Network Engineer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary responsibility of a Network Engineer?",
        "correct_answer": "Designing, implementing, and maintaining computer networks.",
        "incorrect_answers": [
          "Designing websites.",
          "Writing system code.",
          "Creating marketing strategies."
        ]
      },
      {
        "number": 2,
        "question": "Which protocol is used to route data across networks?",
        "correct_answer": "IP (Internet Protocol).",
        "incorrect_answers": [
          "HTTP.",
          "SMTP.",
          "FTP."
        ]
      },
      {
        "number": 3,
        "question": "Which device is used to connect multiple networks?",
        "correct_answer": "Router.",
        "incorrect_answers": [
          "Switch.",
          "Hub.",
          "Modem."
        ]
      },
      {
        "number": 4,
        "question": "What is DNS used for?",
        "correct_answer": "Converting domain names into IP addresses.",
        "incorrect_answers": [
          "Encrypting data.",
          "Managing email communication.",
          "Testing network speed."
        ]
      },
      {
        "number": 5,
        "question": "What is a VLAN?",
        "correct_answer": "A Virtual Local Area Network, used to segment network traffic.",
        "incorrect_answers": [
          "A data encryption standard.",
          "A physical network switch.",
          "A wireless protocol."
        ]
      },
      {
        "number": 6,
        "question": "What is the purpose of firewalls in networking?",
        "correct_answer": "To protect networks from unauthorized access and threats.",
        "incorrect_answers": [
          "To store network data.",
          "To speed up internet connections.",
          "To monitor network traffic."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is a common network topology?",
        "correct_answer": "Star topology.",
        "incorrect_answers": [
          "Bus topology.",
          "Ring topology.",
          "Mesh topology."
        ]
      },
      {
        "number": 8,
        "question": "What is 'bandwidth' in networking?",
        "correct_answer": "The maximum rate of data transfer across a network.",
        "incorrect_answers": [
          "The amount of data stored on a server.",
          "The time it takes for data to travel between devices.",
          "The type of network cable used."
        ]
      },
      {
        "number": 9,
        "question": "Which of the following is a protocol used for secure communication over a network?",
        "correct_answer": "HTTPS.",
        "incorrect_answers": [
          "FTP.",
          "HTTP.",
          "SMTP."
        ]
      },
      {
        "number": 10,
        "question": "What is a common use of an IP address?",
        "correct_answer": "To uniquely identify devices on a network.",
        "incorrect_answers": [
          "To store network data.",
          "To manage network traffic.",
          "To encrypt data."
        ]
      },
      {
        "number": 11,
        "question": "What is a common tool used for network diagnostics?",
        "correct_answer": "Ping.",
        "incorrect_answers": [
          "JIRA.",
          "Photoshop.",
          "Excel."
        ]
      },
      {
        "number": 12,
        "question": "Which device helps extend the range of a wireless network?",
        "correct_answer": "Wi-Fi extender.",
        "incorrect_answers": [
          "Router.",
          "Switch.",
          "Hub."
        ]
      },
      {
        "number": 13,
        "question": "What is a VPN?",
        "correct_answer": "A Virtual Private Network, used to create a secure connection over the internet.",
        "incorrect_answers": [
          "A Virtual Protocol Network.",
          "A Wireless Protected Network.",
          "A Video Private Network."
        ]
      },
      {
        "number": 14,
        "question": "What is the purpose of subnetting in networking?",
        "correct_answer": "To divide a network into smaller, manageable segments.",
        "incorrect_answers": [
          "To encrypt data between devices.",
          "To ensure compatibility between devices.",
          "To establish secure communications."
        ]
      },
      {
        "number": 15,
        "question": "What does NAT stand for in networking?",
        "correct_answer": "Network Address Translation.",
        "incorrect_answers": [
          "Network Application Tool.",
          "Node Address Technology.",
          "Network Access Transmission."
        ]
      }
    ]
  },
  {
    "id": 20,
    "category": "Cloud Engineer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the main responsibility of a Cloud Engineer?",
        "correct_answer": "Designing and managing cloud infrastructure.",
        "incorrect_answers": [
          "Writing application code.",
          "Managing marketing campaigns.",
          "Designing hardware components."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a common cloud service provider?",
        "correct_answer": "Amazon Web Services (AWS).",
        "incorrect_answers": [
          "Oracle.",
          "SAP.",
          "Microsoft Excel."
        ]
      },
      {
        "number": 3,
        "question": "What is the primary benefit of cloud computing?",
        "correct_answer": "Scalability and flexibility in managing resources.",
        "incorrect_answers": [
          "Fixed infrastructure costs.",
          "Less network security.",
          "Reduced need for data storage."
        ]
      },
      {
        "number": 4,
        "question": "Which cloud service model provides virtualized computing resources over the internet?",
        "correct_answer": "IaaS (Infrastructure as a Service).",
        "incorrect_answers": [
          "PaaS (Platform as a Service).",
          "SaaS (Software as a Service).",
          "DaaS (Data as a Service)."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following cloud solutions is designed to manage and store large amounts of data?",
        "correct_answer": "Cloud Storage.",
        "incorrect_answers": [
          "Application Hosting.",
          "Database Management.",
          "Content Delivery Network."
        ]
      },
      {
        "number": 6,
        "question": "What does 'serverless computing' mean?",
        "correct_answer": "A model where the cloud provider automatically manages the infrastructure.",
        "incorrect_answers": [
          "Using servers for each service manually.",
          "Running code without any data storage.",
          "Managing only software but not hardware."
        ]
      },
      {
        "number": 7,
        "question": "Which technology helps automate infrastructure deployment in cloud environments?",
        "correct_answer": "Infrastructure as Code (IaC).",
        "incorrect_answers": [
          "Cloud Storage Solutions.",
          "Cloud Cost Management.",
          "Cloud Security Systems."
        ]
      },
      {
        "number": 8,
        "question": "What is the role of a Cloud Engineer in terms of security?",
        "correct_answer": "Ensuring cloud infrastructure is secure and protected from threats.",
        "incorrect_answers": [
          "Writing security protocols for websites.",
          "Handling customer service queries.",
          "Building user interface designs."
        ]
      },
      {
        "number": 9,
        "question": "What does 'cloud orchestration' refer to?",
        "correct_answer": "Automating the configuration and management of cloud resources.",
        "incorrect_answers": [
          "Creating cloud data backups.",
          "Writing application code for cloud applications.",
          "Managing cloud customer support."
        ]
      },
      {
        "number": 10,
        "question": "What is the significance of a multi-cloud environment?",
        "correct_answer": "Using multiple cloud providers to avoid reliance on a single provider.",
        "incorrect_answers": [
          "Storing data in a single location for efficiency.",
          "Using multiple networks within a single provider.",
          "Running applications across different geographic regions."
        ]
      },
      {
        "number": 11,
        "question": "What is a cloud 'instance'?",
        "correct_answer": "A virtual machine in the cloud used to run applications.",
        "incorrect_answers": [
          "A physical server.",
          "A software tool for managing cloud environments.",
          "A cloud-based database system."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is a key advantage of using cloud infrastructure?",
        "correct_answer": "Cost efficiency and flexibility.",
        "incorrect_answers": [
          "Higher initial investment.",
          "Limited scalability.",
          "Manual configuration requirements."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following tools is commonly used by Cloud Engineers for managing cloud services?",
        "correct_answer": "AWS Management Console.",
        "incorrect_answers": [
          "Jenkins.",
          "Visual Studio.",
          "GitHub."
        ]
      },
      {
        "number": 14,
        "question": "Which of the following is essential for managing cloud costs?",
        "correct_answer": "Cloud Cost Management and Optimization.",
        "incorrect_answers": [
          "Cloud Data Recovery.",
          "Cloud Application Monitoring.",
          "Cloud Security Testing."
        ]
      },
      {
        "number": 15,
        "question": "What is a cloud service that helps manage data across a distributed network?",
        "correct_answer": "Content Delivery Network (CDN).",
        "incorrect_answers": [
          "Database Management System.",
          "Virtual Machine Hosting.",
          "Serverless Computing."
        ]
      }
    ]
  },
  {
    "id": 21,
    "category": "Video Editor",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a video editor?",
        "correct_answer": "To edit and assemble video footage into a final product.",
        "incorrect_answers": [
          "To shoot video footage.",
          "To write scripts for videos.",
          "To manage video storage."
        ]
      },
      {
        "number": 2,
        "question": "Which software is commonly used for video editing?",
        "correct_answer": "Adobe Premiere Pro.",
        "incorrect_answers": [
          "Microsoft Word.",
          "Photoshop.",
          "Excel."
        ]
      },
      {
        "number": 3,
        "question": "What is a key skill for a video editor?",
        "correct_answer": "Attention to detail.",
        "incorrect_answers": [
          "Graphic design.",
          "Programming.",
          "SEO management."
        ]
      },
      {
        "number": 4,
        "question": "What is 'color grading' in video editing?",
        "correct_answer": "The process of adjusting the color balance and tone of the footage.",
        "incorrect_answers": [
          "Cutting and trimming video clips.",
          "Writing video scripts.",
          "Adding sound effects."
        ]
      },
      {
        "number": 5,
        "question": "What does a video editor typically use for sound synchronization?",
        "correct_answer": "Audio waveform analysis.",
        "incorrect_answers": [
          "Codecs.",
          "Cloud storage.",
          "Version control."
        ]
      },
      {
        "number": 6,
        "question": "What is a transition in video editing?",
        "correct_answer": "The effect used to move from one scene or clip to another.",
        "incorrect_answers": [
          "An effect used to adjust video color.",
          "A technique for zooming in on a scene.",
          "A method of adding background music."
        ]
      },
      {
        "number": 7,
        "question": "What is 'cutting on action' in video editing?",
        "correct_answer": "A technique where the editor cuts between shots during a moment of action to maintain continuity.",
        "incorrect_answers": [
          "Cutting scenes based on audio cues.",
          "Cutting video at random intervals.",
          "Cutting to the end of a clip only."
        ]
      },
      {
        "number": 8,
        "question": "What is the purpose of using B-roll footage?",
        "correct_answer": "To add visual interest and support the main story.",
        "incorrect_answers": [
          "To replace the main story.",
          "To adjust the brightness and contrast.",
          "To make the video longer."
        ]
      },
      {
        "number": 9,
        "question": "What is the difference between 'video compression' and 'video encoding'?",
        "correct_answer": "Compression reduces the size of the video, while encoding converts the video into a different format.",
        "incorrect_answers": [
          "There is no difference between them.",
          "Compression is used to convert audio, while encoding only handles video.",
          "Encoding refers to editing the video."
        ]
      },
      {
        "number": 10,
        "question": "Which of these is a type of video file format?",
        "correct_answer": "MP4.",
        "incorrect_answers": [
          "JPEG.",
          "HTML.",
          "DOCX."
        ]
      },
      {
        "number": 11,
        "question": "What is the function of a video timeline?",
        "correct_answer": "It is where video and audio clips are arranged in the editing software.",
        "incorrect_answers": [
          "It stores all raw footage.",
          "It is used to organize project files.",
          "It generates automatic color corrections."
        ]
      },
      {
        "number": 12,
        "question": "Which is an example of a video editing effect?",
        "correct_answer": "Slow motion.",
        "incorrect_answers": [
          "Resizing images.",
          "Changing font styles.",
          "Creating hyperlinks."
        ]
      },
      {
        "number": 13,
        "question": "What is a 'jump cut' in video editing?",
        "correct_answer": "A sudden, disorienting transition between two shots.",
        "incorrect_answers": [
          "A smooth transition between clips.",
          "A special visual effect applied to footage.",
          "A type of audio transition."
        ]
      },
      {
        "number": 14,
        "question": "What does 'rendering' mean in video editing?",
        "correct_answer": "The process of generating the final version of the edited video.",
        "incorrect_answers": [
          "Importing raw footage.",
          "Editing the color balance of a video.",
          "Adding audio effects."
        ]
      },
      {
        "number": 15,
        "question": "What is the purpose of adding text overlays in a video?",
        "correct_answer": "To provide additional information or context to the audience.",
        "incorrect_answers": [
          "To replace audio narration.",
          "To add background music.",
          "To adjust video color balance."
        ]
      }
    ]
  },
  {
    "id": 22,
    "category": "Product Designer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary responsibility of a product designer?",
        "correct_answer": "To design the functionality, look, and feel of a product.",
        "incorrect_answers": [
          "To code the product’s software.",
          "To market the product.",
          "To manage product finances."
        ]
      },
      {
        "number": 2,
        "question": "Which tool is commonly used by product designers?",
        "correct_answer": "Sketch.",
        "incorrect_answers": [
          "Xcode.",
          "Photoshop.",
          "Visual Studio."
        ]
      },
      {
        "number": 3,
        "question": "What is the purpose of user testing in product design?",
        "correct_answer": "To gather feedback on the product’s usability and improve it.",
        "incorrect_answers": [
          "To gather marketing feedback.",
          "To fix technical bugs.",
          "To write documentation."
        ]
      },
      {
        "number": 4,
        "question": "Which design principle focuses on making a product easy to use?",
        "correct_answer": "Usability.",
        "incorrect_answers": [
          "Accessibility.",
          "Aesthetics.",
          "Sustainability."
        ]
      },
      {
        "number": 5,
        "question": "What is 'wireframing' in product design?",
        "correct_answer": "Creating a basic layout to demonstrate the structure of a product.",
        "incorrect_answers": [
          "Designing the logo of the product.",
          "Testing the functionality of the product.",
          "Writing the marketing content for the product."
        ]
      },
      {
        "number": 6,
        "question": "What is the purpose of a 'prototype' in product design?",
        "correct_answer": "To create a working model of the product for testing and feedback.",
        "incorrect_answers": [
          "To sell the product to customers.",
          "To finalize the product’s features.",
          "To design the product packaging."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is NOT a key component of product design?",
        "correct_answer": "Project management.",
        "incorrect_answers": [
          "Prototyping.",
          "User testing.",
          "Visual design."
        ]
      },
      {
        "number": 8,
        "question": "What is 'user-centered design'?",
        "correct_answer": "Designing products based on user needs and feedback.",
        "incorrect_answers": [
          "Designing based on budget constraints.",
          "Designing based on team input only.",
          "Designing for aesthetic appeal only."
        ]
      },
      {
        "number": 9,
        "question": "What does 'UI' stand for in product design?",
        "correct_answer": "User Interface.",
        "incorrect_answers": [
          "Unified Interface.",
          "Ultimate Innovation.",
          "User Information."
        ]
      },
      {
        "number": 10,
        "question": "What is the purpose of 'user personas' in product design?",
        "correct_answer": "To represent different types of users and their needs.",
        "incorrect_answers": [
          "To define the target market's budget.",
          "To represent the stakeholders.",
          "To test the product's functionality."
        ]
      },
      {
        "number": 11,
        "question": "What does 'responsive design' mean?",
        "correct_answer": "Designing products that work well on different screen sizes and devices.",
        "incorrect_answers": [
          "Designing for high-resolution screens only.",
          "Designing for offline use only.",
          "Designing based on feedback only."
        ]
      },
      {
        "number": 12,
        "question": "What is the role of 'visual hierarchy' in product design?",
        "correct_answer": "To guide users through the design by prioritizing elements.",
        "incorrect_answers": [
          "To optimize product pricing.",
          "To create a complex design.",
          "To increase product sales."
        ]
      },
      {
        "number": 13,
        "question": "What is 'iteration' in product design?",
        "correct_answer": "The process of repeatedly refining and improving a design.",
        "incorrect_answers": [
          "The process of marketing the product.",
          "The process of creating a final design without changes.",
          "The process of coding the product."
        ]
      },
      {
        "number": 14,
        "question": "Which of the following is an important factor in product design?",
        "correct_answer": "Understanding user pain points.",
        "incorrect_answers": [
          "Ignoring user feedback.",
          "Focusing only on aesthetic appeal.",
          "Designing without prototypes."
        ]
      },
      {
        "number": 15,
        "question": "What is the main purpose of 'brand consistency' in product design?",
        "correct_answer": "To ensure the product aligns with the brand’s identity and message.",
        "incorrect_answers": [
          "To create unique designs without considering the brand.",
          "To attract more sales by changing the brand identity.",
          "To disregard customer feedback."
        ]
      }
    ]
  },
  {
    "id": 23,
    "category": "System Administrator",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a system administrator?",
        "correct_answer": "To manage and maintain computer systems and networks.",
        "incorrect_answers": [
          "To design software applications.",
          "To write code for websites.",
          "To conduct marketing research."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is commonly used for system administration tasks?",
        "correct_answer": "Linux.",
        "incorrect_answers": [
          "Windows XP.",
          "macOS.",
          "Android."
        ]
      },
      {
        "number": 3,
        "question": "What does a system administrator typically use to monitor system performance?",
        "correct_answer": "System monitoring tools.",
        "incorrect_answers": [
          "Design software.",
          "SEO tools.",
          "Email clients."
        ]
      },
      {
        "number": 4,
        "question": "What is 'virtualization' in system administration?",
        "correct_answer": "Creating multiple virtual instances of servers on a single physical machine.",
        "incorrect_answers": [
          "Increasing the physical size of servers.",
          "Replacing physical servers with cloud services.",
          "Installing more physical hardware."
        ]
      },
      {
        "number": 5,
        "question": "What is the purpose of backups in system administration?",
        "correct_answer": "To ensure data can be restored in case of failure or loss.",
        "incorrect_answers": [
          "To optimize system performance.",
          "To design system upgrades.",
          "To monitor user behavior."
        ]
      },
      {
        "number": 6,
        "question": "What does 'RAID' stand for in system administration?",
        "correct_answer": "Redundant Array of Independent Disks.",
        "incorrect_answers": [
          "Redundant Array of Inexpensive Data.",
          "Random Access Integrated Device.",
          "Remote Access Integrated Data."
        ]
      },
      {
        "number": 7,
        "question": "What does 'ping' command help to test?",
        "correct_answer": "The connectivity between the system and a remote server.",
        "incorrect_answers": [
          "The speed of a system’s processor.",
          "The network speed only.",
          "The storage capacity of a system."
        ]
      },
      {
        "number": 8,
        "question": "Which of the following is used to secure remote connections?",
        "correct_answer": "SSH (Secure Shell).",
        "incorrect_answers": [
          "FTP (File Transfer Protocol).",
          "HTTP (Hypertext Transfer Protocol).",
          "SMTP (Simple Mail Transfer Protocol)."
        ]
      },
      {
        "number": 9,
        "question": "Which tool is commonly used for system administration tasks?",
        "correct_answer": "Command Line Interface (CLI).",
        "incorrect_answers": [
          "Web browser.",
          "Word processor.",
          "Email client."
        ]
      },
      {
        "number": 10,
        "question": "What is 'active directory' used for?",
        "correct_answer": "Managing user permissions and resources in a networked environment.",
        "incorrect_answers": [
          "Programming software applications.",
          "Managing system backups.",
          "Optimizing network performance."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following is a common cause of network downtime?",
        "correct_answer": "Hardware failure.",
        "incorrect_answers": [
          "User login errors.",
          "Database queries.",
          "Software updates."
        ]
      },
      {
        "number": 12,
        "question": "What is the function of a firewall in system administration?",
        "correct_answer": "To protect systems from unauthorized access.",
        "incorrect_answers": [
          "To improve network speed.",
          "To store backup data.",
          "To monitor internet traffic."
        ]
      },
      {
        "number": 13,
        "question": "What is a common use of 'cron jobs' in system administration?",
        "correct_answer": "Scheduling automated tasks.",
        "incorrect_answers": [
          "Debugging system errors.",
          "Managing user permissions.",
          "Configuring firewalls."
        ]
      },
      {
        "number": 14,
        "question": "Which type of cloud computing is commonly used for system administration?",
        "correct_answer": "Infrastructure as a Service (IaaS).",
        "incorrect_answers": [
          "Software as a Service (SaaS).",
          "Platform as a Service (PaaS).",
          "Backup as a Service (BaaS)."
        ]
      },
      {
        "number": 15,
        "question": "What is 'load balancing' used for?",
        "correct_answer": "Distributing network traffic across multiple servers to prevent overload.",
        "incorrect_answers": [
          "Managing user permissions on a network.",
          "Monitoring server health.",
          "Encrypting network traffic."
        ]
      }
    ]
  },
  {
    "id": 24,
    "category": "HR Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of an HR manager?",
        "correct_answer": "To oversee recruitment, employee relations, and organizational development.",
        "incorrect_answers": [
          "To manage company finances.",
          "To design marketing strategies.",
          "To handle customer support."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of an HR manager?",
        "correct_answer": "Recruitment and talent acquisition.",
        "incorrect_answers": [
          "Managing sales teams.",
          "Developing product prototypes.",
          "Designing company logos."
        ]
      },
      {
        "number": 3,
        "question": "Which HR system is commonly used for managing employee information?",
        "correct_answer": "Human Resource Management System (HRMS).",
        "incorrect_answers": [
          "Customer Relationship Management (CRM).",
          "Enterprise Resource Planning (ERP).",
          "Project Management Tools."
        ]
      },
      {
        "number": 4,
        "question": "What is 'employee engagement'?",
        "correct_answer": "The emotional commitment an employee has towards their organization.",
        "incorrect_answers": [
          "The process of hiring new employees.",
          "Tracking employee work hours.",
          "Managing payroll and benefits."
        ]
      },
      {
        "number": 5,
        "question": "What is the purpose of a performance review?",
        "correct_answer": "To assess employee performance and provide feedback.",
        "incorrect_answers": [
          "To determine employee salary.",
          "To handle employee complaints.",
          "To assign employee work tasks."
        ]
      },
      {
        "number": 6,
        "question": "What is 'succession planning' in HR?",
        "correct_answer": "Preparing for future leadership roles by identifying and developing internal talent.",
        "incorrect_answers": [
          "Firing underperforming employees.",
          "Hiring new employees.",
          "Determining salary increases."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is a legal consideration in HR management?",
        "correct_answer": "Compliance with labor laws and regulations.",
        "incorrect_answers": [
          "Setting company goals and objectives.",
          "Hiring based on personal preferences.",
          "Managing company branding."
        ]
      },
      {
        "number": 8,
        "question": "Which HR practice helps improve employee retention?",
        "correct_answer": "Employee recognition programs.",
        "incorrect_answers": [
          "Setting unrealistic performance targets.",
          "Reducing employee benefits.",
          "Focusing only on salary increases."
        ]
      },
      {
        "number": 9,
        "question": "What is the purpose of an employee handbook?",
        "correct_answer": "To outline company policies, procedures, and expectations.",
        "incorrect_answers": [
          "To recruit new employees.",
          "To manage payroll processing.",
          "To assess employee performance."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following is an example of an HR benefit?",
        "correct_answer": "Health insurance.",
        "incorrect_answers": [
          "Corporate training programs.",
          "Office supplies.",
          "Client meetings."
        ]
      },
      {
        "number": 11,
        "question": "What is 'employee turnover'?",
        "correct_answer": "The rate at which employees leave the company and are replaced.",
        "incorrect_answers": [
          "The number of new hires.",
          "The number of promotions within the company.",
          "The total hours worked by employees."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is a key metric used in HR?",
        "correct_answer": "Employee retention rate.",
        "incorrect_answers": [
          "Revenue growth.",
          "Customer satisfaction.",
          "Product development time."
        ]
      },
      {
        "number": 13,
        "question": "What is the purpose of diversity and inclusion initiatives in HR?",
        "correct_answer": "To create a workplace that values diverse perspectives and promotes equality.",
        "incorrect_answers": [
          "To focus on uniformity within the organization.",
          "To maintain high turnover rates.",
          "To reduce employee benefits."
        ]
      },
      {
        "number": 14,
        "question": "Which of the following is an example of employee training?",
        "correct_answer": "A workshop on leadership skills.",
        "incorrect_answers": [
          "Client meetings.",
          "Writing project proposals.",
          "Developing marketing strategies."
        ]
      },
      {
        "number": 15,
        "question": "Which law governs workplace discrimination?",
        "correct_answer": "Title VII of the Civil Rights Act of 1964.",
        "incorrect_answers": [
          "The Fair Labor Standards Act (FLSA).",
          "The Family and Medical Leave Act (FMLA).",
          "The Americans with Disabilities Act (ADA)."
        ]
      }
    ]
  },
  {
    "id": 25,
    "category": "Marketing Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a marketing manager?",
        "correct_answer": "To plan and execute marketing strategies to promote products and services.",
        "incorrect_answers": [
          "To manage customer support.",
          "To design the company's logo.",
          "To oversee the production of the product."
        ]
      },
      {
        "number": 2,
        "question": "Which marketing strategy focuses on understanding and targeting specific customer segments?",
        "correct_answer": "Targeted marketing.",
        "incorrect_answers": [
          "Mass marketing.",
          "Social media marketing.",
          "Inbound marketing."
        ]
      },
      {
        "number": 3,
        "question": "What is 'brand positioning'?",
        "correct_answer": "The process of defining how a brand is perceived in the market relative to competitors.",
        "incorrect_answers": [
          "Designing brand logos.",
          "Setting the brand's pricing strategy.",
          "Managing brand partnerships."
        ]
      },
      {
        "number": 4,
        "question": "Which of the following is a key metric used in marketing performance?",
        "correct_answer": "Return on investment (ROI).",
        "incorrect_answers": [
          "Customer lifetime value.",
          "Employee retention rate.",
          "Market share."
        ]
      },
      {
        "number": 5,
        "question": "Which marketing tool is commonly used to automate email marketing campaigns?",
        "correct_answer": "Mailchimp.",
        "incorrect_answers": [
          "Google Analytics.",
          "SEMrush.",
          "Hootsuite."
        ]
      },
      {
        "number": 6,
        "question": "What is 'SEO'?",
        "correct_answer": "Search Engine Optimization, a strategy to improve a website's ranking on search engines.",
        "incorrect_answers": [
          "Social Engagement Optimization.",
          "Sales Experience Optimization.",
          "Systematic Email Optimization."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is an example of outbound marketing?",
        "correct_answer": "Television advertising.",
        "incorrect_answers": [
          "Content marketing.",
          "Social media engagement.",
          "Email newsletters."
        ]
      },
      {
        "number": 8,
        "question": "What does 'PPC' stand for in digital marketing?",
        "correct_answer": "Pay Per Click.",
        "incorrect_answers": [
          "People's Purchase Choices.",
          "Product Placement Campaign.",
          "Public Press Campaign."
        ]
      },
      {
        "number": 9,
        "question": "What is the main goal of 'content marketing'?",
        "correct_answer": "To create valuable and relevant content to attract and engage customers.",
        "incorrect_answers": [
          "To create TV advertisements.",
          "To sell products directly to customers.",
          "To monitor customer service."
        ]
      },
      {
        "number": 10,
        "question": "Which social media platform is primarily used for B2B marketing?",
        "correct_answer": "LinkedIn.",
        "incorrect_answers": [
          "Instagram.",
          "Facebook.",
          "TikTok."
        ]
      },
      {
        "number": 11,
        "question": "What is the purpose of a marketing funnel?",
        "correct_answer": "To guide potential customers through the stages of awareness to purchase.",
        "incorrect_answers": [
          "To manage employee tasks.",
          "To manage social media accounts.",
          "To track competitors."
        ]
      },
      {
        "number": 12,
        "question": "What is a 'call to action' (CTA) in marketing?",
        "correct_answer": "A prompt that encourages customers to take a specific action, such as purchasing or signing up.",
        "incorrect_answers": [
          "A message to increase customer complaints.",
          "A response to customer feedback.",
          "A request to schedule meetings."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is a common tool for tracking marketing performance?",
        "correct_answer": "Google Analytics.",
        "incorrect_answers": [
          "Microsoft Excel.",
          "Adobe Photoshop.",
          "Slack."
        ]
      },
      {
        "number": 14,
        "question": "What is the main advantage of using influencer marketing?",
        "correct_answer": "To leverage the influencer's reach and credibility to promote products.",
        "incorrect_answers": [
          "To sell directly to customers.",
          "To enhance customer support.",
          "To manage company resources."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following is a key element of a marketing strategy?",
        "correct_answer": "Target audience identification.",
        "incorrect_answers": [
          "Customer complaints management.",
          "Employee performance reviews.",
          "Product production schedules."
        ]
      }
    ]
  },
  {
    "id": 26,
    "category": "Artificial Intelligence Engineer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the main goal of an AI engineer?",
        "correct_answer": "To design and implement artificial intelligence systems.",
        "incorrect_answers": [
          "To manage network infrastructure.",
          "To develop marketing strategies.",
          "To create company logos."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a common programming language used in AI development?",
        "correct_answer": "Python.",
        "incorrect_answers": [
          "HTML.",
          "JavaScript.",
          "CSS."
        ]
      },
      {
        "number": 3,
        "question": "Which AI subfield focuses on machines learning from data to make decisions?",
        "correct_answer": "Machine Learning.",
        "incorrect_answers": [
          "Natural Language Processing.",
          "Robotics.",
          "Computer Vision."
        ]
      },
      {
        "number": 4,
        "question": "What is the concept of 'neural networks' in AI?",
        "correct_answer": "A system of algorithms designed to recognize patterns and make decisions.",
        "incorrect_answers": [
          "A set of data storage tools.",
          "A network of physical robots.",
          "A method of data encryption."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is an application of AI in healthcare?",
        "correct_answer": "AI-driven medical diagnosis tools.",
        "incorrect_answers": [
          "Web development tools.",
          "E-commerce platforms.",
          "Graphic design tools."
        ]
      },
      {
        "number": 6,
        "question": "What is 'natural language processing' (NLP)?",
        "correct_answer": "A field of AI that enables machines to understand and interpret human language.",
        "incorrect_answers": [
          "A system for creating graphics.",
          "A method of video game development.",
          "A software for data storage."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is an example of supervised learning?",
        "correct_answer": "Training a model using labeled data.",
        "incorrect_answers": [
          "Using unsorted data for training.",
          "Building a model without any data.",
          "Analyzing data without a specific goal."
        ]
      },
      {
        "number": 8,
        "question": "What is 'deep learning'?",
        "correct_answer": "A subset of machine learning that uses neural networks with many layers.",
        "incorrect_answers": [
          "A type of algorithm used in search engines.",
          "A method of developing user interfaces.",
          "A technique used in video streaming."
        ]
      },
      {
        "number": 9,
        "question": "What is 'reinforcement learning'?",
        "correct_answer": "A type of machine learning where an agent learns by interacting with an environment and receiving feedback.",
        "incorrect_answers": [
          "Learning through observation of labeled data.",
          "Learning without supervision from external sources.",
          "Learning through user interaction in software development."
        ]
      },
      {
        "number": 10,
        "question": "What is a common application of AI in finance?",
        "correct_answer": "Fraud detection algorithms.",
        "incorrect_answers": [
          "Website optimization tools.",
          "Customer service automation.",
          "Product pricing strategies."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following is an important ethical concern in AI development?",
        "correct_answer": "Bias in AI algorithms.",
        "incorrect_answers": [
          "User interface design.",
          "Server maintenance.",
          "Network security."
        ]
      },
      {
        "number": 12,
        "question": "What is the purpose of 'AI training datasets'?",
        "correct_answer": "To provide data that helps AI systems learn and make predictions.",
        "incorrect_answers": [
          "To store user login details.",
          "To monitor employee productivity.",
          "To develop marketing campaigns."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is an AI-powered virtual assistant?",
        "correct_answer": "Siri.",
        "incorrect_answers": [
          "Google Drive.",
          "Slack.",
          "Spotify."
        ]
      },
      {
        "number": 14,
        "question": "What is 'computer vision'?",
        "correct_answer": "An AI field that enables machines to interpret and understand visual information.",
        "incorrect_answers": [
          "A method for data encryption.",
          "A technique for creating digital content.",
          "A method for controlling industrial machines."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following is an application of AI in autonomous vehicles?",
        "correct_answer": "Self-driving technology.",
        "incorrect_answers": [
          "Fuel efficiency optimization.",
          "Passenger comfort adjustment.",
          "Vehicle body design."
        ]
      }
    ]
  },
  {
    "id": 27,
    "category": "Web Designer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a web designer?",
        "correct_answer": "To design and create the layout, structure, and visual appearance of websites.",
        "incorrect_answers": [
          "To develop back-end server code.",
          "To handle website content writing.",
          "To manage a website's SEO."
        ]
      },
      {
        "number": 2,
        "question": "Which tool is commonly used for web design?",
        "correct_answer": "Adobe Photoshop.",
        "incorrect_answers": [
          "Microsoft Excel.",
          "AutoCAD.",
          "Notepad++."
        ]
      },
      {
        "number": 3,
        "question": "Which of the following languages is used for structuring web pages?",
        "correct_answer": "HTML.",
        "incorrect_answers": [
          "JavaScript.",
          "Python.",
          "CSS."
        ]
      },
      {
        "number": 4,
        "question": "What does CSS stand for in web design?",
        "correct_answer": "Cascading Style Sheets.",
        "incorrect_answers": [
          "Creative Style Sheets.",
          "Code Styling System.",
          "Computer Style System."
        ]
      },
      {
        "number": 5,
        "question": "What is 'responsive web design'?",
        "correct_answer": "Designing websites that automatically adjust to fit the screen size of the device being used.",
        "incorrect_answers": [
          "Designing websites with static content.",
          "Optimizing websites for search engines.",
          "Building websites with Flash."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a web design framework?",
        "correct_answer": "Bootstrap.",
        "incorrect_answers": [
          "Angular.",
          "TensorFlow.",
          "Django."
        ]
      },
      {
        "number": 7,
        "question": "What is 'UI design'?",
        "correct_answer": "User Interface design, focusing on the look and feel of a website or app.",
        "incorrect_answers": [
          "User integration design.",
          "Universal interaction design.",
          "Unilateral interface design."
        ]
      },
      {
        "number": 8,
        "question": "What is the purpose of a wireframe in web design?",
        "correct_answer": "To represent the skeletal structure of a website's layout.",
        "incorrect_answers": [
          "To create the final website design.",
          "To define the color scheme of a website.",
          "To store web content."
        ]
      },
      {
        "number": 9,
        "question": "Which programming language is often used for adding interactivity to websites?",
        "correct_answer": "JavaScript.",
        "incorrect_answers": [
          "C++.",
          "Ruby.",
          "PHP."
        ]
      },
      {
        "number": 10,
        "question": "What is 'UX design'?",
        "correct_answer": "User Experience design, focused on the overall feel and usability of a website or app.",
        "incorrect_answers": [
          "User xperience.",
          "Uniform experience design.",
          "Underused experience."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following is a common tool for prototyping web designs?",
        "correct_answer": "Figma.",
        "incorrect_answers": [
          "Google Docs.",
          "Microsoft Word.",
          "Slack."
        ]
      },
      {
        "number": 12,
        "question": "What is 'SEO' in the context of web design?",
        "correct_answer": "Search Engine Optimization, the process of optimizing a website to rank higher in search engines.",
        "incorrect_answers": [
          "Structured Engine Output.",
          "Systematic Encrypted Optimization.",
          "Simplified Encoding Optimization."
        ]
      },
      {
        "number": 13,
        "question": "What is the importance of color theory in web design?",
        "correct_answer": "It helps in choosing colors that create an aesthetically pleasing and functional design.",
        "incorrect_answers": [
          "To make the website brighter.",
          "To create a balance between text and images.",
          "To choose the most expensive colors."
        ]
      },
      {
        "number": 14,
        "question": "Which of the following is essential for effective web design?",
        "correct_answer": "Consistency in design elements.",
        "incorrect_answers": [
          "Use of bright, clashing colors.",
          "Lack of navigation options.",
          "Heavy use of text."
        ]
      },
      {
        "number": 15,
        "question": "What does 'AJAX' stand for in web development?",
        "correct_answer": "Asynchronous JavaScript and XML.",
        "incorrect_answers": [
          "Advanced JavaScript and XML.",
          "Automated JSON and XML.",
          "Asynchronous Java and XHTML."
        ]
      }
    ]
  },
  {
    "id": 28,
    "category": "Frontend Developer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the role of a frontend developer?",
        "correct_answer": "To develop the part of the website that users interact with directly.",
        "incorrect_answers": [
          "To manage the server-side logic.",
          "To create databases for web applications.",
          "To write backend code for web applications."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is used for creating interactive web pages?",
        "correct_answer": "JavaScript.",
        "incorrect_answers": [
          "CSS.",
          "HTML.",
          "Python."
        ]
      },
      {
        "number": 3,
        "question": "Which framework is commonly used by frontend developers to build dynamic web applications?",
        "correct_answer": "React.",
        "incorrect_answers": [
          "Django.",
          "Flask.",
          "Spring."
        ]
      },
      {
        "number": 4,
        "question": "What is the purpose of CSS in frontend development?",
        "correct_answer": "To style the layout and appearance of a webpage.",
        "incorrect_answers": [
          "To define the structure of a webpage.",
          "To provide interactivity on the webpage.",
          "To manage databases."
        ]
      },
      {
        "number": 5,
        "question": "Which HTML tag is used to insert an image in a webpage?",
        "correct_answer": "<img>.",
        "incorrect_answers": [
          "<image>.",
          "<picture>.",
          "<src>."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is the correct way to link an external CSS file?",
        "correct_answer": "<link rel='stylesheet' href='style.css'>.",
        "incorrect_answers": [
          "<script src='style.css'>.",
          "<css link='style.css'>.",
          "<import href='style.css'>."
        ]
      },
      {
        "number": 7,
        "question": "What is 'responsive design'?",
        "correct_answer": "Designing websites to automatically adjust to different screen sizes.",
        "incorrect_answers": [
          "Designing websites with a fixed layout.",
          "Designing websites for desktop only.",
          "Designing websites with complex animations."
        ]
      },
      {
        "number": 8,
        "question": "Which of the following is a JavaScript framework?",
        "correct_answer": "Angular.",
        "incorrect_answers": [
          "Django.",
          "Laravel.",
          "Ruby on Rails."
        ]
      },
      {
        "number": 9,
        "question": "What is 'DOM' in the context of web development?",
        "correct_answer": "Document Object Model, a programming interface for web documents.",
        "incorrect_answers": [
          "Domain-Oriented Model.",
          "Distributed Object Management.",
          "Data Online Model."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following is a tool used for frontend testing?",
        "correct_answer": "Jest.",
        "incorrect_answers": [
          "Postman.",
          "Selenium.",
          "JUnit."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following CSS properties is used to change the font size?",
        "correct_answer": "font-size.",
        "incorrect_answers": [
          "font-style.",
          "font-weight.",
          "font-family."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following HTML tags is used to define a hyperlink?",
        "correct_answer": "<a>.",
        "incorrect_answers": [
          "<link>.",
          "<button>.",
          "<href>."
        ]
      },
      {
        "number": 13,
        "question": "Which version of HTML introduced semantic elements like <header> and <footer>?",
        "correct_answer": "HTML5.",
        "incorrect_answers": [
          "HTML4.",
          "HTML3.",
          "XHTML."
        ]
      },
      {
        "number": 14,
        "question": "What is 'AJAX' used for in frontend development?",
        "correct_answer": "Asynchronous JavaScript and XML used for creating dynamic, interactive web pages.",
        "incorrect_answers": [
          "Audio JavaScript and XML.",
          "Automatic JavaScript Animation eXecution.",
          "Advanced JavaScript AngularX."
        ]
      },
      {
        "number": 15,
        "question": "What is 'Git' commonly used for?",
        "correct_answer": "Version control to track changes in code and collaborate with other developers.",
        "incorrect_answers": [
          "Website building.",
          "Graphic design.",
          "SEO optimization."
        ]
      }
    ]
  },
  {
    "id": 29,
    "category": "Backend Developer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a backend developer?",
        "correct_answer": "To develop server-side logic and database management.",
        "incorrect_answers": [
          "To design user interfaces.",
          "To handle client-side scripts.",
          "To create graphics for websites."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following languages is commonly used for backend development?",
        "correct_answer": "Python.",
        "incorrect_answers": [
          "HTML.",
          "CSS.",
          "JavaScript."
        ]
      },
      {
        "number": 3,
        "question": "Which database is commonly used in backend development?",
        "correct_answer": "MySQL.",
        "incorrect_answers": [
          "Adobe Photoshop.",
          "MongoDB.",
          "Figma."
        ]
      },
      {
        "number": 4,
        "question": "What does an API do in backend development?",
        "correct_answer": "It allows communication between different software systems.",
        "incorrect_answers": [
          "It designs the website layout.",
          "It handles user interface rendering.",
          "It manages client-side operations."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is a backend framework?",
        "correct_answer": "Django.",
        "incorrect_answers": [
          "React.",
          "Bootstrap.",
          "Vue."
        ]
      },
      {
        "number": 6,
        "question": "What is the purpose of a RESTful API?",
        "correct_answer": "To define a set of conventions for building web services.",
        "incorrect_answers": [
          "To style the web page.",
          "To store website content.",
          "To create animations."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is a common backend language for web development?",
        "correct_answer": "Ruby.",
        "incorrect_answers": [
          "JavaScript.",
          "PHP.",
          "HTML."
        ]
      },
      {
        "number": 8,
        "question": "What is the role of a server in web development?",
        "correct_answer": "To store data and handle client requests.",
        "incorrect_answers": [
          "To style the website.",
          "To manage graphics and images.",
          "To write client-side code."
        ]
      },
      {
        "number": 9,
        "question": "Which protocol is commonly used for data exchange between a client and a server?",
        "correct_answer": "HTTP.",
        "incorrect_answers": [
          "FTP.",
          "SMTP.",
          "POP3."
        ]
      },
      {
        "number": 10,
        "question": "What is 'session management' in backend development?",
        "correct_answer": "Tracking user interactions on a website for the duration of their session.",
        "incorrect_answers": [
          "Managing the layout of the website.",
          "Storing images on the server.",
          "Handling client-side scripts."
        ]
      },
      {
        "number": 11,
        "question": "What is 'middleware' in backend development?",
        "correct_answer": "A software layer that processes requests between a client and server.",
        "incorrect_answers": [
          "A type of database system.",
          "A tool for designing user interfaces.",
          "A library for frontend animations."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is an important skill for a backend developer?",
        "correct_answer": "Database management.",
        "incorrect_answers": [
          "Graphic design.",
          "UI/UX design.",
          "Content writing."
        ]
      },
      {
        "number": 13,
        "question": "What is 'load balancing' in backend development?",
        "correct_answer": "Distributing network or application traffic across multiple servers to ensure reliability.",
        "incorrect_answers": [
          "Designing web page layouts.",
          "Writing server-side scripts.",
          "Optimizing client-side performance."
        ]
      },
      {
        "number": 14,
        "question": "What is the purpose of the 'MVC' architecture in backend development?",
        "correct_answer": "To separate the application's concerns into Model, View, and Controller.",
        "incorrect_answers": [
          "To optimize the website's graphics.",
          "To manage user authentication.",
          "To handle the database connections."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following is used for handling asynchronous operations in backend development?",
        "correct_answer": "Node.js.",
        "incorrect_answers": [
          "HTML.",
          "CSS.",
          "PHP."
        ]
      }
    ]
  },
  {
    "id": 30,
    "category": "SEO Content Writer",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary responsibility of an SEO content writer?",
        "correct_answer": "To create content optimized for search engines to improve website rankings.",
        "incorrect_answers": [
          "To design the website layout.",
          "To write promotional content for social media.",
          "To create technical documentation."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is an important factor for SEO content?",
        "correct_answer": "Keyword optimization.",
        "incorrect_answers": [
          "Graphic design.",
          "Website speed.",
          "Server maintenance."
        ]
      },
      {
        "number": 3,
        "question": "Which tool is commonly used for SEO keyword research?",
        "correct_answer": "Google Keyword Planner.",
        "incorrect_answers": [
          "Photoshop.",
          "WordPress.",
          "Slack."
        ]
      },
      {
        "number": 4,
        "question": "What is a 'meta description'?",
        "correct_answer": "A brief summary of a webpage's content, often shown in search engine results.",
        "incorrect_answers": [
          "The main header of the page.",
          "A section of the page for contact information.",
          "A list of keywords used on the page."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is an important on-page SEO element?",
        "correct_answer": "Title tags.",
        "incorrect_answers": [
          "Backlinks.",
          "Google Analytics.",
          "Server configuration."
        ]
      },
      {
        "number": 6,
        "question": "What does 'alt text' refer to in SEO?",
        "correct_answer": "A description added to images for better accessibility and SEO optimization.",
        "incorrect_answers": [
          "A type of keyword.",
          "A technique for improving page speed.",
          "A method for improving web security."
        ]
      },
      {
        "number": 7,
        "question": "What is the role of 'internal linking' in SEO content?",
        "correct_answer": "To link to other pages within the same website to improve site navigation and SEO.",
        "incorrect_answers": [
          "To link to external websites.",
          "To write content for social media.",
          "To optimize images on the site."
        ]
      },
      {
        "number": 8,
        "question": "Which of the following is an off-page SEO factor?",
        "correct_answer": "Backlinks.",
        "incorrect_answers": [
          "Content length.",
          "Meta descriptions.",
          "Title tags."
        ]
      },
      {
        "number": 9,
        "question": "What is 'long-tail keywords'?",
        "correct_answer": "Longer and more specific keyword phrases that attract targeted traffic.",
        "incorrect_answers": [
          "Shorter and general keyword phrases.",
          "Non-relevant keywords.",
          "Randomly generated keywords."
        ]
      },
      {
        "number": 10,
        "question": "What is 'content freshness' in SEO?",
        "correct_answer": "The process of regularly updating content to keep it relevant for search engines.",
        "incorrect_answers": [
          "Writing content only once.",
          "Removing outdated content.",
          "Using only images in content."
        ]
      },
      {
        "number": 11,
        "question": "What is the 'bounce rate' in SEO?",
        "correct_answer": "The percentage of visitors who leave a site after viewing only one page.",
        "incorrect_answers": [
          "The number of visitors to a page.",
          "The amount of time spent on a page.",
          "The number of backlinks to a site."
        ]
      },
      {
        "number": 12,
        "question": "What is 'SEO audit'?",
        "correct_answer": "An analysis of a website's performance and adherence to SEO best practices.",
        "incorrect_answers": [
          "A review of social media accounts.",
          "A method of website redesign.",
          "A review of email marketing."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is a good SEO practice for URL structure?",
        "correct_answer": "Using descriptive and concise URLs with relevant keywords.",
        "incorrect_answers": [
          "Using long and cryptic URLs.",
          "Using random characters.",
          "Including unnecessary stop words."
        ]
      },
      {
        "number": 14,
        "question": "What is the significance of 'content length' for SEO?",
        "correct_answer": "Longer, well-researched content tends to rank better in search engine results.",
        "incorrect_answers": [
          "Short content is better.",
          "Content length has no effect on SEO.",
          "Content should always be under 500 words."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following is important for SEO-friendly content?",
        "correct_answer": "Providing valuable and relevant information for users.",
        "incorrect_answers": [
          "Stuffing content with keywords.",
          "Using hidden text.",
          "Avoiding internal links."
        ]
      }
    ]
  },
  {
    "id": 31,
    "category": "Business Development Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary responsibility of a Business Development Manager?",
        "correct_answer": "To identify and develop new business opportunities to increase company revenue.",
        "incorrect_answers": [
          "To manage marketing campaigns.",
          "To design company logos.",
          "To handle employee relations."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key skill for a Business Development Manager?",
        "correct_answer": "Strong negotiation skills.",
        "incorrect_answers": [
          "Graphic design expertise.",
          "Technical coding skills.",
          "Web development knowledge."
        ]
      },
      {
        "number": 3,
        "question": "Which of these is part of a Business Development Manager's sales strategy?",
        "correct_answer": "Identifying market trends and customer needs.",
        "incorrect_answers": [
          "Focusing on customer service only.",
          "Managing human resources.",
          "Creating technical documentation."
        ]
      },
      {
        "number": 4,
        "question": "What is a 'lead generation' strategy?",
        "correct_answer": "The process of identifying potential customers or business partners.",
        "incorrect_answers": [
          "Advertising on social media.",
          "Designing a company website.",
          "Creating digital graphics."
        ]
      },
      {
        "number": 5,
        "question": "What does the term 'CRM' stand for?",
        "correct_answer": "Customer Relationship Management.",
        "incorrect_answers": [
          "Content Response Marketing.",
          "Certified Resource Management.",
          "Customer Revenue Model."
        ]
      },
      {
        "number": 6,
        "question": "Which of these is a common tool used by Business Development Managers?",
        "correct_answer": "Salesforce.",
        "incorrect_answers": [
          "Photoshop.",
          "WordPress.",
          "Slack."
        ]
      },
      {
        "number": 7,
        "question": "What is the significance of 'market research' in business development?",
        "correct_answer": "It helps in understanding customer preferences, competitors, and market conditions.",
        "incorrect_answers": [
          "It is used for designing websites.",
          "It focuses solely on customer complaints.",
          "It is only for the marketing department."
        ]
      },
      {
        "number": 8,
        "question": "What is a 'sales funnel'?",
        "correct_answer": "A model that describes the journey customers take from awareness to purchase.",
        "incorrect_answers": [
          "A tool for tracking customer feedback.",
          "A type of digital advertisement.",
          "A project management tool."
        ]
      },
      {
        "number": 9,
        "question": "What is 'B2B' in business development?",
        "correct_answer": "Business-to-Business, where transactions happen between businesses.",
        "incorrect_answers": [
          "Business-to-Buyer, where a business sells directly to consumers.",
          "Big-to-Big, where only large companies engage.",
          "Business-to-Banker, referring to financial transactions."
        ]
      },
      {
        "number": 10,
        "question": "Which of the following is a business development strategy?",
        "correct_answer": "Partnerships and alliances.",
        "incorrect_answers": [
          "Website design and SEO.",
          "Hiring and managing teams.",
          "Product testing and design."
        ]
      },
      {
        "number": 11,
        "question": "Which department works closely with the Business Development Manager?",
        "correct_answer": "Sales and Marketing.",
        "incorrect_answers": [
          "Accounting.",
          "IT Department.",
          "Human Resources."
        ]
      },
      {
        "number": 12,
        "question": "What is the 'pitch' in a business context?",
        "correct_answer": "A short presentation of a product, service, or business idea.",
        "incorrect_answers": [
          "A discount offer.",
          "A type of business report.",
          "A legal contract."
        ]
      },
      {
        "number": 13,
        "question": "What does 'client retention' mean?",
        "correct_answer": "Strategies used to keep existing customers loyal to the business.",
        "incorrect_answers": [
          "Focusing solely on attracting new clients.",
          "Advertising on social media.",
          "Reducing the quality of service."
        ]
      },
      {
        "number": 14,
        "question": "Which of these metrics is important for a Business Development Manager?",
        "correct_answer": "Customer acquisition cost.",
        "incorrect_answers": [
          "Server uptime.",
          "Code quality.",
          "Employee retention rates."
        ]
      },
      {
        "number": 15,
        "question": "What is the goal of a Business Development Manager in terms of growth?",
        "correct_answer": "To increase revenue through new business opportunities and relationships.",
        "incorrect_answers": [
          "To reduce company expenses only.",
          "To create company policies.",
          "To handle employee payroll."
        ]
      }
    ]
  },
  {
    "id": 32,
    "category": "HR Specialist",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of an HR Specialist?",
        "correct_answer": "To manage employee relations, recruitment, and compliance with labor laws.",
        "incorrect_answers": [
          "To design company websites.",
          "To handle financial reports.",
          "To oversee product development."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of an HR Specialist?",
        "correct_answer": "Recruiting and hiring new employees.",
        "incorrect_answers": [
          "Managing social media accounts.",
          "Designing promotional materials.",
          "Developing new software products."
        ]
      },
      {
        "number": 3,
        "question": "Which of these is typically used for employee performance reviews?",
        "correct_answer": "360-degree feedback.",
        "incorrect_answers": [
          "Project management software.",
          "Customer satisfaction surveys.",
          "Market research reports."
        ]
      },
      {
        "number": 4,
        "question": "What does 'employee onboarding' refer to?",
        "correct_answer": "The process of integrating new employees into the company.",
        "incorrect_answers": [
          "Employee salary negotiations.",
          "Hiring employees from external agencies.",
          "Training employees for technical roles."
        ]
      },
      {
        "number": 5,
        "question": "What is an HRIS?",
        "correct_answer": "Human Resources Information System, used to manage employee data.",
        "incorrect_answers": [
          "Human Rights International Standards.",
          "Human Resources Internet Service.",
          "Human Resources Internal Survey."
        ]
      },
      {
        "number": 6,
        "question": "What is the importance of 'employee engagement'?",
        "correct_answer": "It helps in improving employee satisfaction, retention, and productivity.",
        "incorrect_answers": [
          "It is only for senior-level employees.",
          "It is part of marketing strategy.",
          "It is irrelevant to company success."
        ]
      },
      {
        "number": 7,
        "question": "What is the purpose of 'job descriptions' in HR?",
        "correct_answer": "To clearly define roles, responsibilities, and expectations for employees.",
        "incorrect_answers": [
          "To design employee benefits.",
          "To track employee attendance.",
          "To create company policies."
        ]
      },
      {
        "number": 8,
        "question": "Which of the following is part of employee benefits management?",
        "correct_answer": "Managing health insurance and retirement plans.",
        "incorrect_answers": [
          "Managing company budgets.",
          "Designing company websites.",
          "Conducting market research."
        ]
      },
      {
        "number": 9,
        "question": "Which law requires employers to ensure a workplace free from discrimination?",
        "correct_answer": "The Equal Employment Opportunity Act.",
        "incorrect_answers": [
          "The Family and Medical Leave Act.",
          "The Occupational Safety and Health Act.",
          "The Fair Labor Standards Act."
        ]
      },
      {
        "number": 10,
        "question": "What is 'employee training'?",
        "correct_answer": "A process of improving skills and knowledge of employees for better job performance.",
        "incorrect_answers": [
          "Promoting employees.",
          "Conducting interviews.",
          "Managing payroll."
        ]
      },
      {
        "number": 11,
        "question": "What is 'conflict resolution' in HR?",
        "correct_answer": "Managing and resolving disputes between employees or between employees and management.",
        "incorrect_answers": [
          "Managing the company’s social media accounts.",
          "Hiring and onboarding new employees.",
          "Setting up training schedules."
        ]
      },
      {
        "number": 12,
        "question": "Which of these is a tool used in recruitment?",
        "correct_answer": "Applicant Tracking System (ATS).",
        "incorrect_answers": [
          "Google Analytics.",
          "Salesforce.",
          "Trello."
        ]
      },
      {
        "number": 13,
        "question": "What is 'workplace diversity'?",
        "correct_answer": "Ensuring a diverse workforce in terms of race, gender, ethnicity, etc.",
        "incorrect_answers": [
          "Focusing on a single demographic.",
          "Limiting hiring to specific groups.",
          "Ensuring uniformity in employee backgrounds."
        ]
      },
      {
        "number": 14,
        "question": "What is 'compensation management'?",
        "correct_answer": "Managing employee pay, bonuses, and incentives.",
        "incorrect_answers": [
          "Managing customer complaints.",
          "Creating marketing strategies.",
          "Setting up payroll systems."
        ]
      },
      {
        "number": 15,
        "question": "What is the significance of 'exit interviews'?",
        "correct_answer": "To gather feedback from departing employees and improve workplace practices.",
        "incorrect_answers": [
          "To offer employees better compensation.",
          "To hire new employees.",
          "To promote employees."
        ]
      }
    ]
  },
  {
    "id": 33,
    "category": "Sales Executive",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the main role of a Sales Executive?",
        "correct_answer": "To generate sales and meet targets by selling products or services.",
        "incorrect_answers": [
          "To develop marketing strategies.",
          "To manage customer support.",
          "To design promotional material."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key skill for a Sales Executive?",
        "correct_answer": "Effective communication and negotiation skills.",
        "incorrect_answers": [
          "Graphic design expertise.",
          "Web development knowledge.",
          "Technical programming skills."
        ]
      },
      {
        "number": 3,
        "question": "What is the purpose of 'cold calling' in sales?",
        "correct_answer": "To initiate contact with potential customers who have not expressed interest yet.",
        "incorrect_answers": [
          "To follow up with existing customers.",
          "To conduct surveys.",
          "To resolve customer complaints."
        ]
      },
      {
        "number": 4,
        "question": "What is a 'sales pitch'?",
        "correct_answer": "A persuasive message designed to convince potential customers to buy a product or service.",
        "incorrect_answers": [
          "A sales report submitted to the management.",
          "A price list for products.",
          "A contract agreement."
        ]
      },
      {
        "number": 5,
        "question": "What does 'closing the sale' mean?",
        "correct_answer": "Successfully securing a purchase agreement from the customer.",
        "incorrect_answers": [
          "Opening a new sales lead.",
          "Sending a product to the customer.",
          "Resolving a customer complaint."
        ]
      },
      {
        "number": 6,
        "question": "What is 'sales forecasting'?",
        "correct_answer": "Predicting future sales based on current and past data.",
        "incorrect_answers": [
          "Designing promotional campaigns.",
          "Managing customer accounts.",
          "Handling product returns."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following is a common sales metric?",
        "correct_answer": "Conversion rate.",
        "incorrect_answers": [
          "Page loading speed.",
          "Employee attendance.",
          "Product defect rate."
        ]
      },
      {
        "number": 8,
        "question": "What is 'upselling'?",
        "correct_answer": "Encouraging customers to purchase a more expensive version of a product.",
        "incorrect_answers": [
          "Offering discounts to customers.",
          "Selling products to new customers.",
          "Providing after-sales support."
        ]
      },
      {
        "number": 9,
        "question": "What is 'CRM' in sales?",
        "correct_answer": "Customer Relationship Management, a system to manage and analyze customer interactions.",
        "incorrect_answers": [
          "Cash Register Machine.",
          "Customer Retention Marketing.",
          "Corporate Risk Management."
        ]
      },
      {
        "number": 10,
        "question": "What does 'lead generation' involve?",
        "correct_answer": "Identifying and attracting potential customers to start the sales process.",
        "incorrect_answers": [
          "Tracking customer complaints.",
          "Delivering products to customers.",
          "Managing sales reports."
        ]
      },
      {
        "number": 11,
        "question": "What is 'relationship selling'?",
        "correct_answer": "Building long-term relationships with customers to encourage repeat business.",
        "incorrect_answers": [
          "Selling products at discounted prices.",
          "Using pressure tactics to make a sale.",
          "Selling without customer consent."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is part of a successful sales strategy?",
        "correct_answer": "Understanding the customer’s needs and offering solutions.",
        "incorrect_answers": [
          "Offering the lowest price.",
          "Selling without customer consent.",
          "Avoiding negotiation."
        ]
      },
      {
        "number": 13,
        "question": "What is the 'sales funnel'?",
        "correct_answer": "A model describing the stages customers go through before making a purchase decision.",
        "incorrect_answers": [
          "A tool for managing employee salaries.",
          "A strategy for marketing products.",
          "A sales promotion technique."
        ]
      },
      {
        "number": 14,
        "question": "What is 'customer retention' in sales?",
        "correct_answer": "Strategies used to keep existing customers loyal and prevent churn.",
        "incorrect_answers": [
          "Attracting new customers.",
          "Discounting products.",
          "Creating marketing campaigns."
        ]
      },
      {
        "number": 15,
        "question": "What does 'product knowledge' help a Sales Executive do?",
        "correct_answer": "Answer customer queries and provide detailed information about products.",
        "incorrect_answers": [
          "Design promotional material.",
          "Handle customer complaints.",
          "Create sales reports."
        ]
      }
    ]
  },
  {
    "id": 34,
    "category": "Financial Analyst",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Financial Analyst?",
        "correct_answer": "To analyze financial data, prepare reports, and make recommendations for business decisions.",
        "incorrect_answers": [
          "To design marketing campaigns.",
          "To manage employee payroll.",
          "To oversee product development."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following tools is commonly used by Financial Analysts?",
        "correct_answer": "Microsoft Excel.",
        "incorrect_answers": [
          "Adobe Photoshop.",
          "Trello.",
          "Slack."
        ]
      },
      {
        "number": 3,
        "question": "What does 'ROI' stand for in financial analysis?",
        "correct_answer": "Return on Investment.",
        "incorrect_answers": [
          "Rate of Income.",
          "Revenue of Interest.",
          "Risk of Investment."
        ]
      },
      {
        "number": 4,
        "question": "What is the purpose of a financial forecast?",
        "correct_answer": "To predict future financial outcomes based on historical data and trends.",
        "incorrect_answers": [
          "To manage employee salaries.",
          "To track social media metrics.",
          "To plan marketing strategies."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is a financial statement?",
        "correct_answer": "Income Statement.",
        "incorrect_answers": [
          "Sales Report.",
          "Project Timeline.",
          "Customer Feedback Form."
        ]
      },
      {
        "number": 6,
        "question": "What does 'EPS' stand for in financial terms?",
        "correct_answer": "Earnings Per Share.",
        "incorrect_answers": [
          "Enterprise Profit Statement.",
          "Economic Profit Share.",
          "Effective Performance Strategy."
        ]
      },
      {
        "number": 7,
        "question": "What is 'working capital'?",
        "correct_answer": "The difference between a company's current assets and current liabilities.",
        "incorrect_answers": [
          "The total revenue generated by a company.",
          "The long-term investments made by the company.",
          "The value of all company shares."
        ]
      },
      {
        "number": 8,
        "question": "Which of these is a common method for financial analysis?",
        "correct_answer": "Ratio analysis.",
        "incorrect_answers": [
          "Customer segmentation.",
          "Market research surveys.",
          "Product quality testing."
        ]
      },
      {
        "number": 9,
        "question": "What is the role of a financial analyst in budgeting?",
        "correct_answer": "To forecast financial needs and allocate resources effectively.",
        "incorrect_answers": [
          "To conduct market research.",
          "To manage payroll systems.",
          "To design marketing campaigns."
        ]
      },
      {
        "number": 10,
        "question": "What does 'liquidity' refer to in finance?",
        "correct_answer": "The ability of a company to meet its short-term financial obligations.",
        "incorrect_answers": [
          "The number of assets a company owns.",
          "The company's long-term profitability.",
          "The market share of a company."
        ]
      },
      {
        "number": 11,
        "question": "Which financial statement provides a snapshot of a company’s financial position at a specific point in time?",
        "correct_answer": "Balance Sheet.",
        "incorrect_answers": [
          "Income Statement.",
          "Cash Flow Statement.",
          "Sales Report."
        ]
      },
      {
        "number": 12,
        "question": "What is 'capital budgeting'?",
        "correct_answer": "The process of planning and managing long-term investments.",
        "incorrect_answers": [
          "Setting up employee payroll.",
          "Managing short-term expenses.",
          "Designing company branding."
        ]
      },
      {
        "number": 13,
        "question": "What does 'debt-to-equity ratio' measure?",
        "correct_answer": "The proportion of debt used to finance the company's assets compared to equity.",
        "incorrect_answers": [
          "The company's overall profitability.",
          "The amount of taxes a company owes.",
          "The number of employees in the company."
        ]
      },
      {
        "number": 14,
        "question": "What is 'diversification' in investing?",
        "correct_answer": "Spreading investments across different assets to reduce risk.",
        "incorrect_answers": [
          "Investing all funds in one asset.",
          "Selling investments to make a quick profit.",
          "Ignoring market trends."
        ]
      },
      {
        "number": 15,
        "question": "What is the significance of financial ratios?",
        "correct_answer": "They provide a quick way to assess a company’s financial health and performance.",
        "incorrect_answers": [
          "They are used for tax calculations.",
          "They help set marketing goals.",
          "They track customer satisfaction."
        ]
      }
    ]
  },
  {
    "id": 35,
    "category": "Digital Content Creator",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the main responsibility of a Digital Content Creator?",
        "correct_answer": "To create engaging and relevant content for digital platforms like websites, blogs, and social media.",
        "incorrect_answers": [
          "To manage server security.",
          "To conduct market research.",
          "To handle customer support."
        ]
      },
      {
        "number": 2,
        "question": "Which of these is commonly used by Digital Content Creators for editing videos?",
        "correct_answer": "Adobe Premiere Pro.",
        "incorrect_answers": [
          "Google Analytics.",
          "Microsoft Word.",
          "Excel."
        ]
      },
      {
        "number": 3,
        "question": "What is 'SEO' in content creation?",
        "correct_answer": "Search Engine Optimization, which helps improve the visibility of content in search engine results.",
        "incorrect_answers": [
          "Social Engagement Optimization.",
          "Software Environment Optimization.",
          "Security Enhancement Online."
        ]
      },
      {
        "number": 4,
        "question": "Which social media platform is commonly used by Digital Content Creators for sharing visual content?",
        "correct_answer": "Instagram.",
        "incorrect_answers": [
          "LinkedIn.",
          "Facebook.",
          "TikTok."
        ]
      },
      {
        "number": 5,
        "question": "What is 'content strategy'?",
        "correct_answer": "A plan for creating, publishing, and managing content to meet specific business or marketing goals.",
        "incorrect_answers": [
          "A design for web development.",
          "A method for analyzing customer data.",
          "A system for managing company payroll."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following tools can a Digital Content Creator use for graphic design?",
        "correct_answer": "Adobe Photoshop.",
        "incorrect_answers": [
          "Slack.",
          "Trello.",
          "WordPress."
        ]
      },
      {
        "number": 7,
        "question": "What does 'content curation' involve?",
        "correct_answer": "Finding, organizing, and sharing relevant content from various sources.",
        "incorrect_answers": [
          "Writing original content only.",
          "Creating content schedules.",
          "Designing company websites."
        ]
      },
      {
        "number": 8,
        "question": "Which of these is a key element in creating a successful YouTube video?",
        "correct_answer": "Engaging thumbnail and title.",
        "incorrect_answers": [
          "Long video duration.",
          "Using only text.",
          "Complex special effects."
        ]
      },
      {
        "number": 9,
        "question": "What is the significance of 'analytics' for a Digital Content Creator?",
        "correct_answer": "It helps track content performance and audience engagement.",
        "incorrect_answers": [
          "It creates content ideas.",
          "It designs graphics.",
          "It manages web hosting."
        ]
      },
      {
        "number": 10,
        "question": "What is 'content repurposing'?",
        "correct_answer": "Reusing content in different formats to reach broader audiences.",
        "incorrect_answers": [
          "Deleting old content.",
          "Posting duplicate content.",
          "Ignoring audience feedback."
        ]
      },
      {
        "number": 11,
        "question": "What is the role of 'copywriting' in digital content creation?",
        "correct_answer": "Writing compelling text to inform, engage, or persuade the audience.",
        "incorrect_answers": [
          "Creating video animations.",
          "Designing websites.",
          "Managing social media ads."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is an essential aspect of creating a blog post?",
        "correct_answer": "Providing valuable, well-researched content.",
        "incorrect_answers": [
          "Including long paragraphs of text.",
          "Using heavy technical jargon.",
          "Focusing only on keyword stuffing."
        ]
      },
      {
        "number": 13,
        "question": "What is 'brand voice' in digital content creation?",
        "correct_answer": "The tone and personality that a brand conveys through its content.",
        "incorrect_answers": [
          "The colors and designs used in content.",
          "The software tools used for creating content.",
          "The specific target audience for content."
        ]
      },
      {
        "number": 14,
        "question": "What is 'visual storytelling'?",
        "correct_answer": "Using images, videos, and other visuals to communicate a story or message.",
        "incorrect_answers": [
          "Writing a detailed text description.",
          "Designing a company website.",
          "Creating customer surveys."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following metrics is important for measuring the success of digital content?",
        "correct_answer": "Engagement rate (likes, shares, comments).",
        "incorrect_answers": [
          "The number of page views.",
          "The amount of content created.",
          "The length of the video."
        ]
      }
    ]
  },
  {
    "id": 36,
    "category": "Advertising Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of an Advertising Manager?",
        "correct_answer": "To develop and oversee advertising campaigns to promote products or services.",
        "incorrect_answers": [
          "To design promotional material.",
          "To manage the company's finances.",
          "To provide customer support."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key skill for an Advertising Manager?",
        "correct_answer": "Creative thinking and strategic planning.",
        "incorrect_answers": [
          "Technical programming skills.",
          "Graphic design expertise.",
          "Customer service management."
        ]
      },
      {
        "number": 3,
        "question": "What is a 'target audience' in advertising?",
        "correct_answer": "The specific group of people that an advertising campaign aims to reach.",
        "incorrect_answers": [
          "The people who create the advertisements.",
          "The stakeholders involved in the campaign.",
          "The advertising budget."
        ]
      },
      {
        "number": 4,
        "question": "Which of the following is commonly used in digital advertising?",
        "correct_answer": "Google Ads.",
        "incorrect_answers": [
          "Excel Spreadsheets.",
          "Microsoft Word.",
          "Slack."
        ]
      },
      {
        "number": 5,
        "question": "What does 'CPM' stand for in advertising?",
        "correct_answer": "Cost Per Mille (Thousand Impressions).",
        "incorrect_answers": [
          "Cost Per Million.",
          "Customer Price Model.",
          "Cost Per Message."
        ]
      },
      {
        "number": 6,
        "question": "What is 'ad copy'?",
        "correct_answer": "The text or message used in an advertisement.",
        "incorrect_answers": [
          "The images used in an ad.",
          "The budget allocated for ads.",
          "The demographic research."
        ]
      },
      {
        "number": 7,
        "question": "What is the purpose of 'retargeting' in advertising?",
        "correct_answer": "To target users who have previously interacted with a brand but did not complete a purchase.",
        "incorrect_answers": [
          "To increase brand awareness among new users.",
          "To measure ad performance.",
          "To decrease ad frequency."
        ]
      },
      {
        "number": 8,
        "question": "What is 'A/B testing' in advertising?",
        "correct_answer": "Testing two versions of an ad to see which one performs better.",
        "incorrect_answers": [
          "Running an ad on multiple platforms simultaneously.",
          "Using influencer marketing in an ad.",
          "Testing different ad formats."
        ]
      },
      {
        "number": 9,
        "question": "What is 'ROI' in the context of advertising?",
        "correct_answer": "Return on Investment, a measure of the effectiveness of an ad campaign.",
        "incorrect_answers": [
          "Rate of Influence.",
          "Revenue of Interest.",
          "Reach of Impression."
        ]
      },
      {
        "number": 10,
        "question": "What is a 'media plan' in advertising?",
        "correct_answer": "A strategy that outlines where, when, and how advertisements will be placed.",
        "incorrect_answers": [
          "A financial report for the advertising team.",
          "A design brief for creating advertisements.",
          "A customer feedback survey."
        ]
      },
      {
        "number": 11,
        "question": "What does 'brand positioning' refer to in advertising?",
        "correct_answer": "How a brand is perceived in the minds of consumers compared to competitors.",
        "incorrect_answers": [
          "The price range of a brand's products.",
          "The design elements used in advertisements.",
          "The geographical location of an ad campaign."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is an example of a digital advertising platform?",
        "correct_answer": "Facebook Ads.",
        "incorrect_answers": [
          "Radio Broadcast.",
          "Print Magazine.",
          "TV Commercial."
        ]
      },
      {
        "number": 13,
        "question": "What is 'native advertising'?",
        "correct_answer": "Ads that blend seamlessly with the content on the platform where they appear.",
        "incorrect_answers": [
          "Advertisements displayed in pop-up windows.",
          "Ads placed only on search engines.",
          "Commercials during TV programs."
        ]
      },
      {
        "number": 14,
        "question": "What is 'geotargeting' in digital advertising?",
        "correct_answer": "Delivering ads to users based on their geographic location.",
        "incorrect_answers": [
          "Delivering ads based on user interests.",
          "Targeting ads to users based on their browsing history.",
          "Providing discounts to loyal customers."
        ]
      },
      {
        "number": 15,
        "question": "Which of these metrics is important for evaluating the performance of an ad campaign?",
        "correct_answer": "Click-through rate (CTR).",
        "incorrect_answers": [
          "Employee satisfaction.",
          "Product defect rate.",
          "Sales revenue."
        ]
      }
    ]
  },
  {
    "id": 37,
    "category": "Public Relations Specialist",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Public Relations Specialist?",
        "correct_answer": "To manage the public image and communications of a company or individual.",
        "incorrect_answers": [
          "To design marketing materials.",
          "To oversee product development.",
          "To handle customer service."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of a Public Relations Specialist?",
        "correct_answer": "Writing press releases and managing media relations.",
        "incorrect_answers": [
          "Managing the company’s payroll.",
          "Designing company websites.",
          "Running advertising campaigns."
        ]
      },
      {
        "number": 3,
        "question": "What is 'media outreach'?",
        "correct_answer": "The process of contacting journalists and media outlets to share news or information.",
        "incorrect_answers": [
          "The development of advertising materials.",
          "Managing social media accounts.",
          "Creating promotional products."
        ]
      },
      {
        "number": 4,
        "question": "What does 'crisis communication' involve?",
        "correct_answer": "Managing communication during a crisis to protect an organization’s reputation.",
        "incorrect_answers": [
          "Writing press releases for new product launches.",
          "Planning marketing campaigns for product promotions.",
          "Handling employee grievances."
        ]
      },
      {
        "number": 5,
        "question": "What is a 'press release'?",
        "correct_answer": "A written statement issued to the media to announce something of interest.",
        "incorrect_answers": [
          "A formal report on company financials.",
          "An advertisement placed in a magazine.",
          "A customer satisfaction survey."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a public relations strategy for managing a company’s image?",
        "correct_answer": "Media relations and press coverage.",
        "incorrect_answers": [
          "Product price discounts.",
          "Employee engagement surveys.",
          "Sales promotions."
        ]
      },
      {
        "number": 7,
        "question": "What does 'brand reputation management' entail?",
        "correct_answer": "Monitoring and influencing the public perception of a company or brand.",
        "incorrect_answers": [
          "Managing customer loyalty programs.",
          "Designing promotional offers.",
          "Handling financial planning."
        ]
      },
      {
        "number": 8,
        "question": "What is the significance of 'social media monitoring' in public relations?",
        "correct_answer": "Tracking online conversations to manage a company’s reputation and respond to public sentiment.",
        "incorrect_answers": [
          "Developing website content.",
          "Analyzing customer sales data.",
          "Designing ad campaigns."
        ]
      },
      {
        "number": 9,
        "question": "What is 'internal communication' in public relations?",
        "correct_answer": "Managing communication within an organization, such as newsletters or company announcements.",
        "incorrect_answers": [
          "Managing relationships with external customers.",
          "Designing advertisements for public campaigns.",
          "Monitoring product inventory."
        ]
      },
      {
        "number": 10,
        "question": "What is 'event planning' in the context of public relations?",
        "correct_answer": "Organizing events like press conferences, product launches, or charity functions to promote a brand.",
        "incorrect_answers": [
          "Managing the company’s financial transactions.",
          "Creating online ad campaigns.",
          "Designing corporate logos."
        ]
      },
      {
        "number": 11,
        "question": "What does 'media kit' refer to in public relations?",
        "correct_answer": "A package containing information about the company, including press releases and media coverage.",
        "incorrect_answers": [
          "A set of marketing tools for sales teams.",
          "A guide for handling customer complaints.",
          "A collection of company product samples."
        ]
      },
      {
        "number": 12,
        "question": "What is 'thought leadership' in public relations?",
        "correct_answer": "Positioning an individual or company as an expert in a specific field through content and media appearances.",
        "incorrect_answers": [
          "Managing a company’s social media accounts.",
          "Creating new product prototypes.",
          "Advertising on television networks."
        ]
      },
      {
        "number": 13,
        "question": "What is 'media training' for executives?",
        "correct_answer": "Preparing company leaders to effectively communicate with the media.",
        "incorrect_answers": [
          "Teaching employees how to use software.",
          "Training staff on customer service skills.",
          "Designing company marketing strategies."
        ]
      },
      {
        "number": 14,
        "question": "What is 'public relations strategy'?",
        "correct_answer": "A plan outlining how an organization will manage its public image and communication efforts.",
        "incorrect_answers": [
          "A financial strategy for investment growth.",
          "A social media marketing plan.",
          "An advertising strategy for product sales."
        ]
      },
      {
        "number": 15,
        "question": "Which of these metrics is important for evaluating public relations efforts?",
        "correct_answer": "Media coverage and audience sentiment analysis.",
        "incorrect_answers": [
          "The number of website visitors.",
          "The sales conversion rate.",
          "Employee retention rate."
        ]
      }
    ]
  },
  {
    "id": 38,
    "category": "Operations Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of an Operations Manager?",
        "correct_answer": "To oversee the production, operations, and workflow to ensure efficiency and productivity.",
        "incorrect_answers": [
          "To handle marketing campaigns.",
          "To design product prototypes.",
          "To manage the IT infrastructure."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of an Operations Manager?",
        "correct_answer": "Managing resources, budgets, and ensuring operational efficiency.",
        "incorrect_answers": [
          "Writing press releases.",
          "Overseeing customer support.",
          "Designing advertising campaigns."
        ]
      },
      {
        "number": 3,
        "question": "Which of the following is a key performance indicator (KPI) for an Operations Manager?",
        "correct_answer": "Operational efficiency and cost reduction.",
        "incorrect_answers": [
          "Revenue growth.",
          "Employee engagement score.",
          "Customer satisfaction rate."
        ]
      },
      {
        "number": 4,
        "question": "What is 'lean management'?",
        "correct_answer": "A methodology focused on reducing waste and improving efficiency in operations.",
        "incorrect_answers": [
          "A project management technique.",
          "A sales optimization strategy.",
          "A team-building approach."
        ]
      },
      {
        "number": 5,
        "question": "What is 'inventory management' in the context of operations?",
        "correct_answer": "The process of overseeing the supply and storage of goods to meet demand efficiently.",
        "incorrect_answers": [
          "Managing the production schedule.",
          "Designing marketing campaigns.",
          "Handling customer service inquiries."
        ]
      },
      {
        "number": 6,
        "question": "What is 'workflow optimization'?",
        "correct_answer": "The process of improving work processes to increase productivity and reduce costs.",
        "incorrect_answers": [
          "Designing employee incentives.",
          "Tracking employee performance.",
          "Planning corporate events."
        ]
      },
      {
        "number": 7,
        "question": "What does 'supply chain management' involve?",
        "correct_answer": "Coordinating and overseeing the flow of goods, services, and information throughout the production process.",
        "incorrect_answers": [
          "Managing customer service teams.",
          "Planning financial budgets.",
          "Conducting product market research."
        ]
      },
      {
        "number": 8,
        "question": "What is 'capacity planning'?",
        "correct_answer": "Determining the production capacity needed to meet changing customer demands.",
        "incorrect_answers": [
          "Setting marketing budgets.",
          "Managing inventory stock.",
          "Hiring new employees."
        ]
      },
      {
        "number": 9,
        "question": "What is a 'business continuity plan'?",
        "correct_answer": "A strategy that outlines procedures for continuing operations during emergencies or disruptions.",
        "incorrect_answers": [
          "A marketing plan for launching new products.",
          "A financial audit strategy.",
          "A customer service improvement plan."
        ]
      },
      {
        "number": 10,
        "question": "What is 'cost management' in operations?",
        "correct_answer": "The process of controlling and reducing expenses while maintaining quality and efficiency.",
        "incorrect_answers": [
          "Creating budget plans for marketing.",
          "Managing customer relations.",
          "Tracking employee performance."
        ]
      },
      {
        "number": 11,
        "question": "Which of the following is an important tool for operations management?",
        "correct_answer": "Enterprise Resource Planning (ERP) software.",
        "incorrect_answers": [
          "Customer Relationship Management (CRM) software.",
          "Google Analytics.",
          "Social Media Marketing tools."
        ]
      },
      {
        "number": 12,
        "question": "What does 'Six Sigma' aim to improve?",
        "correct_answer": "Reducing defects and improving quality in operational processes.",
        "incorrect_answers": [
          "Increasing sales and marketing effectiveness.",
          "Improving employee retention.",
          "Expanding market reach."
        ]
      },
      {
        "number": 13,
        "question": "Which of the following is a typical challenge for an Operations Manager?",
        "correct_answer": "Balancing cost reduction with maintaining quality standards.",
        "incorrect_answers": [
          "Designing the company's website.",
          "Creating a social media strategy.",
          "Overseeing the legal team."
        ]
      },
      {
        "number": 14,
        "question": "What is the importance of 'performance monitoring' in operations?",
        "correct_answer": "To track and evaluate the efficiency of operations and identify areas for improvement.",
        "incorrect_answers": [
          "To manage employee payroll.",
          "To design company logos.",
          "To conduct market surveys."
        ]
      },
      {
        "number": 15,
        "question": "Which of the following is a common challenge in operations management?",
        "correct_answer": "Maintaining operational efficiency during periods of growth.",
        "incorrect_answers": [
          "Recruiting new employees for marketing.",
          "Setting up a new product design.",
          "Managing customer inquiries."
        ]
      }
    ]
  },
  {
    "id": 39,
    "category": "Supply Chain Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Supply Chain Manager?",
        "correct_answer": "To oversee and manage the entire supply chain process from procurement to delivery.",
        "incorrect_answers": [
          "To design marketing campaigns.",
          "To handle customer support.",
          "To oversee production scheduling."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of a Supply Chain Manager?",
        "correct_answer": "Managing vendor relationships and negotiating contracts.",
        "incorrect_answers": [
          "Designing website interfaces.",
          "Managing the sales team.",
          "Creating advertising content."
        ]
      },
      {
        "number": 3,
        "question": "What is 'inventory control' in supply chain management?",
        "correct_answer": "The process of monitoring and managing inventory levels to meet demand without overstocking or running out of stock.",
        "incorrect_answers": [
          "Tracking customer behavior.",
          "Setting marketing budgets.",
          "Designing product packaging."
        ]
      },
      {
        "number": 4,
        "question": "What is 'logistics' in the context of supply chain management?",
        "correct_answer": "The coordination and management of the movement of goods and materials from suppliers to customers.",
        "incorrect_answers": [
          "Employee scheduling.",
          "Market research.",
          "Sales forecasting."
        ]
      },
      {
        "number": 5,
        "question": "What is 'just-in-time' inventory management?",
        "correct_answer": "A strategy where inventory is ordered and received only when it is needed for production.",
        "incorrect_answers": [
          "Ordering inventory in bulk to reduce costs.",
          "Overstocking products to ensure availability.",
          "Sending products to customers in advance."
        ]
      },
      {
        "number": 6,
        "question": "What is the 'bullwhip effect' in supply chain management?",
        "correct_answer": "The phenomenon where small fluctuations in customer demand lead to larger fluctuations in supply chain orders.",
        "incorrect_answers": [
          "A tool used for negotiating prices with suppliers.",
          "The tendency to overstock inventory.",
          "A method for measuring supply chain costs."
        ]
      },
      {
        "number": 7,
        "question": "Which of the following tools is commonly used in supply chain management?",
        "correct_answer": "Enterprise Resource Planning (ERP) software.",
        "incorrect_answers": [
          "Social Media Analytics tools.",
          "Customer Relationship Management (CRM) software.",
          "Graphic design tools."
        ]
      },
      {
        "number": 8,
        "question": "What does 'supply chain optimization' focus on?",
        "correct_answer": "Improving the efficiency and cost-effectiveness of the entire supply chain.",
        "incorrect_answers": [
          "Increasing marketing budgets.",
          "Improving employee engagement.",
          "Redesigning product packaging."
        ]
      },
      {
        "number": 9,
        "question": "What is 'supplier relationship management'?",
        "correct_answer": "The process of managing and maintaining positive relationships with suppliers to ensure reliable delivery of quality products.",
        "incorrect_answers": [
          "Tracking customer complaints.",
          "Designing marketing strategies.",
          "Managing internal company communications."
        ]
      },
      {
        "number": 10,
        "question": "What is 'demand forecasting' in supply chain management?",
        "correct_answer": "Predicting future customer demand to plan production and inventory levels.",
        "incorrect_answers": [
          "Tracking employee performance.",
          "Creating customer loyalty programs.",
          "Designing product marketing strategies."
        ]
      },
      {
        "number": 11,
        "question": "What is 'global supply chain management'?",
        "correct_answer": "Managing the flow of goods and services across international borders.",
        "incorrect_answers": [
          "Managing employee teams across different regions.",
          "Designing company websites for global users.",
          "Handling international tax policies."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is a key challenge in supply chain management?",
        "correct_answer": "Balancing cost reduction with timely product delivery.",
        "incorrect_answers": [
          "Designing new product features.",
          "Building customer loyalty programs.",
          "Setting up new offices."
        ]
      },
      {
        "number": 13,
        "question": "What is 'RFID technology' used for in supply chain management?",
        "correct_answer": "Tracking the movement of goods through the use of radio frequency identification tags.",
        "incorrect_answers": [
          "Automating marketing campaigns.",
          "Improving website traffic.",
          "Managing financial audits."
        ]
      },
      {
        "number": 14,
        "question": "What does 'third-party logistics' (3PL) mean?",
        "correct_answer": "Outsourcing logistics functions like warehousing and transportation to an external provider.",
        "incorrect_answers": [
          "Outsourcing customer support services.",
          "Managing internal product design teams.",
          "Outsourcing sales operations."
        ]
      },
      {
        "number": 15,
        "question": "What is 'supply chain risk management'?",
        "correct_answer": "Identifying and mitigating potential risks that could disrupt the flow of goods in the supply chain.",
        "incorrect_answers": [
          "Marketing new products.",
          "Improving employee engagement.",
          "Tracking customer feedback."
        ]
      }
    ]
  },
  {
    "id": 40,
    "category": "Construction Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Construction Manager?",
        "correct_answer": "To oversee construction projects from start to finish, ensuring they are completed on time, within budget, and according to specifications.",
        "incorrect_answers": [
          "To design architectural plans.",
          "To manage employee payroll.",
          "To market construction services."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of a Construction Manager?",
        "correct_answer": "Coordinating workers, materials, and equipment for a construction project.",
        "incorrect_answers": [
          "Designing the building’s electrical system.",
          "Conducting market research for real estate.",
          "Managing the legal team."
        ]
      },
      {
        "number": 3,
        "question": "What is 'project scheduling' in construction management?",
        "correct_answer": "The process of planning and organizing all the tasks and resources needed for a project, ensuring they are completed on time.",
        "incorrect_answers": [
          "Managing customer service inquiries.",
          "Setting up sales strategies.",
          "Writing press releases."
        ]
      },
      {
        "number": 4,
        "question": "What is 'budget management' in construction?",
        "correct_answer": "Tracking and controlling project costs to ensure it stays within the allocated budget.",
        "incorrect_answers": [
          "Designing marketing materials.",
          "Tracking customer orders.",
          "Overseeing product development."
        ]
      },
      {
        "number": 5,
        "question": "What is 'risk management' in construction projects?",
        "correct_answer": "Identifying and mitigating potential risks that could delay or disrupt the project.",
        "incorrect_answers": [
          "Tracking employee hours.",
          "Planning advertising campaigns.",
          "Managing the project’s social media accounts."
        ]
      },
      {
        "number": 6,
        "question": "Which of the following is a key skill for a Construction Manager?",
        "correct_answer": "Strong leadership and organizational skills.",
        "incorrect_answers": [
          "Graphic design skills.",
          "Marketing and advertising skills.",
          "Customer service experience."
        ]
      },
      {
        "number": 7,
        "question": "What is 'quality control' in construction?",
        "correct_answer": "Ensuring that the construction work meets the required standards and specifications.",
        "incorrect_answers": [
          "Managing the project’s financial records.",
          "Designing new construction equipment.",
          "Advertising the project to potential clients."
        ]
      },
      {
        "number": 8,
        "question": "What does 'safety management' involve in construction projects?",
        "correct_answer": "Ensuring that construction sites comply with safety regulations to protect workers and avoid accidents.",
        "incorrect_answers": [
          "Creating marketing campaigns.",
          "Scheduling employee meetings.",
          "Designing the building's interior."
        ]
      },
      {
        "number": 9,
        "question": "What is 'procurement' in construction?",
        "correct_answer": "The process of purchasing materials, equipment, and services needed for the project.",
        "incorrect_answers": [
          "Hiring subcontractors.",
          "Marketing the project to potential investors.",
          "Managing customer satisfaction."
        ]
      },
      {
        "number": 10,
        "question": "What does 'building codes' refer to in construction?",
        "correct_answer": "Regulations that dictate the standards for construction materials, design, and safety.",
        "incorrect_answers": [
          "The layout of marketing materials.",
          "The company's project management software.",
          "The employee recruitment process."
        ]
      },
      {
        "number": 11,
        "question": "What is 'contract management' in construction?",
        "correct_answer": "Managing contracts with subcontractors, suppliers, and clients to ensure compliance and completion of work.",
        "incorrect_answers": [
          "Handling customer feedback.",
          "Creating architectural blueprints.",
          "Tracking inventory in the office."
        ]
      },
      {
        "number": 12,
        "question": "What is 'construction scheduling software' used for?",
        "correct_answer": "Planning and tracking the timeline of construction activities and resources.",
        "incorrect_answers": [
          "Creating financial reports.",
          "Designing marketing campaigns.",
          "Tracking employee hours."
        ]
      },
      {
        "number": 13,
        "question": "What is 'subcontractor management' in construction?",
        "correct_answer": "Coordinating the work of subcontractors to ensure their tasks are completed on time and within quality standards.",
        "incorrect_answers": [
          "Creating new marketing strategies.",
          "Hiring new employees for the company.",
          "Designing the project logo."
        ]
      },
      {
        "number": 14,
        "question": "What does 'change order management' refer to?",
        "correct_answer": "Managing requests to alter the scope or details of the construction project during its execution.",
        "incorrect_answers": [
          "Managing customer support requests.",
          "Tracking sales leads.",
          "Scheduling employee breaks."
        ]
      },
      {
        "number": 15,
        "question": "What is 'closeout' in construction projects?",
        "correct_answer": "The final phase where the project is completed, inspected, and handed over to the client.",
        "incorrect_answers": [
          "Designing new marketing materials.",
          "Tracking employee performance.",
          "Creating project budgets."
        ]
      }
    ]
  },
  {
    "id": 41,
    "category": "Retail Manager",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Retail Manager?",
        "correct_answer": "To oversee the daily operations of a retail store and ensure customer satisfaction.",
        "incorrect_answers": [
          "To design product packaging.",
          "To handle marketing campaigns.",
          "To manage the supply chain logistics."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of a Retail Manager?",
        "correct_answer": "Managing staff, inventory, and ensuring the store meets sales targets.",
        "incorrect_answers": [
          "Designing promotional ads.",
          "Handling the store's financial audits.",
          "Creating the store's website."
        ]
      },
      {
        "number": 3,
        "question": "What is 'visual merchandising' in retail management?",
        "correct_answer": "The process of arranging and displaying products to attract customers and boost sales.",
        "incorrect_answers": [
          "Creating a store's financial budget.",
          "Managing supplier contracts.",
          "Setting up employee schedules."
        ]
      },
      {
        "number": 4,
        "question": "What does 'inventory management' involve in retail?",
        "correct_answer": "Ensuring that stock levels are maintained to meet customer demand while avoiding overstocking.",
        "incorrect_answers": [
          "Designing customer loyalty programs.",
          "Tracking employee performance.",
          "Planning marketing strategies."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is a key performance indicator (KPI) for a Retail Manager?",
        "correct_answer": "Sales revenue and customer foot traffic.",
        "incorrect_answers": [
          "Product design.",
          "Number of social media followers.",
          "Employee training hours."
        ]
      },
      {
        "number": 6,
        "question": "What is 'customer experience' in the context of retail management?",
        "correct_answer": "The overall interaction a customer has with a store, including service quality, atmosphere, and product availability.",
        "incorrect_answers": [
          "The design of a store's website.",
          "The marketing budget for the store.",
          "Employee dress code policies."
        ]
      },
      {
        "number": 7,
        "question": "What does 'store layout' refer to in retail management?",
        "correct_answer": "The arrangement of merchandise and fixtures within a store to maximize sales and improve customer flow.",
        "incorrect_answers": [
          "Designing marketing campaigns.",
          "Managing customer feedback.",
          "Setting up employee work schedules."
        ]
      },
      {
        "number": 8,
        "question": "What is 'stock replenishment' in retail?",
        "correct_answer": "The process of restocking products to ensure shelves are always stocked to meet customer demand.",
        "incorrect_answers": [
          "Scheduling employee shifts.",
          "Designing store advertisements.",
          "Managing the store's finances."
        ]
      },
      {
        "number": 9,
        "question": "What does 'customer loyalty program' refer to in retail?",
        "correct_answer": "A strategy designed to encourage repeat business by rewarding customers for their continued purchases.",
        "incorrect_answers": [
          "A training program for employees.",
          "A system for managing customer complaints.",
          "A marketing campaign for new products."
        ]
      },
      {
        "number": 10,
        "question": "What is the purpose of 'staff training' in a retail environment?",
        "correct_answer": "To ensure employees have the knowledge and skills necessary to provide excellent customer service and perform their duties effectively.",
        "incorrect_answers": [
          "To design new marketing strategies.",
          "To track employee performance metrics.",
          "To manage store finances."
        ]
      },
      {
        "number": 11,
        "question": "What is 'point-of-sale' (POS) in retail management?",
        "correct_answer": "The location or system where a customer completes a transaction, including checkout and payment processing.",
        "incorrect_answers": [
          "The inventory tracking system.",
          "The employee scheduling software.",
          "The store’s promotional website."
        ]
      },
      {
        "number": 12,
        "question": "Which of the following is a challenge faced by Retail Managers?",
        "correct_answer": "Maintaining product availability while controlling inventory costs.",
        "incorrect_answers": [
          "Managing company-wide IT infrastructure.",
          "Designing employee benefits packages.",
          "Creating the store’s advertising materials."
        ]
      },
      {
        "number": 13,
        "question": "What is 'seasonal stock planning' in retail?",
        "correct_answer": "The process of forecasting and stocking products based on seasonal demand and trends.",
        "incorrect_answers": [
          "Designing promotional material for the holidays.",
          "Tracking employee vacation schedules.",
          "Organizing store events."
        ]
      },
      {
        "number": 14,
        "question": "What is 'customer feedback' used for in retail management?",
        "correct_answer": "To identify areas for improvement and make changes to enhance the shopping experience.",
        "incorrect_answers": [
          "To create employee performance reports.",
          "To design the store layout.",
          "To manage inventory replenishment."
        ]
      },
      {
        "number": 15,
        "question": "What is 'sales forecasting' in retail?",
        "correct_answer": "The process of predicting future sales based on historical data, trends, and market analysis.",
        "incorrect_answers": [
          "Setting up employee work schedules.",
          "Designing marketing campaigns.",
          "Creating store budgets."
        ]
      }
    ]
  },
  {
    "id": 42,
    "category": "Customer Service Representative",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Customer Service Representative?",
        "correct_answer": "To assist customers by answering questions, resolving issues, and providing support for products or services.",
        "incorrect_answers": [
          "To manage the company's financial accounts.",
          "To design marketing materials.",
          "To oversee inventory and stock levels."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is an essential skill for a Customer Service Representative?",
        "correct_answer": "Strong communication and problem-solving skills.",
        "incorrect_answers": [
          "Expert knowledge of accounting principles.",
          "Advanced graphic design skills.",
          "Proficiency in coding and programming languages."
        ]
      },
      {
        "number": 3,
        "question": "How should a Customer Service Representative handle an angry customer?",
        "correct_answer": "Listen empathetically, remain calm, and offer a solution or escalate the issue to a supervisor if necessary.",
        "incorrect_answers": [
          "Argue with the customer to prove your point.",
          "Ignore the customer's complaint and move on.",
          "Offer an apology without offering any solution."
        ]
      },
      {
        "number": 4,
        "question": "What is 'active listening' in customer service?",
        "correct_answer": "Focusing fully on the customer, understanding their needs, and responding thoughtfully to their concerns.",
        "incorrect_answers": [
          "Waiting for the customer to finish talking so you can speak.",
          "Interrupting the customer to explain your point.",
          "Pretending to listen while thinking about other tasks."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is a good practice when answering customer calls?",
        "correct_answer": "Greet the customer politely, identify yourself, and ask how you can assist them.",
        "incorrect_answers": [
          "Start by asking for the customer’s personal information.",
          "Put the customer on hold without explanation.",
          "Respond to customers with scripted, generic responses."
        ]
      },
      {
        "number": 6,
        "question": "What does 'customer satisfaction' mean in customer service?",
        "correct_answer": "The measure of how well a company's products or services meet or exceed customer expectations.",
        "incorrect_answers": [
          "The percentage of customers who make a purchase.",
          "The number of customer calls answered in a day.",
          "The number of product returns handled by the company."
        ]
      },
      {
        "number": 7,
        "question": "How can a Customer Service Representative manage time effectively?",
        "correct_answer": "By prioritizing tasks, staying organized, and managing customer inquiries in a timely manner.",
        "incorrect_answers": [
          "By answering every call immediately, regardless of urgency.",
          "By focusing only on one issue at a time and ignoring others.",
          "By delegating every task to a supervisor."
        ]
      },
      {
        "number": 8,
        "question": "What is 'escalation' in customer service?",
        "correct_answer": "The process of referring a customer issue to a higher-level representative or supervisor when it cannot be resolved at the current level.",
        "incorrect_answers": [
          "Ignoring customer complaints until they resolve themselves.",
          "Transferring customers to different departments without explanation.",
          "Delaying responses to customer inquiries."
        ]
      },
      {
        "number": 9,
        "question": "Which of the following is a key metric for evaluating customer service performance?",
        "correct_answer": "Customer satisfaction score (CSAT).",
        "incorrect_answers": [
          "Sales conversion rate.",
          "Number of social media followers.",
          "Employee turnover rate."
        ]
      },
      {
        "number": 10,
        "question": "What is 'first contact resolution' (FCR) in customer service?",
        "correct_answer": "The ability to resolve a customer’s issue on the first contact, without the need for follow-up interactions.",
        "incorrect_answers": [
          "The time it takes to answer customer inquiries.",
          "The number of products sold to customers.",
          "The amount of training given to new employees."
        ]
      },
      {
        "number": 11,
        "question": "What is 'customer feedback' used for in customer service?",
        "correct_answer": "To identify areas for improvement and enhance the overall customer experience.",
        "incorrect_answers": [
          "To determine employee salaries.",
          "To promote new products to customers.",
          "To track company sales performance."
        ]
      },
      {
        "number": 12,
        "question": "What should a Customer Service Representative do if they don’t know the answer to a customer’s question?",
        "correct_answer": "Politely inform the customer that you’ll find the answer and get back to them as soon as possible.",
        "incorrect_answers": [
          "Guess the answer and provide inaccurate information.",
          "Tell the customer you can’t help and end the conversation.",
          "Redirect the customer to a different service provider."
        ]
      },
      {
        "number": 13,
        "question": "How can a Customer Service Representative handle repetitive tasks?",
        "correct_answer": "By staying organized, maintaining focus, and using tools or scripts to streamline tasks.",
        "incorrect_answers": [
          "Ignoring repetitive tasks and leaving them undone.",
          "Trying to multitask and handle everything at once.",
          "Delegating all repetitive tasks to other team members."
        ]
      },
      {
        "number": 14,
        "question": "What is 'customer retention' in customer service?",
        "correct_answer": "The ability to keep customers returning by meeting their needs and providing excellent service.",
        "incorrect_answers": [
          "Encouraging customers to purchase products frequently.",
          "Offering discounts and promotions to new customers.",
          "Focusing only on increasing sales volume."
        ]
      },
      {
        "number": 15,
        "question": "Why is empathy important in customer service?",
        "correct_answer": "Empathy helps to understand the customer’s feelings and creates a positive, supportive experience.",
        "incorrect_answers": [
          "It reduces the need for clear communication.",
          "It allows you to resolve issues without taking responsibility.",
          "It helps to promote products regardless of customer needs."
        ]
      }
    ]
  },
  {
    "id": 43,
    "category": "Research Scientist",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Research Scientist?",
        "correct_answer": "To conduct experiments, analyze data, and contribute to the advancement of scientific knowledge in their field.",
        "incorrect_answers": [
          "To manage corporate projects.",
          "To design marketing strategies.",
          "To handle customer service inquiries."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of a Research Scientist?",
        "correct_answer": "Designing and performing experiments to test hypotheses and gather data.",
        "incorrect_answers": [
          "Developing financial budgets for research projects.",
          "Overseeing the production of goods.",
          "Managing a sales team."
        ]
      },
      {
        "number": 3,
        "question": "What is 'peer review' in scientific research?",
        "correct_answer": "The process where other experts in the field evaluate a scientist’s research findings for accuracy and validity.",
        "incorrect_answers": [
          "A marketing strategy to promote scientific findings.",
          "A process of collecting data from research participants.",
          "A method for conducting product testing."
        ]
      },
      {
        "number": 4,
        "question": "What is the significance of 'hypothesis testing' in research?",
        "correct_answer": "It allows researchers to determine whether their initial hypothesis is supported by experimental data.",
        "incorrect_answers": [
          "It helps in designing the research methodology.",
          "It ensures the research project gets funding.",
          "It reduces the need for statistical analysis."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is an important skill for a Research Scientist?",
        "correct_answer": "Strong analytical and critical thinking skills.",
        "incorrect_answers": [
          "Advanced knowledge of graphic design software.",
          "Proficiency in digital marketing strategies.",
          "Expertise in financial accounting."
        ]
      },
      {
        "number": 6,
        "question": "What is 'data analysis' in the context of scientific research?",
        "correct_answer": "The process of inspecting, cleaning, and interpreting data to draw meaningful conclusions from research experiments.",
        "incorrect_answers": [
          "Designing new software programs.",
          "Marketing research findings to the public.",
          "Managing project finances."
        ]
      },
      {
        "number": 7,
        "question": "What is a 'control group' in a scientific experiment?",
        "correct_answer": "A group that does not receive the experimental treatment and is used for comparison to the experimental group.",
        "incorrect_answers": [
          "A group that provides feedback on the research process.",
          "A group that funds the research project.",
          "A group that reviews the research findings."
        ]
      },
      {
        "number": 8,
        "question": "What is 'scientific writing' used for?",
        "correct_answer": "To communicate research findings, methods, and conclusions in a clear and formal manner to the scientific community.",
        "incorrect_answers": [
          "To promote a researcher's personal brand.",
          "To design marketing campaigns for products.",
          "To write advertisements for research funding."
        ]
      },
      {
        "number": 9,
        "question": "What is 'laboratory equipment' used for in scientific research?",
        "correct_answer": "Tools and instruments used to conduct experiments, gather data, and analyze results in a controlled environment.",
        "incorrect_answers": [
          "Selling scientific products.",
          "Marketing the research findings to the public.",
          "Designing company websites."
        ]
      },
      {
        "number": 10,
        "question": "What is 'research methodology'?",
        "correct_answer": "The systematic approach used to plan, conduct, and analyze a research study.",
        "incorrect_answers": [
          "The process of marketing research findings to the media.",
          "The design of promotional materials for research.",
          "The method for handling customer complaints."
        ]
      },
      {
        "number": 11,
        "question": "What is 'statistical significance' in research?",
        "correct_answer": "A measure of whether the results of an experiment are likely due to chance or if they reflect a real effect.",
        "incorrect_answers": [
          "A method of presenting research in a graphical format.",
          "A way to reduce research project costs.",
          "A measure of how popular a research finding is."
        ]
      },
      {
        "number": 12,
        "question": "What does 'scientific integrity' refer to?",
        "correct_answer": "Maintaining honesty and transparency in conducting and reporting research, avoiding fabrication or falsification of data.",
        "incorrect_answers": [
          "Designing marketing campaigns for research.",
          "Managing the financial aspects of a research project.",
          "Writing press releases for research findings."
        ]
      },
      {
        "number": 13,
        "question": "What is 'research funding'?",
        "correct_answer": "Financial support provided to researchers or research projects, typically by government agencies, private institutions, or foundations.",
        "incorrect_answers": [
          "The process of selling research materials.",
          "The budget for marketing a research study.",
          "The method of hiring researchers."
        ]
      },
      {
        "number": 14,
        "question": "What is the 'scientific method'?",
        "correct_answer": "A systematic process used by researchers to form hypotheses, conduct experiments, collect data, and draw conclusions.",
        "incorrect_answers": [
          "A way to market research findings to the public.",
          "A method for securing research funding.",
          "A system for managing research team schedules."
        ]
      },
      {
        "number": 15,
        "question": "Why is 'collaboration' important for a Research Scientist?",
        "correct_answer": "It allows scientists to share knowledge, resources, and expertise, leading to more comprehensive and innovative research.",
        "incorrect_answers": [
          "It helps in marketing research to potential clients.",
          "It leads to increased sales of research findings.",
          "It improves personal branding in the scientific community."
        ]
      }
    ]
  },
  {
    "id": 44,
    "category": "Event Planner",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of an Event Planner?",
        "correct_answer": "To organize, coordinate, and manage events, ensuring they run smoothly and meet client expectations.",
        "incorrect_answers": [
          "To market the event to potential attendees.",
          "To create the event's promotional materials.",
          "To handle customer service inquiries related to the event."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is a key responsibility of an Event Planner?",
        "correct_answer": "Coordinating logistics such as venue selection, catering, and transportation.",
        "incorrect_answers": [
          "Writing press releases for event promotions.",
          "Managing the event's social media accounts.",
          "Designing the event's website."
        ]
      },
      {
        "number": 3,
        "question": "What is 'event budgeting' in the context of event planning?",
        "correct_answer": "The process of estimating and allocating funds to various aspects of the event, such as venue, catering, and entertainment.",
        "incorrect_answers": [
          "Creating marketing materials for the event.",
          "Designing the event schedule.",
          "Managing the event's post-event feedback."
        ]
      },
      {
        "number": 4,
        "question": "How should an Event Planner handle last-minute changes to an event?",
        "correct_answer": "By remaining calm, communicating with vendors and clients, and finding quick solutions to minimize disruptions.",
        "incorrect_answers": [
          "Cancel the event and reschedule it for another time.",
          "Ignore the changes and proceed with the original plan.",
          "Place the responsibility on the client without offering solutions."
        ]
      },
      {
        "number": 5,
        "question": "Which of the following is an essential skill for an Event Planner?",
        "correct_answer": "Strong organizational and multitasking abilities.",
        "incorrect_answers": [
          "Proficiency in graphic design software.",
          "Expertise in financial accounting.",
          "Advanced knowledge of coding languages."
        ]
      },
      {
        "number": 6,
        "question": "What does 'vendor management' involve in event planning?",
        "correct_answer": "Coordinating with third-party suppliers, such as caterers, florists, and AV technicians, to ensure event requirements are met.",
        "incorrect_answers": [
          "Managing guest lists and invitations.",
          "Designing the event's marketing materials.",
          "Handling customer complaints during the event."
        ]
      },
      {
        "number": 7,
        "question": "What is 'event promotion'?",
        "correct_answer": "The process of advertising and marketing the event to attract attendees and generate interest.",
        "incorrect_answers": [
          "Managing the event's financial budget.",
          "Coordinating with vendors and suppliers.",
          "Designing the event's layout and decorations."
        ]
      },
      {
        "number": 8,
        "question": "What is 'event timeline'?",
        "correct_answer": "A detailed schedule that outlines all the activities, tasks, and deadlines leading up to, during, and after the event.",
        "incorrect_answers": [
          "A list of marketing strategies for the event.",
          "The budget breakdown for the event.",
          "The guest list and seating arrangements."
        ]
      },
      {
        "number": 9,
        "question": "What does 'on-site coordination' entail during an event?",
        "correct_answer": "Managing the event's execution, ensuring that everything runs according to plan and resolving any issues that arise in real-time.",
        "incorrect_answers": [
          "Designing the promotional content for the event.",
          "Managing post-event feedback and reviews.",
          "Creating social media posts before the event."
        ]
      },
      {
        "number": 10,
        "question": "Why is 'client communication' important for an Event Planner?",
        "correct_answer": "It ensures that the client's needs and expectations are clearly understood and met throughout the event planning process.",
        "incorrect_answers": [
          "It helps in writing press releases for the event.",
          "It ensures vendors are paid on time.",
          "It assists with marketing the event on social media."
        ]
      },
      {
        "number": 11,
        "question": "What is 'event evaluation' after an event?",
        "correct_answer": "The process of gathering feedback from clients and attendees to assess the event's success and identify areas for improvement.",
        "incorrect_answers": [
          "Creating marketing strategies for future events.",
          "Designing the event’s promotional materials.",
          "Writing press releases for the event."
        ]
      },
      {
        "number": 12,
        "question": "What is 'event theme' in event planning?",
        "correct_answer": "The central concept or motif that guides the design, decorations, and atmosphere of the event.",
        "incorrect_answers": [
          "The target audience for the event.",
          "The marketing strategies for promoting the event.",
          "The budget for the event."
        ]
      },
      {
        "number": 13,
        "question": "What is 'guest list management' in event planning?",
        "correct_answer": "The process of creating, updating, and managing the list of attendees, including sending invitations and tracking RSVPs.",
        "incorrect_answers": [
          "Designing promotional materials for the event.",
          "Coordinating with event vendors and suppliers.",
          "Managing the event's financial budget."
        ]
      },
      {
        "number": 14,
        "question": "What is 'event logistics'?",
        "correct_answer": "The detailed planning and coordination of all the practical elements involved in the event, such as transportation, equipment, and supplies.",
        "incorrect_answers": [
          "Designing the event’s promotional website.",
          "Writing press releases for the event.",
          "Creating social media content for the event."
        ]
      },
      {
        "number": 15,
        "question": "Why is 'networking' important for an Event Planner?",
        "correct_answer": "It helps in building relationships with vendors, suppliers, and potential clients, which can lead to better deals and new opportunities.",
        "incorrect_answers": [
          "It assists in writing press releases.",
          "It helps in setting up the event’s website.",
          "It reduces the need for financial budgeting."
        ]
      }
    ]
  },
  {
    "id": 45,
    "category": "Journalist",
    "type": "multiple_choice",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary role of a Journalist?",
        "correct_answer": "To research, write, and report news stories for various media outlets.",
        "incorrect_answers": [
          "To design marketing campaigns for products.",
          "To manage the editorial team in a newspaper.",
          "To edit content for magazines and blogs."
        ]
      },
      {
        "number": 2,
        "question": "Which of the following is an essential skill for a Journalist?",
        "correct_answer": "Strong writing, research, and communication skills.",
        "incorrect_answers": [
          "Advanced graphic design skills.",
          "Proficiency in coding and web development.",
          "Expertise in financial analysis."
        ]
      },
      {
        "number": 3,
        "question": "What is 'investigative journalism'?",
        "correct_answer": "A type of journalism that involves in-depth research to uncover hidden facts, often involving corruption or wrongdoing.",
        "incorrect_answers": [
          "Writing simple news reports based on press releases.",
          "Reporting on celebrity gossip and entertainment.",
          "Covering local sports events."
        ]
      },
      {
        "number": 4,
        "question": "What is 'news writing' in journalism?",
        "correct_answer": "The process of creating clear, concise, and objective reports about current events.",
        "incorrect_answers": [
          "Writing opinion pieces based on personal views.",
          "Creating advertisements for media outlets.",
          "Designing the layout for news publications."
        ]
      },
      {
        "number": 5,
        "question": "What is a 'lead' in news writing?",
        "correct_answer": "The opening sentence or paragraph of a news article, summarizing the most important details.",
        "incorrect_answers": [
          "The headline of the news article.",
          "The conclusion of the article.",
          "The list of sources used in the report."
        ]
      },
      {
        "number": 6,
        "question": "Why is 'fact-checking' important in journalism?",
        "correct_answer": "It ensures that the information being reported is accurate, credible, and reliable.",
        "incorrect_answers": [
          "It makes the article more interesting to read.",
          "It helps journalists to write more quickly.",
          "It allows journalists to express personal opinions."
        ]
      },
      {
        "number": 7,
        "question": "What is 'source attribution' in journalism?",
        "correct_answer": "Citing the sources of information used in a report to ensure transparency and credibility.",
        "incorrect_answers": [
          "Editing articles for grammar and style.",
          "Designing the layout of a news report.",
          "Writing opinion pieces based on personal experiences."
        ]
      },
      {
        "number": 8,
        "question": "What is 'journalistic integrity'?",
        "correct_answer": "Adhering to ethical standards, such as accuracy, fairness, and objectivity, while reporting news.",
        "incorrect_answers": [
          "Writing articles to increase advertising revenue.",
          "Focusing solely on controversial topics for publicity.",
          "Avoiding coverage of sensitive or difficult topics."
        ]
      },
      {
        "number": 9,
        "question": "What is 'media bias'?",
        "correct_answer": "The tendency of journalists or news outlets to favor certain perspectives or opinions, potentially skewing news coverage.",
        "incorrect_answers": [
          "The process of editing news articles for clarity.",
          "The technique of writing opinion articles.",
          "The method of delivering news updates via social media."
        ]
      },
      {
        "number": 10,
        "question": "What is a 'news angle'?",
        "correct_answer": "The perspective or focus chosen by a journalist when reporting on a particular event or issue.",
        "incorrect_answers": [
          "The location of the news story.",
          "The font style used in the publication.",
          "The promotional materials for the story."
        ]
      },
      {
        "number": 11,
        "question": "What is the role of a 'photojournalist'?",
        "correct_answer": "To capture photographs that visually tell a story, often accompanying news articles or reports.",
        "incorrect_answers": [
          "To design the layout of a news publication.",
          "To write editorial pieces about current events.",
          "To conduct interviews and report on local businesses."
        ]
      },
      {
        "number": 12,
        "question": "What does 'newsworthiness' refer to?",
        "correct_answer": "The quality of an event or story that makes it worthy of being reported in the news, such as significance, timeliness, or impact.",
        "incorrect_answers": [
          "The popularity of the journalist's social media profile.",
          "The potential for financial gain from the story.",
          "The number of sources used in the article."
        ]
      },
      {
        "number": 13,
        "question": "What is 'opinion journalism'?",
        "correct_answer": "A type of journalism that focuses on expressing personal views, analyses, or interpretations of events, rather than objective reporting.",
        "incorrect_answers": [
          "Reporting the news in an unbiased and neutral manner.",
          "Investigating and uncovering hidden facts.",
          "Covering hard news stories without personal opinion."
        ]
      },
      {
        "number": 14,
        "question": "What does 'freedom of the press' mean?",
        "correct_answer": "The right of journalists to report news without censorship, restriction, or interference from the government or other authorities.",
        "incorrect_answers": [
          "The obligation for news outlets to cover all major events.",
          "The responsibility of journalists to provide opinions on current issues.",
          "The right to publish news without verifying facts."
        ]
      },
      {
        "number": 15,
        "question": "What is 'news reporting'?",
        "correct_answer": "The process of gathering information, conducting interviews, and writing stories that inform the public about recent events.",
        "incorrect_answers": [
          "Writing fictional stories based on current events.",
          "Creating promotional content for businesses.",
          "Publishing articles that express personal opinions."
        ]
      }
    ]
  },      
];

export default questions;

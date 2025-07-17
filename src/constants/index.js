import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `A Data Science graduate from the University of Nottingham with a passion for transforming raw data into actionable insights. With a strong foundation in mathematics, I specialize in data analysis, visualization, and creating interactive reports using tools like Power BI and DAX. I thrive in problem-solving environments, and my goal is to apply my skills in real-world projects that drive business decisions. I'm also actively building a portfolio to showcase my work and highlight my achievements in the data science field.`;

export const ABOUT_TEXT = `I have over 2 years of experience in building efficient and user-friendly web applications. I have worked with a range of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. Over time, my passion for problem-solving and working with data has led me to pursue a career shift towards data science. I am now focused on learning and applying data science techniques, including machine learning and statistical analysis, to extract valuable insights and solve complex business problems. Outside of coding, I enjoy staying active, reading books, watching anime and sometimes indulge in my fascination about the universe.`;

export const EXPERIENCES = [
  {
    year: "Sep 2021 – Jan 2023",
    role: "Software Engineer, Full Stack",
    company: "Skillsoft",
    description: `Worked on building full stack applications with ReactJS for frontend and NodeJS (NestJS) for backend with PostgreSQL Database services. Utilized SwaggerUI to make custom API calls and a dashboard to view statistics. Fixed user issues and released hotfixes promptly. Given several knowledge transfer sessions to the team on JavaScript libraries like ReactJS, Redux, custom hooks, and GraphQL. Utilized Git for version control and branching for each microservice. Contributed to the team in winning Innovation award two times.`,
    technologies: ["ReactJS", "NodeJS", "NestJS", "PostgreSQL", "SwaggerUI", "Git", "GraphQL"]
  },
  {
    year: "Mar 2021 – Jan 2022",
    role: "QA Engineer",
    company: "Skillsoft",
    description: `Manual testing of legacy software applications following STLC. Executed test cases across 10+ environments, beating the team averages by 50%. Used SOAPUI / ReadyAPI and Postman for API Testing. Optimized the test suites with test cases that improved system's efficiency from 51% to 67%. Analysis of user data using MySQL queries to create appropriate test cases.`,
    technologies: ["SOAPUI", "ReadyAPI", "Postman", "MySQL"]
  },
  {
    year: "Dec 2020 – Mar 2021",
    role: "Software Associate",
    company: "DataEconomy",
    description: `Worked on a big data project utilizing PySpark for data management. Performed EDA to remove unnecessary delimiters and made data suitable for further analysis. Investigated Python codebase to find possible errors and optimized it. Integrated encryption and decryption into the system.`,
    technologies: ["PySpark", "Python", "EDA", "Encryption", "Decryption"]
  }
  ,
];

export const PROJECTS = [
  {
    title: "Explainable and Predictive Modelling: XAI in Combat Sports",
    image: project1,  
    description:
      "Developed machine learning models (Logistic Regression, Random Forest, XGBoost, Neural Networks, and Ensemble) to predict the outcome of a UFC fight. Optimized these models with Recursive Feature Elimination, Mutual Information Scores, and Hyperparameter tuning with GridSearch. Explained these models using SHAP values to understand the decision-making process. Performed EDA to generate valuable insights from the data.",
    technologies: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Statsmodels", "Seaborn"],
  },
  {
    title: "Predicting Spread of Dengue Using Time Series Analysis and Machine Learning",
    image: project2,   
    description:
      "Developed a robust data pipeline for forecasting dengue cases using advanced models like ARIMA, SARIMA, and XGBoost. Executed comprehensive data preprocessing, including data imputation, normalization, outlier detection, and temporal data manipulation. Applied PCA to reduce dimensionality, enhancing the predictive power of the models. Optimized hyperparameters with grid search and evaluated performance using RMSE and MAE.",
    technologies: ["Pandas", "NumPy", "Scikit-learn", "Statsmodels", "Seaborn"],
  },
  {
    title: "AI-Driven Forecasting: Predicting Investment Returns with Machine Learning and GPU Acceleration",
    image: project3,   
    description:
      "Developed machine learning models (Linear Regression, Decision Trees, XGBoost) to predict investment returns over 1, 3, and 5-year periods. Leveraged GPU acceleration with XGBoost for improved model performance and faster computations. Evaluated model accuracy using metrics like MAE, MSE, and R², alongside comprehensive data preprocessing including feature engineering and imputation.",
    technologies: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "CUDA"],
  }
  ,
];

export const CONTACT = {
  address: "",
  phoneNo: "+91 9618393840",
  email: "kishanbhamidipati@gmail.com",
};

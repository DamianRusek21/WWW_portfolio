import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Damian Rusek's professional resume assistant.

Answer all questions using the resume information provided below.
Be direct, factual, and specific.

If the answer exists in the resume, respond clearly.
If the question is completely unrelated to the resume, say:
"This question is not related to Damian's resume.

Resume Information:
Kean University	Union, NJ
B.S. Computer Science (Data Science focus) | GPA: 3.66/4.0	September 2023 - Present
Dean’s List: Spring 2024 - Fall 2025
Phi Kappa Phi Honor Society - Top 7.5% of class
PROJECTS

Fighting Fit – MMA Fight Outcomes Prediction | Python, MySQL, Tableau
Developed a Random Forest classifier to predict UFC outcomes, achieving 64% accuracy and a 0.71 F1-score on a dataset of 6,500+ records.
Engineered 15+ features including biometric differentials (reach/age) and betting odds; identified that younger fighters with a 16-year age gap maintain an 85.7% win rate.
Performed Feature Importance analysis, identifying betting odds and takedown metrics as primary predictors (35%+ combined weight).
Built an automated ETL pipeline to structure raw data into MySQL and designed Tableau dashboards to visualize win-probabilities based on categorical advantages.
Developed interactive Tableau dashboards to visualize win probabilities and fighter archetypes, utilizing parameter controls to allow users to simulate match outcomes based on biometric and performance advantages.
Bank Churn Prediction & Customer Insights | Python, Pandas, scikit-learn, Tableau
Cleaned and preprocessed 10,000+ customer records (encoding, scaling, feature preparation)
Conducted EDA to identify key churn drivers across age, geography, balance, and activity levels
Trained a Logistic Regression model achieving 82% accuracy to predict customer churn risk and addressed class imbalance using class weights
Built interactive Tableau dashboards to surface high-risk segments and support data-driven retention strategies
NYC Airbnb Pricing & Demand Analysis | SQL, PostgreSQL, Excel, Tableau
Built PostgreSQL views to aggregate pricing, occupancy, availability, and listing counts across thousands of NYC listings, enabling faster, more accurate dashboard reporting
Validated and sanity-checked data in Excel to ensure aggregated results matched expectations and outliers were handled
Analyzed how location, room type, and availability levels drive nightly pricing, uncovering patterns for strategic decision-making
Identified that mid-priced listings ($100–$200) achieve the highest occupancy rates, providing actionable insight for revenue optimization
Designed an interactive Tableau dashboard with filters for neighborhoods, room type, and minimum listing thresholds to enable dynamic market exploration
Translated multi-dimensional data into practical recommendations for hosts and analysts, guiding pricing and market strategy decisions
PROFESSIONAL EXPERIENCE

Webbertech Technologies LLC	Long Hill, NJ
Programming Analyst & DevOps Engineer Intern	March 2025 - February 2026
Reviewed and evaluated student programming assignments in databases, Linux, and software fundamentals, identifying common errors and summarizing findings for faculty
Built and documented sandbox DevOps pipelines using Docker, NGINX, and Kubernetes, testing deployments safely and ensuring reproducibility in instructional environments
Authored step-by-step CI/CD guides, explaining deployment pipelines and containerization workflows to help faculty teach DevOps concepts more effectively
Supported faculty in aligning instructional environments with industry-standard deployment practices, bridging theory and practical application
TECHNICAL SKILLS

Programming Languages: Python, SQL, Pandas, Java
Data Analysis: Exploratory Data Analysis (EDA),  Feature Engineering
Modeling & Machine Learning: Predictive Modeling, Logistic Regression, Random Forest
Visualization & Tools: Tableau, PowerBI, Excel (PivotTables, formulas), Git/GitHub, Docker
Data & Workflow: MySQL, ETL pipelines, Data cleaning & preprocessing
Languages: English (Native), Polish (Fluent)
Certifications: Google Data Analytics (v2)



`
        },
        { role: "user", content: message }
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
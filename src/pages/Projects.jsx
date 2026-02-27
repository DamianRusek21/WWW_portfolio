function Projects() {
  return (
    <div className="projects-container">

      <h1 className="projects-title">Projects</h1>

      {/* Fighting Fit */}
      <div className="project-card">
        <h2>Fighting Fit – MMA Fight Outcome Prediction</h2>

        <p>
          • Built a Random Forest model predicting UFC outcomes with 64% accuracy and 0.71 F1-score on 6,500+ records.<br /><br />
          • Engineered 15+ features including biometric differentials and betting metrics; identified key predictors through feature importance analysis.<br /><br />
          • Developed automated ETL pipeline and interactive Tableau dashboards with simulation controls.
        </p>

        <p><strong>Technologies:</strong> Python, MySQL, Tableau</p>

        <div className="project-buttons">
          <a
            href="https://github.com/DamianRusek21/FightingFit"
            target="_blank"
            rel="noreferrer"
            className="project-btn primary"
          >
            GitHub
          </a>

          <a
            href="https://public.tableau.com/app/profile/damian.rusek/viz/Fighting_Fit/FightingFit-WhatReallyDrivesUFCFightOutcomes?publish=yes"
            target="_blank"
            rel="noreferrer"
            className="project-btn secondary"
          >
            Tableau
          </a>
        </div>
      </div>

      {/* Bank Churn */}
      <div className="project-card">
        <h2>Bank Churn Prediction & Customer Insights</h2>

        <p>
          • Cleaned and preprocessed 10,000+ records with encoding and feature scaling.<br /><br />
          • Conducted exploratory data analysis identifying churn drivers.<br /><br />
          • Trained Logistic Regression model achieving 82% accuracy and built dashboards to surface high-risk segments.
        </p>

        <p><strong>Technologies:</strong> Python, Pandas, scikit-learn, Tableau</p>

        <div className="project-buttons">
          <a
            href="https://github.com/DamianRusek21/bank-churn-project"
            target="_blank"
            rel="noreferrer"
            className="project-btn primary"
          >
            GitHub
          </a>

          <a
            href="https://public.tableau.com/app/profile/damian.rusek/viz/CustomerChurnAnalysis_17673819216060/CustomerChurnAnalysisDashboard"
            target="_blank"
            rel="noreferrer"
            className="project-btn secondary"
          >
            Tableau
          </a>

          <a
            href="https://medium.com/@rusekd/how-i-analyzed-bank-customer-churn-using-python-and-tableau-b270ed6b8802?postPublishedType=initial"
            target="_blank"
            rel="noreferrer"
            className="project-btn tertiary"
          >
            Medium
          </a>
        </div>
      </div>

{/* NYC Airbnb */}
<div className="project-card">
  <h2>NYC Airbnb Pricing & Demand Analysis</h2>

  <p>
    • Created optimized PostgreSQL views aggregating pricing, occupancy, and availability across thousands of listings.<br /><br />
    • Performed data validation and outlier analysis in Excel.<br /><br />
    • Identified mid-priced listings ($100–$200) as highest occupancy segment; built interactive dashboards for dynamic market exploration.
  </p>

  <p><strong>Technologies:</strong> SQL, PostgreSQL, Excel, Tableau</p>

  <div className="project-buttons">

        <a
      href="https://www.notion.so/Raw-Code-2eeaaca1d75080a99e8deb96612befc9"
      target="_blank"
      rel="noreferrer"
      className="project-btn primary"
    >
      View SQL Code
    </a>
    <a
      href="https://public.tableau.com/app/profile/damian.rusek/viz/NYC_RENT/NYCShort-TermRentalPricingDemandAnalysisSQLTableau17614listings"
      target="_blank"
      rel="noreferrer"
      className="project-btn secondary"
    >
      Tableau
    </a>
  </div>
</div>

    </div>
  );
}

export default Projects;
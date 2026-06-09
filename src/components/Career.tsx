import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern SDET</h4>
                <h5>AutoLoad AI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and executing automated testing frameworks to ensure the reliability and scalability of AI-driven systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Elite Track Record</h4>
                <h5>Hackathons & Projects</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Won 2nd Place at DTU’s Stratezenith and competed at elite national hackathons, proving high-level technical execution and business viability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Member</h4>
                <h5>AIMS DTU (AI/ML Society) </h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
             Leading ML initiatives within AIMS DTU. Deployed standalone systems like GestureOS (computer vision interface) and AlphaStocks AI (smart market predictor) and many more.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Scholar</h4>
                <h5>Delhi Technological University</h5>
              </div>
              <h3>2025-29</h3>
            </div>
            <p>
             Maintaining a 9.4 CGPA and holding the 3rd Departmental Rank. Excelling in core engineering fundamentals and academic milestones. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;


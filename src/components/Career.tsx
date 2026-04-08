import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MTech Student</h4>
                <h5>NSUT Delhi</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Master of Technology in Information Technology with CGPA: 8.5. 
              Focusing on AI/ML research, building intelligent systems, and working 
              on cutting-edge projects in machine learning and deep learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech in Computer Engineering</h4>
                <h5>Thapar Institute, Patiala</h5>
              </div>
              <h3>2020-24</h3>
            </div>
            <p>
              Bachelor of Engineering in Computer Engineering with CGPA: 7.0. 
              Built strong foundation in computer science fundamentals, algorithms, 
              and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII</h4>
                <h5>Sun Valley International School, Ghaziabad</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Class XII (CBSE) with a percentage of 90.0%. Built strong 
              knowledge across core academic subjects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X</h4>
                <h5>Sun Valley International School, Ghaziabad</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Completed Class X (CBSE) with a percentage of 96.0%. Maintained a 
              record of academic excellence.
            </p>
          </div>
        </div>

        <h2>
          Work <span>&</span>
          <br /> Internships
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Network Engineer Intern</h4>
                <h5>Railtel Corporation of India Limited</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Feb 2024 – Jul 2024. Resolved 50+ packet loss incidents by coordinating 
              with the required teams. Identified and resolved 70% of network performance 
              issues causing low bandwidth. Streamlined complaint handling by maintaining 
              accurate records and efficient communication. Engaged in network systems 
              using MPLS and SDH protocols.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>International Development Consultation Limited</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Jun 2023 – Aug 2023. Spearheaded creation and deployment of the company's 
              official website. Grasped essentials of developing an entirely operational 
              and responsive web interface. Supported the creation of detailed project 
              reports and documentation for senior stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

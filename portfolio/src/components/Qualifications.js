import React from "react";

const Qualifications = () => {
  return (
    <div className="container mt-5 text-white text-center">
      <h2 className="mb-4 fw-bold text-white">My Qualifications and Experiences</h2>

      <div className="row justify-content-center">
        {/* Software Engineering Student */}
        <div className="col-md-8 mb-4">
          <div className="card bg-dark text-white shadow-lg;" style={{ border: "2px solid rgb(83, 83, 199)" }}>
            <div className="card-body">
              <h4 className="card-title text-info">Software Engineering Student - 3rd Year</h4>
              <a href="https://altinbas.edu.tr/" target="_blank" className="text-warning text-decoration-none">
                Altinbas University, Türkiye, Istanbul
              </a>
            </div>
          </div>
        </div>

        {/* AI Prompt Engineer */}
        <div className="col-md-8 mb-4">
          <div className="card bg-dark text-white shadow-lg;" style={{ border: "2px solid rgb(83, 83, 199)" }}>
            <div className="card-body">
              <h4 className="card-title text-info">AI Prompt Engineer / AI Trainer</h4>
              <p className="text-secondary">Outlier Company</p>
              <ul className="list-unstyled">
                <li> Prompt Creation & <br/> Response Evaluation</li>
              </ul>
              <a href="https://outlier.ai/" target="_blank" className="text-warning text-decoration-none">
                Company Link
              </a>
            </div>
          </div>
        </div>

        {/* English Teacher */}
        <div className="col-md-8 mb-4">
          <div className="card bg-dark text-white shadow-lg;" style={{ border: "2px solid rgb(83, 83, 199)" }}>
            <div className="card-body">
              <h4 className="card-title text-info">English Teacher</h4>
              <p className="text-secondary">Part-time English Teacher at English Time School, Istanbul.</p>
              <a href="https://www.englishtime.com/en" target="_blank" className="text-warning text-decoration-none">
                English Time Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;


// ================================


// import React from "react";

// const Qualifications = () => {
//     return ( 
    
//   <div style={{padding:8}}>
   
//    <h2>My Qualifications and Experiences </h2>

//    <li>
//     <h4>Software Engineering Student 3rd Year</h4>
//     <a href="https://altinbas.edu.tr/" target="_blank"><p>Altinbas University , Türkiye, Istanbul</p></a>
//    </li>
//    <hr/>
//    <li>
//     <h4>AI Propemt Engineer or AI trainer at Outlier Company</h4>
//     <br></br>
   
//     <p style={{fontSize:15}}> 
// <li> ●  Prompt Creation: Designing prompts to generate optimal AI responses.</li><br/>
// <li> ●  Response Evaluation: Assessing AI responses for quality and accuracy.</li> <br/>
// {/* <li> ●  AI model Feedback and Optimization.</li> */}
// </p>
// <a href="https://outlier.ai/" target="_blank"><p> Company Link </p> </a>
//     </li>
//    <hr/>
//    <li>
//     <h4>English Teacher</h4>
//     <p>English Teacher part time , teaching students all level in English Time School, Istanbul</p>
//     <a href="https://www.englishtime.com/en" target="_blank"><p>English Time Website</p></a>
//    </li>

//   </div>  

//     )
// } ;

// export default Qualifications;



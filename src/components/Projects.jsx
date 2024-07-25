import React, { useState } from "react";
function Projects() {
  const [aboutProject, setAbouProject] = useState(false);
  return (
    <div>
      <div className="project flex ml-36">
        <div className="all-projects-list flex flex-col gap-48 justify-center">
          <div className="mt-50 rounded-full text-white h-20 w-12 ml-2 border bg-white">
            <h1 className="text-black font-extrabold relative top-1 left-5">
              1
            </h1>
          </div>
          <div className="mt-50 rounded-full text-white h-20 w-12 ml-2 border bg-white">
            <h1 className="text-black font-extrabold relative top-1 left-5">
              2
            </h1>
          </div>
          <div className="mt-50 rounded-full text-white h-20 w-12 ml-2 border bg-white">
            <h1 className="text-black font-extrabold relative top-1 left-5">
              3
            </h1>
          </div>
          <div className="mt-50 rounded-full text-white h-20 w-12 ml-2 border bg-white">
            <h1 className="text-black font-extrabold relative top-1 left-5">
              4
            </h1>
          </div>
        </div>
        <div className="names">
          <h1 className="text-white">
            Fake Biometric Detectioin using Objective Fedility Measures
            <button
              className="ml-10 "
              onClick={() => {
                setAbouProject(!aboutProject);
              }}
            >
              View
            </button>
          </h1>
          <h1 className="text-white mt-52">
            Fake Biometric Detectioin using Objective Fedility Measures
            <button
              className="ml-10 "
              onClick={() => {
                setAbouProject(!aboutProject);
              }}
            >
              View
            </button>
          </h1>
          <h1 className="text-white mt-48">
            Fake Biometric Detectioin using Objective Fedility Measures
            <button
              className="ml-10 "
              onClick={() => {
                setAbouProject(!aboutProject);
              }}
            >
              View
            </button>
          </h1>
          <h1 className="text-white mt-52">
            Fake Biometric Detectioin using Objective Fedility Measures
            <button
              className="ml-10 "
              onClick={() => {
                setAbouProject(!aboutProject);
              }}
            >
              View
            </button>
          </h1>
        </div>
      </div>
      {aboutProject ? (
        <div className="h-96 w-96  bg-sky-300 ">
          <iframe
            src="D:\PortFolio\PortFolio\src\fake 1.pdf"
            width="600"
            height="800"
          >
            This browser does not support PDFs. Please download the PDF to view
            it: <a href="D:\PortFolio\PortFolio\src\fake 1.pdf">Download PDF</a>
            .
          </iframe>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Projects;

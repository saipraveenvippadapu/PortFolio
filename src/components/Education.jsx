import React from "react";

function Education() {
  return (
    <div>
      <h1 className="text-6xl font-extrabold text-orange-600 ">
        Education Deatils
      </h1>
      <div id="FIRST">
        <h1 className="font-bold text-4xl font-serif m-auto decoration-red-600">
          {" "}
          Bachelor of Technology
        </h1>
        <div id="first-div" className=" bg-sky-500 flex gap-11  ">
          <div
            id="image-b-tech"
            className="h-60 w-60 bg-slate-800 rounded-full p-6 ml-14 "
          ></div>
          <div className="mt-10">
            <h1 className="text-6xl  font-bold text-green-800">
              ELECTRONICS AND<br></br> COMMUNICATION ENGINEERING
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold underline">College</h1>
          <h3 className="text-2xl">
            KMM Institute Of Technology And Science ,Tirupati Andhra Pradesh
          </h3>
          <h1 className="text-4xl font-bold underline">Duration</h1>
          <h3 className="text-2xl">2018-2023</h3>
          <h1 className="text-4xl font-bold underline">Percentage and CGPA</h1>
          <h3 className="text-2xl">
            69.32 %<br></br>7.32 CGPA
          </h3>
        </div>
      </div>
      <div id="FIRST">
        <h1 className="font-bold text-4xl font-serif m-auto decoration-red-600">
          INTERMIDEATE
        </h1>
        <div id="first-div" className=" bg-sky-500 flex gap-11  ">
          <div
            id="image-intermideate"
            className="h-60 w-60 bg-slate-800 rounded-full p-6 ml-14 "
          ></div>
          <div className="mt-10">
            <h1 className="text-6xl  font-bold text-green-800">
              MATHAMATICS PHYSICS AND<br></br> CHEMISTRY
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold underline">College</h1>
          <h3 className="text-2xl">
            NARAYANA JUNIOR COLLEGE ,GUNTUR Andhra Pradesh
          </h3>
          <h1 className="text-4xl font-bold underline">Duration</h1>
          <h3 className="text-2xl">2016-2018</h3>
          <h1 className="text-4xl font-bold underline">Percentage OR MARKS </h1>
          <h3 className="text-2xl">
            881/1000 MARKS <br></br>
            88.1%
          </h3>
        </div>
      </div>
      <div id="FIRST">
        <h1 className="font-bold text-4xl font-serif m-auto decoration-red-600">
          {" "}
          Secondary School Certificate
        </h1>
        <div id="first-div" className=" bg-sky-500 flex gap-11  ">
          <div
            id="image-school"
            className="h-60 w-60 bg-slate-800 rounded-full p-6 ml-14 "
          ></div>
        </div>
        <div>
          <h1 className="text-4xl font-bold underline">School</h1>
          <h3 className="text-2xl">
            DON BOSCO English Mideum High School ,P.T parru,Guntur, Andhra
            Pradesh
          </h3>
          <h1 className="text-4xl font-bold underline">Duration</h1>
          <h3 className="text-2xl">2015-2016</h3>
          <h1 className="text-4xl font-bold underline">CGPA</h1>
          <h3 className="text-2xl">7.7 CGPA</h3>
        </div>
      </div>
    </div>
  );
}

export default Education;

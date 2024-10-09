import React from "react";
// import photo from "../assets/aboutUs.avif";
const AboutUs = () => {
  return (
    // <div className="bg-gradient-to-r h-screen from-indigo-100 from-10%  via-sky-200 via-30% to-emerald-100 flex flex-col justify-center items-center ">
     <div className="bg-gradient-to-r h-screen  flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-center text-blue-600 font-semibold">
        About Us
      </h1>
      <div className="text-slate-700 w-auto h-60 mt-10 pb-8 shadow-sm flex justify-center items-center rounded-md">
        <p className="text-left font-serif leading-8">
        <i>
  <span className="font-bold text-2xl">"W</span>elcome to our Celestial Care Management "About Us" page. We specialize
  in<br></br> providing innovative management solutions that elevate patient care,
  <br></br> streamline operations, and ensure seamless regulatory compliance. With a rich
  <br></br> history of excellence and a team of industry experts, we offer a comprehensive
  <br></br> suite of services, including consulting, administrative support,
  <br></br> technology integration, and specialized training programs."
</i>

        </p>
      </div>
    </div>
  );
};

export default AboutUs;

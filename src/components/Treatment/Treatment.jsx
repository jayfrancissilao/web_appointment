import React from "react";
import "/src/components/Treatment/Treatment.css"; // import css
import gridImage from "/src/components/Treatment/gridImg.png"; //import image here
import DataTreatmentSkills from "/src/Data/treatment.json"; // import json file here

const Treatment = () => {
  return (
    <div className="lg:px-20 px-10 py-15">
      {/* treatment txt */}
      <div className="treatment-text">
        <h1 className="font-bold lg:text-4xl">
          Dedicated to provide best treatment
        </h1>
        <p className="text-black font-thin mt-10 mb-10">
          A wonderful serenity has taken possesion of my entire soul, like these
          sweet morning or spring
          <br /> which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which <br />
          was created for the bliss of soules like mine.
        </p>
      </div>
      {/* grid here */}
      <div className="grid lg:grid-cols-3  md:grid-cols-3 grid-cols-1 center gap-10">
        <img src={gridImage} alt="" />
        <img src={gridImage} alt="" />
        <img src={gridImage} alt="" />
      </div>

      {/* end here */}

      <div className="mt-20">
        <span>SERVICES & TREATMENT</span>
        <div className="">
          <h1 className="inline-block lg:text-4xl font-bold">
            More than 40 specialty <br /> and health care services
          </h1>
          <button className="inline-block fillBtn">See All Services</button>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
          {DataTreatmentSkills.map((data) => {
            return (
              <div key={data.id} className="bg rounded-lg gap-5 m-2 p-5">
                <h1 className="font-bold lg:text-2xl data-center">{data.name}</h1>
                <p className="text-black mt-5 data-description">{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Treatment;

import React from "react";
import Activity from "../Activity/Activity";
import "./Activites.css";

function Activites(props) {
  let activites = props.activites;
  return (
    <div className='activites mt-5 p-3'>
        <h2 className="mb-5">What activites do you want to try? </h2>
      <div className='container'>
        {activites.map((a) => (
          <Activity key={a.id} activity={a} />
        ))}
      </div>
    </div>
  );
}

export default Activites;

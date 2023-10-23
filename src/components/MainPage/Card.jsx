/* eslint-disable react/prop-types */
export const Card = (props) => {
const {name,about,activity,startDate,endDate} = props

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-3xl">
        <figure>
          {/* <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          /> */}
        </figure>
        <div className="card-body">
          <h1 className="card-title text-cyan-950"> {activity} </h1>
          <h2 className="card-title text-cyan-950">{name} </h2>
          <p className="text-cyan-950"> {about}</p>
          <p className="text-cyan-950"> {"Start : "} {startDate}</p>
          <p className="text-cyan-950"> {"End : "} {endDate}</p>
        </div>
      </div>
    </div>
  );
};

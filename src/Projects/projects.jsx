import "./projects.css";
const img = "https://picsum.photos/seed/picsum/400/400";

export const Projects = () => {
  return (
    <div>
      <div className="container">
        <h1>Our Projects </h1>
        <div className="img-wrapper">
          <div>
            <img src={img}></img>
          </div>
          <div>
            <img src={img}></img>
          </div>
          <div>
            <img src={img}></img>
          </div>{" "}
          <div>
            <img src={img}></img>
          </div>{" "}
          <div>
            <img src={img}></img>
          </div>{" "}
          <div>
            <img src={img}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

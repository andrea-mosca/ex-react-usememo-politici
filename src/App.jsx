import { useState } from "react";

function App() {
  const [politici, setPolitici] = useState([]);
  const chiamataPolitici = async () => {
    const res = await fetch(`http://localhost:3333/politicians`);
    const data = await res.json();
    setPolitici(data);
  };

  chiamataPolitici();

  return (
    <div className="container mt-5 mx-auto">
      <div>
        {politici.map((p, index) => (
          <div className="card m-2" key={index}>
            <img
              src={p.image}
              alt=""
              className="card-img-top"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <h6 className="card-subtitle">{p.position}</h6>
              <p className="card-text">{p.biography}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

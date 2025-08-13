import { useState, useEffect, memo } from "react";
const CardPolitico = memo(({ image, name, position, biography }) => {
  console.log(name);

  return (
    <div className="card m-2">
      <img
        src={image}
        alt=""
        className="card-img-top"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle">{position}</h6>
        <p className="card-text">{biography}</p>
      </div>
    </div>
  );
});
function App() {
  const [politici, setPolitici] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const chiamataPolitici = async () => {
      try {
        const res = await fetch("http://localhost:3333/politicians");
        const data = await res.json();
        setPolitici(data);
      } catch (error) {
        console.error("Errore nella chiamata:", error);
      }
    };

    chiamataPolitici();
  }, []);

  const politiciFiltrati = politici.filter((p) =>
    `${p.name} ${p.biography}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5 mx-auto">
      <h1>Lista Politici</h1>
      <label htmlFor="filtro-politici">
        cerca un politico o la sua biografia
      </label>
      <input
        className="form-control"
        type="text"
        id="filtro-politici"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {politiciFiltrati.map((p, index) => (
          <CardPolitico key={index} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;

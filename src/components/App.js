import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { toursData } from "../data.js";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = () => {
    setLoading(true);

    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 1000);
  };

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main id="main">
        <section className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </section>
      </main>
    );
  }

  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;

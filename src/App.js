import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState();
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  if (data == null) {
    return (
      <section className="section">
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${value === index && "active-btn"}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        {data.map((item, index) => {
          if (index === value) {
            return (
              <article key={item.id} className="job-info">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.dates}</p>
                {item.duties.map((duty, index) => (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                ))}
              </article>
            );
          }
        })}
      </div>
      <button className="btn">More Info</button>
    </section>
  );
}

export default App;

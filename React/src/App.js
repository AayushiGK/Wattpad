import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p> Welcome to Wattpad Listing </p>

      <ul>
        {data?.map((story, index) => (
          <div className="story_container" key={index}>
            <img className="story_cover" src={story.cover} alt={story.title} />
            <div className="story_details">
              <h4>
                <a href={story.storyLink}>{story.title}</a>
              </h4>
              <p>
                By: <a href={story.writerProfile}>{story.writer}</a>
              </p>
              <p>
                <span className="tag_completion">
                  {story.completed && "Complete"}
                </span>
                <span className="tag_mature">{story}</span>
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

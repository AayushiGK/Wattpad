const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

// Function to fetch all stories from a given URL
async function fetchAllStories(baseUrl) {
  let offset = 0;
  const limit = 100;
  let allStories = [];
  let totalStories = 0;

  try {
    do {
      const url = `${baseUrl}&offset=${offset}&limit=${limit}`;

      const response = await axios.get(url, {
        headers: {
          authorization: process.env.AUTH_TOKEN,
        },
      });

      if (offset === 0) {
        // Get total number of stories only on the first request
        totalStories = response.data.total;
      }

      const stories = response.data.stories.map((element) => ({
        title: element.title.trimEnd(),
        writer: element.user.fullname || element.user.name,
        writerProfile: `https://www.wattpad.com/user/${element.user.name}`,
        cover: element.cover,
        storyLink: element.url,
        completed: element.completed,
        mature: element.mature,
      }));

      allStories = allStories.concat(stories);
      offset += limit; // Move to the next set of results
    } while (offset < totalStories);

    return allStories;
  } catch (error) {
    console.error(`Error fetching data from ${baseUrl}:`, error.message);
    throw error;
  }
}

// Route to listen for requests and fetch data from two URLs
app.get("/", async (req, res) => {
  const url_base = "https://api.wattpad.com/v5/hotlist?tags=";
  try {
    // Base URLs for fetching stories
    const url1 = `${url_base}maddamsir&language=1`;
    const url2 = `${url_base}madamsir&language=1`;

    // Fetch data from both URLs concurrently
    const [data1, data2] = await Promise.all([
      fetchAllStories(url1),
      fetchAllStories(url2),
    ]);

    // Combine data from both sources
    const combinedData = data1.concat(data2);

    console.log(combinedData);

    res.status(200).send(combinedData);
  } catch (error) {
    res.status(500).send("Error fetching data from the provided URLs.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

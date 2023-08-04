import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Werfa = () => {
  // State to store the audio player instance
  let currentAudio = null;

  // Create an empty object to store the imported audio files
  const audioFiles = {};

  // Define the range for the filenames (1 to 100) and sub-range (1 to 4)
  const totalFiles = 100;
  const subFiles = 4;

  // Function to perform dynamic import and add audio files to the audioFiles object
  const loadAudioFiles = async () => {
    const importPromises = [];

    // Loop through the filenames and use dynamic import to load the audio files
    for (let i = 1; i <= totalFiles; i++) {
      for (let j = 1; j <= subFiles; j++) {
        const filename = `${i}-${j}.mp3`;

        // Use dynamic import to load the audio file from the 'audioFiles' folder
        importPromises.push(
          import(`./audioFiles/${filename}`)
            .then((module) => {
              audioFiles[filename] = module.default;
            })
            .catch((error) => {
              console.error(`Error importing ${filename}:`, error);
            })
        );
      }
    }

    // Await all dynamic imports before rendering the component
    await Promise.all(importPromises);
  };

  // Call the function to load audio files before the component renders
  useEffect(() => {
    loadAudioFiles();
  }, []);

  // Function to handle audio playback
  function play(no, meskot) {
    if (currentAudio) {
      currentAudio.pause();
    }
    if (no >= 1 && no <= 100 && meskot >= 1 && meskot <= 4) {
      const audioVariable = `${no}_${meskot}`;
      const audioPath = audioFiles[audioVariable];
      if (audioPath) {
        currentAudio = new Audio(audioPath);
        currentAudio.play();

        currentAudio.addEventListener("ended", () => {
          currentAudio = null; // Reset currentAudio after playback
        });
      }
    }
  }

  // Your data fetching and rendering logic (data is assumed to be available here)
  const [data, setData] = useState([]);

  // Function to fetch data
  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get/payli");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="d-flex justify-content-start">
      <div className="content-div pt-3 w-100">
        <table className="table w-100 table-striped table-bordered">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Ternga Kuter</th>
              <th style={{ textAlign: "center" }}>meskot Kuter</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  onClick={() => play(item.No, item.meskot)} // Trigger audio playback on click
                >
                  <td>{item.No}</td>
                  <td>{item.meskot}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Werfa;

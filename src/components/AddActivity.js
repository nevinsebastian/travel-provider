import React, { useState } from 'react';
import './AddActivity.css'; // Import the CSS file

const AddActivity = () => {
  const [activityName, setActivityName] = useState('');
  const [activityTitle, setActivityTitle] = useState('');
  const [activityLocation, setActivityLocation] = useState('');
  const [activityImages, setActivityImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageArray = [];
    for (let i = 0; i < files.length; i++) {
      imageArray.push(files[i]);
    }
    setActivityImages(imageArray);
  };

  const handleAddActivity = () => {
    // Process and submit the data (activityName, activityTitle, activityLocation, and activityImages) to your backend or storage as needed.
  };

  return (
    <div className="add-activity-container">
      <h2>Add Activity</h2>
      <form className="add-activity-form">
        <div>
          <label>Activity Name:</label>
          <input
            className="add-activity-input"
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
        </div>
        <div>
          <label>Activity Title:</label>
          <input
            className="add-activity-input"
            type="text"
            value={activityTitle}
            onChange={(e) => setActivityTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Activity Location:</label>
          <input
            className="add-activity-input"
            type="text"
            value={activityLocation}
            onChange={(e) => setActivityLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Activity Images:</label>
          <input
            className="add-activity-input"
            type="file"
            multiple
            onChange={handleImageUpload}
          />
        </div>
        <div>
          <button
            className="add-activity-button"
            type="button"
            onClick={handleAddActivity}
          >
            Add Activity
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddActivity;

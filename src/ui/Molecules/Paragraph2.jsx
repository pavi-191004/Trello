import React from 'react';


function Paragraph2() {
  return (
    <div className="paragraph2-container">
      <div className="paragraph2-content">
        <div className="view-label">CHOOSE A VIEW</div>
        <div className="view-title">The board is just the beginning</div>
        <div className="view-description">
          Lists and cards are the building blocks of organizing work on a Trello board. <br></br>
          Grow from there with task assignments, timelines, <br></br>productivity metrics, calendars, and more.
        </div>
        <div className="learn-more">+ Learn more</div>
      </div>

      <div>
        <img src="/pic2.jpg" alt="Trello board" className="board-img2" />
      </div>
    </div>
  );
}

export default Paragraph2;

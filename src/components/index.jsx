import { useState } from "react";
import "./styles.css";
import { BsStarFill } from "react-icons/bs";
const StarRating = ({ stars = 5 }) => {
  // ----States----
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (id) => {
    setRating(rating == 1 ? null : id);
  };
  const hanldeHover = (id) => {
    setHover(id);
  };
  const hanldeLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <div className="title">
        <h1>Star Ratings</h1>
      </div>
      {stars
        ? [...Array(stars)].map((_, index) => {
            const id = index + 1;
            return (
              <BsStarFill
                size={60}
                className={id <= (rating || hover) ? "active" : ""}
                key={index}
                onClick={() => handleRating(id)}
                onMouseMove={() => hanldeHover(id)}
                onMouseLeave={hanldeLeave}
              />
            );
          })
        : null}
    </>
  );
};

export default StarRating;

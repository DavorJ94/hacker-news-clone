import React, { useEffect, useState } from "react";
import activeTab from "../utils/activeTabFunction";
import Story from "../Components/Story";
import checkIfFavorited from "../utils/checkIfFavorited";

export default function Favorites({ path }) {
  const [currentFavorites, setCurrentFavorites] = useState([]);
  const [rerender, setRerender] = useState(1);

  useEffect(() => {
    const values = Object.values(localStorage);
    setCurrentFavorites([...values]);
    activeTab(path);
  }, [path, rerender]);

  const handleRerender = () => {
    setRerender((prev) => prev + 1);
  };

  return (
    <table className="stories-container">
      <tbody>
        {currentFavorites.length ? (
          currentFavorites.map((item, index) => (
            <Story
              key={JSON.parse(item).id}
              story={JSON.parse(item)}
              order={index + 1}
              isFavorited={checkIfFavorited(JSON.parse(item))}
              updateRenderFavorite={handleRerender}
            />
          ))
        ) : (
          <tr>
            <td style={{ fontStyle: "italic" }}>
              There are no favorite stories at the moment.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

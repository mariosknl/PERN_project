import React, { useContext, useEffect } from "react";
import { RestaurantsContext } from "../context/RestaurantContext";
import RestaurantFinder from "../api/RestaurantFinder";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response);
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setRestaurants]);

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mcdonalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;

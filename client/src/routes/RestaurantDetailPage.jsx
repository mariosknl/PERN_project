import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { RestaurantsContext } from "../context/RestaurantContext";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });
  return (
    <div>
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;

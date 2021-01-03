import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import AddReviews from "../components/AddReviews";
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
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]);
  return (
    <div>
      <h1 className="text-center display-1">
        {selectedRestaurant && selectedRestaurant.restaurant.name}
      </h1>
      <div className="text-center">
        <StarRating
          rating={
            selectedRestaurant && selectedRestaurant.restaurant.average_rating
          }
        />
        <span className="text-warning ml-1">
          {selectedRestaurant && selectedRestaurant.restaurant.count
            ? `(${selectedRestaurant.restaurant.count})`
            : 0}
        </span>
      </div>
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReviews />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;

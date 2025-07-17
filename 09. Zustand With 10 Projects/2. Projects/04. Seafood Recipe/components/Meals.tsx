import { useEffect } from "react";
import { useStore } from "../store";

const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const responses = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await responses.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };
    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-teal-600">Seafood Recipes</h1>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center focus:outline-none focus:ring-2 focus:ring-teal-500"
        placeholder="Search for a meal..."
      />
      <div>
        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMeals.map((meal) => (
              <div
                className="bg-white shadow-md rounded-lg p-4 items-center"
                key={meal.idMeal}
              >
                <img
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <h2 className="text-xl font-semibold text-teal-700 mb-2">
                  {meal.strMeal}
                </h2>
              </div>
            ))}
          </div>
        ) : (
          <p>No Meals Found</p>
        )}
      </div>
    </div>
  );
};

export default Meals;

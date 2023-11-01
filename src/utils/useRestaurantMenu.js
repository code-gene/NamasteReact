import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRestaurantDetails } from "./cartSlice";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);
  const dispatch = useDispatch();

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();
      console.log("Fetch menu");
      console.log(json);

      setResInfo(json.data);
      dispatch(addRestaurantDetails(json?.data?.cards[0]?.card?.card?.info));
    };

    return resInfo;
}


export default useRestaurantMenu;
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();
      console.log(json);

      setResInfo(json.data);
    };

    return resInfo;
}


export default useRestaurantMenu;
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MENU_IMAGE_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const CategoryItemList = ({ items }) => {
  // console.log("ItemCards: ", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="py-4">
      <ul className="menu-list space-y-4 px-16">
        {items.map((item, index) => (
          <li
            key={item.card.info.id}
            className="menu-item bg-white shadow-md p-4 rounded-lg flex items-center relative"
          >
            <div className="menu-item-info flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {item.card.info.name}
              </h3>
              <p className="text-gray-600">{item.card.info.description}</p>
              <div className="menu-item-details mt-2">
                <span className="text-green-600 text-lg font-semibold">
                  {` ₹${(item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100
                  ).toFixed(2)}`}
                </span>
              </div>
            </div>
            {item.card.info.imageId ? (
              <div>
                <div className="absolute bottom-0 w-20 bg-transaparent text-white p-2 text-center font-normal text-sm flex justify-center">
                  <button
                    className="bg-black py-1 w-20 rounded-md"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
                <img
                  className="menu-item-image rounded-lg object-cover h-20 w-20"
                  alt="item-image"
                  src={MENU_IMAGE_URL + item.card.info.imageId}
                />
              </div>
            ) : (
              <div>
                <div className="absolute bottom-0 w-20 bg-transaparent text-white p-2 text-center font-normal text-sm flex justify-center">
                  <button
                    className="bg-black py-1 w-20 rounded-md"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
                <div className="menu-item-shimmer rounded-lg object-cover h-20 w-20 bg-gray-100"></div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItemList;

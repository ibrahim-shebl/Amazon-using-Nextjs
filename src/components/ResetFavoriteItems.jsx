import { resetFavoriteData } from "@/store/nextSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const ResetFavoriteItems = () => {
  const dispatch = useDispatch();

  const handleResetFavorite = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your favorite items?"
      
    );
    if (confirmReset) {
      dispatch(resetFavoriteData());
    }
  };

  return (
    <button
      onClick={handleResetFavorite}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Reset Favorites
    </button>
  );
};

export default ResetFavoriteItems;

import { useDispatch } from "react-redux";
import { toggle } from "../../services/reducers/refreshSlice";

export const useRefresh = () => {
  const dispatch = useDispatch();
  const booleanValue = useSelector((state) => state.refresh);

  const refresh = () => {};
  return { refresh };
};

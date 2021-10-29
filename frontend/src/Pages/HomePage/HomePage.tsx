import { useEffect } from "react";
import { useNav } from "../../Contexts/NavigationContext";


const HomePage = () => {

  const { setHome, handleSelect } = useNav();

  useEffect(() => {
    handleSelect(setHome);
  },[])

  return (
    <div>
        <h3>HomePage</h3>
    </div>
  );
}

export default HomePage;
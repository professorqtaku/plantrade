import { useEffect } from "react";
import { useNav } from "../../Contexts/NavigationContext";
import FloatingAddBtn from "../../Components/FloatingAddBtn/FloatingAddBtn";


const HomePage = () => {

  const { setHome, handleSelect } = useNav();

  useEffect(() => {
    handleSelect(setHome);
  },[])

  return (
    <div>
      <h3>HomePage</h3>
      <FloatingAddBtn/>
    </div>
  );
}

export default HomePage;
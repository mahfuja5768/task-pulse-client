import Banner from "../../components/Banner";
import Benefits from "../../components/Benefits";
import useAuth from "../../hooks/useAuth";
import DashBoard from "../DashBoard/DashBoard";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <Banner></Banner>
      {user && <DashBoard></DashBoard>}
      <Benefits></Benefits>
    </div>
  );
};

export default Home;

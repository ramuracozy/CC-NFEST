import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed";

const HomePage = () => {
  return (
    <div className="flex flex-1 max-w-full overflow-hidden">
      <div className="hidden xl:block w-1/5"><LeftBar /></div>
      <div className="w-full lg:w-3/5 xl:w-3/5 p-2">
        <div className="flex flex-col gap-2">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-1/5"><RightBar /></div>
    </div>
  );
};

export default HomePage;
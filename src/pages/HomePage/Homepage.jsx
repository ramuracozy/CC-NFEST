import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed";

const HomePage = () => {
  return (
    <div className="flex flex-row max-w-full min-h-screen bg-[#101726]">
      {/* LeftBar */}
      <div className="hidden md:block flex-shrink-0 w-64">
        <LeftBar />
      </div>
      {/* Feed */}
      <div className="flex-1 flex justify-center items-start py-8">
        <Feed />
      </div>
      {/* RightBar */}
      <div className="hidden lg:block flex-shrink-0 w-80">
        <RightBar />
      </div>
    </div>
  );
};

export default HomePage;
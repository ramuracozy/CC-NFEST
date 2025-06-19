import { Route } from "react-router-dom";
function LeftBar() {
  return (
    <div className="w-64 p-10 m-10 bg-gray-800 rounded-lg flex justify-center">
      <div className="space-y-4">
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/home.png" className="w-6 mr-5" /> Beranda
        </div>
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/notif.png" className="w-6 mr-5" /> Pemberitahuan
        </div>
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/add.png" className="w-6 mr-5" /> Posting
        </div>
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/setting.png" className="w-6 mr-5" /> Pengaturan
        </div>
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/help.png" className="w-6 mr-5" /> Bantuan
        </div>
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/info.png" className="w-6 mr-5" /> Tentang
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
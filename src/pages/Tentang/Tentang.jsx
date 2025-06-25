import React from 'react';

const Tentang = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#142649] to-[#2F5BAF] flex items-center justify-center p-5">
      <div className="w-full max-w-[600px] bg-white rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.1)] p-8 text-center">
        <h1 className="text-[#142649] text-[32px] font-bold mb-5">Tentang NFEST</h1>
        <p className="text-[#142649] text-sm mb-5">
          NFEST adalah aplikasi media sosial khusus untuk komunitas kampus kita. Aplikasi ini menghubungkan mahasiswa, dosen, dan organisasi kampus untuk tetap terinformasi tentang acara, kegiatan, dan peluang di kampus.
        </p>
        <h2 className="text-[#142649] text-xl font-bold mb-[15px]">Misi Kami</h2>
        <p className="text-[#142649] text-sm mb-5">
          NFEST berfokus pada acara dan event kampus, serta membangun jaringan antara mahasiswa dan kampus. Dengan NFEST, informasi kampus tersedia dalam satu platform, tanpa perlu bergantung pada media sosial lain.
        </p>
        <h2 className="text-[#142649] text-xl font-bold mb-[15px]">Fitur Utama</h2>
        <ul className="text-left text-[#142649] text-sm mb-5 pl-5 list-disc">
          <li className="mb-[10px]">Pusat Acara: Temukan dan ikuti acara kampus, dari seminar hingga festival.</li>
          <li className="mb-[10px]">Jaringan Komunitas: Terhubung dengan mahasiswa, klub, dan organisasi kampus.</li>
          <li className="mb-[10px]">Informasi Kampus: Dapatkan pengumuman langsung dari kampus secara real-time.</li>
          <li className="mb-[10px]">Aman & Mudah: Platform yang aman dan ramah pengguna untuk komunitas kampus.</li>
        </ul>
        <div className="flex justify-center">
          <a
            href="/"
            className="border border-[#142649] text-[#142649] text-xs font-light py-[6px] px-[12px] rounded-[5px] bg-transparent hover:bg-[#142649]/10 transition-all duration-300 no-underline"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
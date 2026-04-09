import React, { useState } from 'react';

function Header() {
  return (
    <header className="flex h-[72px] px-6 lg:px-12 py-3 justify-between items-center border-b border-gray-100 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center cursor-pointer">
        <img src="/images/SMD_logopurple.png" alt="SMD Logo" className="h-10 object-contain" />
      </div>

      <nav className="hidden md:flex items-center">
        <a href="#" className="text-[#5a2b81] hover:text-[#844391] font-bold px-4 py-3 whitespace-nowrap">Về SMD</a>
        <a href="#" className="text-[#5a2b81] hover:text-[#844391] font-bold px-4 py-3 whitespace-nowrap">Đào tạo</a>
        <a href="#" className="text-[#5a2b81] hover:text-[#844391] font-bold px-[24px] py-[12px] whitespace-nowrap">Nghiên cứu</a>
        <a href="#" className="text-[#6857F9] font-bold relative after:content-[''] px-4 py-3 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#6857F9] whitespace-nowrap">
          Đời sống sinh viên
        </a>
        <a href="#" className="text-[#5a2b81] hover:text-[#844391] font-bold px-4 py-3 whitespace-nowrap">Tuyển sinh</a>
      </nav>

      <div className="flex items-center space-x-6">
        <div className="flex items-center bg-white border border-[#844391] rounded-full p-0.5 cursor-pointer">
          <span className="px-3 py-1 text-sm text-[#5a2b81] font-bold">EN</span>
          <span className="px-3 py-1 text-sm bg-[#844391] text-white rounded-full font-bold">VI</span>
        </div>
        <button className="text-[#5a2b81] hover:text-[#844391]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-[600px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-tennis.png" 
          alt="Students playing tennis" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 mb-20 max-w-4xl mx-auto w-full">
        <h1 className="font-poppins text-[48px] sm:text-[64px] font-semibold leading-[120%] text-gradient mb-4">
          Đời sống sinh viên
        </h1>
        <p className="font-poppins text-[16px] sm:text-[20px] font-medium text-[#5a4281] leading-[120%] max-w-3xl px-4 text-center">
          Đời sống sinh viên SMD không chỉ gói gọn trong những giờ học trên giảng đường mà còn mở ra một hành trình đầy màu sắc của trải nghiệm, sáng tạo và kết nối. Khám phá ngay!
        </p>
      </div>
    </section>
  );
}

const PrimaryButton = ({ children }) => (
  <button className="bg-[#9A62C6] hover:bg-[#8A52BD] text-white px-10 py-3 rounded-full font-semibold transition-colors shadow-sm">
    {children}
  </button>
);

const LightButton = ({ children }) => (
  <button className="bg-[#DFD8FA] text-[#60499C] hover:bg-[#D0C6F5] px-6 py-2 rounded-full font-semibold text-sm transition-colors">
    {children}
  </button>
);

function NewsSection() {
  return (
    <section className="w-full relative">
      <div className="absolute inset-0 z-0 h-[400px] bg-gradient-to-b from-[#69539D] to-white"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <h2 className="text-white text-[36px] md:text-[44px] font-bold font-poppins mb-10">Tin nổi bật</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 group">
            <div className="overflow-hidden h-56">
                <img src="/images/stuttgart-exchange.jpg" alt="Sinh viên Gia Hân tại Stuttgart" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[#B369D7] text-sm font-semibold mb-2">Sinh viên trao đổi</span>
              <h3 className="font-bold text-gray-900 text-[18px] leading-[1.4]">Cuộc sống tại Stuttgart - Đức của sinh viên Gia Hân</h3>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 group">
            <div className="overflow-hidden h-56">
                <img src="/images/tu_phu_chau_ba.png" alt="Dự án Tứ Phủ Châu Bà" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[#B369D7] text-sm font-semibold mb-2">Dự án sinh viên</span>
              <h3 className="font-bold text-gray-900 text-[18px] leading-[1.4]">Trải nghiệm đạo Mẫu bằng công nghệ Thực tế ảo</h3>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 group">
            <div className="overflow-hidden h-56">
                <img src="/images/casting-call.jpg" alt="Casting Call MV UEH50" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[#B369D7] text-sm font-semibold mb-2">Sự kiện</span>
              <h3 className="font-bold text-gray-900 text-[18px] leading-[1.4]">Casting Call MV UEH50</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-[36px] md:text-[44px] font-bold font-poppins text-gradient">Sự kiện</h2>
        <PrimaryButton>Xem thêm</PrimaryButton>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[55%] flex flex-col group">
          <div className="relative rounded-3xl overflow-hidden h-[340px] md:h-[400px]">
            <img src="/images/collective-voice.jpg" alt="The Power of The Collective Voice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
            <div className="pr-4">
              <h3 className="font-bold text-lg md:text-[20px] mb-1">WORKSHOP BAN NHẠC ICO: THE POWER OF THE COLLECTIVE VOICE</h3>
              <p className="text-gray-500 font-medium text-sm">20:00 - 21:00, 25.03.2026</p>
            </div>
            <LightButton>Đăng kí ngay</LightButton>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-6">
          <div className="flex gap-4 group cursor-pointer">
             <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm shrink-0">
               <img src="/images/casting-call.jpg" alt="Casting" className="w-[150px] md:w-[180px] h-[110px] object-cover object-center group-hover:scale-110 transition-transform duration-500" />
             </div>
             <div className="flex flex-col justify-between py-1 flex-grow">
               <div>
                  <span className="text-[#9A62C6] text-xs font-bold mb-1 block">Hoạt động khoa</span>
                  <h4 className="font-bold text-[15px] leading-snug group-hover:text-[#9A62C6] transition-colors">Casting Call MV UEH</h4>
                  <p className="text-gray-500 text-xs mt-1">10.04.2026 - 11.04.2026</p>
               </div>
               <div className="self-start sm:self-end mt-2"><LightButton>Đăng kí ngay</LightButton></div>
             </div>
          </div>
          <hr className="border-gray-100 border-[1.5px]" />
          
          <div className="flex gap-4 group cursor-pointer">
             <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm shrink-0">
               <img src="/images/tech-project.jpg" alt="Tech project" className="w-[150px] md:w-[180px] h-[110px] object-cover group-hover:scale-110 transition-transform duration-500" />
             </div>
             <div className="flex flex-col justify-between py-1 flex-grow">
               <div>
                  <span className="text-[#9A62C6] text-xs font-bold mb-1 block">Chương trình trao đổi</span>
                  <h4 className="font-bold text-[15px] leading-snug group-hover:text-[#9A62C6] transition-colors">Chương trình Hè Quốc tế 2026: Design Futures</h4>
                  <p className="text-gray-500 text-xs mt-1">29.06.2026 - 12.07.2026</p>
               </div>
               <div className="self-start sm:self-end mt-2"><LightButton>Đăng kí ngay</LightButton></div>
             </div>
          </div>
          <hr className="border-gray-100 border-[1.5px]" />

          <div className="flex gap-4 group cursor-pointer">
             <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm shrink-0">
               <img src="/images/hackathon.jpg" alt="Hackathon" className="w-[150px] md:w-[180px] h-[110px] object-cover group-hover:scale-110 transition-transform duration-500" />
             </div>
             <div className="flex flex-col justify-between py-1 flex-grow">
               <div>
                  <span className="text-[#9A62C6] text-xs font-bold mb-1 block">Cuộc thi</span>
                  <h4 className="font-bold text-[15px] leading-snug group-hover:text-[#9A62C6] transition-colors">CUỘC THI HACKATHON UEH 50: BEYOND TIME - 50 UEH STORIES</h4>
                  <p className="text-gray-500 text-xs mt-1">23.01.2026 - 24.01.2026</p>
               </div>
               <div className="self-start sm:self-end mt-2"><LightButton>Đăng kí ngay</LightButton></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ExchangeSection() {
  const [activePin, setActivePin] = useState(null);
  
  const pins = [
    { id: 1, name: 'Germany', top: '35%', left: '46%', image: '/images/stuttgart-exchange.jpg', subtitle: 'Sinh viên Gia Hân', text: 'Cuộc sống tại Stuggart, Đức' },
    { id: 2, name: 'Italia', top: '40%', left: '50%', image: '/images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Trải nghiệm Ý' },
    { id: 3, name: 'China', top: '35%', left: '68%', image: '/images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Thực tập tại Trung Quốc' },
    { id: 4, name: 'Thailand', top: '50%', left: '72%', image: '/images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Trao đổi tại Thái Lan' },
    { id: 5, name: 'Macao', top: '45%', left: '78%', image: '/images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Dự án tại Macao' }
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 lg:px-12 py-20 min-h-[500px] flex items-center">
       {/* Background Map absolutely positioned */}
       <div className="absolute inset-0 z-0 pointer-events-none flex justify-end items-center opacity-70">
           <img src="/images/map.svg" alt="World Map" className="w-[90%] md:w-[70%] h-auto object-contain mr-10" />
       </div>
       
       <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-10">
        <h2 className="text-[36px] md:text-[44px] font-bold font-poppins text-[#9B64D3] mb-6 tracking-tight">Sinh viên trao đổi</h2>
        <p className="text-gray-900 font-medium text-[16px] md:text-lg leading-relaxed mb-8">
          Theo dấu những điểm đến mà sinh viên SMD đã đặt chân tới trên khắp thế giới. Mỗi địa điểm không chỉ là một chấm trên bản đồ, mà còn là những câu chuyện thật về cuộc sống, học tập và hành trình thích nghi nơi xứ người.
        </p>
        <PrimaryButton>Xem thêm</PrimaryButton>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
         <div className="relative w-full h-full max-w-6xl mx-auto">
            <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-auto">
               {pins.map((pin) => (
                  <div 
                    key={pin.id} 
                    className="absolute flex flex-col items-center z-10 hover:z-30" 
                    style={{ top: pin.top, left: pin.left }}
                    onMouseLeave={() => setActivePin(null)}
                  >
                     {activePin === pin.id && (
                        <div className="absolute bottom-10 w-[240px] bg-white rounded-xl shadow-xl overflow-hidden z-30 transition-all duration-300 pointer-events-none">
                           <img src={pin.image} alt={pin.name} className="w-full h-32 object-cover" />
                           <div className="p-3 bg-black/70 absolute bottom-0 w-full text-white">
                              <p className="text-xs font-bold">{pin.subtitle}</p>
                              <p className="text-[10px]">{pin.text}</p>
                           </div>
                        </div>
                     )}
                     <button 
                        onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                        className="w-8 h-8 flex items-center justify-center text-[#9B64D3] hover:text-[#844391] transform hover:scale-125 transition-transform relative z-20 cursor-pointer focus:outline-none"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                           <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span className="absolute -bottom-5 font-bold text-gray-800 text-xs whitespace-nowrap">{pin.name}</span>
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center">
      <h2 className="text-[36px] md:text-[44px] font-bold font-poppins text-gradient mb-6 text-center tracking-tight">Dự án sinh viên</h2>
      <p className="text-gray-800 font-medium text-[16px] md:text-lg leading-relaxed mb-12 text-center max-w-4xl">
        Khám phá những dự án sáng tạo do sinh viên SMD thực hiện, nơi ý tưởng được biến thành sản phẩm thực tế. Từ thiết kế, truyền thông đến nội dung số, mỗi dự án đều phản ánh góc nhìn riêng và hành trình phát triển của các nhà sáng tạo trẻ.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full mb-12 overflow-hidden rounded-[32px] shadow-2xl">
         <div className="relative group w-full h-[300px] md:h-[450px]">
            <img src="/images/tu_phu_chau_ba.png" alt="Tứ Phủ Châu Bà" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#A259FF]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1">
  <p className="text-white font-bold text-xl px-4 text-center tracking-wide">Công nghệ thực tế ảo</p>
  <p className="text-white font-bold text-lg px-4 text-center tracking-wide opacity-90">Nhóm Holdon</p>
</div>
         </div>
         <div className="relative group w-full h-[300px] md:h-[450px]">
            <img src="/images/thumbnail_brainrot.png" alt="Brainrot" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#A259FF]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-bold text-xl px-4 text-center tracking-wide">Sản xuất truyền thông</p>
          <p className="text-white font-bold text-xl px-4 text-center tracking-wide">Nhóm Memedia</p>
</div>
         </div>
         <div className="relative group w-full h-[300px] md:h-[450px]">
            <img src="/images/thumbnail_ytb.png" alt="Bên Trái Kiên Trình" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#A259FF]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-xl px-4 text-center tracking-wide">Sản xuất truyền thông</p>
              <p className="text-white font-bold text-xl px-4 text-center tracking-wide">Nhóm Memedia</p>
            </div> </div>
      </div>
      
      <PrimaryButton>Xem thêm</PrimaryButton>
    </section>
  );
}

function MomentsSection() {
  const overlayText = ['\"Halloween năm nay thật đặc biệt. Giữa những ngày học tập bận rộn, chúng mình đã có khoảnh khắc cùng nhau \"hóa thân\", cùng nhau vui và cùng nhau lưu giữ những kỷ niệm thật đẹp.\nCảm ơn cả lớp vì đã biến Halloween này thành một ký ức rực rỡ và đầy cảm xúc.\"','\“Là một sinh viên, mình đã quen với hình ảnh thầy cô của SMD nói riêng và của UEH nói chung luôn nghiêm túc và tận tâm đồng hành cùng mình trong từng bài tập, từng dự án với những góp ý đầy tâm huyết. Nhưng tại UEH Day, thầy cô lại xuất hiện với một diện mạo hoàn toàn khác – sôi nổi, hài hước và không ngại "hóa thân" để ủng hộ tinh thần cho đồng đội. Chỉ một lần tham gia nhưng để lại cho em rất nhiều ấn tượng. Đằng sau hình ảnh nghiêm túc thường ngày là những người thầy, người cô vô cùng gần gũi, năng động và tràn đầy năng lượng. Em xin cảm ơn SMD đã tạo cơ hội để em được trải nghiệm, kết nối và nhìn thấy một "phiên bản" khác đầy thú vị của giảng viên UEH!\”','\“Tấm ảnh này được tụi mình chụp vào một khung cảnh buổi chiều hoàng hôn trước cổng chính của Đại Học Thanh Hoa. Đối với mình tấm ảnh này không chỉ chứa đựng kỷ niệm của 3 chị em tụi mình, mà còn thể hiện tình bạn, sự hiếu khách của các bạn trẻ ở đất nước Trung Quốc. Tấm ảnh nhỏ nhắn được một cặp đôi chụp cho tụi mình, mặc dù gặp khó khăn trong giao tiếp khi họ không giỏi tiếng Anh, nhưng họ vẫn rất nhiệt tình giúp tụi mình chụp ảnh và tụi mình cũng vậy. Tụi mình không ngần ngại giúp họ có những tấm hình rất tâm đắc...\”','\“Bức ảnh lớp mình chụp trong buổi 20/10 (trễ) thật sự rạng rỡ và tươi tắn. Hôm đó, các bạn nữ ai cũng xinh đẹp nổi bật, còn các bạn nam thì rất nhiệt tình, chu đáo trong vai trò tổ chức. Mọi người cùng đứng sát bên nhau, trao nhau những nụ cười thật tươi và lời chúc mừng ý nghĩa. Tấm hình này gói trọn không khí vui vẻ, ấm áp và tinh thần đoàn kết tuyệt vời của cả lớp trong ngày tôn vinh Phụ nữ Việt Nam. Một kỷ niệm thật đẹp dành cho mọi người!\”'];
  return (
    <section className="bg-[#FDF6FF] py-24 w-full border-t border-b border-[#EACCF0]/50 mt-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-[36px] md:text-[44px] font-bold font-poppins text-gradient mb-6 text-center tracking-tight">SMD Moments</h2>
        <p className="text-gray-800 font-medium text-[16px] md:text-lg leading-relaxed mb-16 text-center max-w-4xl">
          Khám phá những dự án sáng tạo do sinh viên SMD thực hiện, nơi ý tưởng được biến thành sản phẩm thực tế. Từ thiết kế, truyền thông đến nội dung số...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {[1,2,3,4].map((i) => (
             <div key={i} className="relative group w-full overflow-hidden hover:-translate-y-2 transition-transform duration-300 rounded-[24px]">
                <img src={`/images/Moment_${i}.jpg`} alt={`Moment ${i}`} className="w-full h-auto object-contain drop-shadow-sm" />
                <div className="absolute inset-0 bg-[#3a1d52]/80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="text-white text-[10px] font-medium text-center leading-relaxed whitespace-pre-wrap">
                     {overlayText[i-1]}
                   </p>
                </div>
             </div>
          ))}
        </div>

        <PrimaryButton>Xem thêm</PrimaryButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#301D3D] text-white pt-20 pb-12 w-full font-poppins">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="col-span-1 md:col-span-8 flex flex-col">
           <div className="flex items-center gap-6 mb-12">
              <div className="text-white font-bold text-[36px] leading-tight flex flex-col">
                 <span>UEH</span>
                 <span className="text-[14px] font-semibold tracking-wide text-[#F26522] -mt-1">UNIVERSITY</span>
              </div>
              <div className="w-[2px] h-14 bg-gray-400 mx-2"></div>
              <div className="flex flex-col justify-center">
                 <p className="text-[16px] leading-snug font-medium">
                    College of<br/>Technology and Design
                 </p>
                 <div className="w-full h-[1px] bg-gray-400 my-1"></div>
                 <img src="/images/SMD_logowhite.png" alt="SMD" className="h-4 object-contain self-start mt-1" />
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-3 text-[17px]">Liên hệ</h4>
                <p className="text-[15px] text-gray-300 font-light mb-1">Điện thoại: +84 283 8295 299</p>
                <p className="text-[15px] text-gray-300 font-light">Email: smd@ueh.edu.vn</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-[17px]">Cơ sở</h4>
                <p className="text-[15px] text-gray-300 font-light leading-relaxed">279 Nguyễn Tri Phương, <br/>Phường Diên Hồng, Quận 10, TP.HCM</p>
              </div>
           </div>
        </div>

        <div className="col-span-1 md:col-span-4 flex flex-col md:pl-8">
           <h4 className="font-bold text-[17px] mb-6">Khám phá</h4>
           <ul className="space-y-4 text-gray-300 text-[15px] font-light">
             <li><a href="#" className="hover:text-white transition-colors">Về SMD</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Đào tạo</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Nghiên cứu</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Đời sống sinh viên</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Tuyển sinh</a></li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 border-t border-gray-600/30">
        <p className="text-sm text-gray-400 font-light leading-relaxed">
           Bản quyền © 2022. Đại học Kinh tế Thành phố Hồ Chí Minh.<br/>
           Đã đăng ký bản quyền. Phát triển bởi SMD.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full font-poppins text-gray-900 selection:bg-[#B369D7] selection:text-white">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <NewsSection />
        <EventSection />
        <ExchangeSection />
        <ProjectsSection />
        <MomentsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

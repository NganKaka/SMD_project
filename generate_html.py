import re
import os

with open('raw_translation.txt', 'r', encoding='utf-8') as f:
    text = f.read()

def extract_section(section_name):
    # Matches the return ( ... ); of a specific function
    match = re.search(r'function ' + section_name + r'\(\).*?return\s*\((.*?)\);', text, re.DOTALL)
    if not match: return ""
    return match.group(1).strip()

header = extract_section('Header')
hero = extract_section('Hero')
news = extract_section('NewsSection')
event = extract_section('EventSection')
projects = extract_section('ProjectsSection')
# We need to manually construct the MomentsSection since it has a map() mapping over [1,2,3,4]
moments_match = extract_section('MomentsSection')
# manual moments array text:
m_text = ['"Halloween năm nay thật đặc biệt. Giữa những ngày học tập bận rộn, chúng mình đã có khoảnh khắc cùng nhau \\"hóa thân\\", cùng nhau vui và cùng nhau lưu giữ những kỷ niệm thật đẹp.\\nCảm ơn cả lớp vì đã biến Halloween này thành một ký ức rực rỡ và đầy cảm xúc."',
          '“Là một sinh viên, mình đã quen với hình ảnh thầy cô của SMD nói riêng và của UEH nói chung luôn nghiêm túc và tận tâm đồng hành cùng mình trong từng bài tập, từng dự án với những góp ý đầy tâm huyết. Nhưng tại UEH Day, thầy cô lại xuất hiện với một diện mạo hoàn toàn khác – sôi nổi, hài hước và không ngại \\"hóa thân\\" để ủng hộ tinh thần cho đồng đội. Chỉ một lần tham gia nhưng để lại cho em rất nhiều ấn tượng. Đằng sau hình ảnh nghiêm túc thường ngày là những người thầy, người cô vô cùng gần gũi, năng động và tràn đầy năng lượng. Em xin cảm ơn SMD đã tạo cơ hội để em được trải nghiệm, kết nối và nhìn thấy một \\"phiên bản\\" khác đầy thú vị của giảng viên UEH!”',
          '“Tấm ảnh này được tụi mình chụp vào một khung cảnh buổi chiều hoàng hôn trước cổng chính của Đại Học Thanh Hoa. Đối với mình tấm ảnh này không chỉ chứa đựng kỷ niệm của 3 chị em tụi mình, mà còn thể hiện tình bạn, sự hiếu khách của các bạn trẻ ở đất nước Trung Quốc. Tấm ảnh nhỏ nhắn được một cặp đôi chụp cho tụi mình, mặc dù gặp khó khăn trong giao tiếp khi họ không giỏi tiếng Anh, nhưng họ vẫn rất nhiệt tình giúp tụi mình chụp ảnh và tụi mình cũng vậy. Tụi mình không ngần ngại giúp họ có những tấm hình rất tâm đắc...”',
          '“Bức ảnh lớp mình chụp trong buổi 20/10 (trễ) thật sự rạng rỡ và tươi tắn. Hôm đó, các bạn nữ ai cũng xinh đẹp nổi bật, còn các bạn nam thì rất nhiệt tình, chu đáo trong vai trò tổ chức. Mọi người cùng đứng sát bên nhau, trao nhau những nụ cười thật tươi và lời chúc mừng ý nghĩa. Tấm hình này gói trọn không khí vui vẻ, ấm áp và tinh thần đoàn kết tuyệt vời của cả lớp trong ngày tôn vinh Phụ nữ Việt Nam. Một kỷ niệm thật đẹp dành cho mọi người!”']
moments_html = ""
for i in range(1,5):
    moments_html += f"""
             <div class="relative group w-full overflow-hidden hover:-translate-y-2 transition-transform duration-300 rounded-[24px]">
                <img src="./images/Moment_{i}.jpg" alt="Moment {i}" class="w-full h-auto object-contain drop-shadow-sm" />
                <div class="absolute inset-0 bg-[#3a1d52]/80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p class="text-white text-[10px] font-medium text-center leading-relaxed whitespace-pre-wrap">{m_text[i-1]}</p>
                </div>
             </div>
"""
moments = f"""
    <section class="bg-[#FDF6FF] py-24 w-full border-t border-b border-[#EACCF0]/50 mt-10">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 class="text-[48px] font-semibold font-poppins text-[transparent] bg-clip-text bg-gradient-to-r from-[#9F53A4] to-[#776EFF] leading-[120%] mb-6 text-center tracking-tight">SMD Moments</h2>
        <p class="text-[#000000] font-medium text-[20px] leading-[120%] mb-16 text-justify max-w-4xl">
          Khám phá những dự án sáng tạo do sinh viên SMD thực hiện, nơi ý tưởng được biến thành sản phẩm thực tế. Từ thiết kế, truyền thông đến nội dung số, mỗi dự án đều phản ánh góc nhìn riêng và hành trình phát triển của các nhà sáng tạo trẻ.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
            {moments_html}
        </div>
        <a href="#" class="inline-block text-white font-poppins text-[16px] font-medium px-[30px] py-[20px] rounded-[30px] hover:opacity-85 transition-opacity duration-300 whitespace-nowrap" style="background: linear-gradient(180deg, #9F53A4 0%, #8763DB 80%, #776EFF 100%)">Xem thêm</a>
      </div>
    </section>
"""

footer = extract_section('Footer')

# Exchange Section logic handling pins
exchange_match = extract_section('ExchangeSection')
exchange_static = """
    <section class="relative w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 mt-20 flex flex-col pt-[100px] min-h-[600px]">
       <div class="relative z-10 w-full flex flex-col items-start pr-0 mt-[60px]">
        <h2 class="text-[48px] font-semibold font-poppins text-[transparent] bg-clip-text bg-gradient-to-r from-[#9F53A4] to-[#776EFF] leading-[120%] mb-6 tracking-tight relative z-20">Sinh viên trao đổi</h2>
        <p class="text-[#000000] font-medium text-[20px] leading-[120%] text-justify w-full max-w-2xl relative z-20 mb-8">
          Theo dấu những điểm đến mà sinh viên SMD đã đặt chân tới trên khắp thế giới. Mỗi địa điểm không chỉ là một chấm trên bản đồ, mà còn là những câu chuyện thật về cuộc sống, học tập và hành trình thích nghi nơi xứ người.
        </p>
        <div class="relative z-20"><a href="#" class="inline-block text-white font-poppins text-[16px] font-medium px-[30px] py-[20px] rounded-[30px] hover:opacity-85 transition-opacity duration-300 whitespace-nowrap" style="background: linear-gradient(180deg, #9F53A4 0%, #8763DB 80%, #776EFF 100%)">Xem thêm</a></div>
      </div>
      <div class="absolute inset-x-0 w-full flex justify-center items-center z-0 pointer-events-none" style="top: 20px;">
         <div class="relative w-full max-w-5xl pointer-events-auto" id="map-container">
            <img src="./images/map.svg" alt="World Map" class="w-full h-auto object-contain opacity-80" />
            <!-- mapped JS content -->
         </div>
      </div>
    </section>
"""

html_body = f"""
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SMD Landing Page Vanilla</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="style.css">
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          fontFamily: {{
            poppins: ['"Fz Poppins"', '"Poppins"', 'sans-serif'],
          }}
        }}
      }}
    }}
  </script>
</head>
<body class="min-h-screen flex flex-col w-full font-poppins text-gray-900 selection:bg-[#B369D7] selection:text-white">
  {header}
  <main class="flex-grow flex flex-col">
    {hero}
    {news}
    {event}
    {exchange_static}
    {projects}
    {moments}
  </main>
  {footer}

  <script src="script.js"></script>
</body>
</html>
"""

html_body = html_body.replace('text-gradient-vertical', 'text-[transparent] bg-clip-text bg-gradient-to-b from-[#9F53A4] to-[#776EFF]')
html_body = html_body.replace('text-gradient-horizontal', 'text-[transparent] bg-clip-text bg-gradient-to-r from-[#9F53A4] to-[#776EFF]')
html_body = html_body.replace("</>","").replace("<>","").replace("</ >","")
html_body = html_body.replace('"/images/', '"./images/')

os.makedirs('vanilla_html', exist_ok=True)
with open('vanilla_html/index.html', 'w', encoding='utf-8') as f:
    f.write(html_body)

script_js = '''
document.addEventListener("DOMContentLoaded", () => {
  const pins = [
    { id: 1, name: 'Germany', top: '20%', left: '48%', image: './images/stuttgart-exchange.jpg', subtitle: 'Sinh viên Gia Hân', text: 'Cuộc sống tại Stuggart, Đức' },
    { id: 2, name: 'Italia', top: '21%', left: '53%', image: './images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Trải nghiệm Ý' },
    { id: 3, name: 'China', top: '20%', left: '72%', image: './images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Thực tập tại Trung Quốc' },
    { id: 4, name: 'Thailand', top: '40%', left: '76%', image: './images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Trao đổi tại Thái Lan' },
    { id: 5, name: 'Macao', top: '36%', left: '80%', image: './images/stuttgart-exchange.jpg', subtitle: 'Sinh viên XYZ', text: 'Dự án tại Macao' }
  ];

  const mapContainer = document.getElementById('map-container');
  if(mapContainer) {
      pins.forEach(pin => {
        const pinDiv = document.createElement('div');
        pinDiv.className = "absolute flex flex-col items-center z-10 hover:z-30 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer";
        pinDiv.style.top = pin.top;
        pinDiv.style.left = pin.left;
        
        pinDiv.innerHTML = `
          <div class="popup-card hidden absolute bottom-8 w-[240px] bg-white rounded-xl shadow-xl overflow-hidden z-30 transition-all duration-300 pointer-events-none">
             <img src="${pin.image}" alt="${pin.name}" class="w-full h-32 object-cover" />
             <div class="p-3 bg-black/70 absolute bottom-0 w-full text-white">
                <p class="text-xs font-bold">${pin.subtitle}</p>
                <p class="text-[10px]">${pin.text}</p>
             </div>
          </div>
          <button class="pin-button w-8 h-8 flex items-center justify-center text-[#9B64D3] hover:text-[#844391] transform hover:scale-125 transition-transform relative z-20 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
               <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <span class="absolute -bottom-5 font-bold text-gray-800 text-xs whitespace-nowrap">${pin.name}</span>
          </button>
        `;
        
        pinDiv.addEventListener('mouseleave', () => {
           pinDiv.querySelector('.popup-card').classList.add('hidden');
        });
        
        pinDiv.querySelector('.pin-button').addEventListener('click', (e) => {
            document.querySelectorAll('.popup-card').forEach(c => c.classList.add('hidden'));
            pinDiv.querySelector('.popup-card').classList.remove('hidden');
            e.stopPropagation();
        });

        mapContainer.appendChild(pinDiv);
      });
      
      // Close popup if clicking outside
      document.addEventListener('click', () => {
          document.querySelectorAll('.popup-card').forEach(c => c.classList.add('hidden'));
      });
  }
});
'''
with open('vanilla_html/script.js', 'w', encoding='utf-8') as f:
    f.write(script_js)

style_css = '''
@font-face {
    font-family: "Fz Poppins";
    src: url("./fonts/fz-poppins-regular.woff2") format("woff2"); /* Modify with actual path */
    font-weight: 400;
}
@font-face {
    font-family: "Fz Poppins";
    src: url("./fonts/fz-poppins-medium.woff2") format("woff2");
    font-weight: 500;
}
@font-face {
    font-family: "Fz Poppins";
    src: url("./fonts/fz-poppins-semibold.woff2") format("woff2");
    font-weight: 600;
}

body {
    font-family: "Fz Poppins", "Poppins", sans-serif;
}
'''
with open('vanilla_html/style.css', 'w', encoding='utf-8') as f:
    f.write(style_css)

import shutil
if os.path.exists('public/images'):
    if not os.path.exists('vanilla_html/images'):
        shutil.copytree('public/images', 'vanilla_html/images')

print("Vanilla HTML export complete!")

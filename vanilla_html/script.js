
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

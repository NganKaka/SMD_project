import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Very basic translation
# Convert className to class
code = code.replace('className=', 'class=')
# Convert <PrimaryButton>Xem thêm</PrimaryButton>
primary_btn = """<a href="#" class="inline-block text-white font-poppins text-[16px] font-medium px-[30px] py-[20px] rounded-[30px] hover:opacity-85 transition-opacity duration-300 whitespace-nowrap" style="background: linear-gradient(180deg, #9F53A4 0%, #8763DB 80%, #776EFF 100%)">Xem thêm</a>"""
code = re.sub(r'<PrimaryButton>(.*?)</PrimaryButton>', primary_btn, code)

# Convert <LightButton>
light_btn = """<button class="bg-[#DFD8FA] text-[#60499C] hover:bg-[#D0C6F5] px-6 py-2 rounded-full font-semibold text-sm transition-colors whitespace-nowrap">\g<1></button>"""
code = re.sub(r'<LightButton>(.*?)</LightButton>', light_btn, code)

# Convert style={{...}}
code = re.sub(r'style=\{\{\s*backgroundImage:\s*\'([^\']+)\'\s*\}\}', r'style="background-image: \1"', code)
code = re.sub(r'style=\{\{\s*top:\s*\'([^\']+)\'\s*\}\}', r'style="top: \1"', code)

# Clean up SVG
code = code.replace('fillRule', 'fill-rule').replace('clipRule', 'clip-rule').replace('strokeLinecap', 'stroke-linecap').replace('strokeLinejoin', 'stroke-linejoin').replace('strokeWidth', 'stroke-width')

with open('raw_translation.txt', 'w', encoding='utf-8') as f:
    f.write(code)

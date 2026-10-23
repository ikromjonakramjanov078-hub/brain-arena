
const QUESTIONS = [
  // TARIX — OSON
  {category:"history",difficulty:"easy",q:"O‘zbekiston qachon davlat mustaqilligini e’lon qilgan?",a:["1991-yil 31-avgust","1991-yil 1-sentabr","1992-yil 8-dekabr","1990-yil 20-iyun"],correct:0},
  {category:"history",difficulty:"easy",q:"O‘zbekiston Respublikasi Mustaqillik kuni qaysi sana?",a:["31-avgust","1-sentabr","8-dekabr","21-mart"],correct:1},
  {category:"history",difficulty:"easy",q:"Amir Temur davlatining poytaxti qaysi shahar bo‘lgan?",a:["Buxoro","Xiva","Samarqand","Toshkent"],correct:2},
  {category:"history",difficulty:"easy",q:"Qadimgi Misr sivilizatsiyasi qaysi daryo bo‘yida rivojlangan?",a:["Nil","Dajla","Amudaryo","Gang"],correct:0},
  {category:"history",difficulty:"easy",q:"O‘zbekiston Respublikasining Konstitutsiyasi ilk bor qachon qabul qilingan?",a:["1991-yil 31-avgust","1992-yil 8-dekabr","1993-yil 1-sentabr","1990-yil 20-iyun"],correct:1},
  {category:"history",difficulty:"easy",q:"Buyuk Ipak yo‘li asosan nimaga xizmat qilgan?",a:["Faqat harbiy yurishlarga","Faqat dehqonchilikka","Savdo va madaniy aloqalarga","Faqat dengiz qatnoviga"],correct:2},
  {category:"history",difficulty:"easy",q:"Jaloliddin Manguberdi qaysi davlat hukmdori bo‘lgan?",a:["Xorazmshohlar davlati","Qoraxoniylar davlati","Somoniylar davlati","Temuriylar davlati"],correct:0},
  {category:"history",difficulty:"easy",q:"Qaysi shahar O‘zbekistonning poytaxti?",a:["Samarqand","Toshkent","Buxoro","Andijon"],correct:1},
  {category:"history",difficulty:"easy",q:"Qadimgi Olimpiya o‘yinlari qaysi hududda boshlangan?",a:["Qadimgi Rim","Qadimgi Misr","Qadimgi Yunoniston","Qadimgi Xitoy"],correct:2},
  {category:"history",difficulty:"easy",q:"Mirzo Ulug‘bek tarixda asosan qaysi faoliyati bilan mashhur?",a:["Astronomiya va ilm-fan","Dengizchilik","Bosmaxona ixtirosi","Bug‘ mashinasi"],correct:0},
  {category:"history",difficulty:"easy",q:"O‘zbekiston bayrog‘i qachon qabul qilingan?",a:["1992-yil 8-dekabr","1991-yil 18-noyabr","1991-yil 31-avgust","1992-yil 2-iyul"],correct:1},
  {category:"history",difficulty:"easy",q:"Zahiriddin Muhammad Bobur qaysi asar muallifi?",a:["Qutadg‘u bilig","Devonu lug‘otit turk","Boburnoma","Hamsa"],correct:2},
  {category:"history",difficulty:"easy",q:"Qadimgi Rimda gladiatorlar asosan qayerda jang qilgan?",a:["Amfiteatrlarda","Piramidalarda","Rasadxonalarda","Kutubxonalarda"],correct:0},
  {category:"history",difficulty:"easy",q:"Ikkinchi jahon urushi qaysi yilda tugagan?",a:["1941-yil","1945-yil","1939-yil","1950-yil"],correct:1},
  {category:"history",difficulty:"easy",q:"Samarqanddagi Registon tarixiy majmuasi qaysi davlat hududida joylashgan?",a:["Qozog‘iston","Tojikiston","O‘zbekiston","Turkmaniston"],correct:2},
  {category:"history",difficulty:"easy",q:"Qadimgi Misr hukmdorlari qanday nomlangan?",a:["Fir’avnlar","Konsullar","Xonlar","Sultonlar"],correct:0},
  {category:"history",difficulty:"easy",q:"Amir Temur qaysi yilda tug‘ilgan?",a:["1336-yil","1405-yil","1395-yil","1301-yil"],correct:0},
  {category:"history",difficulty:"easy",q:"Birinchi jahon urushi qaysi yillarda bo‘lib o‘tgan?",a:["1939–1945","1914–1918","1900–1905","1920–1925"],correct:1},
  {category:"history",difficulty:"easy",q:"O‘zbekiston gerbi qachon qabul qilingan?",a:["1991-yil 18-noyabr","1992-yil 2-iyul","1992-yil 8-dekabr","1993-yil 1-sentabr"],correct:1},
  {category:"history",difficulty:"easy",q:"Jadidlar harakati asosan nimani rivojlantirishga intilgan?",a:["Ma’rifat va ta’limni","Faqat ko‘chmanchilikni","Quldorlikni","Faqat dengiz savdosini"],correct:0},

  // TARIX — O‘RTA
  {category:"history",difficulty:"medium",q:"Amir Temur qaysi yilda tug‘ilgan?",a:["1320-yil","1336-yil","1370-yil","1405-yil"],correct:1},
  {category:"history",difficulty:"medium",q:"Mirzo Ulug‘bek rasadxonasi qaysi shaharda joylashgan?",a:["Buxoro","Xiva","Samarqand","Termiz"],correct:2},
  {category:"history",difficulty:"medium",q:"Alisher Navoiy yaratgan besh doston majmuasi qanday ataladi?",a:["Xamsa","Boburnoma","Shohnoma","Zafarnoma"],correct:0},
  {category:"history",difficulty:"medium",q:"Qoraxoniylar davrida yozilgan Yusuf Xos Hojib asari qaysi?",a:["Hibat ul-haqoyiq","Qutadg‘u bilig","Devoni Hikmat","Muhokamat ul-lug‘atayn"],correct:1},
  {category:"history",difficulty:"medium",q:"Abu Rayhon Beruniy qaysi fanlar bilan shug‘ullangan?",a:["Faqat musiqa","Faqat harbiy ish","Astronomiya, geografiya va boshqa fanlar","Faqat me’morchilik"],correct:2},
  {category:"history",difficulty:"medium",q:"Jadidchilik harakatining asosiy maqsadlaridan biri nima edi?",a:["Yangi usul maktablarini rivojlantirish","Ilmiy ta’limni taqiqlash","Savdoni butunlay to‘xtatish","Shaharlarni tark etish"],correct:0},
  {category:"history",difficulty:"medium",q:"Xorazmshohlar davlatiga mo‘g‘ullar yurishi qaysi asr boshida boshlangan?",a:["XI asr","XIII asr","XV asr","XVII asr"],correct:1},
  {category:"history",difficulty:"medium",q:"Qadimgi Yunonistonda demokratiya bilan mashhur bo‘lgan shahar-davlat qaysi?",a:["Sparta","Korinf","Afina","Milet"],correct:2},
  {category:"history",difficulty:"medium",q:"Fransuz inqilobi qaysi yilda boshlangan?",a:["1789-yil","1776-yil","1812-yil","1848-yil"],correct:0},
  {category:"history",difficulty:"medium",q:"Buyuk geografik kashfiyotlar davrida Amerikaga 1492-yilda yetib borgan dengizchi kim?",a:["Vasko da Gama","Xristofor Kolumb","Fernan Magellan","Jeyms Kuk"],correct:1},
  {category:"history",difficulty:"medium",q:"Buxoro amirligi tugatilgan yil qaysi?",a:["1914-yil","1917-yil","1920-yil","1924-yil"],correct:2},
  {category:"history",difficulty:"medium",q:"O‘zbekiston BMTga qachon a’zo bo‘lgan?",a:["1992-yil 2-mart","1991-yil 1-sentabr","1993-yil 8-dekabr","1995-yil 9-may"],correct:0},
  {category:"history",difficulty:"medium",q:"Qadimgi Mesopotamiya qaysi ikki daryo oralig‘ida joylashgan?",a:["Nil va Kongo","Dajla va Frot","Amudaryo va Sirdaryo","Gang va Hind"],correct:1},
  {category:"history",difficulty:"medium",q:"Rim imperiyasining g‘arbiy qismi an’anaviy ravishda qaysi yilda qulagan deb hisoblanadi?",a:["395-yil","410-yil","476-yil","800-yil"],correct:2},
  {category:"history",difficulty:"medium",q:"Amir Temur saltanatining asosiy siyosiy markazi qaysi shahar edi?",a:["Samarqand","Urganch","Qo‘qon","O‘sh"],correct:0},
  {category:"history",difficulty:"medium",q:"Ma’rifatparvar jadid Mahmudxo‘ja Behbudiy qaysi sohalarda faoliyat yuritgan?",a:["Faqat harbiy boshqaruvda","Ma’rifat, matbuot va dramaturgiyada","Faqat dengizchilikda","Faqat savdo flotida"],correct:1},
  {category:"history",difficulty:"medium",q:"Birinchi jahon urushi qaysi yilda boshlangan?",a:["1905-yil","1910-yil","1914-yil","1918-yil"],correct:2},
  {category:"history",difficulty:"medium",q:"AQSH Mustaqillik deklaratsiyasi qaysi yilda qabul qilingan?",a:["1776-yil","1789-yil","1815-yil","1865-yil"],correct:0},
  {category:"history",difficulty:"medium",q:"Temuriylar davrida Hirotda ijod qilgan mashhur shoir kim?",a:["Firdavsiy","Abdurahmon Jomiy","Dante","Shekspir"],correct:1},
  {category:"history",difficulty:"medium",q:"O‘zbekiston Respublikasi Konstitutsiyasining yangi tahriri referendum orqali qaysi yilda qabul qilingan?",a:["2017-yil","2020-yil","2023-yil","2025-yil"],correct:2},

  // TARIX — QIYIN
  {category:"history",difficulty:"hard",q:"Amir Temur va Boyazid I qo‘shinlari o‘rtasidagi Anqara jangi qaysi yilda bo‘lgan?",a:["1402-yil","1389-yil","1410-yil","1425-yil"],correct:0},
  {category:"history",difficulty:"hard",q:"Mirzo Ulug‘bekning mashhur astronomik asari qaysi?",a:["Boburnoma","Ziji jadidi Ko‘ragoniy","Qutadg‘u bilig","Qonuni Mas’udiy"],correct:1},
  {category:"history",difficulty:"hard",q:"Jadidchilikning Turkistondagi yetakchi namoyandalaridan biri bo‘lgan Munavvarqori Abdurashidxonov qaysi sohada faol bo‘lgan?",a:["Dengiz tadqiqotlari","Rim huquqi","Ma’rifat va yangi usul ta’limi","Sanoat mashinasozligi"],correct:2},
  {category:"history",difficulty:"hard",q:"Vestfaliya tinchligi qaysi yilda tuzilgan?",a:["1648-yil","1492-yil","1789-yil","1815-yil"],correct:0},
  {category:"history",difficulty:"hard",q:"Magna Carta Angliyada qaysi yilda qabul qilingan?",a:["1066-yil","1215-yil","1348-yil","1485-yil"],correct:1},
  {category:"history",difficulty:"hard",q:"Konstantinopol Usmonli turklar tomonidan qaysi yilda egallangan?",a:["1204-yil","1402-yil","1453-yil","1492-yil"],correct:2},
  {category:"history",difficulty:"hard",q:"Buxoro Xalq Sovet Respublikasi qaysi yilda tashkil topgan?",a:["1920-yil","1917-yil","1924-yil","1936-yil"],correct:0},
  {category:"history",difficulty:"hard",q:"Fransiyada Napoleon Bonapart imperator deb qachon e’lon qilingan?",a:["1789-yil","1804-yil","1815-yil","1848-yil"],correct:1},
  {category:"history",difficulty:"hard",q:"Qadimgi Rim Respublikasida Puni urushlari qaysi ikki kuch o‘rtasida bo‘lgan?",a:["Rim va Misr","Afina va Sparta","Rim va Karfagen","Fors va Bobil"],correct:2},
  {category:"history",difficulty:"hard",q:"Brest-Litovsk shartnomasi qaysi yilda imzolangan?",a:["1918-yil","1914-yil","1922-yil","1939-yil"],correct:0},
  {category:"history",difficulty:"hard",q:"Qadimgi Xitoyda Sin sulolasi Xitoyni birlashtirgan davr qaysi?",a:["Milodiy II asr","Miloddan avvalgi III asr","Miloddan avvalgi I asr","Milodiy VII asr"],correct:1},
  {category:"history",difficulty:"hard",q:"Buyuk Britaniyada sanoat inqilobi dastlab qaysi asrda boshlandi?",a:["XV asr","XVI asr","XVIII asr","XX asr"],correct:2},
  {category:"history",difficulty:"hard",q:"Versal shartnomasi Birinchi jahon urushidan so‘ng qaysi yilda imzolangan?",a:["1919-yil","1914-yil","1929-yil","1945-yil"],correct:0},
  {category:"history",difficulty:"hard",q:"Amir Temur vafot etgan yil qaysi?",a:["1402-yil","1405-yil","1411-yil","1420-yil"],correct:1},
  {category:"history",difficulty:"hard",q:"Renessans dastlab Yevropaning qaysi hududida yuksalgan?",a:["Skandinaviya","Bolqon yarimoroli","Italiya","Sharqiy Yevropa"],correct:2},

  // IT — OSON
  {category:"it",difficulty:"easy",q:"HTML nima uchun ishlatiladi?",a:["Veb-sahifa tuzilmasi uchun","Rasm chizish uchun","Faqat hisoblash uchun","Kompyuterni ta’mirlash uchun"],correct:0},
  {category:"it",difficulty:"easy",q:"CSS vazifasi nima?",a:["Ma’lumotlar bazasini boshqarish","Veb-sahifa ko‘rinishini bezash","Operatsion tizim yaratish","Fayllarni siqish"],correct:1},
  {category:"it",difficulty:"easy",q:"JavaScript asosan nima uchun ishlatiladi?",a:["Faqat matn terish","Faqat rasm saqlash","Veb-sahifaga interaktivlik qo‘shish","Monitorni sozlash"],correct:2},
  {category:"it",difficulty:"easy",q:"Python tilida ekranga matn chiqarish buyrug‘i qaysi?",a:["print()","showText()","echoLine()","outputText()"],correct:0},
  {category:"it",difficulty:"easy",q:"Kompyuterning asosiy hisoblash qurilmasi qaysi?",a:["Klaviatura","Protsessor","Sichqoncha","Printer"],correct:1},
  {category:"it",difficulty:"easy",q:"HTML hujjatining asosiy kengaytmasi qaysi?",a:[".css",".js",".html",".py"],correct:2},
  {category:"it",difficulty:"easy",q:"Python tilida izoh qaysi belgi bilan boshlanadi?",a:["#","//","<!--","**"],correct:0},
  {category:"it",difficulty:"easy",q:"Klaviatura qanday qurilma?",a:["Chiqarish","Kiritish","Saqlash","Tarmoq"],correct:1},
  {category:"it",difficulty:"easy",q:"Fayllarni uzoq muddat saqlash uchun qaysi qurilma ishlatiladi?",a:["Monitor","Mikrofon","SSD yoki HDD","Sichqoncha"],correct:2},
  {category:"it",difficulty:"easy",q:"Python tilida matn qanday turga kiradi?",a:["str","int","bool","float"],correct:0},
  {category:"it",difficulty:"easy",q:"CSS fayli odatda qaysi kengaytmaga ega?",a:[".html",".css",".java",".docx"],correct:1},
  {category:"it",difficulty:"easy",q:"Brauzer nima qiladi?",a:["Faqat video montaj qiladi","Kompyuterni yoqadi","Veb-sahifalarni ochadi","Faqat matn chop etadi"],correct:2},

  // IT — O‘RTA
  {category:"it",difficulty:"medium",q:"Python tilida ro‘yxat qaysi qavs bilan yoziladi?",a:["[ ]","{ }","( )","< >"],correct:0},
  {category:"it",difficulty:"medium",q:"JavaScriptda o‘zgarmas qiymat e’lon qilish uchun qaysi kalit so‘z ishlatiladi?",a:["var","const","print","static"],correct:1},
  {category:"it",difficulty:"medium",q:"HTMLda havola yaratish tegi qaysi?",a:["<p>","<img>","<a>","<table>"],correct:2},
  {category:"it",difficulty:"medium",q:"Python funksiyasi qaysi kalit so‘z bilan e’lon qilinadi?",a:["def","func","function","method"],correct:0},
  {category:"it",difficulty:"medium",q:"CSSda matn rangini o‘zgartiradigan xususiyat qaysi?",a:["font-style","color","background-image","margin"],correct:1},
  {category:"it",difficulty:"medium",q:"Ma’lumotlar bazasida jadvaldan ma’lumot olish uchun qaysi SQL buyrug‘i ishlatiladi?",a:["DELETE","UPDATE","SELECT","DROP"],correct:2},
  {category:"it",difficulty:"medium",q:"Python lug‘ati qaysi ko‘rinishda ma’lumot saqlaydi?",a:["Kalit va qiymat juftliklari","Faqat tartiblangan belgilar","Faqat sonlar","Faqat fayl manzillari"],correct:0},
  {category:"it",difficulty:"medium",q:"Git dasturi asosan nima uchun kerak?",a:["Video ko‘rish","Versiyalarni boshqarish","Matnni tarjima qilish","Kompyuterni sovitish"],correct:1},
  {category:"it",difficulty:"medium",q:"HTMLda rasm qo‘shish tegi qaysi?",a:["<picturetext>","<photo>","<img>","<mediafile>"],correct:2},
  {category:"it",difficulty:"medium",q:"Python tilida tenglikni tekshirish operatori qaysi?",a:["==","=","!=","=>"],correct:0},
  {category:"it",difficulty:"medium",q:"JavaScriptda massivning birinchi elementi odatda qaysi indeksda turadi?",a:["1","0","-1","2"],correct:1},
  {category:"it",difficulty:"medium",q:"Responsive dizayn nimani anglatadi?",a:["Faqat kompyuterga mos dizayn","Faqat qora fon","Turli ekran o‘lchamlariga moslashadigan dizayn","Faqat animatsiya"],correct:2},

  // IT — QIYIN
  {category:"it",difficulty:"hard",q:"Python generator funksiyasi odatda qaysi kalit so‘z bilan qiymat uzatadi?",a:["yield","returnall","sendback","continue"],correct:0},
  {category:"it",difficulty:"hard",q:"SQLda guruhlangan natijalarni shart bilan filtrlash uchun qaysi kalit so‘z ishlatiladi?",a:["WHERE","HAVING","ORDER BY","LIMIT"],correct:1},
  {category:"it",difficulty:"hard",q:"Vaqt murakkabligi O(n log n) bo‘lgan algoritmga qaysi misol mos keladi?",a:["Oddiy chiziqli qidiruv","Pufakcha saralashning odatiy holati","Birlashtirib saralash","Bitta elementga murojaat"],correct:2},
  {category:"it",difficulty:"hard",q:"HTTP 404 javob kodi nimani bildiradi?",a:["Resurs topilmadi","So‘rov muvaffaqiyatli","Server doimiy ko‘chdi","Ruxsat berildi"],correct:0},
  {category:"it",difficulty:"hard",q:"Ma’lumotlar bazasida birlamchi kalitning asosiy vazifasi nima?",a:["Jadvalni bezash","Yozuvni yagona aniqlash","Parolni ko‘rsatish","Zaxira nusxa yaratish"],correct:1},
  {category:"it",difficulty:"hard",q:"JavaScriptda Promise qaysi holatlarga ega bo‘lishi mumkin?",a:["Faqat ochiq va yopiq","Faqat to‘g‘ri va noto‘g‘ri","Pending, fulfilled, rejected","Faqat ishga tushgan"],correct:2},

  // MANTIQ
  {category:"logic",difficulty:"easy",q:"Ketma-ketlikni davom ettiring: 2, 4, 6, 8, ...",a:["10","11","12","14"],correct:0},
  {category:"logic",difficulty:"easy",q:"Bir haftada necha kun bor?",a:["5","7","8","10"],correct:1},
  {category:"logic",difficulty:"easy",q:"Barcha mushuklar hayvon. Momiq mushuk. Demak, Momiq nima?",a:["Qush","Baliq","Hayvon","O‘simlik"],correct:2},
  {category:"logic",difficulty:"easy",q:"Ketma-ketlik: 5, 10, 15, 20, ...",a:["25","22","30","24"],correct:0},
  {category:"logic",difficulty:"medium",q:"Ketma-ketlik: 1, 1, 2, 3, 5, 8, ...",a:["11","13","15","16"],correct:1},
  {category:"logic",difficulty:"medium",q:"3 ta mashina 3 daqiqada 3 ta detal tayyorlasa, 6 ta mashina 6 ta detalni necha daqiqada tayyorlaydi?",a:["1 daqiqada","2 daqiqada","3 daqiqada","6 daqiqada"],correct:2},
  {category:"logic",difficulty:"medium",q:"Bugun seshanba bo‘lsa, 10 kundan keyin qaysi kun bo‘ladi?",a:["Juma","Payshanba","Shanba","Yakshanba"],correct:0},
  {category:"logic",difficulty:"hard",q:"Barcha A lar B, barcha B lar C bo‘lsa, barcha A lar C bo‘ladimi?",a:["Yo‘q","Ha","Faqat ba’zilari","Aniqlab bo‘lmaydi"],correct:1},
  {category:"logic",difficulty:"hard",q:"Soat 3:00 da soat va daqiqa millari orasidagi kichik burchak necha gradus?",a:["60°","45°","90°","180°"],correct:2},

  // MATEMATIKA
  {category:"math",difficulty:"easy",q:"12 × 8 nechaga teng?",a:["96","86","108","88"],correct:0},
  {category:"math",difficulty:"easy",q:"144 ning kvadrat ildizi nechaga teng?",a:["10","12","14","16"],correct:1},
  {category:"math",difficulty:"easy",q:"200 ning 25 foizi nechaga teng?",a:["25","40","50","75"],correct:2},
  {category:"math",difficulty:"medium",q:"Agar 3x + 5 = 20 bo‘lsa, x nechaga teng?",a:["5","3","7","10"],correct:0},
  {category:"math",difficulty:"medium",q:"Tomoni 6 sm bo‘lgan kvadratning yuzi qancha?",a:["12 sm²","36 sm²","24 sm²","30 sm²"],correct:1},
  {category:"math",difficulty:"medium",q:"2, 3, 4, 5 sonlarining arifmetik o‘rtachasi qancha?",a:["3","4","3,5","5"],correct:2},
  {category:"math",difficulty:"hard",q:"x² − 9 = 0 tenglamaning haqiqiy yechimlari qaysi?",a:["−3 va 3","Faqat 3","Faqat −3","0 va 9"],correct:0},
  {category:"math",difficulty:"hard",q:"Uchburchak ichki burchaklari yig‘indisi qancha?",a:["90°","180°","270°","360°"],correct:1},

  // TABIIY FANLAR
  {category:"science",difficulty:"easy",q:"Suvning kimyoviy formulasi qaysi?",a:["CO₂","O₂","H₂O","NaCl"],correct:2},
  {category:"science",difficulty:"easy",q:"Yerning tabiiy yo‘ldoshi nima?",a:["Oy","Mars","Quyosh","Venera"],correct:0},
  {category:"science",difficulty:"easy",q:"O‘simliklar fotosintez jarayonida qaysi gazni yutadi?",a:["Kislorod","Karbonat angidrid","Azot","Vodorod"],correct:1},
  {category:"science",difficulty:"medium",q:"Suv normal atmosfera bosimida necha °C da qaynaydi?",a:["50°C","90°C","100°C","120°C"],correct:2},
  {category:"science",difficulty:"medium",q:"Elektr tok kuchining o‘lchov birligi qaysi?",a:["Amper","Volt","Om","Vatt"],correct:0},
  {category:"science",difficulty:"medium",q:"Inson organizmida qonni haydaydigan asosiy a’zo qaysi?",a:["O‘pka","Yurak","Jigar","Buyrak"],correct:1},
  {category:"science",difficulty:"hard",q:"Atom yadrosida qaysi zarrachalar joylashadi?",a:["Faqat elektronlar","Faqat fotonlar","Proton va neytronlar","Faqat molekulalar"],correct:2},
  {category:"science",difficulty:"hard",q:"Yer atmosferasida eng ko‘p uchraydigan gaz qaysi?",a:["Azot","Kislorod","Karbonat angidrid","Vodorod"],correct:0},

  // UMUMIY BILIM
  {category:"general",difficulty:"easy",q:"Yer yuzidagi eng katta okean qaysi?",a:["Atlantika","Tinch okeani","Hind okeani","Shimoliy Muz okeani"],correct:1},
  {category:"general",difficulty:"easy",q:"Yilning nechta oyi 28 kundan kam bo‘lmagan muddatga ega?",a:["1 ta","6 ta","12 ta","11 ta"],correct:2},
  {category:"general",difficulty:"easy",q:"Quyosh qaysi tomondan chiqadi?",a:["Sharqdan","G‘arbdan","Shimoldan","Janubdan"],correct:0},
  {category:"general",difficulty:"medium",q:"Dunyodagi eng katta materik qaysi?",a:["Afrika","Yevrosiyo","Avstraliya","Antarktida"],correct:1},
  {category:"general",difficulty:"medium",q:"BMT tashkiloti qaysi yilda tuzilgan?",a:["1919-yil","1939-yil","1945-yil","1955-yil"],correct:2},
  {category:"general",difficulty:"medium",q:"Bir kilometr necha metrga teng?",a:["1000 metr","100 metr","10 000 metr","500 metr"],correct:0},
  {category:"general",difficulty:"hard",q:"Xalqaro birliklar tizimida (SI) haroratning asosiy birligi qaysi?",a:["Selsiy darajasi","Kelvin","Farengeyt","Joul"],correct:1},
  {category:"general",difficulty:"hard",q:"Dunyodagi eng chuqur okean botiqlaridan biri bo‘lgan Mariana botig‘i qaysi okeanda?",a:["Atlantika","Hind","Tinch","Shimoliy Muz"],correct:2}
];

const CATEGORY_NAMES = {
  all: "BARCHA FANLAR",
  history: "TARIX",
  it: "DASTURLASH VA IT",
  logic: "MANTIQ",
  math: "MATEMATIKA",
  science: "TABIIY FANLAR",
  general: "UMUMIY BILIM"
};

const DIFFICULTY_NAMES = {
  easy: "OSON",
  medium: "O‘RTA",
  hard: "QIYIN",
  mixed: "ARALASH"
};

const $ = id => document.getElementById(id);

let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let selectedAnswer = null;
let timerId = null;
let timeLeft = 20;
let gameActive = false;
let startedAt = 0;

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top: 0, behavior: "smooth"});
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("brainArenaHistory") || "[]");
  } catch {
    return [];
  }
}

function saveHistory(item) {
  const history = getHistory();
  history.unshift(item);
  localStorage.setItem("brainArenaHistory", JSON.stringify(history.slice(0, 20)));
}

function updateDashboard() {
  $("totalQuestions").textContent = QUESTIONS.length;
  const history = getHistory();
  $("gamesPlayed").textContent = history.length;
  $("bestScore").textContent = history.length ? Math.max(...history.map(x => x.score)) : 0;

  const list = $("historyList");
  if (!history.length) {
    list.innerHTML = '<div class="empty-history">Hali natija yo‘q. Birinchi o‘yinni boshlang!</div>';
    return;
  }

  list.innerHTML = history.slice(0, 5).map(item => `
    <div class="history-item">
      <div>
        <strong>${escapeHTML(item.category)}</strong>
        <div style="color:var(--muted);margin-top:5px">${escapeHTML(item.date)} · ${item.correct}/${item.total} to‘g‘ri</div>
      </div>
      <strong>${item.score} ball</strong>
    </div>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);
}

function startGame() {
  clearInterval(timerId);

  const category = $("category").value;
  const difficulty = $("difficulty").value;
  const requestedCount = Number($("questionCount").value) || 20;

  let pool = QUESTIONS.filter(q =>
    (category === "all" || q.category === category) &&
    (difficulty === "mixed" || q.difficulty === difficulty)
  );

  if (pool.length < requestedCount) {
    pool = QUESTIONS.filter(q => category === "all" || q.category === category);
  }

  if (pool.length < requestedCount) {
    pool = [...QUESTIONS];
    showToast("Savollar yetishmagani uchun barcha fanlardan savollar qo‘shildi.");
  }

  if (!pool.length) {
    showToast("Savollar topilmadi. script.js faylini tekshiring.");
    return;
  }

  const actualCount = Math.min(requestedCount, pool.length);
  gameQuestions = shuffle(pool).slice(0, actualCount);

  currentIndex = 0;
  score = 0;
  correctAnswers = 0;
  gameActive = true;
  startedAt = Date.now();

  $("scoreDisplay").textContent = "BALL: 0";
  showScreen("quizScreen");
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timerId);

  if (currentIndex >= gameQuestions.length) {
    finishGame();
    return;
  }

  selectedAnswer = null;
  timeLeft = 20;

  const q = gameQuestions[currentIndex];

  $("questionCounter").textContent = `${currentIndex + 1} / ${gameQuestions.length}`;
  $("questionNumber").textContent = `SAVOL ${String(currentIndex + 1).padStart(2, "0")}`;
  $("questionText").textContent = q.q;
  $("questionCategory").textContent = CATEGORY_NAMES[q.category] || "BILIM";
  $("questionDifficulty").textContent = DIFFICULTY_NAMES[q.difficulty] || "";
  $("timer").textContent = timeLeft;
  $("timer").classList.remove("danger");
  $("progressBar").style.width = `${currentIndex / gameQuestions.length * 100}%`;
  $("nextButton").disabled = true;
  $("nextButton").textContent = currentIndex === gameQuestions.length - 1 ? "YAKUNLASH ✓" : "KEYINGI →";

  const letters = ["A", "B", "C", "D"];
  $("answerOptions").innerHTML = q.a.map((answer, index) => `
    <button class="answer-option" data-index="${index}">
      <span class="answer-letter">${letters[index]}</span>
      <span>${escapeHTML(answer)}</span>
    </button>
  `).join("");

  document.querySelectorAll(".answer-option").forEach(button => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index)));
  });

  timerId = setInterval(() => {
    timeLeft--;
    $("timer").textContent = timeLeft;
    if (timeLeft <= 5) $("timer").classList.add("danger");
    if (timeLeft <= 0) {
      clearInterval(timerId);
      chooseAnswer(-1);
    }
  }, 1000);
}

function chooseAnswer(index) {
  if (selectedAnswer !== null || !gameActive) return;

  selectedAnswer = index;
  clearInterval(timerId);

  const q = gameQuestions[currentIndex];
  const buttons = [...document.querySelectorAll(".answer-option")];

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) button.classList.add("correct");
    if (i === index && index !== q.correct) button.classList.add("wrong");
  });

  if (index === q.correct) {
    correctAnswers++;
    score += 100 + Math.max(0, timeLeft) * 5;
    $("scoreDisplay").textContent = `BALL: ${score}`;
  } else if (index === -1) {
    showToast("Vaqt tugadi!");
  }

  $("nextButton").disabled = false;
  $("progressBar").style.width = `${(currentIndex + 1) / gameQuestions.length * 100}%`;
}

function finishGame() {
  clearInterval(timerId);
  gameActive = false;

  const total = gameQuestions.length;
  const wrong = total - correctAnswers;
  const accuracy = Math.round(correctAnswers / total * 100);

  $("finalScore").textContent = score;
  $("correctCount").textContent = correctAnswers;
  $("wrongCount").textContent = wrong;
  $("accuracy").textContent = `${accuracy}%`;

  if (accuracy >= 90) {
    $("resultTitle").textContent = "BILIMDON!";
    $("resultMessage").textContent = "Ajoyib natija! Bilimingiz juda yuqori darajada.";
  } else if (accuracy >= 70) {
    $("resultTitle").textContent = "BARAKALLA!";
    $("resultMessage").textContent = "Yaxshi natija! Yana mashq qilsangiz, yanada kuchli bo‘lasiz.";
  } else if (accuracy >= 40) {
    $("resultTitle").textContent = "YAXSHI URINISH!";
    $("resultMessage").textContent = "Xatolaringizni ko‘rib chiqing va yana urinib ko‘ring.";
  } else {
    $("resultTitle").textContent = "TASLIM BO‘LMANG!";
    $("resultMessage").textContent = "Har bir urinish tajriba beradi. Yana bir bor sinab ko‘ring!";
  }

  saveHistory({
    score,
    correct: correctAnswers,
    total,
    category: CATEGORY_NAMES[$("category").value] || "BARCHA FANLAR",
    date: new Date().toLocaleDateString("uz-UZ")
  });

  updateDashboard();
  showScreen("resultScreen");
}

$("startButton").addEventListener("click", startGame);

$("nextButton").addEventListener("click", () => {
  if (selectedAnswer === null) return;
  currentIndex++;
  renderQuestion();
});

$("quitButton").addEventListener("click", () => {
  if (confirm("O‘yindan chiqmoqchimisiz? Joriy natija saqlanmaydi.")) {
    clearInterval(timerId);
    gameActive = false;
    showScreen("homeScreen");
  }
});

$("restartButton").addEventListener("click", startGame);
$("homeButton").addEventListener("click", () => {
  updateDashboard();
  showScreen("homeScreen");
});

$("clearHistory").addEventListener("click", () => {
  if (confirm("Barcha o‘yin natijalari o‘chirilsinmi?")) {
    localStorage.removeItem("brainArenaHistory");
    updateDashboard();
    showToast("Natijalar tozalandi.");
  }
});

updateDashboard();

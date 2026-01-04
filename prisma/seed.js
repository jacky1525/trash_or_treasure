import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const items = [
    {
        "name": "NINTENDO PLAY STATION PROTOTİPİ",
        "description": "Sony ve Nintendo'nun 90'ların başında ortak geliştirdiği ancak asla piyasaya sürülmeyen, oyun tarihinin en nadir 'kayıp' donanımı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/nintendo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmludGVuZG8uanBnIiwiaWF0IjoxNzY3MTk3MTA0LCJleHAiOjE3OTg3MzMxMDR9.BZGXGTba3mpuMIBFZ_HgBADAozDfHg1oKasKXGoczds",
        "displayedValue": 400000,
        "realValue": 360000,
        "category": "Tech",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "OYUN DÜNYASI: 'Nintendo PlayStation'ın kayıp olduğu sanılan son prototipinin bir banka kasasından çıktığı iddia ediliyor. Bu efsane gerçek olabilir.",
        "intelPool": [
            {
                "id": 1,
                "text": "Cihaz sararmış, eski bir SNES'e benziyor ama üzerinde Sony yazıyor. Çok garip.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kolu hem Nintendo hem PlayStation tuşlarına benziyor. Çakma konsol gibi.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "CD sürücüsü kapağı biraz gevşek. İçinde oyun var mı acaba?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Arkadaşım 'Japonya'da bit pazarında bunlardan çok var' dedi. (Yanılıyor)",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kaset yuvası var ama CD yeri de var. Hibrit bir şey bu.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Açınca ekrana Nintendo logosu geliyor ama Sony sesi çıkıyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Altındaki etikette 'SFX-100' yazıyor. Bu ne anlama geliyor?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "DONANIM MİMARİSİ: İçini açınca Sony ses çipi ve Nintendo grafik işlemcisinin aynı ana kartta lehimli olduğu görülüyor. Bu imkansız bir kombinasyon.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "CD SÜRÜCÜSÜ: Sürücü mekanizması standart değil, Sony'nin 1991'de patentini aldığı ama hiç kullanmadığı bir 'Super Disc' prototipi.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "PLASTİK ANALİZİ: Kasa plastiği, 3D yazıcı çıktısı değil, endüstriyel enjeksiyon kalıbı. Bu kalıbın maliyeti sahteciler için çok yüksek olurdu.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "KOL GİRİŞİ: Kontrolcü portları standart SNES değil, veri aktarımı için ekstra pinlere sahip özel bir tasarım.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "GENİŞLEME YUVASI: Alttaki 'Expansion Port', daha sonra çıkan Satellaview modemine benziyor ama pin yapısı farklı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "BIOS DUMP: Cihazın ROM'u okundu. İçinde 'Copyright 1991 Nintendo / Sony Corp' yazan, daha önce hiç görülmemiş bir BIOS var.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "ETİKET İMZASI: Anakartın üzerinde 'K. Kutaragi' (PlayStation'ın babası) tarafından atılmış bir kalite kontrol parafı bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "BEN HECK ONAYI: Ünlü konsol modder'ı Ben Heck cihazı inceledi ve 'Bu devre kartını elle yapmak imkansız, bu gerçek bir fabrika prototipi' raporunu verdi.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "APPLE I BİLGİSAYAR ANA KARTI",
        "description": "Steve Wozniak tarafından bizzat lehimlenen, çalışır durumdaki nadir Apple I anakartı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/apple.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYXBwbGUuanBnIiwiaWF0IjoxNzY3MTk5MTkxLCJleHAiOjE3OTg3MzUxOTF9.ApriVm_uCGYp-kA4BQ2bpaWvsAAzcj69Mb8rQw_CjDg",
        "displayedValue": 650000,
        "realValue": 650000,
        "category": "Tech",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "VADİ SÖYLENTİSİ: Steve Wozniak'ın garaj temizliği sırasında kaybolduğunu sandığı 'Batch 1' kartlardan biri ortaya çıkmış olabilir.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kart çok kirli ve tozlu, lehimleri elle yapılmış gibi yamuk yumuk.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerinde 'Apple Computer 1' yazıyor ama el yazısı gibi bir fontla.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Yeşil rengi modern kartlara göre daha soluk ve mat.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Arkasında keçeli kalemle atılmış bir imza var: 'Woz'. Silinmek üzere.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu eski bir radyo tamircisinden hurda fiyatına aldım' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Üzerindeki çiplerin bacakları altın kaplama değil, normal metal. Ucuz duruyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Buna monitör veya klavye nasıl bağlanıyor? Hiçbir modern girişi yok.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "TARİH KODLARI: İşlemci (6502) üzerindeki tarih kodu '7605'. Yani 1976'nın 5. haftası üretilmiş. Tarihsel olarak mükemmel.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KONDANSATÖR TİPİ: Mavi renkli 'Big Blue' kondansatörler kullanılmış. Sadece ilk 50 Apple I kartında bu parçalar vardı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "PCB ÜRETİCİSİ: Kartın köşesindeki üçgen logo, o dönem Apple'ın kartlarını basan yerel silikon vadisi şirketine ait.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "LEHİM İZİ: Arka yüzdeki lehimleme tekniği, Steve Wozniak'ın bilinen lehim stiliyle (bol lehimli ve yuvarlak) uyuşuyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KONNEKTÖR: Video çıkış konnektörü, modern RCA değil, o dönem kullanılan modifiye edilmiş bir osiloskop bağlantısı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "BELLEK ÇİPLERİ: Kart üzerinde 4KB DRAM çipleri var. Bu çiplerin üretimi 1977'de durduruldu.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "EL YAZISI SERİ NO: Kartın arkasında elle yazılmış '01-0024' numarası var. Bu numara Steve Jobs'un el yazısıyla deftere kaydettiği numarayla eşleşiyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "FONKSİYON TESTİ: Kart, orijinal bir güç kaynağına bağlandığında çalıştı ve ekrana yanıp sönen '@' imlecini (Apple I'in boot ekranı) getirdi.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "KAYIP BİR DALÍ TABLOSU",
        "description": "Sürrealizmin zirvesinde yapıldığı iddia edilen, üzerinde eriyen saatlerin farklı bir yorumu olan tablo.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/salvador_dali.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvc2FsdmFkb3JfZGFsaS5qcGciLCJpYXQiOjE3NjcxOTcwNjIsImV4cCI6MTc5ODczMzA2Mn0.LRNQsoyzNA5zhqSyh6Quadp38FBBOg2CtEEIBjLisUg",
        "displayedValue": 550000,
        "realValue": 75,
        "category": "Art",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "TEKNOLOJİ HABERİ: Yapay zeka ile üretilen tabloları 'Kayıp Başyapıt' diye satan büyük bir şebeke çökertildi. Piyasada hala eserleri var.",
        "intelPool": [
            {
                "id": 1,
                "text": "Tablodaki saatler eriyor ama bir tanesinin akrebi yok. Dalí böyle hata yapar mı?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Renkler çok canlı, sanki dün boyanmış gibi. Hiç çatlama yok.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "İmza biraz garip duruyor, sanki 'Dall-E' yazar gibi kıvrılmış.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Tuval bezi arkadan bakınca çok pürüzsüz, fabrikasyon gibi.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu İspanya'da bir eskiciden aldım' diyor. Dalí tablosu eskicide ne arasın?",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Resimdeki karıncaların bacak sayıları tutmuyor. Bazılarında 8 bacak var.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Çerçevesi plastik görünümlü ahşap. Çok ucuz duruyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "TUVAL ANALİZİ: Tuval bezi %100 Polyester. 1940'larda polyester tuval yoktu, keten kullanılırdı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "BOYA KATMANI: Yüzeyde fırça darbesi derinliği (impasto) yok. Boya tamamen düz, baskı makinesinden çıkmış gibi.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KİMYASAL TEST: Boya pigmentleri yağlı boya değil, UV kürlemeli modern inkjet mürekkebi içeriyor.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "VERNİK TESTİ: Tablonun üzerindeki koruyucu katman doğal reçine değil, 2010 sonrası üretilen akrilik sprey.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KOMPOZİSYON HATASI: Resimdeki gölgeler tutarsız. Işık sağdan geliyor ama saatlerin gölgesi sola düşüyor. AI hatası.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "X-RAY: Tablonun altında herhangi bir taslak çizimi yok. Gerçek ressamlar alta karakalem eskiz çizer.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "DİJİTAL ARTEFAKT: Mikroskopla bakıldığında, resmin köşesinde silinmeye çalışılmış bir 'Midjourney v5.2' filigran kalıntısı bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "PİKSEL HATASI: Eriyen saatin üzerindeki sineğin kanatları pikselleşmiş. Bu el yapımı değil, düşük çözünürlüklü bir baskı.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "VAN GOGH'UN KARDEŞİNE MEKTUBU",
        "description": "Arles'den kardeşi Theo'ya yazdığı, içinde küçük bir eskiz barındıran orijinal mektup.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/letter.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbGV0dGVyLmpwZyIsImlhdCI6MTc2NzE5NzE0MiwiZXhwIjoxNzk4NzMzMTQyfQ.VlpcAmFJncvkVJPEuQhL3qTYI213ZlUZKaf7wAVHVQI",
        "displayedValue": 125000,
        "realValue": 135000,
        "category": "Art",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "KÜLTÜR SANAT: Van Gogh Müzesi küratörleri, arşivlerde Theo'ya yazılmış mektuplardan birinin eksik olabileceğini fısıldıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kağıt çok ince ve kırılgan, dokunsan dağılacak gibi. Müze camı içinde saklanmış.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Yazı çok aceleci ve karmaşık. Vincent'in ruh hali o dönem pek iyi değilmiş anlaşılan.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Köşedeki ayçiçeği çizimi çok basit. Bunu ben de çizerim.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Mürekkep kahverengiye dönmüş. Siyah mürekkep zamanla paslanıp kahverengi olurmuş.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı, mektubun Fransa'da eski bir postane binasının tadilatında bulunduğunu söylüyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "İmza sadece 'Vincent' olarak atılmış. Soyadını kullanmaz mıydı?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kağıdın üzerinde daire şeklinde bir kahve veya şarap lekesi var. Sanatçı işi olduğu belli.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "MÜREKKEP ANALİZİ: Kullanılan mürekkep 'Iron Gall' (Demir Mazı) mürekkebi. 19. yüzyılda standarttı ve zamanla kağıdı yakar. Bu mektupta o yanık izleri var.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "EL YAZISI AKIŞI: 't' ve 'y' harflerindeki sert vuruşlar, Van Gogh'un Arles dönemindeki manik atakları sırasındaki el yazısıyla %95 uyumlu.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KAĞIT FİLİGRANI: Kağıdı ışığa tutunca 'PL BAS' filigranı görünüyor. Bu kağıt markası 1880'lerde Arles'de satılıyordu.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "PARMAK İZİ: Kağıdın sol alt köşesinde boyalı bir parmak izi var. Spektral analiz, boyanın Van Gogh'un kullandığı 'Krom Sarısı' olduğunu gösteriyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "POSTA DAMGASI: Zarfın üzerindeki damga 'Arles - 1888'. Tarihsel olarak tutarlı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "ESKİZ ANALİZİ: Mektuptaki küçük çizim, daha sonra yapılan 'Hasat' tablosunun ilk taslağıyla birebir örtüşüyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "ARŞİV EŞLEŞMESİ: Theo van Gogh'un günlüğünde 'Bugün Vincent'ten içinde hasat eskizi olan bir mektup aldım, çok heyecanlıydı' notu var. Tarihler tutuyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "DNA TESTİ: Mektubu kapatmak için kullanılan tükürük izinden alınan DNA, Van Gogh'un yaşayan akrabalarından alınan örnekle eşleşti.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "PICASSO SERAMİK TABAK",
        "description": "Picasso'nun Madoura atölyesinde elle şekillendirdiği, üzerinde kuş figürü olan seramik.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/picasso_ceramic.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcGljYXNzb19jZXJhbWljLmpwZyIsImlhdCI6MTc2NzE5NzA5MSwiZXhwIjoxNzk4NzMzMDkxfQ.CmFfcT-NlWtGGzo0CCby9or55LNBsnJLojIM5glJPJY",
        "displayedValue": 20000,
        "realValue": 22000,
        "category": "Art",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "BASIN BÜLTENİ: Fransa polisi, geçen hafta Marsilya limanında ele geçirilen sahte 'Picasso Madoura' seramiklerinin piyasaya sızmış olabileceğini duyurdu. Koleksiyonerler tetikte.",
        "intelPool": [
            {
                "id": 1,
                "text": "Bir sanat forumunda, bu tabağın aynısının geçen sene eBay'de 50 dolara satıldığı konuşuluyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Satıcının daha önce 'sahtecilik şüphesiyle' iki kez soruşturma geçirdiği, ama delil yetersizliğinden beraat ettiği biliniyor.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Tabak 70 yıllık olmasına rağmen üzerindeki cila şüpheli derecede parlak ve yeni duruyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Söylentiye göre bu tabak aslında Picasso'nun bahçıvanına hediye ettiği kayıp bir parça.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Müzayede kataloğunda tabağın 'kökeni' (provenance) kısmı boş bırakılmış. Genelde bu iyiye işaret değildir.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Sosyal medyada ünlü bir sanat eleştirmeni bu tabağın fotoğrafını paylaşıp altına 'Gülünç' yazmış.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kutunun içinden 1990 tarihli bir İtalyan hediyelik eşya dükkanının fişi çıktı gibi bir dedikodu dolanıyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KİL ANALİZİ: Seramiğin hamurundaki mineral yapısı, 1950'ler Fransa Vallauris bölgesi toprağıyla %99 uyumlu.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "UV IŞIK TESTİ: Tabak üzerinde herhangi bir modern vernik veya sonradan boyama izine rastlanmadı, yaşlanma doğal.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "DAMGA İNCELEMESİ: Altındaki 'Madoura Plein Feu' mührü biraz silik. Genelde orijinal kalıplar daha derin iz bırakır.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "FIRÇA ANALİZİ: Kuş figüründeki mavi pigment, Picasso'nun o dönem favorisi olan ve artık üretilmeyen kobalt oksit karışımı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "ARŞİV TARAMASI: Madoura atölyesinin 1952 kataloğunda 'Kuş ve Çalı' isimli, buna çok benzeyen bir seri üretim kaydı var.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "AĞIRLIK TESTİ: Orijinal Picasso tabakları genelde daha ağırdır. Bu tabak standarttan 150 gram daha hafif geliyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ GÜNLÜK: Picasso'nun asistanının notlarında, ustanın 'kuş figürlü' tabakları bilerek 'savruk and çocuksu' bir tarzda boyayarak mükemmeliyetçilikle dalga geçtiği yazıyor. Bu savrukluk onun imzası.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ADLİ TIP RAPORU: Tabağın arka kısmındaki pişmiş kilin içine gömülmüş kısmi bir parmak izi bulundu. Arşivlerdeki Pablo Picasso parmak iziyle %100 eşleşiyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "BANKSY 'KIZ VE BALON' BASKISI",
        "description": "Sanatçının bizzat mühürlediği ve numara verdiği, sınırlı sayıda üretilmiş orijinal baskı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/banksy_girl_art.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYmFua3N5X2dpcmxfYXJ0LmpwZyIsImlhdCI6MTc2NzE5NzI3MCwiZXhwIjoxNzk4NzMzMjcwfQ.3HOO6NalmSTZMDv1qRqH958-0-31OGaB7WsSfbRjmaw",
        "displayedValue": 75000,
        "realValue": 82000,
        "category": "Art",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "MÜZAYEDE HABERİ: Banksy'nin eserleri hasarlı olsa bile değer kaybetmiyor, aksine hikayesi olduğu için daha pahalıya satılıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kağıdın köşesinde kahve lekesi gibi bir iz var. Yazık olmuş.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Bu resim her yerde var, IKEA'da bile satılıyor. Orijinal olduğunu nasıl anlayacağız?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Çerçevesi çok basit, siyah IKEA çerçevesine benziyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Balonun kırmızısı çok parlak, solmamış. İyi korunmuş.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Alt köşede kabartmalı bir mühür var ama okuyamıyorum.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Satıcı sertifikayı gösteriyor ama fotokopi gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Arkadaşım 'Bunu internetten indirip basarım' dedi.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "SERTİFİKA KONTROLÜ: Pest Control (Banksy'nin doğrulama ofisi) seri numarasını sistemde 'Doğrulanmış Orijinal' olarak gösteriyor.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KAĞIT KALİTESİ: Baskı, 300 gramlık asitsiz Somerset kağıdına yapılmış. Standart poster kağıdı değil.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "BASKI TEKNİĞİ: Renkler nokta nokta değil (dijital baskı değil), serigrafi tekniğiyle katman katman basılmış.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "NEM LEKESİ: Köşedeki leke kahve değil, 2007'deki Londra sel baskınında zarar gören depodan kalma 'Tarihi Su İzi'.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "NUMARALANDIRMA: Kurşun kalemle yazılmış '24/150' ibaresi, sanatçının el yazısıyla uyumlu.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "MÜHÜR: 'POW' (Pictures on Walls) kuru damgası kağıda derinlemesine işlemiş. Sonradan basılmamış.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "YARIM BANKNOT: Sertifikanın yanında, üzerinde 'Banksy' yazan yırtık bir 10 Pound banknot var. Diğer yarısı Pest Control ofisinde saklanıyor. (Kesin Kanıt).",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "SANATÇI NOTU: Arka yüzde Banksy'nin el yazısıyla: 'Leke için üzgünüm, yağmur yağıyordu. -B' notu var.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "JEAN-MICHEL BASQUIAT TASLAĞI",
        "description": "Bir metro duvarından sökülen ve üzerinde sanatçının gizli imzasını taşıyan sprey boya çalışması.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/j_m_b_wall.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMval9tX2Jfd2FsbC5qcGciLCJpYXQiOjE3NjcxOTcxNjUsImV4cCI6MTc5ODczMzE2NX0.sThzQOlJRUtAMszVM9aCUtSuwgc7n_lr00scgXtrhi8",
        "displayedValue": 1600000,
        "realValue": 1750000,
        "category": "Art",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "SOKAK SANATI EFSANESİ: New York metrosunun 1980'lerdeki tadilatında kaybolan bazı duvar bloklarının özel koleksiyonlarda saklandığı konuşuluyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Bu bildiğin beton parçası. Üzerine çocuk karalamış gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Tac şeklindeki imza çok tanıdık. Her yerde görüyorum bunu.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Beton çok ağır, bunu nasıl taşıyacağız? Kargo parası batırır.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Boya yer yer dökülmüş. Çok eski olduğu belli.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu babam metro inşaatından çaldı' diyor. Hırsızlık malı mı yani?",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Renkler çok canlı, sprey boya bu kadar dayanır mı?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Duvarın arkasında 'Metro Hattı 4' yazıyor. Konum doğru olabilir.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KİMYASAL ANALİZ: Boya katmanlarında 1980'lerde üretilen 'Krylon' marka endüstriyel sprey boya tespit edildi. Basquiat bunu kullanırdı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "BETON YAŞI: Betonun karbonatlaşma testi, döküm tarihinin 1970 öncesi olduğunu gösteriyor. Duvar orijinal.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "STİL ANALİZİ: Çizgilerdeki agresiflik ve 'SAMO' etiketi, sanatçının 1981 öncesi erken dönem stiliyle birebir uyuşuyor.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "KATMANLAR: Eserin altında başka graffitilerin izleri var. Bu, duvarın yaşayan bir sokak parçası olduğunu kanıtlıyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "PARMAK İZİ: Sprey boyanın içine yapışmış bir saç teli bulundu. DNA analizi Afro-Amerikan kökenli bir erkeğe işaret ediyor.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "PROVENANS: Eser, 1982 yılında yıkılan bir binanın enkaz kaldırma tutanaklarında 'Boyalı Duvar Bloğu' olarak listelenmiş.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "FOTOĞRAF KANITI: 1980 tarihli bir gazete kupüründe, Basquiat tam olarak bu duvarın önünde sprey boyayla çalışırken görülüyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "GİZLİ İMZA: UV ışık altında tacın hemen altına gizlenmiş 'Jean-Michel' imzası ve o günün tarihi (11.04.80) parlıyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "KAYIP İMPARATORLUK KOLYESİ",
        "description": "Saray baskınında çalındığı söylenen, devasa bir yakut etrafına dizilmiş inci gerdanlık.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/red_necklace.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcmVkX25lY2tsYWNlLmpwZyIsImlhdCI6MTc2NzE5NzA3OSwiZXhwIjoxNzk4NzMzMDc5fQ.YHr2ZLf7FXS1GidfhsdkRVDPeV3pt8vQ9LEofDREVzc",
        "displayedValue": 250000,
        "realValue": 800,
        "category": "Luxury",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "MÜCEVHER DÜNYASI: 'Güvercin Kanı' yakutlar dünyada çok nadirdir. Bu boyutta bir taşın birdenbire ortaya çıkması imkansıza yakın.",
        "intelPool": [
            {
                "id": 1,
                "text": "Ortadaki kırmızı taş o kadar büyük ki, gerçek olsa İngiltere Kraliçesi takardı.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "İncilerin hepsi milimetrik olarak aynı boyda. Doğal incilerde ufak farklar olur.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Kolyeyi elime alınca taşlar tıkır tıkır oynuyor. Montürü gevşek.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Taşın rengi çok koyu, ışık geçirmiyor. Vişne reçeli gibi.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Saraydan kaçırılırken aceleyle yapılmış' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Metal kısımları biraz yeşillenmiş. Altın yeşillenir mi?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "İncilerin sedefi soyulmuş, alttan beyaz plastik görünüyor sanki.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KIRILMA İNDİSİ: Kırmızı taşın ışık kırma oranı Yakut (1.76) değil, Kurşunlu Cam (1.55) aralığında.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "İNCİ X-RAY: İncilerin çekirdeği yok. Doğal incide kum tanesi, kültür incisinde boncuk olur. Bunlar tamamen homojen plastik.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "METAL ANALİZİ: Gövde metali altın değil, altın kaplama pirinç. Kaplama yer yer dökülmüş.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "İNKLÜZYON: Taşın içinde 'gaz kabarcıkları' (gas bubbles) var. Doğal yakutta kristal izleri olur, gaz kabarcığı sadece camda olur.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "TAŞ KESİMİ: Taşın kesim şekli (facet), modern lazer kesim. Antik taşlar elle kesildiği için asimetrik olurdu.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "SICAKLIK TESTİ: Taşlar eldeki ısıyı hemen alıyor. Gerçek değerli taşlar uzun süre soğuk kalır.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "BOYA TESTİ: Kırmızı taşı asetona batırınca pamuğa kırmızı boya çıktı. Taş aslında şeffaf cammış, arkası boyanmış.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "MARKA DAMGASI: Klipsin üzerinde çok küçük 'Monet' damgası var. Monet, 1980'lerin ünlü bir imitasyon takı markasıdır.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "LOUIS VUITTON PROTOTİP SANDIK",
        "description": "1800'lerin sonunda gemi yolculukları için özel olarak tasarlanmış, deri kaplı prototip sandık.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/l_v_trunk.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbF92X3RydW5rLmpwZyIsImlhdCI6MTc2NzE5NzE1MiwiZXhwIjoxNzk4NzMzMTUyfQ.AYhbcbRt3Fka2a6VccVHXj52CUeW8X-Dd7DqQx1ORS0",
        "displayedValue": 55000,
        "realValue": 150,
        "category": "Luxury",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "MODA TARİHİ: Louis Vuitton arşivlerinde, logosuz düz sandıkların sonradan logo basılarak sahteleştirildiği vakalar biliniyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Deri kısımları çok eskimiş ve çatlamış ama üzerindeki desenler gıcır gıcır.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "LV logoları dikiş yerlerinde kesilmiş. Orijinal çantalarda logolar asla kesilmez.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Sandığın içinden eski tahta kokusu geliyor, bu iyiye işaret olabilir.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kilitlerin üzerinde LV logosu yok, düz pirinç kilit.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bu özel sipariş olduğu için seri numarası yok' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Üzerindeki otel etiketleri çok yeni duruyor, sanki internetten indirilip yapıştırılmış.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Sapları kopacak gibi duruyor, çok yıpranmış.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KANVAS ANALİZİ: Dış kaplama orijinal 'Monogram Canvas' değil, boyanmış vinil kaplama. Dokusu yanlış.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "AHŞAP İSKELET: Sandığın iskeleti gerçekten 1900'lerin başına ait, ağaç yaşı doğru. (Bu sandığı orijinal zannettiren tuzak).",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "ÇİVİLER: Kullanılan çivilerde 'Louis Vuitton' yazısı yok. Orijinal sandıklarda her çivide marka yazar.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "BOYA TESTİ: Monogram desenleri el boyaması değil, şablon (stencil) ile sonradan sprey boyayla yapılmış.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "İÇ DÖŞEME: İçindeki kağıt kaplama 1980'lerin duvar kağıdı. Orijinali keten kumaş olmalıydı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "KİLİT MEKANİZMASI: Kilit patent numarası sorgulandığında 'Standart Bavul Kilidi - İngiltere' çıkıyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "KATMAN SÖKÜMÜ: Köşedeki kaplama hafifçe kaldırılınca altta markasız, düz kahverengi bir sandık olduğu görüldü.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "SATICI İTİRAFI: Bu sandık geçen ay eBay'de 'Restorasyonluk Eski Sandık' olarak 50 dolara satılmış. O zaman üzerinde logo yokmuş.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "FABERGÉ YUMURTASI (RUS KRALİYETİ)",
        "description": "Çar II. Nikolay için üretildiği iddia edilen, içinde minyatür bir altın vagon bulunan yumurta.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/faberge_egg.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZmFiZXJnZV9lZ2cuanBnIiwiaWF0IjoxNzY3MTk3MjE4LCJleHAiOjE3OTg3MzMyMTh9.thiSwumlItVWQY1Yy5mNZ6DwxYWJ8sWrX2jzO3Mfdlk",
        "displayedValue": 1150000,
        "realValue": 2500,
        "category": "Luxury",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "MÜZE BÜLTENİ: Kayıp olduğu bilinen 7 İmparatorluk Yumurtası'ndan birinin bulunduğu iddiası uzmanları heyecanlandırsa da şüpheler sürüyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Yumurta çok ağır, içi dolu metal gibi hissettiriyor. Orijinalleri daha zarif ve hafiftir.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki taşlar çok parlıyor ama renkleri biraz yapay. Cam olabilir mi?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "İçindeki minyatür vagonun tekerlekleri dönmüyor, sabitlenmiş.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Mine (enamel) işçiliğinde hava kabarcıkları var. Fabergé asla hatalı iş çıkarmazdı.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Rusya'dan kaçan bir prensesten aldık' hikayesini anlatıyor. Çok klişe.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Menteşesi biraz kaba duruyor, kapatınca tam oturmuyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Altındaki damgada Rusça harfler var ama okunmuyor, silinmiş.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "ALTIN AYARI: Metal analizi 14 ayar altın kaplama gösteriyor. Fabergé yumurtaları som 18 ayar veya daha yüksek altın kullanırdı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "MİNE TEKNİĞİ: Kullanılan teknik 'Soğuk Mine' (Epoksi reçine). Orijinalleri fırınlanmış cam tozu (Vitreous Enamel) kullanır.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "TAŞ ANALİZİ: Kırmızı taşlar yakut değil, sentetik spinel. 1900'lerin başında sentetik taş bu kalitede değildi.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "USTA DAMGASI: Damga 'H.W.' (Henrik Wigström) olması gerekirken, yanlışlıkla kiril alfabesiyle 'F.A.' yazılmış.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "MEKANİZMA: İçindeki sürpriz mekanizması (vagon) el yapımı değil, kalıp döküm. Detayları çok kaba.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "YAPIŞTIRICI: Parçaları birleştirmek için modern siyanoakrilat (Japon yapıştırıcısı) kullanıldığı tespit edildi.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "İMZA: Yumurtanın iç astarının altında mikroskobik boyutta 'Luigi - Milano 1974' imzası bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "TASARIM HATASI: Bu yumurta tasarımı, Fabergé'nin hiçbir orijinal çiziminde yok. İki farklı yumurtanın karışımı (Mash-up) olarak uydurulmuş.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "HERMÈS BIRKIN 35 CROCODILE",
        "description": "Himalaya Niloticus Crocodile derisinden üretilmiş, üzerinde elmas işçiliği olan çanta.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/hermes_bag.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvaGVybWVzX2JhZy5qcGciLCJpYXQiOjE3NjcxOTcxOTMsImV4cCI6MTc5ODczMzE5M30.QqruDWDET4SbCv06q6rV4CG0axzFM84bvwPKsF_9u7o",
        "displayedValue": 175000,
        "realValue": 185000,
        "category": "Luxury",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "LÜKS DÜNYASI: Birkin çantaları için bekleme listesi 5 yıl. Ancak karaborsada satılan 'Süper Kopya'lar (Superfake) uzmanları bile kandırıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Deri kokusu çok ağır, biraz kimyasal kokuyor. Yeni boyanmış olabilir.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Çantanın kilit kısmındaki taşlar çok parlıyor, Swarovski olabilir.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Dikişleri biraz yamuk gibi, el yapımı olduğu için mi yoksa hatalı üretim mi?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "İçindeki fermuar biraz zor kapanıyor. Hermès kalitesi bu mu?",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu Victoria Beckham'ın asistanından aldım' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Rengi beyazdan griye dönüyor. Boyası mı akmış?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Altındaki metal ayaklarda çizikler var. Kullanılmış belli.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "DERİ ANALİZİ: Timsah derisi pullarında 'gözenek' (pore) var. Sahte baskı derilerde bu gözenekler olmaz. Bu gerçek Niloticus derisi.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "DİKİŞ YÖNÜ: Dikişler makine ile değil, 'Saddle Stitch' (eyer dikişi) tekniğiyle ve hafif açılı atılmış. Bu el yapımı olduğunu kanıtlar.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "DAMGA: 'Hermès Paris Made in France' damgası folyo baskı değil, deriye ısıtılarak (heat stamp) işlenmiş. Harf aralıkları kusursuz.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "ELMAS TESTİ: Kilit üzerindeki taşlar elmas test cihazında pozitif sonuç verdi. Cam değil, gerçek elmas.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "RENK GEÇİŞİ: 'Himalaya' renk geçişi (beyazdan griye) boyama değil, derinin doğal pigmentasyonuyla yapılmış çok zor bir teknik.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "SERİ KODU (BLIND STAMP): İç kayışın arkasında 'U' harfi (2022 üretimi) ve zanaatkarın kişisel kodu kabartma olarak basılmış.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "FATURA DOĞRULAMA: Çantanın iç cebinde unutulmuş orijinal Hermès faturası bulundu. Fiyatı ve alıcı ismi sistemle uyuşuyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "X-RAY TARAMASI: Kilit mekanizmasının içinde Hermès'in sahteciliğe karşı gizlediği mikroskobik 'H' logosu görüldü.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "PATEK PHILIPPE NAUTILUS 5711",
        "description": "Üretimi durdurulmuş, 'Tiffany & Co.' imzalı, hiç kullanılmamış çelik kasa saat.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/watch.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvd2F0Y2guanBnIiwiaWF0IjoxNzY3MTk3MDU0LCJleHAiOjE3OTg3MzMwNTR9.H_txBTz5pxHqih2zw5K7POEM4RVP1cvHaDehYLMqpz8",
        "displayedValue": 300000,
        "realValue": 310000,
        "category": "Luxury",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "SAAT PİYASASI: Tiffany mavisi Nautilus'ların son müzayedede rekor kırdığı biliniyor. Ama piyasada çok fazla 'modifiye edilmiş' sahte kadran dolaşıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kadran rengi biraz soluk gibi. Tiffany mavisi daha canlı olmaz mı?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kutusu biraz yıpranmış, içindeki yastık lekeli. Milyonluk saat böyle mi saklanır?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Arkasındaki camdan mekanizma görünüyor, çarklar dönüyor ama ses gelmiyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kordonu çok hafif, çelik gibi değil alüminyum gibi hissettiriyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu Jay-Z'nin partisinden aldım' diyor. İnandırıcı gelmedi.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Tarih penceresindeki rakam tam ortalanmamış gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kurma kolu biraz sert dönüyor, yağlanması lazım.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "MEKANİZMA: Kalibre 26-330 S C mekanizması incelendi. Balans çarkı silikon (Gyromax) ve 28,800 vph hızında çalışıyor. Bu orijinal.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KADRAN BASKISI: 'Tiffany & Co.' yazısı mikroskopla incelendi. Harflerin kenarları keskin ve kabarık (pad printing). Sonradan boyama değil.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KASA KALINLIĞI: Kasa kalınlığı tam 8.3mm. Sahte mekanizmalar genelde daha kalın olduğu için kasa 9mm+ olur.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "LÜME TESTİ: İbrelerdeki fosfor (Super-LumiNova) yeşil değil, Patek'e özgü mavi tonunda parlıyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "AĞIRLIK: Saat tam 135 gram. Sahte çelikler genelde daha hafif olur.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "SERTİFİKA KAĞIDI: Sertifika kağıdı UV ışık altında Patek Philippe filigranlarını gösteriyor. Kağıt orijinal.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ KOD: Kasanın boynuz (lug) arasına lazerle kazınmış 'PPC' damgası bulundu. Bu sadece VIP müşterilere verilen saatlerde olur.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ARŞİV KAYDI: Patek Philippe Cenevre arşivleri, bu seri numarasının 2021 yılında New York Tiffany mağazasına teslim edildiğini doğruladı.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "MARILYN MONROE 'İKONİK' ELBİSESİ",
        "description": "Marilyn Monroe'nun o meşhur metro ızgarası sahnesinde giydiği uçuşan beyaz elbise.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/m%20_m_dress.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbSBfbV9kcmVzcy5qcGciLCJpYXQiOjE3NjcxOTcxMjMsImV4cCI6MTc5ODczMzEyM30.EgG_FHuZ7TtskQ-T8qFPg-Xdxlqu1u7BGg8Jx2Mf7Vs",
        "displayedValue": 150000,
        "realValue": 450,
        "category": "Pop-Culture",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "MODA DÜNYASI: Bu elbisenin orijinali 2011'de 4.6 milyon dolara satıldı ve bir müzede kilitli. İkincisi olması imkansız.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kumaşı çok kaygan ve parlak, dokununca elektrikleniyor. Naylon gibi.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Elbise bembeyaz duruyor. 60 yıllık elbise biraz sararmaz mı?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Pileleri çok düzgün, fabrikadan yeni çıkmış gibi. Hiç bozulmamış.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Satıcı 'Marilyn bunu yedek olarak diktirmişti' diyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Etek uçlarında hiç sokak kiri veya aşınma yok. Metro ızgarasında giyilmemiş belli.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Fermuarı çok rahat açılıp kapanıyor, yağ gibi.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "İçindeki beden etiketi 'Medium' diyor. O dönem bedenler numaralıydı (US 12 gibi).",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KUMAŞ ANALİZİ: Kumaş %100 Polyester. Orijinal elbise 'Rayon-Asetat' krep kumaştan yapılmıştı. Polyester 1950'lerde bu formda yoktu.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "DİKİŞ TEKNİĞİ: Dikişlerde 'Overlok' (Serger) kullanılmış. Bu seri üretim tekniği, Hollywood özel dikim kostümlerinde asla kullanılmaz.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "FERMUAR MARKASI: Fermuarın üzerinde 'YKK' yazıyor ve plastikten. 1950'lerde metal fermuar kullanılırdı.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "ASTAR: Elbisenin astarı modern saten. Dönemin astarları ipek veya pamuklu olurdu.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "RENK TONU: Elbise 'Optik Beyaz'. Marilyn'in elbisesi filmde beyaz görünse de aslında 'Fildişi' rengindeydi (kamera ışıkları için).",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "MODEL FARKI: Boyun bağlama kısmı filmdeki elbiseye göre daha kalın. Replikaların sık yaptığı bir hata.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "BARKOD: Etek ucunun iç dikişinde yıkanınca silinmemiş bir barkod etiketi bulundu. Barkod okutulunca 'Costume Superstore - Sexy Starlet Dress' çıkıyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ETİKET: İç astarın derinlerinde 'Made in China' yazan küçük bir etiket kesilmeden kalmış.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "DARTH VADER ORİJİNAL KASKI",
        "description": "1977 yapımı 'A New Hope' çekimlerinde kullanılan, içinde çekim tozları duran orijinal kask.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/darth_vader.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZGFydGhfdmFkZXIuanBnIiwiaWF0IjoxNzY3MTk3MjQ2LCJleHAiOjE3OTg3MzMyNDZ9.zigcnchQQCIo2xQC4A0YGPoLtXn3ChTeolvJB9lkUi0",
        "displayedValue": 400000,
        "realValue": 425000,
        "category": "Pop-Culture",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "STAR WARS MİTİ: George Lucas'ın şahsi arşivinden kaybolan 'A New Hope' dönemi bir kaskın karaborsada olduğu konuşuluyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kask yakından bakınca çok simetrik değil, yamuk duruyor. Modern oyuncaklar dümdüz olur.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Yüzeyinde fırça izleri var. Vader'ın kaskı boya tabancasıyla boyanmamış mıydı?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Göz lensleri siyah değil, kırmızımsı kahverengi. Filmde siyah görünüyordu ama.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "İçinden çok ağır bir eski plastik ve yapıştırıcı kokusu geliyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kaskın içindeki süngerler sararmış ve dökülüyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Ağız kısmındaki ızgaraların boyası atmış, altından gri astar görünüyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Eline alınca oyuncak gibi hafif değil, fiberglas olduğu için ağır hissettiriyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KALIP İZİ: Kaskın yanak kısmındaki 'C' şeklindeki hata, orijinal 1977 kalıbında olan ve sadece set parçalarında bulunan bir kusur.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "BOYA KATMANI: Kask, 'Gunmetal' ve 'Black' olmak üzere iki renkli boyanmış. Işık vurunca yanaklar gri parlıyor. Bu orijinal tekniktir.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "LENS RENGİ: 1977 filminde kullanılan lensler 'Amber' (Kehribar) rengiydi. Bu kasktaki lensler orijinal renkte.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "MATERYAL: Kask plastikten değil, fiberglas ve reçine karışımından yapılmış. Elstree Stüdyoları bu malzemeyi kullanırdı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "MONTAJ SİSTEMİ: Kaskın kubbesini tutan mekanizma modern cırt cırt değil, o döneme özgü metal bir kilit sistemi (mounting ring).",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "AŞINMA İZLERİ: Kaskın tepesindeki çizikler, alçak tavanlı setlerde Vader aktörünün kafasını çarptığı yerlerle uyuşuyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ İMZA: Kaskın iç astarının altına kazınmış 'Brian Muir - 1976' imzası bulundu. Muir, Vader'ın orijinal heykeltıraşıdır.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "EKRAN EŞLEŞMESİ (SCREEN MATCH): Kaskın çenesindeki spesifik bir boya akıntısı, filmdeki 'I find your lack of faith disturbing' sahnesindeki kaskla birebir eşleşiyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Signed Script of 'Pulp Fiction'",
        "description": "Kült film Ucuz Roman'ın, tüm ana oyuncu kadrosu ve yönetmeni tarafından ıslak imzalı orijinal senaryo kopyası.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/pulp_fiction.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcHVscF9maWN0aW9uLmpwZyIsImlhdCI6MTc2NzI3MDg1MSwiZXhwIjoxNzk4ODA2ODUxfQ.1Y8hUlZHA75ubVao3gD9PD5pTnvuVKuyBfGQL1N6yQc",
        "displayedValue": 20000,
        "realValue": 50,
        "category": "Pop-Culture",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "HOLLYWOOD SIZINTISI: Tarantino'nun ofisinden çalınan senaryolar olduğu söyleniyor ama piyasada çok fazla sahte 'Comic-Con' kopyası var.",
        "intelPool": [
            {
                "id": 1,
                "text": "İmzalar çok siyah ve kalın. Hepsi aynı kalemle atılmış gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kağıtlar kar beyazı, 30 yıllık kağıt biraz sararmaz mı?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Samuel L. Jackson'ın imzası çok düzgün. Adamın normalde imzası daha dağınıktır.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kapağında 'Final Draft' yazıyor ama fontu Times New Roman. Tarantino daktilo fontu (Courier) kullanır.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu bir hayır kurumu müzayedesinden aldım' diyor ama belgesi yok.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Senaryodan taze toner kokusu geliyor. Fotokopi makinesi kokusu.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Zımbalar paslanmamış, yepyeni parlıyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "MÜREKKEP YAŞI: İmzalar kurumuş ama kimyasal olarak 2023 üretimi 'Sharpie' marker mürekkebiyle eşleşiyor.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "BASKI TEKNİĞİ: Harflerin kenarlarında lazer yazıcı saçılması (toner scatter) var. 90'larda nokta vuruşlu veya daktilo olurdu.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "İMZA BASKISI: İmzaların üzerinde kalem basınç izi yok. Kağıdın arkasına mürekkep geçmemiş. Bu bir baskı olabilir.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "KAĞIT PARLAKLIĞI: UV ışık altında kağıt parıl parıl parlıyor. Bu, modern optik beyazlatıcılar kullanıldığını gösterir.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "GÖRSEL EŞLEŞTİRME: Travolta'nın imzası, Wikipedia'daki imza örneğiyle piksel piksel aynı. Biri kopyala-yapıştır yapmış.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "CİLTLEME: Senaryo, Amerikan standardı 3 delikli pirinç raptiye (brad) yerine, modern plastik spiral ile ciltlenmiş.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "METADATA: Sayfanın en altında mikroskobik boyutta bir web adresi basılı kalmış: 'www.movie-scripts-pdf.com'.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "YAZIM HATASI: Senaryonun kapağında Quentin Tarantino yerine yanlışlıkla 'Quentin Tarantıno' (I yerine ı) yazılmış. OCR hatası.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Milyarderin Kahvaltısı",
        "description": "Dünyanın en pahalı malzemeleriyle hazırlanmış, sadece bir kez yenilebilecek ultra lüks bir kahvaltı tabağı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/food.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZm9vZC5qcGciLCJpYXQiOjE3NjcxODAzNjksImV4cCI6MTc5ODcxNjM2OX0.kfyCjxRof3ljf70RlELxTiH7Rmhts4k1J4jc011MwDA",
        "displayedValue": 5000,
        "realValue": 200,
        "category": "Luxury",
        "gameSet": "SET_B",
        "isTreasure": false,
        "publicRumor": "GASTRONOMİ ELEŞTİRİSİ: Sosyal medyada viral olan 'Altın Kaplama Simit' akımının, kalitesiz malzemeleri gizlemek için yapılan bir göz boyama olduğu söyleniyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Simit çok sert görünüyor, dişi kırabilir.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki altınlar pul pul dökülüyor. Rüzgarda uçup gitti yarısı.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Havyarlar biraz sönük, parlak değil. Taze durmuyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Yanındaki şampanya kadehi plastik mi? Sesi öyle çıkıyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Trüf mantarı kokusu gelmiyor, daha çok yanık yağ kokusu var.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Satıcı 'Bunu sabah Dubai'den özel uçakla getirdik' diyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Görüntü güzel ama doyurmaz bu. Porsiyon çok küçük.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "ALTIN ANALİZİ: Yaprak altın 24 ayar değil, pastacılıkta kullanılan ucuz imitasyon gıda boyalı pirinç kağıdı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "HAVYAR TÜRÜ: Siyah toplar Beluga havyarı değil, boyanmış Capelin (Ringa balığı) yumurtası. Süpermarkette 10 dolar.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "MANTAR: Trüf dilimleri gerçek ama konserve. Trüf aroması ise sentetik 'Trüf Yağı' spreyiyle verilmiş.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "TAZELİK: Simit hamuru donuktan çözdürülmüş. Taze fırın ürünü değil.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "ŞAMPANYA: Kadehteki içecek gerçek şampanya değil, gazlı elma suyu. Köpüğü hemen söndü.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "HİJYEN: Hazırlayan aşçının eldiven takmadığına dair parmak izleri altın yaprakların üzerinde duruyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "FİŞ: Tabağın altındaki peçeteye yapışmış bir market fişi bulundu: 'Donuk Simit, Balık Yumurtası, Altın Süsü - Toplam: 18.50 TL'.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "İTİRAF: Mutfaktan sızan ses kaydı: 'Abi bas trüf yağını, altına buladık mı kimse bayat olduğunu anlamaz, turist bunlar.'",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "WWII Enigma Machine",
        "description": "Nazilerin gizli mesajlarını şifrelemek için kullandığı, savaşın seyrini değiştiren efsanevi kripto cihazı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/enigma.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZW5pZ21hLmpwZyIsImlhdCI6MTc2NzE4MDM0OCwiZXhwIjoxNzk4NzE2MzQ4fQ.6lfuznXzBDK462kcKd5KqRcDVGrZeb2z6NVqt_SlnYc",
        "displayedValue": 200000,
        "realValue": 220000,
        "category": "Tech",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "TARİH PİYASASI: Savaşın son günlerinde kaybolan ve içinde 'Ultra Gizli' kodların olduğu söylenen bir Enigma makinesi yıllardır aranıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Çok ağır ve paslı. Eski bir daktiloya benziyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Tuşlarına basınca lambaları yanıyor ama bazıları patlak.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Ahşap kutusunda bir delik var, güve yemiş olabilir.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "İçindeki çarklar (rotorlar) dönüyor ama çok sert.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kapağında Almanca talimatlar var. Orijinal duruyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Satıcı 'Bunu dedem savaşta Alman generalinden aldı' diyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kabloları kumaş kaplı, çok eski.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "ROTOR SERİ NO: Makinenin içindeki 3 rotorun seri numaraları (A-1244) makinenin gövde numarasıyla eşleşiyor. (Matching Numbers).",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "BALİSTİK: Kasadaki delik güve değil, 9mm tabanca mermisi deliği. Çatışma sırasında vurulmuş.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "MODEL: Bu 'Enigma I' modeli (Wehrmacht), savaşın başında kullanılan en ikonik model.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "KABLO SİSTEMİ: İç mekanizmadaki kablolar 1940'lar Alman askeri standardı kauçuk kaplama değil, daha nadir olan ipek sargı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KLAVYE DÜZENİ: Klavye QWERTZ düzeninde (Alman standardı). Tuşların bakalit malzemesi orijinal.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "REFLEKTÖR: İçindeki reflektör (UKW-B) hala orijinal ayarlarında duruyor. Şifre çözücüler için altın değerinde.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ BELGE: Pil yuvasının içinde katlanmış bir kağıt bulundu: Normandiya savunma planlarının şifreli bir kopyası.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "LOG KAYDI: Makinenin seri numarası, Bletchley Park arşivlerinde 'Alan Turing'in bizzat üzerinde çalıştığı ve kırdığı makine' olarak listelenmiş.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "The 'Lucky' NFT",
        "description": "Dijital sanat dünyasında bir dönem fırtınalar estiren, 'Bored Cat Yacht Club' serisinden nadir bir NFT.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/nft.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmZ0LmpwZyIsImlhdCI6MTc2NzE4MDQ1MCwiZXhwIjoxNzk4NzE2NDUwfQ.QJO67h4gpHSVoWr2qMjg_iwM6h58zAuLALdsi1N9suE",
        "displayedValue": 5000,
        "realValue": 10,
        "category": "Tech",
        "gameSet": "SET_B",
        "isTreasure": false,
        "publicRumor": "KRİPTO DÜNYASI: Bir zamanlar milyon dolarlar eden 'Bored Cat' serisinin kurucularının ortadan kaybolduğu ve projenin terk edildiği konuşuluyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Resimdeki kedi çok pikselli. Paint'te çizilmiş gibi.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Sahibi 'Bu NFT sana servet kazandıracak' diyor. Çok ısrarcı.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Twitter'da bu profil resmini kullanan kimse kalmadı.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "OpenSea sayfasında 'Son Satış: 2 yıl önce' yazıyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kedi güneş gözlüğü takıyor, havalı duruyor ama sanat değeri tartışılır.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Blockchain ne demek bilmiyorum ama ekran görüntüsü alıp telefonuma kaydettim.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Projenin web sitesine girince 'Sayfa Bulunamadı' hatası veriyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "HACİM ANALİZİ: Koleksiyonun son 6 aydaki işlem hacmi 0 ETH. Likidite tamamen kurumuş.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "CÜZDAN HAREKETİ: Projenin 'Developer' cüzdanı 1 yıl önce tüm parayı Tornado Cash (izlenemez sistem) üzerinden kaçırmış.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "METADATA: NFT'nin görsel dosyası IPFS'te (kalıcı ağ) değil, kapanmış bir Google Drive linkinde barındırılıyor. Görsel yakında kaybolacak.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "SAHİPLİK: Koleksiyondaki 10.000 NFT'nin %90'ı tek bir cüzdanda toplanmış. Fiyatı şişirmek için kendi kendilerine alıp satmışlar (Wash Trading).",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KOD İNCELEMESİ: Akıllı kontratta 'Emergency Withdraw' (Acil Durum Para Çekme) fonksiyonu var. Bu, dolandırıcıların kullandığı bir arka kapı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "TOPLULUK: Discord sunucusunda sadece botlar ve 'Paramı geri verin' diye bağıran mağdurlar var.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "SİBER İSTİHBARAT: Proje kurucusunun gerçek kimliği ifşa oldu: Şu anda Bahamalar'da aranan bir internet dolandırıcısı.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "TEKNİK HATA: Görsel linki çökmüş. NFT'yi satın alırsan cüzdanında kedi resmi değil, '404 ERROR' yazısı görünecek.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Antik Mısır Kanopik Kavanozu",
        "description": "Bir firavunun mumyalama töreninde iç organlarını saklamak için kullanılan, binlerce yıllık bir ritüel kavanozu.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/kavanoz.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMva2F2YW5vei5qcGciLCJpYXQiOjE3NjcxODA0MjcsImV4cCI6MTc5ODcxNjQyN30.Bnkpx-5EXf8P0FAasNKkw7JhHUu2DuVsOJnLFs8lAn8",
        "displayedValue": 45000,
        "realValue": 50000,
        "category": "History",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "ARKEOLOJİ HABERİ: Kahire Müzesi, Arap Baharı sırasında yağmalanan depolardan çalınan bazı eserlerin hala kayıp olduğunu duyurdu.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kavanozun kapağı (Çakal kafası) biraz çatlak. Eski olduğu belli.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Yüzeyi çok pürüzlü, zımparalanmamış. El yapımı.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "İçinden çok kötü, baharatlı ve çürümüş bir koku geliyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Altında müze envanter numarası gibi bir şey yazıyor: 'CG-4052'.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Lanetli bu, evde tutmak istemiyorum' diye ucuza bırakıyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Hiyeroglifler çok silik, zor okunuyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Taşı çok ağır, mermer değil, daha sert bir taş.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "TAŞ TÜRÜ: Malzeme 'Alabaster' (Su mermeri). Antik Mısır'da kanopik kavanozlar için en çok kullanılan taş.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "İÇ KALINTI: Kavanozun dibindeki siyah tortu analiz edildi: Reçine, balmumu ve insan dokusu kalıntıları içeriyor. Mumyalama kanıtı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "HİYEROGLİF: Yazılar anlamsız şekiller değil, gerçek hiyeroglif: 'Duamutef, Mideyi Koruyan Tanrı' duası yazılı.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "AŞINMA: Tabanındaki aşınma izleri, binlerce yıl kum üzerinde durduğunu gösteriyor. Yapay eskitme değil.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KESKİ İZİ: Taşın işlenme şekli, modern matkap değil, antik bronz ve bakır aletlerin bıraktığı izlerle uyuşuyor.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "KİMYASAL: İçindeki tortuda 'Natron' tuzu bulundu. Mısırlıların mumyalamada kullandığı özel tuz.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "MÜZE KAYDI: 'CG-4052' numarası Kahire Müzesi veritabanında 'Kayıp - 2011' olarak işaretlenmiş. Bu çalıntı ama gerçek bir eser.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "CT TARAMASI: Kapağın (kafanın) içi boş değil, içinde dua parşömeni saklanmış gizli bir hazne var.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Pokémon Card 'Charizard'",
        "description": "Koleksiyon dünyasının kutsal kasesi. 1999 yapımı, hatasız (Gem Mint 10) kondisyonda bir ilk baskı Charizard kartı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/pokemon.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcG9rZW1vbi5qcGciLCJpYXQiOjE3NjcxODA0OTUsImV4cCI6MTc5ODcxNjQ5NX0.vn5LyIhfTc-zPL8AYlrYn3zmoQ0k6bYiDHgH0iHZxEw",
        "displayedValue": 300000,
        "realValue": 320000,
        "category": "Pop-Culture",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "KOLEKSİYON DÜNYASI: Logan Paul'un boynuna asıp ringe çıktığı karttan sonra Charizard fiyatları uçtu. Sahteciler bayram ediyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Sadece bir karton parçası. Çocukken bunlarla oynardık.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Koruma kabı çok sağlam duruyor, açılması imkansız gibi.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Kart çok parlak (Holo), ışık vurunca gökkuşağı gibi oluyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kenarları jilet gibi, hiç beyazlama yok. Çok temiz.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Üzerinde '1st Edition' damgası var. Bu iyi bir şey sanırım.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Charizard'ın kanatları resim çerçevesine değiyor. Baskı hatası mı?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Satıcı 'Banka kasasında sakladım' diyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "GÖLGE KONTROLÜ: Resim çerçevesinin sağ tarafında gölge yok (Shadowless). Bu sadece ilk basımlarda olur.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "HOLOGRAM DESENİ: Hologramdaki yıldızlar 'Cosmos' değil 'Starlight' deseni. 1999 orijinal basımına uygun.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "IŞIK GEÇİRGENLİĞİ: Güçlü fener tutulunca kart ışık geçirmiyor. Sahte kartlar genelde ışığı geçirir.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "PSA SERİ NO: Korumadaki barkod PSA veritabanında 'Cert: Active' ve 'Grade 10' olarak görünüyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "YAZI TİPİ: HP yazısındaki '120 HP' fontu kalın değil ince. Sahtelerde genelde kalın font hatası olur.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "MERKEZLEME: Kartın ön ve arka yüzeyindeki sarı/mavi çerçeveler mikroskobik olarak %50-%50 oranında ortalanmış. Kusursuz.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "UV TESTİ: Kartın üzerindeki PSA hologramı UV ışık altında gizli 'PSA' logosunu yansıtıyor. Kapsül orijinal.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "PİKSEL ANALİZİ: Mikroskop altında baskı noktaları (rosette pattern) incelendi. Siyah mürekkep diğer renklerin üzerine basılmış. Bu, orijinal baskı tekniğidir.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Karasakal'ın Hazine Sandığı",
        "description": "Ünlü korsan Karasakal'ın kayıp gemisi Queen Anne's Revenge'den çıkarıldığı söylenen, denizden yeni çıkmış bir sandık.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/chest.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvY2hlc3QuanBnIiwiaWF0IjoxNzY3MTgwMjgxLCJleHAiOjE3OTg3MTYyODF9.NqomQFv34QNbu2IYBgmvNtuhK_j2JtCptoJQKkydpK8",
        "displayedValue": 250000,
        "realValue": 500,
        "category": "History",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "SİNEMA MAGAZİNİ: Karayip Korsanları filminin çekimlerinden sonra kaybolan bazı dekorların antika pazarında satıldığı söyleniyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Sandık çok sağlam duruyor. 300 yıl su altında kalan tahta çürümez mi?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki yosunlar plastik gibi, kopmuyor. Yapıştırılmış sanki.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "İçindeki altınlar çok parlak. Deniz suyu altını matlaştırmaz mı?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kilit mekanizması paslanmış ama hala çalışıyor. Mucizevi.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu dalgıçlar Kuzey Karolina açıklarında buldu' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Tahtasında hiç kurt yeniği yok. Deniz kurtları tahtayı sever.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "İçinden çikolata kokusu geliyor. Altın çikolata mı bunlar?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "AHŞAP ANALİZİ: Tahta Meşe değil, MDF üzeri kaplama. 1700'lerde MDF (Sunta) yoktu.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "METAL AKSAM: Menteşeler dövme demir değil, eskitme boyası yapılmış plastik.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "ALTINLAR: Paraların üzerindeki tarih 1715 ama arka yüzünde 'Copy' (Kopya) damgası var.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "YOSUN: Üzerindeki deniz kabukları silikon tabancasıyla yapıştırılmış. Silikon izleri görünüyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "BOYA: Sandığın rengi deniz suyuyla değil, 'Ceviz Kabuğu' verniğiyle eskitilmiş.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "PARMAK İZİ: Paraların üzerinde modern lateks eldiven izleri var.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "DAMGA: Sandığın tabanında 'Disney Props Dept. - 2003' damgası bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ÇİKOLATA: Altın paralardan biri kırıldı, içinden sütlü çikolata çıktı.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "L'Art Invisible (Görünmez Heykel)",
        "description": "İtalyan sanatçı Salvatore Garau'nun 'boşluk ve hiçlik' üzerine yaptığı kavramsal bir sanat eseri. Yalnızca sertifikasıyla satılıyor.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/salvatore.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvc2FsdmF0b3JlLmpwZyIsImlhdCI6MTc2NzE4MDU0MiwiZXhwIjoxNzk4NzE2NTQyfQ.9yuzmrTc0HudQHG28clC7BzKMwHjUfc4FZZhaGwrt5g",
        "displayedValue": 18000,
        "realValue": 1,
        "category": "Art",
        "gameSet": "SET_B",
        "isTreasure": false,
        "publicRumor": "SANAT GÜNDEMİ: İtalyan sanatçı Salvatore Garau, 'Boşluk enerjidir' diyerek görünmez heykeller satıyor. Hukukçular bunun dolandırıcılık olup olmadığını tartışıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Elimde sadece bir kağıt var. Sertifika diyorlar ama A4 kağıdı bu.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Sanatçı 'Heykeli 1.5 x 1.5 metre boşluğa koyun' demiş. Evde yer kaplamaması güzel.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Sertifikadaki imza tükenmez kalemle atılmış. Islak imza.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Bu kağıdın fotokopisini çeksem ben de satabilir miyim?",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı çok ciddi duruyor, gülmemek için kendini zor tutuyor gibi.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Kağıtta 'Bu eser sadece hayal gücünde var olur' yazıyor. Param da hayal gücünde var olsun o zaman.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Arkadaşım 'Bunun aynısını ben sana bedavaya yaparım' dedi.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KAĞIT KALİTESİ: Sertifika kağıdı 80 gram standart fotokopi kağıdı. Arşivlik, asitsiz kağıt değil.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "İMZA ANALİZİ: İmza Salvatore Garau'ya benziyor ama biraz titrek. Taklit olabilir.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KOORDİNATLAR: Sertifikada eserin 'özgün konumu' olarak verilen GPS koordinatları Milano'da bir pizzacıyı gösteriyor.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "HUKUKİ DURUM: İtalyan yasalarına göre 'fiziksel olmayan mal' satışı vergiye tabi değil. Bu bir vergi kaçırma yöntemi olabilir.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": " BASKI: Sertifikadaki metin inkjet ev yazıcısıyla basılmış. Profesyonel baskı değil.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "EDİSYON: Sertifikada 'Edisyon 1/1' yazıyor ama piyasada aynı sertifikadan 5 tane daha dolaşıyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "SANATÇI BEYANI: Salvatore Garau bir röportajında 'Benim sertifikalarım özel kağıda basılır, bu fotokopi sahte' demiş.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "İTİRAF: Satıcı, bu sertifikayı internetten indirip bastığını ve çerçeveletip sattığını bir barda arkadaşına anlatırken duyuldu.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Vintage 1954 Stratocaster Guitar",
        "description": "Rock'n Roll tarihinin en ikonik gitarlarından biri. Efsanevi bir gitaristin ilk kayıtlarında kullandığı söyleniyor.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/guitar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZ3VpdGFyLmpwZyIsImlhdCI6MTc2NzE4MDM4MSwiZXhwIjoxNzk4NzE2MzgxfQ.ijAve2s2akBZIynQM1PlCTSCAIYhf56VJV9zNc73zN8",
        "displayedValue": 208333,
        "realValue": 225000,
        "category": "Pop-Culture",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "ROCK TARİHİ: Jimi Hendrix'in 1966'da New York'ta bir barda 'yedek gitarını' unuttuğu ve bir daha bulamadığı bilinen bir hikayedir.",
        "intelPool": [
            {
                "id": 1,
                "text": "Gitar çok hırpalanmış, her yeri çizik içinde. Boyası dökülmüş.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Telleri paslı, akort tutmuyor. Çalınmaz bu.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Sapı biraz dönmüş gibi. Tamir ister.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Arkasındaki metal plakada seri numarası var: 0105. Çok düşük bir numara.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Üzerinde sigara yanıkları var. Barda çok çalınmış belli.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Plastik parçaları sararmış, neredeyse kahverengi olmuş.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Satıcı 'Bunu dedemin tavan arasında bulduk' diyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "SERİ NUMARASI: '0105' seri numarası, Fender'in 1954'teki ilk 6 aylık üretim (Pre-Production) dönemine ait.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "MANYETİKLER: Manyetiklerin altındaki bobin telleri, 1954'te Leo Fender'in bizzat kullandığı formvar tellerle sarılmış.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "GÖVDE AĞACI: Gövde tek parça dişbudak (ash) ağacı. 1956'dan sonra kızılağaca geçildi. Bu çok erken bir örnek.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "MODİFİKASYON: Üst eşik (nut) ters çevrilip solaklar için ayarlanmış. Hendrix solaktı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "SAP TARİHİ: Sapı sökünce topuk kısmında kurşun kalemle 'TG 6-54' (Tadeo Gomez - Haziran 1954) imzası bulundu.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "ASKI PİMİ: Gitarın alt kısmındaki askı pimi yeri değiştirilmiş ve geri takılmış. Solak kullanımına işaret.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ NOT: Pickguard'ın (koruma plastiği) altında mor mürekkeple yazılmış küçük bir not: 'J.H. Exp. NY'.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "FOTOĞRAF EŞLEŞMESİ: Gitarın gövdesindeki spesifik bir ahşap damarı (grain pattern), Hendrix'in 1966 Cafe Wha? konserindeki fotoğrafıyla birebir eşleşiyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Ay Taşı (The Moon Rock)",
        "description": "Apollo 11 görevi sırasında Neil Armstrong tarafından toplandığı iddia edilen nadide bir parça.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/moon_stone.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbW9vbl9zdG9uZS5qcGciLCJpYXQiOjE3NjcxODA0NDEsImV4cCI6MTc5ODcxNjQ0MX0.UwX47LnJSCAVW_vV2HmWZbz1ZZG8Wi9ZE1cg66I5jKs",
        "displayedValue": 1500000,
        "realValue": 5,
        "category": "History",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "NASA UYARISI: Apollo görevlerinden getirilen her gram ay taşı devlet malıdır ve satışı yasaktır. Piyasada satılanların %100'ü sahtedir.",
        "intelPool": [
            {
                "id": 1,
                "text": "Taş çok hafif, sünger taşına benziyor. Ay taşları ağır olmaz mı?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Rengi kapkara, kömür gibi. Elimi sürünce siyah leke bıraktı.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Kutusunun üzerinde 'NASA Gift Shop' etiketi var ama üzeri çizilmiş.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Satıcı 'Bunu Neil Armstrong'un bahçıvanı çaldı' diyor. Çok fantastik.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Taşın üzerinde küçük delikler var. Lav taşına benziyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Koklayınca is kokusu geliyor. Uzay kokusu mu bu?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kutusu çok basit plastik. Milyonluk taş böyle mi korunur?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KİMYASAL ANALİZ: Taşın bileşimi %98 Karbon. Ay taşları silikon ve oksijen ağırlıklıdır. Bu bildiğimiz yanmış odun.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "RADYASYON TESTİ: Geiger sayacı 0 değerini gösteriyor. Uzaydan gelen taşlarda az da olsa kozmik radyasyon kalıntısı olur.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "MİKROSKOP: Gözeneklerin içinde yanmış bitki lifleri bulundu. Ay'da ağaç yetişmediğine göre?",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "YOĞUNLUK: Taş suda yüzüyor. Gerçek ay kayaları (bazalt) suda batar.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "MANYETİZMA: Taş mıknatısa tepki vermiyor. Bazı ay taşlarında demir olduğu için tepki vermesi gerekirdi.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "İZOTOP ANALİZİ: Oksijen izotopları Dünya atmosferiyle birebir aynı. Ay'ın izotop yapısı farklıdır.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "BARKOD: Kutunun altındaki etikette 'Mangal Kömürü - 3kg' yazısı silinmeye çalışılmış ama UV ışıkta okunuyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "İTİRAF VİDEOSU: Satıcının oğlu YouTube'da 'Babamın mangal kömürünü ay taşı diye sattık' başlıklı bir şaka videosu yayınlamış.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "ZÜMRÜT TAŞLI GERDANLIK",
        "description": "Viktorya döneminden kalma olduğu iddia edilen, üzerinde 12 adet damla kesim zümrüt bulunan altın kolye.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/necklace.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmVja2xhY2UuanBnIiwiaWF0IjoxNzY3MTgyNjM0LCJleHAiOjE3OTg3MTg2MzR9.6nXVjbfevmVb17jl-j-xwehY4uI7oMMYZm7ItFjYuKU",
        "displayedValue": 325000,
        "realValue": 350000,
        "category": "Luxury",
        "gameSet": "SET_A",
        "isTreasure": true,
        "publicRumor": "MÜCEVHERAT DÜNYASI: Viktorya dönemine ait kayıp bir aile yadigarı setin, isimsiz bir satıcı tarafından piyasaya sürüldüğü dedikodusu var.",
        "intelPool": [
            // --- ⚪ SIRADAN (7 ADET) ---
            { "id": 1, "rarity": "common", "text": "Taşların rengi o kadar koyu yeşil ki, şişe camına benziyor." },
            { "id": 2, "rarity": "common", "text": "Altın kısımları biraz matlaşmış, parlamıyor. Bakır olabilir mi?" },
            { "id": 3, "rarity": "common", "text": "Taşların içinde çatlak gibi şeyler var. Kusurlu mal mı bu?" },
            { "id": 4, "rarity": "common", "text": "Tasarımı çok eski moda, babaanne kolyesi gibi duruyor." },
            { "id": 5, "rarity": "common", "text": "Kutusu kadife kaplı ve çok eski, rutubet kokuyor." },
            { "id": 6, "rarity": "common", "text": "Satıcı 'Büyük büyükannem sarayda çalışırdı' diyor." },
            { "id": 7, "rarity": "common", "text": "Klipsi biraz zor açılıyor, modern kolyeler gibi pratik değil." },

            // --- 🟣 NADİR (6 ADET) ---
            { "id": 8, "rarity": "rare", "text": "TAŞ İÇİ (JARDIN): Taşların içindeki 'kusur' sanılan izler, doğal zümrütlere has 'Jardin' (Bahçe) inklüzyonlarıdır. Sentetik taş tertemiz olurdu." },
            { "id": 9, "rarity": "rare", "text": "MENŞEİ: Taşların içindeki mineral yapısı (Three-phase inclusion), sadece Kolombiya Muzo madeninden çıkan zümrütlerde bulunur." },
            { "id": 10, "rarity": "rare", "text": "ALTIN AYARI: Metal testi 14 Ayar (585) gösteriyor. Viktorya dönemi İngiltere'sinde 14 ayar altın kullanımı standarttı." },
            { "id": 11, "rarity": "rare", "text": "KESİM TEKNİĞİ: Taşlar modern lazer kesim değil, 'Old Mine Cut' (Eski Maden Kesimi) ile elde yontulmuş. Antika olduğunu kanıtlar." },
            { "id": 12, "rarity": "rare", "text": "MONTÜR: Taşların arkası kapalı (Closed Back) mıhlanmış. Bu teknik 1800'lerin sonuna kadar kullanılırdı." },
            { "id": 13, "rarity": "rare", "text": "AĞIRLIK: Kolye eldeki hissiyatına göre oldukça ağır. Altın ve doğal taş yoğunluğu hissediliyor." },

            // --- 🟡 EFSANEVİ (2 ADET) ---
            { "id": 14, "rarity": "legendary", "text": "USTA DAMGASI: Klipsin dilinde mikroskopla görülebilen 'Garrard' damgası var. Garrard, İngiliz Kraliyet ailesinin resmi kuyumcusudur." },
            { "id": 15, "rarity": "legendary", "text": "ENVANTER KAYDI: Kolyenin tasarımı, 1895 tarihli 'Londra Sosyetesi Müzayedesi' kataloğundaki 42 numaralı parçayla birebir eşleşiyor." }
        ]
    },
    {
        "name": "TAM TAKIM ŞÖVALYE ZIRHI",
        "description": "Orta Çağ sonlarına ait olduğu söylenen, göğüs zırhında aslan figürü bulunan görkemli çelik zırh takımı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/armor.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYXJtb3IuanBnIiwiaWF0IjoxNzY3MTgyODI4LCJleHAiOjE3OTg3MTg4Mjh9.wGF1zdIHEPOtxPz4RebPhoijXg0tOFfah7U5GiEs_bw",
        "displayedValue": 125000,
        "realValue": 4000,
        "category": "History",
        "gameSet": "SET_B",
        "isTreasure": false,
        "publicRumor": "SİNEMA HABERLERİ: MGM Stüdyoları, eski depolarını boşaltırken 1950'lerden kalma binlerce kostümü açık artırmaya çıkardı.",
        "intelPool": [
            {
                "id": 1,
                "text": "Zırh çok parlak, sanki hiç savaşa girmemiş gibi. Paslanmaz çelik mi bu?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Göğsündeki aslan figürü çok havalı ama boyası biraz taze duruyor.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Eklemleri hareket ettirince teneke sesi çıkıyor. Gerçek zırh daha tok ses çıkarmaz mı?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "İçindeki deri kayışlar yepyeni. 500 yıllık deri un ufak olurdu.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Miğferin vizörü kapanmıyor, sıkışmış. Yağlamak lazım.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Boyu çok uzun. Orta çağ insanları genelde kısa boyluydu.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Satıcı 'Haçlı Seferleri'nden kalma' diyor ama üzerindeki aslan İngiliz aslanına benziyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "METAL KALINLIĞI: Levha sac kalınlığı 1mm. Gerçek savaş zırhları en az 2-3mm olurdu. Bu sadece gösteri amaçlı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KESİM İZİ: Kenarlarda modern lazer kesim tezgahının bıraktığı mikroskobik yanık izleri var.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "PERÇİN ANALİZİ: Zırhı tutan perçinler demir değil, modern alüminyum perçinler.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "AĞIRLIK: Tüm set sadece 15 kilo geliyor. Gerçek bir şövalye zırhı 25-30 kilo çeker.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "İÇ YÜZEY: Zırhın içinde ter korozyonu yok. Metalin iç yüzeyi pürüzsüz haddehane sacı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "TARİHSEL HATA: Göğüs zırhının modeli 14. yüzyıl, omuzluklar 16. yüzyıl tarzı. Tarihsel olarak imkansız bir karışım.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "DAMGA: Göğüs plakasının iç kısmında silinmiş bir damga bulundu: 'MGM PROPS DEPT. 1952'.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "FİLM KARESİ: Bu zırh, 'Ivanhoe' (1952) filminde Robert Taylor'ın giydiği kostümle birebir aynı çiziklere sahip.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "ANTİKA GRAMOFON",
        "description": "1920'lerden kalma, pirinç borulu ve ceviz ağacı gövdeli, çalışır durumda olduğu iddia edilen gramofon.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/gramophone.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZ3JhbW9waG9uZS5qcGciLCJpYXQiOjE3NjcxODI2ODcsImV4cCI6MTc5ODcxODY4N30.8c1E0ypm9zh43LtgXYGXEsKSmd8N5lq-civ8TyNkD6E",
        "displayedValue": 15000,
        "realValue": 1500,
        "category": "Tech",
        "gameSet": "SET_C",
        "isTreasure": false,
        "publicRumor": "ANTİKACI UYARISI: Piyasada 'Hislon' veya 'His Master's Voice' markalı gibi gösterilen ama aslında Hindistan yapımı olan çok fazla gramofon var.",
        "intelPool": [
            {
                "id": 1,
                "text": "Pirinç borusu çok parlak, 100 yıllık pirinç bu kadar parlamaz. Yeni cilalanmış olabilir mi?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kurma kolunu çevirince çıkan ses metalik değil, daha çok plastik sürtünmesi gibi.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Ahşap kasasında hiç çizik veya kurt yeniği yok. Çok iyi korunmuş ya da yeni yapılmış.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Plak dönerken biraz yalpalıyor. Orijinal gramofonların motoru daha stabil olur.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu dedemin tavan arasında buldum' diyor ama cihazda toz bile yok.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Üzerindeki köpekli logo (Nipper) biraz bulanık basılmış, çıkartma gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "İğnesi çok kalın duruyor, plağı çizebilir.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "MOTOR ANALİZİ: İç mekanizmadaki yay çeliği modern alaşım. 1920'lerin çeliği daha koyu renkli ve kırılgandır.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "AHŞAP YAŞI: Kasa ceviz ağacı ama vernik poliüretan bazlı. Bu vernik türü 1950'lerden sonra icat edildi.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "DİRSEK BORUSU: Boruyu tutan dirsek parçası döküm demir değil, boyanmış zamak (çinko alaşımı). Bu ucuz bir üretim tekniği.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "SES KUTUSU (SOUNDBOX): Diyafram mika değil, alüminyum folyo. Sesi bu yüzden teneke gibi çıkarıyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "MONTAJ VİDALARI: Vidalar düz ağızlı (flathead) değil, yıldız tornavida (Phillips) başlı. Yıldız vida 1930'larda patentlendi.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "LOGO BASKISI: Logo metal plaka üzerine değil, su transfer baskı (water slide decal) yöntemiyle yapıştırılmış.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ DAMGA: Tabanın altındaki keçeyi kaldırınca ahşapta 'Made in India - 1995' damgası bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "KATALOG EŞLEŞMESİ: Bu model, 90'larda dekorasyon dergilerinde satılan 'Nostaljik Görünümlü Radyo-Gramofon' serisinin birebir aynısı.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "OSMANLI TUĞRALI GÜMÜŞ TABAKA",
        "description": "Sultan II. Abdülhamid hanedan tuğrasını taşıyan, savat işçiliğiyle süslenmiş nadide gümüş tabaka.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/ottoman_case.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvb3R0b21hbl9jYXNlLmpwZyIsImlhdCI6MTc2NzE4MjYyMSwiZXhwIjoxNzk4NzE4NjIxfQ.CFaCyvzBlAa_JmnwIwx3xyLWK2qcQEDbexJBfkH_hjI",
        "displayedValue": 40000,
        "realValue": 45000,
        "category": "History",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "ANTİKACI DEDİKODUSU: Kapalıçarşı'da bir esnafın eline, Yıldız Sarayı'nın yağmalandığı dönemden kalma çok özel bir parçanın geçtiği konuşuluyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Üzerindeki siyah işlemeler dökülmüş gibi duruyor. Kirli görünüyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kapağı açarken menteşesi biraz gıcırdıyor. Yağlanması lazım.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Tuğra çok büyük, genelde bu kadar büyük olmaz. Turistik bir ürün olabilir mi?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "İçinde tütün kokusu var, demek ki kullanılmış.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Arka yüzünde çizikler var. Sahibi hor kullanmış.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Gümüş parlatıcısı ile silinmiş, çok parlıyor. Eski eşya mat olur.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Satıcı 'Abdülhamid'in sigara tabakası' diyor ama Sultan sigara içer miydi?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "DAMGA OKUMA: Arkadaki küçük damga 'Sah' mührü. Bu sadece saray için üretilen gümüşlere vurulan kalite kontrol damgasıdır.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "İŞÇİLİK: Siyah süslemeler boya değil, gerçek 'Van Savatı'. Gümüş, kükürt ve bakır alaşımıyla yapılan çok zor bir teknik.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "TUĞRA ANALİZİ: Tuğra II. Abdülhamid'e ait ve 'El-Gazi' mahlasını içeriyor. Kalıpla değil, el kalemiyle oyulmuş.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "GÜMÜŞ AYARI: Metal testi 900 ayar gümüş gösteriyor. Osmanlı standartlarına uygun.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "TAMİR İZİ: Menteşedeki onarım, 1900'lerin başında kullanılan gümüş kaynağı tekniğiyle yapılmış. Dönemsel bir tamir.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "USTA İMZASI: İç kapakta çok silik bir Ermeni usta imzası var: 'Bedros 1318'.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ BÖLME: Tabakanın tütün haznesinin altında gizli bir kağıt bulundu. Üzerinde 'Mabeyn Başkatibine Hediye' yazıyor.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ENVANTER KAYDI: Topkapı Sarayı arşivlerinde 'Kaybolan Eşyalar' listesinde 482 numaralı 'Savatlı Gümüş Kutu' tarifiyle birebir uyuşuyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "ELVIS PRESLEY'İN SON SANDVİÇİ",
        "description": "Elvis'in yarım bıraktığı iddia edilen fıstık ezmeli muzlu sandviç.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/sandwich.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvc2FuZHdpY2guanBnIiwiaWF0IjoxNzY3MTgyNTkwLCJleHAiOjE3OTg3MTg1OTB9.PM-aH8H_OWTU1q6-WvNUFBFDssfEPh364C1-LeRtaB0",
        "displayedValue": 27500,
        "realValue": 25,
        "category": "Pop-Culture",
        "gameSet": "SET_B",
        "isTreasure": false,
        "publicRumor": "MAGAZİN EFSANESİ: Elvis'in ölmeden önce yediği son şeyin yarım kalmış bir sandviç olduğu söylenir ama 40 yıldır bozulmamış olması biyolojik olarak imkansız.",
        "intelPool": [
            {
                "id": 1,
                "text": "Sandviç o kadar taze duruyor ki canım çekti. Fıstık ezmesi akışkan görünüyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Muzlar hiç kararmamış. Normalde muz 2 saatte kararır.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Ekmek yumuşacık görünüyor, hiç küf yok. Mucize mi koruyucu madde mi?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Yanındaki peçetede yağ lekesi var ve bir imza karalanmış.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu dondurucuda sakladık' diyor ama dondurucu yanığı yok.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Koklayınca hiç koku gelmiyor. Ne fıstık ne muz kokusu var.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Tabağın altında 'Graceland Souvenir Shop' yazısı silinmiş gibi.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KİMYASAL ANALİZ: Malzeme analizi %0 organik madde gösteriyor. Tamamen polimer reçine ve plastik boya.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "YÜZEY PARLAKLIĞI: Muz dilimlerinin üzerindeki parlaklık doğal nem değil, vernik tabakası.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "EKMEK GÖZENEKLERİ: Ekmeğin gözenekleri çok simetrik. Gerçek mayalı hamur bu kadar düzenli kabarmaz.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "PEÇETE ANALİZİ: İmzalı peçetedeki mürekkep 1990'larda üretilen bir jel kalem markasına ait.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "SICAKLIK TESTİ: Çakmak tutulduğunda fıstık ezmesi erimiyor, siyah duman çıkararak yanıyor (Plastik).",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "DİŞ İZİ: Isırık izi incelendiğinde, diş yapısı insan dişine değil, kesici bir aletle (bıçak/kalıp) yapılmış yapay bir şekle benziyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "BARKOD ETİKETİ: Sandviçin alt kısmında 'Made in China - Display Prop' etiketi unutulmuş.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "FATURA: Kutunun içinde 1995 tarihli bir 'Hard Rock Cafe Dekorasyon Faturası' bulundu.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "ANTİK ROMA 'UÇAN DAİRE' SİKKESİ",
        "description": "MS 200 yılına ait, üzerinde disk şeklinde cisim figürü olan gümüş sikke.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/roman_coin.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcm9tYW5fY29pbi5qcGciLCJpYXQiOjE3NjcxODI2MDgsImV4cCI6MTc5ODcxODYwOH0.TujNSD0dlw1w-zIsqyZ8-CE4MHQ-zSXQJAD-92g3ukQ",
        "displayedValue": 120000,
        "realValue": 120000,
        "category": "History",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "KOMPLO TEORİSİ: Antik Uzaylılar programında gösterilen o meşhur 'UFO Sikkesi'nin bir benzerinin kara borsaya düştüğü söyleniyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Sikkenin üzerindeki şekil bariz bir uçan daire. Romalılar UFO mu gördü? Saçmalık.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Metal çok kararmış, elime siyah leke bulaştırdı. Kurşun olabilir mi?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Şekil çok modern duruyor, sanki lazerle sonradan kazınmış gibi.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Satıcı 'Bunu tarlada buldum' diyor. Klasik defineci yalanı.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Sikkenin kenarları tırtıklı değil, düzensiz. Kalitesiz bir basım.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "İmparatorun burnu biraz büyük çizilmiş. Karikatür gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Yazılar okunmuyor, sadece birkaç harf var: 'S-C'. Senato Consulto mu?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "METAL ANALİZİ: Alaşım %96 saf gümüş. Bu oran, MS 2. yüzyıl Roma Denarius standartlarına tam uyuyor.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "BASIM TEKNİĞİ: Sikke döküm değil, darp (çekiçle vurma) yöntemiyle yapılmış. Modern sahteler genelde dökümdür.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "PATİNA TESTİ: Yüzeydeki kristalleşme, metalin en az 1500 yıldır toprak altında gömülü olduğunu kanıtlıyor.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "İKONOGRAFİ: 'Uçan Daire' sanılan şekil aslında Roma mitolojisindeki 'Ancilia' (Kutsal Kalkan) figürünün bozuk bir tasviri.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "AĞIRLIK: Sikke tam 3.4 gram geliyor. Dönemin standart ağırlığıyla birebir aynı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "YÜZEY HATASI: Mikroskop altında, UFO şeklinin etrafında metal akma izleri var. Bu bir kalıp kırılması sonucu oluşmuş.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "KATALOG EŞLEŞMESİ: British Museum kataloğunda 'RIC IV 128 - Hatalı Basım' koduyla kayıtlı olan dünyadaki 3. örnek.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "TARİHSEL METİN: Dönemin tarihçisi Cassius Dio, 'Gökyüzünde asılı duran gümüş kalkanlar' görüldüğünü yazar. Bu sikke o olayı anmak için basılmış.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "MONA LISA'NIN 'İLK TASLAĞI'",
        "description": "Leonardo da Vinci'ye atfedilen karakalem portre.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/mona_lisa.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbW9uYV9saXNhLmpwZyIsImlhdCI6MTc2NzE4MjY2NiwiZXhwIjoxNzk4NzE4NjY2fQ.7gNV7Jq9yvkWmG92Ly8-QdyWgdT1iUWRWhUvpAe4I08",
        "displayedValue": 7500000,
        "realValue": 50,
        "category": "Art",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "SANAT TARİHİ: Da Vinci'nin Mona Lisa için yaptığı hazırlık eskizlerinin çoğunun kayıp olduğu biliniyor. Bu çizim sanat dünyasını sarsabilir.",
        "intelPool": [
            // --- ⚪ SIRADAN (7 ADET) ---
            { "id": 1, "rarity": "common", "text": "Kağıt çok eski ve lekeli, kenarları yanmış gibi. Gerçekten 500 yıllık olabilir mi?" },
            { "id": 2, "rarity": "common", "text": "Mona Lisa'nın gülüşü biraz farklı, daha somurtkan duruyor." },
            { "id": 3, "rarity": "common", "text": "Çizgiler çok net, kömür kalemle yapılmışa benziyor." },
            { "id": 4, "rarity": "common", "text": "Kağıdın arkasında soluk bir damga var, kraliyet mührü olabilir." },
            { "id": 5, "rarity": "common", "text": "Satıcı 'Bunu Floransa'da yıkılan bir kilisenin duvarının içinde bulduk' diyor." },
            { "id": 6, "rarity": "common", "text": "Solak birinin çizimine benziyor (Taramalar soldan sağa). Da Vinci solaktı." },
            { "id": 7, "rarity": "common", "text": "Çerçevesi kurtlanmış ahşap, çok eski görünüyor." },

            // --- 🟣 NADİR (6 ADET) ---
            { "id": 8, "rarity": "rare", "text": "KAĞIT DOKUSU: Kağıt el yapımı değil, makine üretimi selüloz içeriyor. 16. yüzyılda kağıt paçavradan yapılırdı." },
            { "id": 9, "rarity": "rare", "text": "MÜREKKEP ANALİZİ: Ana hatlar çizim değil, baskı mürekkebi. Üzerinden kömür kalemle geçilmiş." },
            { "id": 10, "rarity": "rare", "text": "TARİHLEME: Kağıdın arkasındaki mürekkep izi 1920'lerin matbaa mürekkebiyle uyuşuyor." },
            { "id": 11, "rarity": "rare", "text": "X-RAY: Çizimin altında 'Louvre Museum Souvenir' yazısı silinmiş olarak görünüyor." },
            { "id": 12, "rarity": "rare", "text": "ÇİZİM HATASI: Da Vinci'nin karakteristik 'sfumato' (dumanlı geçiş) tekniği yok. Gölgelendirmeler çok sert ve amatörce." },
            { "id": 13, "rarity": "rare", "text": "ESKİTME: Kağıdın üzerindeki kahverengi lekeler doğal yaşlanma (foxing) değil, kahve ile fırça darbesiyle yapılmış." },

            // --- 🟡 EFSANEVİ (2 ADET) ---
            { "id": 14, "rarity": "legendary", "text": "BASKI NOKTALARI: Mikroskop altında, çizimin gölgeli kısımlarında litografi baskı noktaları (dot matrix) açıkça görülüyor." },
            { "id": 15, "rarity": "legendary", "text": "İMZA: Kağıdın en alt köşesinde silinmiş bir imza bulundu: 'H.L. 1924'. (Dönemin ünlü sahtekarı Henri Lemoine)." }
        ]
    },
    {
        "name": "APOLLO 11 AY TOZU FIRÇASI",
        "description": "Buzz Aldrin'in ayda kullandığı iddia edilen gri tozlu fırça.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/brush.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYnJ1c2guanBnIiwiaWF0IjoxNzY3MTgyNzY1LCJleHAiOjE3OTg3MTg3NjV9.zXS8zNh4SvSuB90xfOmGb1POT_yaWCJ3SXl-b1fe3_Q",
        "displayedValue": 400000,
        "realValue": 15,
        "category": "Tech",
        "gameSet": "SET_B",
        "isTreasure": false,
        "publicRumor": "NASA SIZINTISI: Uzay ajansının eski bir çalışanı, hatıra olarak aldığı bazı ekipmanları sattığını iddia ediyor ama NASA her şeyin envanterde olduğunu söylüyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Çok sıradan bir fırça bu, nalburda satılanlara benziyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki gri tozlar çok yapışkan. Ay tozu böyle mi olur?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Sapı ahşap ve vernikli. Uzayda ahşap kullanılır mı?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Fırça kılları çok sert, at kılına benziyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu Buzz Aldrin'in çantasından aldım' diyor. İnandırıcı gelmedi.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Tozu üfleyince havada asılı kalıyor, çok ince.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Üzerinde NASA logosu yok, sadece bir numara var.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "TOZ ANALİZİ: Gri toz mikroskopla incelendi. Keskin ay regolit parçacıkları değil, yuvarlak yapılı 'tebeşir tozu' ve 'grafit' karışımı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "SERİ NUMARASI: Fırça sapındaki numara (No. 402), 1975 yılında kurulan bir Amerikan boya fırçası markasına ait.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "MALZEME: Fırça kılları domuz kılı. NASA uzay görevlerinde steril sentetik kıllar (Teflon/Nylon) kullanır.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "YANICILIK: Ahşap sap vernikli olduğu için yüksek oksijenli ortamda (Apollo kapsülü) yanıcıdır. NASA bunu asla uzaya göndermezdi.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "TARİH: Sapın üzerindeki üretim damgası 1974'ü gösteriyor. Apollo 11 görevi 1969'daydı.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "RADYASYON: Fırçada kozmik radyasyon izine rastlanmadı.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ YAZI: Sapın boyası kazınınca altında 'Emekliliğin kutlu olsun Bob! -Houston Ekibi' yazısı çıktı.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "FOTOĞRAF: NASA arşivlerinde bu fırçanın kullanıldığı tek yer, yer kontrol merkezindeki kara tahtanın silgisi olarak görünüyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "TİTANİK'TEN KURTULAN KEMAN",
        "description": "Gemi batarken çalındığı iddia edilen, tuzlu su lekeleriyle kaplı antika keman.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/violin.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvdmlvbGluLmpwZyIsImlhdCI6MTc2NzI3MDg2NiwiZXhwIjoxNzk4ODA2ODY2fQ.lVTrq1kZHegFv2MNVHxAcx8erT4hY-ojV7etr8UwBQM",
        "displayedValue": 1000000,
        "realValue": 200,
        "category": "History",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "DENİZCİLİK HABERLERİ: Orijinal Titanik kemanı 2013'te 1.7 milyon dolara satıldı. Bu ikinci keman nereden çıktı?",
        "intelPool": [
            {
                "id": 1,
                "text": "Keman çok kötü durumda, her yeri dökülüyor. Çalınamaz halde.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki beyaz tuz lekeleri var. Denizden çıktığı belli.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Tahtası şişmiş, yamulmuş. Sudan hasar gördüğü kesin.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "İçinde etiketi yok, düşmüş olabilir.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Büyük büyükbabam kurtarma gemisindeydi' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Telleri paslanmış ama modern çelik tel gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kemanın sapında 'Wallace Hartley' (Titanik orkestra şefi) baş harfleri kazınmış. Fazla bariz değil mi?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "TUZ ANALİZİ: Ahşabın üzerindeki beyaz lekeler deniz tuzu değil, sofra tuzu ve kireç karışımı.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "YAPIŞTIRICI: Kemanın birleşim yerlerinde PVA (beyaz tutkal) kalıntıları var. Bu tutkal 1940'larda icat edildi.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "AĞAÇ YAŞI: Ahşap halka analizi (Dendrokronoloji), ağacın 1985 yılında kesildiğini gösteriyor.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "VERNİK: Kullanılan vernik poliüretan bazlı. 1912'de sadece doğal reçine verniği kullanılırdı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "SU HASARI: Ahşabın şişmesi doğal değil, buhar odasında yapay olarak bekletilerek yapılmış.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "MODEL: Kemanın burgu yapısı 1970'ler Çin üretimi öğrenci kemanlarıyla aynı.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "ENVANTER DAMGASI: Kemanın sapının altında silik bir damga: 'BROADWAY PROP DEPT - 1997'.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "FATURA: Kemanın kutusunda unutulmuş bir kuru temizleme fişi: 'Kostüm Eskitme İşlemi - Tiyatro Pazarı'.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "BANKSY'NİN 'GÖRÜNMEZ' HEYKELİ",
        "description": "Mühürlü ve sertifikalı, içinde hiçbir şey olmayan pleksi kutu.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/banksy.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYmFua3N5LmpwZyIsImlhdCI6MTc2NzI3MDg5MCwiZXhwIjoxNzk4ODA2ODkwfQ.1VtD05zhd5vXix-IIOc0lUUaOwGYzed00S2b1Qm3YNU",
        "displayedValue": 750000,
        "realValue": 1,
        "category": "Art",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "SANAT DÜNYASI: Banksy'nin son şakasının kurbanı kim olacak? Sanatçı, 'hiçliği' satarak kapitalizmi eleştirdiğini açıkladı.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kutunun içi gerçekten boş. Göz yanılması falan yok, bildiğin hava var.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Sertifikası çok havalı duruyor, kırmızı mühürlü falan. Belki de olay sertifikadır?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Kutu pleksiglas, çok hafif. IKEA'daki saklama kaplarına benziyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Satıcı 'Ruhani bir ağırlığı var' diyor. Dalga mı geçiyor?",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kaidesi siyah plastik. Altında toz var, silmemişler bile.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Mühürün üzerinde 'Pest Control' yazıyor, Banksy'nin şirketi. Ama sahte olabilir.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Arkadaşım 'İmparatorun Yeni Giysileri' masalını hatırlattı. Kendimi keriz gibi hissediyorum.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "SERTİFİKA ANALİZİ: Kağıt üzerindeki mühür gerçek mum değil, plastik baskı. Banksy genelde gerçek mum kullanır.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "MALZEME: Pleksi kutu, Çin menşeili ucuz akrilik. Sanat galerisi kalitesinde değil.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "AĞIRLIK: Kutu darası alındığında içindeki 'heykelin' ağırlığı 0.000 gram. Havanın ağırlığıyla eşit.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "PARMAK İZİ: Kutunun iç yüzeyinde parmak izi var. Görünmez heykeli koyarken mi oldu? :)",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KİMYASAL: Kutunun içinde 'Yeni Araba Kokusu' spreyi kalıntısı tespit edildi. Atmosfer yaratmak için sıkılmış.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "SERİ NUMARASI: Sertifikadaki numara Banksy'nin veritabanında 'İptal Edildi' olarak görünüyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "SOSYAL MEDYA: Banksy resmi Instagram hesabından bir story paylaştı: 'İnsanların boş kutuya para vermesi sanat değil, aptallıktır.' Bu eser o.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ETİKET: Siyah kaidenin altında 'Made in China' etiketi unutulmuş.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "VİKİNG KRALI'NIN SAVAŞ BALTASI",
        "description": "Bir bataklık kazısında bulunan rün işlemeli devasa balta.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/axe.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYXhlLmpwZyIsImlhdCI6MTc2NzE4MjgyMSwiZXhwIjoxNzk4NzE4ODIxfQ.tDNmHD3NBXQGn2WnYcSgYzCzc9hqhtfvbd4VVXqW8kA",
        "displayedValue": 200000,
        "realValue": 200000,
        "category": "History",
        "gameSet": "SET_A",
        "isTreasure": true,
        "publicRumor": "ARKEOLOJİ BÜLTENİ: Danimarka'daki son bataklık kazılarında 'kayıp bir kraliyet mezarı' bulunduğuna dair fısıltılar dolaşıyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Balta o kadar temiz duruyor ki, sanki turistik eşya dükkanından alınmış. Pas nerede?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki rünler Yüzüklerin Efendisi filmindekilere benziyor. Fantastik bir replika olabilir.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Sapındaki deri kaplama çok sağlam. 1000 yıl bataklıkta kalan deri çürümez mi?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Ağır bir lağım veya bataklık kokusu var. Mide bulandırıcı.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu bir çiftçi tarlasını sürerken buldu' diyor. Klasik defineci yalanı.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Metal kısmı biraz yamuk. Savaşta mı yamuldu yoksa kötü işçilik mi?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Rünlerin boyası mavi renkte parlıyor. Vikingler neon boya mı kullanıyordu?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KARBON-14: Sap kısmındaki meşe ağacı MS 890-910 yılları arasına tarihleniyor. Kesinlikle Orta Çağ'dan kalma.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "METAL ANALİZİ: Demir cevheri, o dönem İskandinavya'da kullanılan ve meteorit demiri içeren yüksek kaliteli 'pota çeliği'.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KORUNMA DURUMU: Bataklık turbası (peat bog), oksijensiz ortam yarattığı için deriyi ve ahşabı çürütmeden bugüne kadar saklamış.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "RÜN ÇEVİRİSİ: Yazılar modern Norveççe değil, çok nadir bir 'Eski Futhark' lehçesi. 'Kralın Gazabı' anlamına geliyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "MAVİ BOYA: Rünlerin içindeki mavi kalıntı neon değil, o dönem statü sembolü olarak kullanılan 'Lapislazuli' tozu.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "SAVAŞ İZLERİ: Balta ağzındaki çentikler mikroskopla incelendiğinde, başka bir metal silahla şiddetli çarpışma sonucu oluştuğu kesinleşti.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "MÜZE KAYDI: Sapın üzerindeki gümüş kakma sembol, sadece efsanevi Viking Kralı 'Kanasusamış Erik'in sancağında bulunan kraliyet mührü.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "X-RAY SÜRPRİZİ: Baltanın sapının içinde içi oyulmuş gizli bir hazne ve içinde Kraliyet soy ağacını gösteren minik bir altın parşömen bulundu.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "FREDDIE MERCURY'NİN TASLAKLARI",
        "description": "Bohemian Rhapsody'nin yazım aşamasından kalma el yazısı kağıtlar.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/br_notebook.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYnJfbm90ZWJvb2suanBnIiwiaWF0IjoxNzY3MTgyNzc3LCJleHAiOjE3OTg3MTg3Nzd9.qi1t62G9p_AWMHppZmG7IcaPZ-kQNZRLWRXoT_OFhwc",
        "displayedValue": 160000,
        "realValue": 15,
        "category": "Pop-Culture",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "MAGAZİN HABERİ: 'Bohemian Rhapsody' filminin çekimleri bittikten sonra setten birçok eşyanın hayranlar tarafından çalındığı iddia ediliyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kağıtlar çok sararmış ama çay dökülmüş gibi dalgalı bir sararma bu. Doğal yaşlanma böyle olmaz.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Yazıdaki 'Galileo' kelimesi üç kez üst üste yanlış yazılmış. Freddie bu kadar imla hatası yapar mıydı?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Kağıdın köşesinde tükenmez kalem denenmiş. O dönem dolma kalem daha yaygındı.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Müzik notaları biraz anlamsız duruyor, rastgele çizilmiş gibi.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'bunu Queen'in eski menajerinden aldım' diyor ama adamın ismini hatırlamıyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Kağıdın dokusu modern fotokopi kağıdına benziyor, ince ve pürüzsüz.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Sayfanın arkasında silik bir barkod var gibi. Defterden yırtılmış.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "GRAFOLOJİ: Yazı karakteri Freddie'nin el yazısına benziyor ama 'f' ve 'g' harflerinin kuyrukları Rami Malek'in el yazısıyla %100 uyuşuyor.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KAĞIT LİFİ: Kağıt hamurunda sentetik beyazlatıcılar var. Bu kimyasallar 1990'lardan sonra kullanılmaya başlandı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "MÜREKKEP YAŞI: Spektrometre testi mürekkebin en fazla 5-6 yıllık olduğunu gösteriyor. 1970'lerden kalma olamaz.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "NOTA ANALİZİ: Portedeki notalar 'Bohemian Rhapsody'nin melodisiyle uyuşmuyor, rastgele karalanmış dekoratif notalar.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "SU İZİ: Kağıdı ışığa tutunca modern bir kırtasiye markasının filigranı (watermark) görünüyor.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "KİMYASAL TEST: Sayfalara eskitme efekti vermek için 'Earl Grey' çayı ve fırınlama tekniği kullanıldığı tespit edildi.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "ARKA YÜZ DAMGASI: Sayfaların birinin arkasında görünmez mürekkeple basılmış '20th Century Fox - PROP DEPT' damgası bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "SENARYO NOTU: Sayfanın kenarında kurşun kalemle çok küçük 'Sahne 42, Tekrar 3' notu düşülmüş. Bu bir film çekim notu.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "İLK BİTCOİN DONANIM CÜZDANI",
        "description": "Satoshi Nakamoto'un kullandığı iddia edilen, elle modifiye edilmiş flash bellek.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/crypto_wallet.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvY3J5cHRvX3dhbGxldC5qcGciLCJpYXQiOjE3NjcxODI3NDcsImV4cCI6MTc5ODcxODc0N30.JrUv--kb1U4nzeeZSALXnszaRiljUyhQusS5oVP4OJ8",
        "displayedValue": 2000000,
        "realValue": 1,
        "category": "Tech",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "TEKNOLOJİ KULİSİ: Satoshi Nakamoto'nun bilinen cüzdanlarında herhangi bir hareketlilik yok. Bu donanım cüzdanı nereden çıktı?",
        "intelPool": [
            {
                "id": 1,
                "text": "Bildiğin bantlanmış USB bellek bu. Satoshi bu kadar mı fakirdi?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerindeki kırmızı ışık yanıp sönüyor ama bilgisayara takınca 'Bilinmeyen Aygıt' hatası veriyor.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Etikette 'BTC_GENESIS' yazıyor ama yazı fontu Comic Sans'a benziyor. Satoshi Comic Sans kullanır mıydı?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kabloların uçları açıkta, dokunsan çarpılacaksın gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Şifresini unuttum ama içinde 50 BTC var' diyor. Klasik dolandırıcı bahanesi.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Cihazın arkasında 'Made in Taiwan' yazıyor. Satoshi Japon değil miydi? Ya da anonim?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Elime alınca içinden tıkır tıkır ses geliyor, sanki parçalar kopmuş.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "ÇİP ANALİZİ: İçindeki bellek çipi 2014 üretim tarihli. Bitcoin 2009'da çıktı, Genesis cüzdanı bu olamaz.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "DEVRE ŞEMASI: Kabloların hiçbiri bellek çipine bağlı değil, sadece LED ışığına güç veriyor. Bu bir tiyatro dekoru gibi.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "VERİ KURTARMA: Belleğin ilk sektöründe 'boot_error' yerine 'lmao_xD' hex kodu bulundu.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "USB PROTOKOLÜ: Cihaz USB 3.0 standardında. Bitcoin ilk çıktığında USB 2.0 yaygındı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KİMYASAL KALINTI: Bantların üzerinde pizza yağı ve Cheetos tozu bulundu. Bir hacker'dan ziyade bir gamer'a ait gibi.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "ELEKTRİK TESTİ: Cihaz takıldığı anda 5V çekiyor ama veri hattında 0 aktivite var. Sadece ışık yakıyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ DOSYA: Belleğin derinliklerinde tek bir .txt dosyası kurtarıldı: 'BENİ Mİ ARADIN? ŞAKA ŞAKA BOŞ BURASI. -HACKERMAN'.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "PARÇA NUMARASI: Cihazın kasası, 2015 yılında Aliexpress'te satılan 'Kendin Yap USB Şaka Kiti'nin parçası.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "KLEOPATRA'NIN AYNASI",
        "description": "Antik Mısır'dan kalma, arkasında hiyeroglifler bulunan bronz ayna.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/hand_mirror.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvaGFuZF9taXJyb3IuanBnIiwiaWF0IjoxNzY3MTgyNjc1LCJleHAiOjE3OTg3MTg2NzV9.C_r1Hh5qOaTIhBp4FUHmthBHGrtCScjKmZKV-uqAfkU",
        "displayedValue": 525000,
        "realValue": 450,
        "category": "Luxury",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "TARİH DERGİSİ: İngiliz Müzesi yetkilileri, piyasada 'Antik Mısır' diye satılan bronz objelerin %80'inin 19. yüzyıl kopyaları olduğu konusunda uyardı.",
        "intelPool": [
            {
                "id": 1,
                "text": "Aynanın arkasındaki hiyeroglifler bana biraz fazla 'düzgün' geldi. Antik ustalar bu kadar simetrik yazamazdı.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Bronz o kadar parlak ki, sanki dün cilalanmış gibi. 2000 yıllık metal böyle mi görünür?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Satıcı, bunu Kahire'deki dedesinin tavan arasında bulduğunu söylüyor. Klasik hikaye...",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Tutma sapındaki lotus çiçeği motifi biraz modern Art Deco tarzını andırıyor sanki.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Aynaya bakınca yüzüm yamuk görünüyor. Kleopatra buna bakıp makyaj yapamazdı herhalde.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Hiyerogliflerde sürekli 'Kuş' sembolü var. Bu sembolün o dönemde sadece mezar taşlarında kullanıldığı söyleniyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Metalden garip, metalik bir koku geliyor. Eski bronz genelde toprak kokar.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "METALURJİ: Alaşımda %15 oranında Çinko tespit edildi. Antik Mısır bronzlarında çinko kullanılmazdı, bu Roma veya sonrası bir teknik.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KOROZYON TESTİ: Yeşil patina tabakası (pas) metale işlememiş, sadece yüzeyde kalmış. Asit ile sonradan yapılmış gibi.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "DİLBİLİM RAPORU: Arkadaki yazıda gramer hatası var. 'Ra'nın Kızı' yerine yanlışlıkla 'Ra'nın Turisti' yazılmış.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "DÖKÜM İZİ: Sap kısmında modern döküm kalıplarında oluşan ince bir 'birleşme çizgisi' (seam line) var.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "X-RAY TARAMASI: Metalin iç yapısı çok homojen. Antik dökümlerde genelde hava kabarcıkları olurdu. Bu endüstriyel bir döküm.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "YÜZEY ANALİZİ: Aynanın yüzeyi zımpara kağıdı izleri taşıyor. Mısırlılar ponza taşı kullanırdı, zımpara değil.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "ÜRETİCİ DAMGASI: Sapın en altında mikroskobik boyutta 'S.W. & Sons - London 1885' damgası bulundu. Bu bir İngiliz hediyelik eşyası.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "KATALOG EŞLEŞMESİ: Bu aynanın aynısı, 1890 tarihli 'British Museum Hediyelik Eşya Kataloğu'nun 12. sayfasında 'Mısır Hatırası' olarak 5 Sterline satılmış.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "MARS'TAN GELEN SİYAH KUTU",
        "description": "NASA'nın gizli bir görevinde Mars yüzeyinden aldığı söylenen kapsül.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/nasa_capsule.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmFzYV9jYXBzdWxlLmpwZyIsImlhdCI6MTc2NzE4MjY0MiwiZXhwIjoxNzk4NzE4NjQyfQ.dlUW8SUIJotk35bBQH87AhxM9INIzBOMEte1S2ZAt8M",
        "displayedValue": 6500000,
        "realValue": 15,
        "category": "Tech",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "SON DAKİKA: NASA sözcüsü, 'Mars görevlerinden dönen herhangi bir kayıp kapsül olmadığını' belirtti ancak komplo teorisyenleri bunun bir örtbas olduğunu düşünüyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kutu elime aldığımda beklediğimden çok daha hafif geldi. İçi boş olabilir mi?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Dışındaki yanık izleri çok gerçekçi, sanki atmosferden girerken sürtünmeyle yanmış gibi duruyor.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Satıcı, bu kutuyu Nevada çölünde bir kraterin yanında kamp yaparken bulduğunu iddia ediyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Kutunun üzerindeki NASA logosu, resmi logodan bir tık farklı gibi. Fontu mu değişik yoksa yıpranmış mı?",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kutuyu sallayınca içeriden 'lök lök' diye jölemsi bir ses geliyor. Uzaylı biyolojisi mi?",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Üzerindeki vidalar standart yıldız tornavida (Phillips) ile açılabilir duruyor. NASA genelde özel vida kullanmaz mı?",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kutunun alt kısmında silinmiş bir barkod izi var. Uzay araçlarında barkod olur mu?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "GEIGER SAYACI: Kutu üzerinde herhangi bir radyasyon kalıntısı tespit edilemedi. Uzaydan dönen metallerde genelde kozmik radyasyon izi olur.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "METALURJİ RAPORU: Dış kaplama titanyum alaşım değil, mutfak gereçlerinde kullanılan basit alüminyum ve sert plastik karışımı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "TERMAL ANALİZ: Yanık izleri yüksek sürtünme ısısıyla değil, asetilen pürmüzüyle (kaynak ateşi) yüzeysel olarak ve rastgele yapılmış.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "X-RAY TARAMASI: Kutunun içinde karmaşık elektronik devreler görünmör, sadece organik ve jel kıvamında homojen bir kütle var.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KARBON TESTİ: Dış kaplamadaki plastik parçacıklar 2020 sonrası üretime işaret ediyor. Mars görevi ise 2012'deydi.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "YÜZEY ANALİZİ: Kutu üzerindeki çizikler mikroskobik düzeyde incelendiğinde, beton zemine sürtülerek yapıldığı anlaşılıyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "SERİ NUMARASI SORGUSU: Kapsülün altındaki kod (XJ-900), iflas eden bir oyuncak şirketinin 2022 yılında ürettiği 'Galaktik Sürpriz Yumurta' serisine ait.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "UNBOXING VİDEOSU: YouTube'da 3 yıl önce yüklenmiş bir videoda, bir çocuk bu kutunun aynısını açıyor ve içinden 'Uzay Pudingi' çıkıyor.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "JURASSIC PARK 'T-REX' DİŞİ",
        "description": "1993 yapımı kült filmde kullanılan animatronik T-Rex'ten düşen dev diş.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/trex_tooth.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvdHJleF90b290aC5qcGciLCJpYXQiOjE3NjcxODI1NzUsImV4cCI6MTc5ODcxODU3NX0.7PR6jB54XBOKuHIMeE7xDnPtbZYQ7LV9PbwsbYIJVIw",
        "displayedValue": 20000,
        "realValue": 500,
        "category": "Pop-Culture",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "SİNEMA KULİSİ: Universal Stüdyoları'nın deposundan 90'larda çalınan orijinal 'Animatronik T-Rex' parçalarının karaborsada olduğu konuşuluyor.",
        "intelPool": [
            // --- ⚪ SIRADAN (7 ADET) ---
            { "id": 1, "rarity": "common", "text": "Diş çok büyük, 25 santim var. Dinozor dişi bu kadar pürüzsüz olur mu?" },
            { "id": 2, "rarity": "common", "text": "Rengi sararmış kemik gibi duruyor ama dokununca sıcak, taş gibi soğuk değil." },
            { "id": 3, "rarity": "common", "text": "Kaidesinde 'Site B - Isla Sorna' yazıyor. Bu filmdeki adanın adı." },
            { "id": 4, "rarity": "common", "text": "Satıcı 'Bunu set ekibinden biri hatıra olarak almış' diyor." },
            { "id": 5, "rarity": "common", "text": "Dişin ucunda kırık var, sanki bir şeye sertçe çarpmış." },
            { "id": 6, "rarity": "common", "text": "Üzerinde Steven Spielberg imzalı bir plaket var ama imza baskı gibi duruyor." },
            { "id": 7, "rarity": "common", "text": "Dişin kök kısmı çok düz kesilmiş. Gerçek fosil veya prop böyle kesilir mi?" },

            // --- 🟣 NADİR (6 ADET) ---
            { "id": 8, "rarity": "rare", "text": "MALZEME: Dişin yapısı 'Epoksi Reçine'. Filmdeki animatroniklerde daha hafif olan 'Poliüretan Köpük' kullanılmıştı." },
            { "id": 9, "rarity": "rare", "text": "BOYA KATMANI: Diş üzerindeki eskitme efektleri el boyaması değil, fabrikasyon sprey boya (airbrush) ile yapılmış." },
            { "id": 10, "rarity": "rare", "text": "KALIP İZİ: Dişin arka tarafında boydan boya geçen ince bir kalıp birleşme çizgisi (seam line) var. Orijinal proplarda bu temizlenir." },
            { "id": 11, "rarity": "rare", "text": "AĞIRLIK: Parça beklenenden çok ağır. İçi dolu reçine döküm. Filmde kullanılanlar hareket kolaylığı için içi boş yapılırdı." },
            { "id": 12, "rarity": "rare", "text": "SERTİFİKA: Yanındaki Universal Studios sertifikasının kağıdı 1993 değil, 2015 yılına ait parlak kuşe kağıt." },
            { "id": 13, "rarity": "rare", "text": "İMZA ANALİZİ: Spielberg imzası ıslak mürekkep değil, lazer baskı (Autopen)." },

            // --- 🟡 EFSANEVİ (2 ADET) ---
            { "id": 14, "rarity": "legendary", "text": "ALT ETİKET: Kaidenin altındaki kadife kaldırılınca 'Made in China - Universal Gift Shop' etiketi bulundu." },
            { "id": 15, "rarity": "legendary", "text": "BARKOD: Ürün kodu taratıldığında 'Jurassic World: Fallen Kingdom - Collector's Edition DVD Seti' hediyesi olduğu çıkıyor." }
        ]
    },
    {
        "name": "EINSTEIN'IN KARALADIĞI PEÇETE",
        "description": "Einstein'ın genel görelilik üzerine yeni bir fikir geliştirirken üzerine formüller yazdığı peçete.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/einsten_text.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZWluc3Rlbl90ZXh0LmpwZyIsImlhdCI6MTc2NzE4MjcyMywiZXhwIjoxNzk4NzE4NzIzfQ.xk_LKYwXQ22gMmd1jtyOib5bdF-FM1XGHZN1rts-p_Y",
        "displayedValue": 35000,
        "realValue": 75000,
        "category": "History",
        "gameSet": "SET_B",
        "isTreasure": true,
        "publicRumor": "BİLİM DÜNYASI ŞOKTA: Princeton Üniversitesi arşivlerinde kayıp olduğu düşünülen bazı notların, bir garsonun terekesinden çıktığı konuşuluyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Peçete çok ince ve yağlı, üzerine kahve dökülmüş. Değerli bir evrak gibi durmuyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Yazıların yarısı silinmiş, okunmuyor. Sadece E=mc² kısmı net, o da herkesin bildiği şey.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Satıcı, bunun dedesinin restoranında unutulduğunu söylüyor ama restoranın adını hatırlamıyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Peçetenin markası kenarda silik şekilde yazıyor, çok ucuz bir marka.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Formüllerin yanında bir de alışveriş listesi var: 'Süt, Yumurta, Tütün'. Einstein pazara mı gidiyordu?",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Kağıt sararmış ama kenarları çok düzgün, sanki kitaptan yırtılmış gibi.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "El yazısı çok karmaşık, doktor yazısı gibi. Okumak imkansız.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "MÜREKKEP YAŞI: Kullanılan dolma kalem mürekkebi 'Waterman Blue-Black', Einstein'ın 1950'lerde favori mürekkebiydi.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "GRAFOLOJİ RAPORU: 'g' ve 'f' harflerinin kuyruk kıvrımları, Einstein'ın 1953 tarihli mektuplarındaki el yazısıyla %99 eşleşiyor.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KAĞIT ANALİZİ: Peçetenin selüloz yapısı, 1950'lerde New Jersey diner'larında kullanılan ucuz hamurla aynı.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "FORMÜL KONTROLÜ: Yazılan denklem, Genel Görelilik teorisinin alternatif bir türevi. Bu formül ders kitaplarında yok.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "FİZİKSEL DURUM: Kahve lekesinin altındaki mürekkep dağılmış. Bu, yazının kahve dökülmeden önce (yani o an) yazıldığını gösterir.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "TARİHLEME: Peçete üzerindeki baskı kodu 1952 yılına ait bir üretim serisini işaret ediyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GÜNLÜK REFERANSI: Einstein'ın sekreterinin günlüğünde: 'Bugün profesör öğle yemeğinde peçeteye harika bir fikir karaladı ama yanına almayı unuttu' notu var.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "BİLİMSEL KEŞİF: Peçetedeki formül, fizikçilerin yıllardır çözmeye çalıştığı 'Birleşik Alan Teorisi'nin kayıp parçası olabilir. Bu paha biçilemez.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "SAF ELMAS 'KIBE' HEYKELİ",
        "description": "Tek parça 500 karatlık ham elmastan oyulmuş, minimalist bir heykel sanatı örneği.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/diamond.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZGlhbW9uZC5qcGciLCJpYXQiOjE3NjcxODI3MzgsImV4cCI6MTc5ODcxODczOH0.Sb3DweB-NjV6-tp54TUFMTWR6BJ2CxdGmTNoSh64z3M",
        "displayedValue": 2750000,
        "realValue": 2000000,
        "category": "Luxury",
        "gameSet": "SET_A",
        "isTreasure": true,
        "publicRumor": "SÖYLENTİ: Afrika'daki bir maden şirketinin 'Kayıp Yıldız' adını verdiği devasa ham elmasın yasa dışı yollarla Türkiye'ye girdiği konuşuluyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Bu kadar büyük bir elmas gerçek olamaz. Cam veya kristaldir kesin.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Işığa tutunca gökkuşağı gibi parlıyor ama Swarovski taşları da öyle parlar.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Yüzeyinde ufak çizikler var gibi. Gerçek elmas çizilmez diye biliyorum?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Eline alınca buz gibi soğuk hissettiriyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Kutusu çok basit bir kadife kese. Milyonluk taş böyle mi saklanır?",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Satıcı, bunu 'büyükannesinin avizesinden düşen parça' zannederek satıyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Üzerine hohlayınca buğu hemen kayboluyor. Cam olsa buğu daha uzun kalırdı.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "TERMAL İLETKENLİK: Test cihazı metale değer değmez 'DIAMOND' uyarısı verdi. Isıyı bakırdan bile hızlı iletiyor.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KIRILMA İNDİSİ: Işığı o kadar sert kırıyor ki (2.42), arkasındaki gazete yazısını okumak imkansız. Cam olsaydı okunurdu.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "SERTLİK TESTİ: Mohs kalemleriyle yapılan testte 9 numara (Korindon/Yakut) bile yüzeyi çizemedi. Sadece elmas çizebilir.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "UV FLORESANS: Mor ışık altında güçlü bir mavi parıltı yayıyor. Bu, doğal elmasların %30'unda görülen bir özellik.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "YOĞUNLUK: Özgül ağırlığı 3.52. Kübik Zirkonya (CZ) olsaydı çok daha ağır (5.6+) gelirdi.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "İÇ YAPISI: Mikroskop altında içinde minik siyah karbon noktaları (inklüzyon) görünüyor. Laboratuvar elması tertemiz olurdu.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "LAZER KODU: Taşın kemer kısmında mikroskobik boyutta GIA sertifika numarası bulundu. Veritabanında 'Flawless 500ct Natural Diamond' olarak kayıtlı.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "KİMBERLİT KALINTISI: Heykelin oyulmamış dip kısmında mikroskobik bir volkanik kayaç parçası (Kimberlit) tespit edildi. Bu taş yerin 150km altından gelmiş.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "DÜNYANIN İLK BİLGİSAYAR FARESİ",
        "description": "Douglas Engelbart'ın 1968'deki 'Tüm Demoların Annesi' sunumunda kullandığı ahşap gövdeli, tek tuşlu ilk prototip.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/first_mouse.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZmlyc3RfbW91c2UuanBnIiwiaWF0IjoxNzY3MTgyNzA2LCJleHAiOjE3OTg3MTg3MDZ9.5bJbCvF486ZyAZC7gUdgKzX08kWbMfcLwGVy2AJnERE",
        "displayedValue": 100000,
        "realValue": 95000,
        "category": "Tech",
        "gameSet": "SET_A",
        "isTreasure": true,
        "publicRumor": "TEKNOLOJİ TARİHİ: Silikon Vadisi'ndeki bir müze, Douglas Engelbart'ın kayıp prototiplerinden biri için servet ödemeye hazır olduğunu duyurdu.",
        "intelPool": [
            {
                "id": 1,
                "text": "Tahta kutu gibi duruyor, çok ilkel. Bir marangozun hobi projesi olabilir.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kırmızı düğmesine basınca çok tok bir 'klik' sesi geliyor. Modern mouse'lara hiç benzemiyor.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Kablosu biraz yeni duruyor, sanki sonradan takılmış gibi.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Altındaki tekerlekler plastikten değil, metalden yapılmış. Masayı çizebilir.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı, bunu eski bir üniversite deposundan 'hurda' niyetine aldığını söylüyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Elime aldığımda beklediğimden çok daha ağır geldi. İçi dolu.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Yan tarafında elle kazınmış 'X-Y' harfleri var. Koordinat sistemi mi?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KARBON TESTİ: Ahşap gövde 1960'ların ortasında kesilmiş bir Oregon çam ağacından yapılmış.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "MEKANİZMA: İçindeki X ve Y ekseni potansiyometreleri, Engelbart'ın patent çizimleriyle birebir aynı mekaniğe sahip.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "KABLO ANALİZİ: Kablo dıştan yeni görünse de, içindeki bakır teller 1968 standartlarında ve elle lehimlenmiş.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "OKSİTLENME: Pirinç tekerleklerdeki yeşilimsi korozyon tabakası, metalin en az 50 yıldır havayla temas ettiğini kanıtlıyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "BAĞLANTI UCU: Konnektör tipi standart USB veya PS/2 değil, 60'larda sadece laboratuvarlarda kullanılan özel bir seri port.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "PARMAK İZİ: Ahşabın iç kısmında reçineyle korunmuş parmak izleri var ama kimlik tespiti yapılamadı.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "YAKMA DAMGASI: Cihazın iç gövdesine yakılarak yazılmış yazı bulundu: 'SRI ARC - PROPERTY OF LAB'. (Stanford Research Institute).",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "GÜNLÜK KAYDI: Kutuyla gelen eski bir not defterinde, 1968 tarihli bir tamir kaydı var: 'Demo öncesi kablo koptu, Douglas çok kızacak. -Teknisyen Bill'.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "NAPOLEON'UN KAYIP ŞAPKASI",
        "description": "Waterloo Savaşı'nda Napolyon Bonapart tarafından giyildiği iddia edilen, üzerinde barut izleri bulunan ikonik bicorne şapka.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/napoleon_hat.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmFwb2xlb25faGF0LmpwZyIsImlhdCI6MTc2NzE4MjY1OCwiZXhwIjoxNzk4NzE4NjU4fQ.RuN-bqJQng0q5mPsjOWYkjzPNRdV8FIMaF7WT_YQo2s",
        "displayedValue": 200000,
        "realValue": 120,
        "category": "History",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "KULİS BİLGİSİ: Fransız Askeri Müzesi, geçen ay depolarından hiçbir şapkanın kaybolmadığını resmi bir dille açıkladı. Bu parça nereden çıktı?",
        "intelPool": [
            {
                "id": 1,
                "text": "Şapka bana biraz küçük göründü. Napolyon'un kafa yapısının ortalamadan büyük olduğu bilinen bir gerçek.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Üzerinde yoğun bir barut ve naftalin kokusu var. Müze parçası mı yoksa tavan arası malı mı belli değil.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Satıcı, bu şapkanın dedesinden kaldığını söylüyor ama dedesinin 2. Dünya Savaşı'nda ne iş yaptığını anlatırken kekeliyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Şapkanın kenarındaki yıpranmalar şüpheli derecede simetrik duruyor, sanki zımparayla özellikle eskitilmiş gibi.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Bir forumda, benzer bir şapkanın geçen sene bir kostüm partisi ihalesinde satıldığı yazıyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Görünüşü, Louvre Müzesi'ndeki ünlü tabloda Napolyon'un taktığı şapkayla birebir aynı model.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Şapkanın içindeki deri bantta ter izi yok. Napolyon gibi stresli bir komutanın şapkası böyle tertemiz kalabilir mi?",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KUMAŞ ANALİZİ: Keçe malzemesi yün ve tavşan tüyü karışımı. Bu teknik 19. yüzyıl Fransız şapkalarında standarttı, malzeme doğru.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "DİKİŞ İNCELEMESİ: İç astardaki dikişler el yapımı değil, milimetrik nizami makine dikişi. Bu teknoloji 1850'lerden sonra yaygınlaştı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "POLEN TESTİ: Şapkanın üzerindeki tozda Waterloo bölgesine özgü bitki polenlerine rastlanmadı, daha çok modern şehir tozu var.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "KİMYASAL TEST: Üzerindeki barut izleri gerçek kara barut değil, tiyatrolarda kullanılan, yanıcı olmayan efekt tozu kalıntısı.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "BOYA SPEKTROSU: Siyah boyanın kimyasal bileşimi, 1920'lerde icat edilen sentetik bir sabitleyici içeriyor.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "ASTAR MUAYENESİ: İç kısımdaki ipek astar, 1800'lerin ipeğine göre çok daha parlak ve kaygan. Polyester karışımı olabilir.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ DAMGA: Astarın derinliklerine gizlenmiş, silinmeye yüz tutmuş bir damga bulundu: 'Costume Pierre - Paris 1960'. Bu bir film kostümü.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "ARŞİV FOTOĞRAFI: Bu şapka, 1960 yapımı 'Austerlitz' filminin set arkası fotoğraflarında başrol oyuncusunun kafasında net bir şekilde görülüyor. Yıpranma izleri birebir aynı.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Eski Bir Plak (Abba)",
        "description": "Nadir bulunan bir baskı gibi görünüyor.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/abba.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYWJiYS5qcGciLCJpYXQiOjE3NjcxODAyNTUsImV4cCI6MTc5ODcxNjI1NX0.tyzCqxzVreB2T6IssDw1qFwm6EFgb_QgCe_PIg-BQuc",
        "displayedValue": 300,
        "realValue": 2500,
        "category": "Pop-Culture",
        "gameSet": "SET_A",
        "isTreasure": true,
        "publicRumor": "KOLEKSİYONER ALARMI: ABBA'nın Eurovision zaferinden hemen sonra basılan 'Hatalı Kapak' serisinin değeri bu hafta tavan yaptı.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kapak kenarları biraz yıpranmış, çok el değiştirmiş gibi duruyor. Çöp olabilir mi?",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Plağın içinden eski bir konser bileti düştü. Tarihi 1974.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Üzerindeki 'Limited Edition' etiketi yarı yarıya soyulmuş, okumak zor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Satıcı plak çalarda denediğinde cızırtısız, tertemiz bir ses geldiğini söylüyor.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Arka kapaktaki şarkı listesinde 'Waterloo' şarkısı yanlış yazılmış: 'Waterlolo'. Bu bir basım hatası mı?",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Plağın göbeğindeki etiket rengi, standart ABBA plaklarından daha koyu bir mavi.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Kokusu o kadar eski ki, insanın burnuna toz ve nostalji doluyor.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "MATRİS KODU: Plağın iç çemberine kazınmış kod: 'POLAR-1974-A1'. Bu, İsveç'teki ilk kalıptan basıldığını gösterir.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "AĞIRLIK TESTİ: Plak tam 180 gram geliyor. O dönem sadece promosyon ve özel baskılar bu ağırlıkta basılırdı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "MÜREKKEP ANALİZİ: Ön kapaktaki soluk imzaların mürekkebi, 70'lerde kullanılan dolma kalem mürekkibiyle uyuşuyor.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "KAĞIT LİFİ: Kapak kartonu, modern parlak kağıt değil, 1970'lerin mat ve pürüzlü dokusuna sahip.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "SES FREKANSI: Dijital remaster değil, tamamen analog bir mastering. Ses dalgaları orijinal stüdyo kaydıyla birebir.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "ETİKET HATASI: Plak üzerindeki 'Copyright 1973' ibaresi, albüm çıkmadan önce basıldığını doğruluyor (Erken Baskı).",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "İMZA DOĞRULAMA: Kapaktaki imzalar Björn ve Benny'nin el yazısı uzmanları tarafından onaylandı. Bu, grup üyelerinin elinden çıkma.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "SERİ NUMARASI: Arka kapağın iç kısmına elle yazılmış numara: '004/100'. Bu, dünyadaki ilk 100 kopyadan dördüncüsü.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Modern Sanat Tablosu",
        "description": "Sadece birkaç çizgi ve bir nokta...",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/paint.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcGFpbnQuanBnIiwiaWF0IjoxNzY3MTgwNDg0LCJleHAiOjE3OTg3MTY0ODR9.hED2SNaezHfB4xkR5Drx2QDzwwjMkMEQlSE-edvHLzE",
        "displayedValue": 5000,
        "realValue": 50,
        "category": "Art",
        "gameSet": "SET_A",
        "isTreasure": false,
        "publicRumor": "SANAT DÜNYASI ÇALKALANIYOR: Eleştirmenler, bu aralar 'Minimalizmin Zirvesi' olarak tanıtılan bazı eserlerin aslında kara para aklama aracı olabileceğini konuşuyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Tabloya bakınca 'Bunu benim 5 yaşındaki yeğenim de yapar' dememek elde değil.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kırmızı nokta biraz yamuk duruyor. Sanatçının iç dünyasındaki karmaşa mı yoksa el kayması mı?",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Satıcı, bu eserin 'Geleceğin Picassosu' tarafından yapıldığını iddia ediyor ama ismini vermiyor.",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Tuvalin arkası tertemiz, hiç sararmamış. Sanki kırtasiyeden dün alınmış gibi.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Boya kokusu hala taze. Ya çok iyi korunmuş ya da boyası daha kurumamış.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Çerçevesi IKEA'nın standart serisine çok benziyor, vida yerleri bile aynı.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Eserin adı yok, sadece 'Adsız No: 1' yazıyor. Genelde usta ressamlar eserlerine isim verir.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "KİMYASAL ANALİZ: Kullanılan boya profesyonel yağlı boya değil, su bazlı ve toksik olmayan 'çocuk parmak boyası'.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "TUVAL İNCELEMESİ: Kumaş kalitesi 'Profesyonel Seri' değil, ilkokul resim derslerinde kullanılan standart pamuklu bez.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "FIRÇA DARBESİ: Siyah çizgilerde fırça kılı izi yok, parmak sürtmesiyle oluşturulmuş izler var.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "UV IŞIK TESTİ: Tablonun sağ alt köşesinde silinmiş bir 'Can - 5 Yaş' yazısı florasan ışıkta parlıyor.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KATMAN ANALİZİ: Boya tek kat sürülmüş, altında herhangi bir taslak veya eskiz çalışması yok. Doğaçlama yapılmış.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "PROVENANS: Eserin geçmişi bir sanat galerisine değil, 'Papatyalar Anaokulu Yıl Sonu Sergisi'ne dayanıyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "ARKA YÜZ DAMGASI: Çerçevenin iç kısmında 'Minik Eller Sanat Atölyesi - Hatıra' kaşesi bulundu.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "VİDEO KAYDI: Satıcının sosyal medya hesabında, bu tabloyu oğlu boyarken çektiği 'Gururlu Baba' başlıklı bir videosu var.",
                "rarity": "legendary"
            }
        ]
    },
    {
        "name": "Antika Osmanlı Hançeri",
        "description": "Fatih Sultan Mehmet dönemine atfedilen, mors dişi kabzalı ve altın kakmalı, şam çeliğinden yapılmış nadir bir hançer.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/dagger.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZGFnZ2VyLmpwZyIsImlhdCI6MTc2NzI3MDkxOCwiZXhwIjoxNzk4ODA2OTE4fQ.HUguuq-zDV1Fc2_JPPaYc_bcZkoEM9Ovxe4vC_esKEI",
        "displayedValue": 55000,
        "realValue": 6000,
        "category": "History",
        "gameSet": "SET_C",
        "isTreasure": true,
        "publicRumor": "TOPKAPI SARAYI: Envanterde 'Fatih'in Hançeri' olarak bilinen eserin bir benzerinin daha olduğu ve bunun saraydan hediye olarak çıktığı söyleniyor.",
        "intelPool": [
            {
                "id": 1,
                "text": "Kınında çatlaklar var, derisi dökülmüş. Çok eski duruyor.",
                "rarity": "common"
            },
            {
                "id": 2,
                "text": "Kabzası fildişine benziyor ama sararmış. Plastik de olabilir.",
                "rarity": "common"
            },
            {
                "id": 3,
                "text": "Çeliği kararmış, üzerinde dalgalı desenler var. Pas mı bu?",
                "rarity": "common"
            },
            {
                "id": 4,
                "text": "Üzerindeki taşlar düşmüş, yerleri boş kalmış.",
                "rarity": "common"
            },
            {
                "id": 5,
                "text": "Satıcı 'Bunu büyük dedem Çanakkale Savaşı'ndan getirdi' diyor.",
                "rarity": "common"
            },
            {
                "id": 6,
                "text": "Ağırlığı çok dengeli, ele tam oturuyor.",
                "rarity": "common"
            },
            {
                "id": 7,
                "text": "Üzerindeki yazılar Arapça ama okuyamıyorum.",
                "rarity": "common"
            },
            {
                "id": 8,
                "text": "METAL ANALİZİ: Çelik üzerindeki dalgalar pas değil, gerçek 'Şam Çeliği' (Damascus) deseni. Bu teknik 18. yüzyılda kayboldu.",
                "rarity": "rare"
            },
            {
                "id": 9,
                "text": "KABZA: Malzeme plastik değil, gerçek mors dişi (walrus ivory). Osmanlı saray işi hançerlerde kullanılırdı.",
                "rarity": "rare"
            },
            {
                "id": 10,
                "text": "ALTIN KAKMA: Çelik üzerine işlenen desenler boya değil, eritilmiş altın kakma tekniği. Çok usta işi.",
                "rarity": "rare"
            },
            {
                "id": 11,
                "text": "YAZI ÇEVİRİSİ: Namludaki hat yazısı: 'Sultanın gücü adaletindedir'. Fatih dönemine özgü bir yazı stili.",
                "rarity": "rare"
            },
            {
                "id": 12,
                "text": "KAN OLUKLARI: Hançerin üzerindeki oluklar simetrik ve savaş için tasarlanmış. Dekoratif değil, öldürücü.",
                "rarity": "rare"
            },
            {
                "id": 13,
                "text": "TARİH: Kabzanın altındaki Hicri tarih 880 (Miladi 1475) yılını gösteriyor.",
                "rarity": "rare"
            },
            {
                "id": 14,
                "text": "GİZLİ MÜHÜR: Kabzanın topuzunu çevirince içinde Fatih Sultan Mehmet'in şahsi mührü (Tuğrası) gizlenmiş.",
                "rarity": "legendary"
            },
            {
                "id": 15,
                "text": "BENZERLİK: Bu hançer, Topkapı Sarayı Müzesi'ndeki Fatih'in kaftanının kuşağında asılı duran hançerle ikiz kardeş kadar benziyor.",
                "rarity": "legendary"
            }
        ]
    }
];

async function main() {
    console.log("Seeding Database with New Intel System...");

    let addedCount = 0;
    let updatedCount = 0;

    for (const item of items) {
        const existing = await prisma.item.findFirst({
            where: { name: item.name }
        });

        const data = {
            name: item.name,
            description: item.description || "Açıklama yok.",
            imageUrl: item.imageUrl || "https://placeholder.com",
            displayedValue: item.displayedValue,
            realValue: item.realValue,
            category: item.category,
            gameSet: item.gameSet,
            isTreasure: item.isTreasure || false,
            publicRumor: item.publicRumor || "",
            intelPool: item.intelPool || []
        };

        if (!existing) {
            await prisma.item.create({ data });
            addedCount++;
        } else {
            await prisma.item.update({
                where: { id: existing.id },
                data
            });
            updatedCount++;
        }
    }

    console.log(`Seeding finished. Added: ${addedCount}, Updated: ${updatedCount}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

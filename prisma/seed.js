import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const items = [
    // --- SET A ---
    {
        "name": "Antika Osmanlı Hançeri",
        "description": "Altın kakmalı, işlemeli bir hançer.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/dagger.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZGFnZ2VyLmpwZyIsImlhdCI6MTc2NzE4MDMzOCwiZXhwIjoxNzk4NzE2MzM4fQ.-XTJ4gQKu5wuEWpEFj4mBYKfWTWOG9Maolx56zeNGoU",
        "displayedValue": 1200,
        "realValue": 6000,
        "category": "History",
        "gameSet": "SET_A",
        "intelGood": "Kabzası gerçek 24 ayar altın kaplama.",
        "intelBad": "Kınında küçük bir çatlak var, değerini düşürebilir.",
        "intelSecret": "Bu hançer Fatih Sultan Mehmet'in şahsi koleksiyonuna ait gerçek bir parça!"
    },
    {
        "name": "Modern Sanat Tablosu",
        "description": "Sadece birkaç çizgi ve bir nokta...",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/paint.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcGFpbnQuanBnIiwiaWF0IjoxNzY3MTgwNDg0LCJleHAiOjE3OTg3MTY0ODR9.hED2SNaezHfB4xkR5Drx2QDzwwjMkMEQlSE-edvHLzE",
        "displayedValue": 5000,
        "realValue": 50,
        "category": "Art",
        "gameSet": "SET_A",
        "intelGood": "Ressamın son eseri olduğu söyleniyor.",
        "intelBad": "Tuvalin arkasında 'Made in China' damgası var.",
        "intelSecret": "Ünlü bir ressamın değil, yerel bir anaokulu öğrencisinin parmak boyası çalışması."
    },
    {
        "name": "Eski Bir Plak (Abba)",
        "description": "Nadir bulunan bir baskı gibi görünüyor.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/abba.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYWJiYS5qcGciLCJpYXQiOjE3NjcxODAyNTUsImV4cCI6MTc5ODcxNjI1NX0.tyzCqxzVreB2T6IssDw1qFwm6EFgb_QgCe_PIg-BQuc",
        "displayedValue": 300,
        "realValue": 2500,
        "category": "Pop-Culture",
        "gameSet": "SET_A",
        "intelGood": "İçinde grubun orijinal imzaları gizli.",
        "intelBad": "Kapağı biraz yıpranmış.",
        "intelSecret": "Bu, 1974'teki Eurovision birinciliğinden sonra basılan ilk 100 kopyadan biri."
    },
    {
        "name": "NAPOLEON'UN KAYIP ŞAPKASI",
        "description": "Waterloo Savaşı'nda Napolyon Bonapart tarafından giyildiği iddia edilen, üzerinde barut izleri bulunan ikonik bicorne şapka.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/napoleon_hat.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmFwb2xlb25faGF0LmpwZyIsImlhdCI6MTc2NzE4MjY1OCwiZXhwIjoxNzk4NzE4NjU4fQ.RuN-bqJQng0q5mPsjOWYkjzPNRdV8FIMaF7WT_YQo2s",
        "displayedValue": 200000,
        "realValue": 120,
        "category": "History",
        "gameSet": "SET_A",
        "intelGood": "Kumaş analizi, 19. yüzyıl başındaki Fransız askeri tekstiliyle birebir uyuşuyor.",
        "intelBad": "Şapkanın iç astarındaki ter izleri, Napolyon'un DNA profiliyle eşleşmiyor.",
        "intelSecret": "Aslında 1960 yapımı bir Fransız filmi için tasarlanmış, yüksek kaliteli bir kostüm aksesuarı."
    },
    {
        "name": "DÜNYANIN İLK BİLGİSAYAR FARESİ",
        "description": "Douglas Engelbart'ın 1968'deki 'Tüm Demoların Annesi' sunumunda kullandığı ahşap gövdeli, tek tuşlu ilk prototip.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/first_mouse.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZmlyc3RfbW91c2UuanBnIiwiaWF0IjoxNzY3MTgyNzA2LCJleHAiOjE3OTg3MTg3MDZ9.5bJbCvF486ZyAZC7gUdgKzX08kWbMfcLwGVy2AJnERE",
        "displayedValue": 100000,
        "realValue": 95000,
        "category": "Tech",
        "gameSet": "SET_A",
        "intelGood": "Altındaki tekerlek mekanizması tamamen orijinal el yapımı pirinçten üretilmiş.",
        "intelBad": "Cihazın kablosu modern bir plastik alaşım içeriyor gibi görünüyor, bu da restorasyon şüphesi uyandırıyor.",
        "intelSecret": "Bu gerçekten orijinal prototip! Kablo sadece 80'lerdeki bir sergileme sırasında kopunca değiştirilmiş."
    },
    {
        "name": "SAF ELMAS 'KIBE' HEYKELİ",
        "description": "Tek parça 500 karatlık ham elmastan oyulmuş, minimalist bir heykel sanatı örneği.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/diamond.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZGlhbW9uZC5qcGciLCJpYXQiOjE3NjcxODI3MzgsImV4cCI6MTc5ODcxODczOH0.Sb3DweB-NjV6-tp54TUFMTWR6BJ2CxdGmTNoSh64z3M",
        "displayedValue": 2750000,
        "realValue": 2000000,
        "category": "Luxury",
        "gameSet": "SET_A",
        "intelGood": "Işık kırılma indeksi, tarihteki en ünlü elmaslarla yarışacak düzeyde.",
        "intelBad": "Heykelin alt kısmında mikroskobik bir 'Made in Lab' yazısı olduğu iddia ediliyor.",
        "intelSecret": "Tam bir ustalık işi 500 karat gerçek bir elmas !!"
    },
    {
        "name": "KLEOPATRA'NIN AYNASI",
        "description": "Antik Mısır'dan kalma, arkasında hiyeroglifler bulunan bronz ayna.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/hand_mirror.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvaGFuZF9taXJyb3IuanBnIiwiaWF0IjoxNzY3MTgyNjc1LCJleHAiOjE3OTg3MTg2NzV9.C_r1Hh5qOaTIhBp4FUHmthBHGrtCScjKmZKV-uqAfkU",
        "displayedValue": 525000,
        "realValue": 450,
        "category": "Luxury",
        "gameSet": "SET_A",
        "intelGood": "Aynanın üzerindeki korozyon tabakası binlerce yıllık bir beklemeyi işaret ediyor.",
        "intelBad": "Metal analizi, o dönem Mısır'da bulunmayan bir kalay alaşımı içerdiğini gösteriyor.",
        "intelSecret": "1880'lerde Londra'da üretilmiş, turistlere satılmak üzere tasarlanmış bir Viktorya sahtesi."
    },
    {
        "name": "MARS'TAN GELEN SİYAH KUTU",
        "description": "NASA'nın gizli bir görevinde Mars yüzeyinden aldığı söylenen kapsül.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/nasa_capsule.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmFzYV9jYXBzdWxlLmpwZyIsImlhdCI6MTc2NzE4MjY0MiwiZXhwIjoxNzk4NzE4NjQyfQ.dlUW8SUIJotk35bBQH87AhxM9INIzBOMEte1S2ZAt8M",
        "displayedValue": 6500000,
        "realValue": 15,
        "category": "Tech",
        "gameSet": "SET_A",
        "intelGood": "Kapsülün dış yüzeyi, atmosferden geçerken oluşan yüksek ısı yanıklarına sahip.",
        "intelBad": "Kapsülın üzerindeki seri numarası, bir oyuncak fabrikasının 2022 yılındaki üretim bandına kayıtlı.",
        "intelSecret": "Bu sadece bir sosyal medya fenomeni için üretilmiş reklam projesi; içinde sadece puding var."
    },
    {
        "name": "İLK BİTCOİN DONANIM CÜZDANI",
        "description": "Satoshi Nakamoto'un kullandığı iddia edilen, elle modifiye edilmiş flash bellek.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/crypto_wallet.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvY3J5cHRvX3dhbGxldC5qcGciLCJpYXQiOjE3NjcxODI3NDcsImV4cCI6MTc5ODcxODc0N30.JrUv--kb1U4nzeeZSALXnszaRiljUyhQusS5oVP4OJ8",
        "displayedValue": 2000000,
        "realValue": 1,
        "category": "Tech",
        "gameSet": "SET_A",
        "intelGood": "Belleğin üzerindeki dijital imza, Bitcoin'in ilk bloklarıyla tarihsel olarak örtüşüyor.",
        "intelBad": "Bellek fiziksel olarak o kadar hasarlı ki, içindeki veriye ulaşmak teknik olarak imkansız.",
        "intelSecret": "Bu cüzdan bir şaka olarak üretilmiş; içi tamamen boş ve sadece hata mesajı veriyor."
    },
    {
        "name": "FREDDIE MERCURY'NİN TASLAKLARI",
        "description": "Bohemian Rhapsody'nin yazım aşamasından kalma el yazısı kağıtlar.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/br_notebook.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYnJfbm90ZWJvb2suanBnIiwiaWF0IjoxNzY3MTgyNzc3LCJleHAiOjE3OTg3MTg3Nzd9.qi1t62G9p_AWMHppZmG7IcaPZ-kQNZRLWRXoT_OFhwc",
        "displayedValue": 160000,
        "realValue": 15,
        "category": "Pop-Culture",
        "gameSet": "SET_A",
        "intelGood": "Yazı karakteri, Queen'in Montrö stüdyo kayıtları dönemiyle eşleşiyor.",
        "intelBad": "Bazı kelimelerin yazım hataları, anadili İngilizce olan birinden ziyade bir asistanın aceleyle yazdığı karalamalara benziyor.",
        "intelSecret": "Bu kağıtlar aslında 2018 yapımı film setinde dekor olarak kullanılan kopyalardır."
    },
    {
        "name": "VİKİNG KRALI'NIN SAVAŞ BALTASI",
        "description": "Bir bataklık kazısında bulunan rün işlemeli devasa balta.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/axe.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYXhlLmpwZyIsImlhdCI6MTc2NzE4MjgyMSwiZXhwIjoxNzk4NzE4ODIxfQ.tDNmHD3NBXQGn2WnYcSgYzCzc9hqhtfvbd4VVXqW8kA",
        "displayedValue": 200000,
        "realValue": 200000,
        "category": "History",
        "gameSet": "SET_A",
        "intelGood": "Karbon testleri baltanın tam olarak MS 900 yılına ait olduğunu kesinleştiriyor.",
        "intelBad": "Üzerindeki rünlerin 'Modern Norveççe'ye benzemesi sahtelik şüphesi yaratıyor.",
        "intelSecret": "Hazine! Rünler nadir bir yerel lehçedir ve balta gerçekten bir Viking komutanına aittir."
    },
    {
        "name": "BANKSY'NİN 'GÖRÜNMEZ' HEYKELİ",
        "description": "Mühürlü ve sertifikalı, içinde hiçbir şey olmayan pleksi kutu.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/banksy.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYmFua3N5LmpwZyIsImlhdCI6MTc2NzE4Mjc5NywiZXhwIjoxNzk4NzE4Nzk3fQ.rxn1ocWkFnMTlDEfLS_3xCs0p8dSWLgNNE4j2VKZLYo",
        "displayedValue": 750000,
        "realValue": 1,
        "category": "Art",
        "gameSet": "SET_A",
        "intelGood": "Kutunun altındaki mühür, Banksy'nin resmi onaylama kuruluşu tarafından onaylı.",
        "intelBad": "Kutunun ağırlığı standart bir pleksi kutuyla aynı; içinde hava dışında hiçbir şey yok.",
        "intelSecret": "Banksy'nın sanat piyasasıyla dalga geçmek için yaptığı bir protesto; kutu gerçekten boş."
    },
    {
        "name": "TİTANİK'TEN KURTULAN KEMAN",
        "description": "Gemi batarken çalındığı iddia edilen, tuzlu su lekeleriyle kaplı antika keman.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/violin.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvdmlvbGluLmpwZyIsImlhdCI6MTc2NzE4MjUzNiwiZXhwIjoxNzk4NzE4NTM2fQ.UfF4_mllS99INWQiV4EImMg3SXZUjOnvGDnzvmSikRI",
        "displayedValue": 1000000,
        "realValue": 200,
        "category": "History",
        "gameSet": "SET_A",
        "intelGood": "Kemanın ahşabı, Titanik'in can kurtaran sandallarıyla aynı yaşta.",
        "intelBad": "İçindeki yapıştırıcı kalıntıları 1950'lerden sonra icat edilen sentetik bir madde içeriyor.",
        "intelSecret": "Aslında bir 1990 yapımı tiyatro oyunu için eskitilmiş bir replika."
    },
    // --- SET B ---
    {
        "name": "EINSTEIN'IN KARALADIĞI PEÇETE",
        "description": "Einstein'ın genel görelilik üzerine yeni bir fikir geliştirirken üzerine formüller yazdığı peçete.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/einsten_text.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZWluc3Rlbl90ZXh0LmpwZyIsImlhdCI6MTc2NzE4MjcyMywiZXhwIjoxNzk4NzE4NzIzfQ.xk_LKYwXQ22gMmd1jtyOib5bdF-FM1XGHZN1rts-p_Y",
        "displayedValue": 35000,
        "realValue": 75000,
        "category": "History",
        "gameSet": "SET_B",
        "intelGood": "Peçetedeki mürekkep, Einstein'ın o dönem kullandığı Waterman dolma kalem mürekkebiyle örtüşüyor.",
        "intelBad": "Peçetenin markası, Einstein'ın ölümünden 2 yıl sonra kurulan bir şirkete ait görünüyor.",
        "intelSecret": "Einstein gerçekten bu peçeteye yazdı ve formüller daha önce hiç yayınlanmadı!"
    },
    {
        "name": "ANTİK ROMA 'UÇAN DAİRE' SİKKESİ",
        "description": "MS 200 yılına ait, üzerinde disk şeklinde cisim figürü olan gümüş sikke.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/roman_coin.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcm9tYW5fY29pbi5qcGciLCJpYXQiOjE3NjcxODI2MDgsImV4cCI6MTc5ODcxODYwOH0.TujNSD0dlw1w-zIsqyZ8-CE4MHQ-zSXQJAD-92g3ukQ",
        "displayedValue": 120000,
        "realValue": 120000,
        "category": "History",
        "gameSet": "SET_B",
        "intelGood": "Gümüş saflık derecesi o dönemin Roma standartlarıyla tam uyumlu.",
        "intelBad": "Figür o kadar alışılmadık ki koleksiyoncular bunun modern bir şaka olduğunu düşünüyor.",
        "intelSecret": "Hazine! Kalıp kayması sonucu kalkan figürü uçan daireye benzemiş nadir bir hata sikkesidir."
    },
    {
        "name": "OSMANLI TUĞRALI GÜMÜŞ TABAKA",
        "description": "Sultan II. Abdülhamid hanedan tuğrasını taşıyan, savat işçiliğiyle süslenmiş nadide gümüş tabaka.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/ottoman_case.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvb3R0b21hbl9jYXNlLmpwZyIsImlhdCI6MTc2NzE4MjYyMSwiZXhwIjoxNzk4NzE4NjIxfQ.CFaCyvzBlAa_JmnwIwx3xyLWK2qcQEDbexJBfkH_hjI",
        "displayedValue": 40000,
        "realValue": 45000,
        "category": "History",
        "gameSet": "SET_B",
        "intelGood": "Tabakanın içindeki damga, dönemin en ünlü gümüş ustalarından birine ait.",
        "intelBad": "Menteşe kısmındaki küçük bir onarım, metalin homojenliğini bozmuş gibi duruyor.",
        "intelSecret": "Hazine! Bu tabaka gerçekten bir saray görevlisine hediye edilmiş orijinal bir parçadır ve savat işçiliği kusursuzdur."
    },
    {
        "name": "TAM TAKIM ŞÖVALYE ZIRHI",
        "description": "Orta Çağ sonlarına ait olduğu söylenen, göğüs zırhında aslan figürü bulunan görkemli çelik zırh takımı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/armor.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYXJtb3IuanBnIiwiaWF0IjoxNzY3MTgyODI4LCJleHAiOjE3OTg3MTg4Mjh9.wGF1zdIHEPOtxPz4RebPhoijXg0tOFfah7U5GiEs_bw",
        "displayedValue": 125000,
        "realValue": 4000,
        "category": "History",
        "gameSet": "SET_B",
        "intelGood": "Zırhın üzerindeki kılıç darbeleri ve aşınmalar, gerçek bir savaşta kullanılmış hissi veriyor.",
        "intelBad": "İç kısımdaki perçinlerin lazer kesimle yapılmış kadar simetrik olması şüphe uyandırıcı.",
        "intelSecret": "Bu zırh, 1950 yapımı bir Hollywood filmi için tasarlanmış profesyonel bir dekordur. Gerçek tarihi değeri yoktur."
    },
    {
        "name": "L'Art Invisible (Görünmez Heykel)",
        "description": "İtalyan sanatçı Salvatore Garau'nun 'boşluk ve hiçlik' üzerine yaptığı kavramsal bir sanat eseri. Yalnızca sertifikasıyla satılıyor.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/salvatore.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvc2FsdmF0b3JlLmpwZyIsImlhdCI6MTc2NzE4MDU0MiwiZXhwIjoxNzk4NzE2NTQyfQ.9yuzmrTc0HudQHG28clC7BzKMwHjUfc4FZZhaGwrt5g",
        "displayedValue": 18000,
        "realValue": 1,
        "category": "Art",
        "gameSet": "SET_B",
        "intelGood": "Sanat dünyasında büyük ses getiren, koleksiyonerlerin peşinden koştuğu ultra-modern bir konsept.",
        "intelBad": "Satın aldığınızda elinize geçecek tek şey, imzalı bir kağıt parçası. Fiziksel bir varlığı yok.",
        "intelSecret": "Aslında bu bir sosyal deney. Sanatçı, insanların 'hiçbir şeye' ne kadar ödeyeceğini test ediyor. Değeri koca bir hiç."
    },
    {
        "name": "JEAN-MICHEL BASQUIAT TASLAĞI",
        "description": "Bir metro duvarından sökülen ve üzerinde sanatçının gizli imzasını taşıyan sprey boya çalışması.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/j_m_b_wall.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMval9tX2Jfd2FsbC5qcGciLCJpYXQiOjE3NjcxOTcxNjUsImV4cCI6MTc5ODczMzE2NX0.sThzQOlJRUtAMszVM9aCUtSuwgc7n_lr00scgXtrhi8",
        "displayedValue": 1600000,
        "realValue": 1750000,
        "category": "Art",
        "gameSet": "SET_B",
        "intelGood": "Boya pigmentleri 1980'lerin New York sokak boyalarıyla kimyasal olarak eşleşiyor.",
        "intelBad": "Eserin arkasındaki duvar parçası, bazı uzmanlarca 'fazla temiz' bulundu.",
        "intelSecret": "Hazine! Bu, sanatçının en üretken döneminde yaptığı ve kayıp olduğu sanılan gerçek bir eser."
    },
    {
        "name": "BANKSY 'KIZ VE BALON' BASKISI",
        "description": "Sanatçının bizzat mühürlediği ve numara verdiği, sınırlı sayıda üretilmiş orijinal baskı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/banksy_girl_art.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYmFua3N5X2dpcmxfYXJ0LmpwZyIsImlhdCI6MTc2NzE5NzI3MCwiZXhwIjoxNzk4NzMzMjcwfQ.3HOO6NalmSTZMDv1qRqH958-0-31OGaB7WsSfbRjmaw",
        "displayedValue": 75000,
        "realValue": 82000,
        "category": "Art",
        "gameSet": "SET_B",
        "intelGood": "Pest Control sertifikası dijital olarak doğrulanabiliyor.",
        "intelBad": "Kağıdın sol alt köşesinde küçük bir nem lekesi var, bu değerini düşürebilir.",
        "intelSecret": "Hazine! Nem lekesine rağmen Banksy'nin bu serisi piyasada her zaman yüksek değer görüyor."
    },
    {
        "name": "ELVIS PRESLEY'İN SON SANDVİÇİ",
        "description": "Elvis'in yarım bıraktığı iddia edilen fıstık ezmeli muzlu sandviç.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/sandwich.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvc2FuZHdpY2guanBnIiwiaWF0IjoxNzY3MTgyNTkwLCJleHAiOjE3OTg3MTg1OTB9.PM-aH8H_OWTU1q6-WvNUFBFDssfEPh364C1-LeRtaB0",
        "displayedValue": 27500,
        "realValue": 25,
        "category": "Pop-Culture",
        "gameSet": "SET_B",
        "intelGood": "Sandviçin yanındaki peçetede Elvis'in aşçısının imzası bulunuyor.",
        "intelBad": "30 yıl geçmesine rağmen rengi hala canlı; doğal korunma için imkansız.",
        "intelSecret": "1990'larda bir restoranda sergilenen plastik bir maket."
    },
    {
        "name": "Vintage 1954 Stratocaster Guitar",
        "description": "Rock'n Roll tarihinin en ikonik gitarlarından biri. Efsanevi bir gitaristin ilk kayıtlarında kullandığı söyleniyor.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/guitar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZ3VpdGFyLmpwZyIsImlhdCI6MTc2NzE4MDM4MSwiZXhwIjoxNzk4NzE2MzgxfQ.ijAve2s2akBZIynQM1PlCTSCAIYhf56VJV9zNc73zN8",
        "displayedValue": 208333,
        "realValue": 225000,
        "category": "Pop-Culture",
        "gameSet": "SET_B",
        "intelGood": "Seri numarası, 1954 yılının ilk üretim bandından çıktığını doğruluyor.",
        "intelBad": "Gövdedeki bazı parçaların orijinal olmadığı, sonradan değiştirildiği dedikodusu var.",
        "intelSecret": "Bu gitar, Jimi Hendrix'in henüz ünlü değilken bir barda çalıp imzaladığı ve sonra unuttuğu o kayıp gitar."
    },
    {
        "name": "Pokémon Card 'Charizard'",
        "description": "Koleksiyon dünyasının kutsal kasesi. 1999 yapımı, hatasız (Gem Mint 10) kondisyonda bir ilk baskı Charizard kartı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/pokemon.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcG9rZW1vbi5qcGciLCJpYXQiOjE3NjcxODA0OTUsImV4cCI6MTc5ODcxNjQ5NX0.vn5LyIhfTc-zPL8AYlrYn3zmoQ0k6bYiDHgH0iHZxEw",
        "displayedValue": 300000,
        "realValue": 320000,
        "category": "Pop-Culture",
        "gameSet": "SET_B",
        "intelGood": "Derecelendirme şirketi PSA tarafından en yüksek puan olan '10' verilmiş. Kusursuz durumda.",
        "intelBad": "Piyasada çok sayıda ustaca yapılmış sahtesi dolaşıyor. Uzman olmayan bir gözün ayırt etmesi imkansız.",
        "intelSecret": "Kart tamamen orijinal ve dünya üzerinde bu kondisyonda bilinen sadece 5 örnekten biri."
    },
    {
        "name": "APOLLO 11 AY TOZU FIRÇASI",
        "description": "Buzz Aldrin'in ayda kullandığı iddia edilen gri tozlu fırça.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/brush.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYnJ1c2guanBnIiwiaWF0IjoxNzY3MTgyNzY1LCJleHAiOjE3OTg3MTg3NjV9.zXS8zNh4SvSuB90xfOmGb1POT_yaWCJ3SXl-b1fe3_Q",
        "displayedValue": 400000,
        "realValue": 15,
        "category": "Tech",
        "gameSet": "SET_B",
        "intelGood": "Mikro-tanecikler NASA'nın simüle ettiği ay tozuna inanılmaz benziyor.",
        "intelBad": "Fırça sapındaki seri numarası 1975 üretimi bir boya fırçasına ait.",
        "intelSecret": "Bir teknisyenin emeklilik şakası için hazırladığı tebeşir tozlu dekor."
    },
    {
        "name": "WWII Enigma Machine",
        "description": "Nazilerin gizli mesajlarını şifrelemek için kullandığı, savaşın seyrini değiştiren efsanevi kripto cihazı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/enigma.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZW5pZ21hLmpwZyIsImlhdCI6MTc2NzE4MDM0OCwiZXhwIjoxNzk4NzE2MzQ4fQ.6lfuznXzBDK462kcKd5KqRcDVGrZeb2z6NVqt_SlnYc",
        "displayedValue": 200000,
        "realValue": 220000,
        "category": "Tech",
        "gameSet": "SET_B",
        "intelGood": "Makine çalışır durumda ve içindeki 3 rotorun seri numaraları birbiriyle eşleşiyor. Bu çok nadir bir durum.",
        "intelBad": "Cihazın ahşap kasasında savaş sırasında oluşmuş bir kurşun deliği var, bu da kondisyonunu düşürüyor.",
        "intelSecret": "O kurşun deliği, makinenin Normandiya Çıkarması'nda ele geçirilen bir Alman karargahından alındığını kanıtlıyor. Tarihi değeri paha biçilemez."
    },
    {
        "name": "The 'Lucky' NFT",
        "description": "Dijital sanat dünyasında bir dönem fırtınalar estiren, 'Bored Cat Yacht Club' serisinden nadir bir NFT.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/nft.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmZ0LmpwZyIsImlhdCI6MTc2NzE4MDQ1MCwiZXhwIjoxNzk4NzE2NDUwfQ.QJO67h4gpHSVoWr2qMjg_iwM6h58zAuLALdsi1N9suE",
        "displayedValue": 5000,
        "realValue": 10,
        "category": "Tech",
        "gameSet": "SET_B",
        "intelGood": "Bu NFT'nin önceki sahibi, ünlü bir rapçiydi ve koleksiyonun popülaritesi hala yüksek.",
        "intelBad": "NFT piyasası son dönemde büyük bir çöküş yaşadı ve işlem hacimleri dip yaptı.",
        "intelSecret": "Projenin kurucuları paraları alıp kaçtı (rug pull). Bu görselin artık hiçbir dijital karşılığı ve değeri yok."
    },
    {
        "name": "Milyarderin Kahvaltısı",
        "description": "Dünyanın en pahalı malzemeleriyle hazırlanmış, sadece bir kez yenilebilecek ultra lüks bir kahvaltı tabağı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/food.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZm9vZC5qcGciLCJpYXQiOjE3NjcxODAzNjksImV4cCI6MTc5ODcxNjM2OX0.kfyCjxRof3ljf70RlELxTiH7Rmhts4k1J4jc011MwDA",
        "displayedValue": 5000,
        "realValue": 200,
        "category": "Luxury",
        "gameSet": "SET_B",
        "intelGood": "Üzerindeki beyaz trüf mantarının kilosu 10.000 dolardan fazla ve havyar en kaliteli Beluga havyarı.",
        "intelBad": "Sonuçta bu sadece bir simit ve yendiği an tüm değeri yok olacak. Kalıcı bir yatırım değil.",
        "intelSecret": "Simit bayat, altın yapraklar imitasyon ve o kadar havyar aslında sadece 200 dolarlık bir masraf. Tamamen gösteriş."
    },
    {
        "name": "PATEK PHILIPPE NAUTILUS 5711",
        "description": "Üretimi durdurulmuş, 'Tiffany & Co.' imzalı, hiç kullanılmamış çelik kasa saat.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/watch.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvd2F0Y2guanBnIiwiaWF0IjoxNzY3MTk3MDU0LCJleHAiOjE3OTg3MzMwNTR9.H_txBTz5pxHqih2zw5K7POEM4RVP1cvHaDehYLMqpz8",
        "displayedValue": 300000,
        "realValue": 310000,
        "category": "Luxury",
        "gameSet": "SET_B",
        "intelGood": "Mekanizma sesi ve saniye akışı, sahtesi yapılamayan özel bir frekansa sahip.",
        "intelBad": "Kutunun sertifikasındaki tarih mürekkebi biraz dağılmış görünüyor.",
        "intelSecret": "Hazine! Sadece 170 adet üretilen bu özel serinin sertifikası o dönem aceleyle imzalandığı için mürekkebi tazedir."
    },
    {
        "name": "HERMÈS BIRKIN 35 CROCODILE",
        "description": "Himalaya Niloticus Crocodile derisinden üretilmiş, üzerinde elmas işçiliği olan çanta.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/hermes_bag.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvaGVybWVzX2JhZy5qcGciLCJpYXQiOjE3NjcxOTcxOTMsImV4cCI6MTc5ODczMzE5M30.QqruDWDET4SbCv06q6rV4CG0axzFM84bvwPKsF_9u7o",
        "displayedValue": 175000,
        "realValue": 185000,
        "category": "Luxury",
        "gameSet": "SET_B",
        "intelGood": "Derinin üzerindeki gradyan geçişi sadece doğal yöntemlerle elde edilebilir.",
        "intelBad": "Metal aksamlarındaki parlaklık, bazı uzmanlar tarafından 'fazla kusursuz' bulundu.",
        "intelSecret": "Saf lüks! Bu çanta gerçekten orijinaldir ve üzerindeki elmaslar gerçek karat değerindedir."
    },

    // --- SET C ---
    {
        "name": "Ay Taşı (The Moon Rock)",
        "description": "Apollo 11 görevi sırasında Neil Armstrong tarafından toplandığı iddia edilen nadide bir parça.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/moon_stone.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbW9vbl9zdG9uZS5qcGciLCJpYXQiOjE3NjcxODA0NDEsImV4cCI6MTc5ODcxNjQ0MX0.UwX47LnJSCAVW_vV2HmWZbz1ZZG8Wi9ZE1cg66I5jKs",
        "displayedValue": 1500000,
        "realValue": 5,
        "category": "History",
        "gameSet": "SET_C",
        "intelGood": "Yüzeyindeki radyasyon izleri, uzay boşluğunda bulunduğuna işaret ediyor.",
        "intelBad": "Laboratuvar testleri, taşın yoğunluğunun dünyadaki bazalt kayaçlarına çok benzediğini gösteriyor.",
        "intelSecret": "Neil Armstrong'un değil, arka bahçesindeki mangalın kömürlerinden biri. Tamamen sahte."
    },
    {
        "name": "Karasakal'ın Hazine Sandığı",
        "description": "Ünlü korsan Karasakal'ın kayıp gemisi Queen Anne's Revenge'den çıkarıldığı söylenen, denizden yeni çıkmış bir sandık.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/chest.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvY2hlc3QuanBnIiwiaWF0IjoxNzY3MTgwMjgxLCJleHAiOjE3OTg3MTYyODF9.NqomQFv34QNbu2IYBgmvNtuhK_j2JtCptoJQKkydpK8",
        "displayedValue": 250000,
        "realValue": 500,
        "category": "History",
        "gameSet": "SET_C",
        "intelGood": "İçinden çıkan birkaç İspanyol dublonunun tarihi 1700'lerin başına dayanıyor.",
        "intelBad": "Sandığın ahşap yapısı, 18. yüzyıl gemi yapım teknikleriyle uyuşmuyor gibi görünüyor.",
        "intelSecret": "Bir film seti için hazırlanmış, içi sahte altın görünümlü çikolata paralarla dolu bir dekor sandığı. Sadece antika değeri var."
    },
    {
        "name": "Antik Mısır Kanopik Kavanozu",
        "description": "Bir firavunun mumyalama töreninde iç organlarını saklamak için kullanılan, binlerce yıllık bir ritüel kavanozu.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/kavanoz.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMva2F2YW5vei5qcGciLCJpYXQiOjE3NjcxODA0MjcsImV4cCI6MTc5ODcxNjQyN30.Bnkpx-5EXf8P0FAasNKkw7JhHUu2DuVsOJnLFs8lAn8",
        "displayedValue": 45000,
        "realValue": 50000,
        "category": "History",
        "gameSet": "SET_C",
        "intelGood": "Üzerindeki hiyeroglifler, kavanozun gerçekten de bir kraliyet ailesi üyesine ait olduğunu doğruluyor.",
        "intelBad": "Kavanoz bir mezardan değil, yasadışı yollarla bir kaçakçının deposundan ele geçirilmiş. Lanetli olabilir.",
        "intelSecret": "Kavanoz orijinal ve lanet hikayesi sadece fiyatı düşürmek için uydurulmuş bir şehir efsanesi."
    },
    {
        "name": "PICASSO SERAMİK TABAK",
        "description": "Picasso'nun Madoura atölyesinde elle şekillendirdiği, üzerinde kuş figürü olan seramik.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/picasso_ceramic.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcGljYXNzb19jZXJhbWljLmpwZyIsImlhdCI6MTc2NzE5NzA5MSwiZXhwIjoxNzk4NzMzMDkxfQ.CmFfcT-NlWtGGzo0CCby9or55LNBsnJLojIM5glJPJY",
        "displayedValue": 20000,
        "realValue": 22000,
        "category": "Art",
        "gameSet": "SET_C",
        "intelGood": "Seramiğin altındaki 'Edition Picasso' mührü kabartmalı ve orijinal kalıptan çıkma.",
        "intelBad": "Tabaktaki fırça darbeleri, ustanın diğer eserlerine göre biraz daha 'savruk' duruyor.",
        "intelSecret": "Hazine! Bu savrukluk aslında Picasso'nun o dönemdeki deneysel tarzının bir parçasıdır."
    },
    {
        "name": "VAN GOGH'UN KARDEŞİNE MEKTUBU",
        "description": "Arles'den kardeşi Theo'ya yazdığı, içinde küçük bir eskiz barındıran orijinal mektup.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/letter.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbGV0dGVyLmpwZyIsImlhdCI6MTc2NzE5NzE0MiwiZXhwIjoxNzk4NzMzMTQyfQ.VlpcAmFJncvkVJPEuQhL3qTYI213ZlUZKaf7wAVHVQI",
        "displayedValue": 125000,
        "realValue": 135000,
        "category": "Art",
        "gameSet": "SET_C",
        "intelGood": "Kağıt üzerindeki parmak izi analizleri, Van Gogh Müzesi'ndeki verilerle örtüşüyor.",
        "intelBad": "Mürekkebin rengi beklenen oksitlenmeyi tam olarak göstermiyor gibi.",
        "intelSecret": "Hazine! Mektup çok iyi korunduğu için mürekkebi hala taze görünüyor, bu da onu daha değerli kılıyor."
    },
    {
        "name": "KAYIP BİR DALÍ TABLOSU",
        "description": "Sürrealizmin zirvesinde yapıldığı iddia edilen, üzerinde eriyen saatlerin farklı bir yorumu olan tablo.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/salvador_dali.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvc2FsdmFkb3JfZGFsaS5qcGciLCJpYXQiOjE3NjcxOTcwNjIsImV4cCI6MTc5ODczMzA2Mn0.LRNQsoyzNA5zhqSyh6Quadp38FBBOg2CtEEIBjLisUg",
        "displayedValue": 550000,
        "realValue": 75,
        "category": "Art",
        "gameSet": "SET_C",
        "intelGood": "İmza, Dalí'nin 1940'larda kullandığı imza stiliyle milimetrik olarak aynı.",
        "intelBad": "Tablonun tuvali, o dönemde henüz yaygınlaşmamış sentetik elyaflar içeriyor.",
        "intelSecret": "Çöp! 2005 yılında bir hayranı tarafından 'yapay zeka desteğiyle' üretilmiş mükemmel bir taklit."
    },
    {
        "name": "Signed Script of 'Pulp Fiction'",
        "description": "Kült film Ucuz Roman'ın, tüm ana oyuncu kadrosu ve yönetmeni tarafından ıslak imzalı orijinal senaryo kopyası.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/pulp_fiction.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcHVscF9maWN0aW9uLmpwZyIsImlhdCI6MTc2NzE4MDU0NSwiZXhwIjoxNzk4NzE2NTA1fQ.w17ZUigiRgxblV2bCS9jVgSLeB08_swdptYRSm2iLlU",
        "displayedValue": 20000,
        "realValue": 50,
        "category": "Pop-Culture",
        "gameSet": "SET_C",
        "intelGood": "İmzaların yerleşimine bakılırsa, set ortamında aceleyle atılmış gibi duruyor, bu da orijinalliği destekliyor.",
        "intelBad": "Senaryonun kağıt kalitesi, 90'ların başında kullanılan fotokopi kağıtlarına hiç benzemiyor. Çok yeni duruyor.",
        "intelSecret": "Bu senaryo, internetten indirilip bastırılmış bir PDF. İmzaların hepsi tek bir dolandırıcı tarafından taklit edilmiş."
    },
    {
        "name": "DARTH VADER ORİJİNAL KASKI",
        "description": "1977 yapımı 'A New Hope' çekimlerinde kullanılan, içinde çekim tozları duran orijinal kask.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/darth_vader.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZGFydGhfdmFkZXIuanBnIiwiaWF0IjoxNzY3MTk3MjQ2LCJleHAiOjE3OTg3MzMyNDZ9.zigcnchQQCIo2xQC4A0YGPoLtXn3ChTeolvJB9lkUi0",
        "displayedValue": 400000,
        "realValue": 425000,
        "category": "Pop-Culture",
        "gameSet": "SET_C",
        "intelGood": "Kaskın içindeki seri numarası Lucasfilm arşiv kayıtlarıyla %100 uyuşuyor.",
        "intelBad": "Vizör kısmındaki bir çatlak, bazı koleksiyoncular tarafından 'set hatası değil, düşürme' olarak yorumlanıyor.",
        "intelSecret": "Paha biçilemez bir hazine! Bu kask, çekimlerin son gününde George Lucas tarafından imzalanmış gizli bir bölmeye sahip."
    },
    {
        "name": "MARILYN MONROE 'İKONİK' ELBİSESİ",
        "description": "Marilyn Monroe'nun o meşhur metro ızgarası sahnesinde giydiği uçuşan beyaz elbise.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/m%20_m_dress.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbSBfbV9kcmVzcy5qcGciLCJpYXQiOjE3NjcxOTcxMjMsImV4cCI6MTc5ODczMzEyM30.EgG_FHuZ7TtskQ-T8qFPg-Xdxlqu1u7BGg8Jx2Mf7Vs",
        "displayedValue": 150000,
        "realValue": 450,
        "category": "Pop-Culture",
        "gameSet": "SET_C",
        "intelGood": "Kumaşın dokusu 1950'lerin Hollywood kostüm standartlarıyla çok benzer.",
        "intelBad": "Etiket kısmındaki dikiş izleri, modern bir konfeksiyon makinesinden çıkmış gibi çok nizami.",
        "intelSecret": "Çöp! Bu elbise 1994 yılında bir müzikali için üretilmiş yüksek kaliteli bir replikadan başka bir şey değil."
    },
    {
        "name": "APPLE I BİLGİSAYAR ANA KARTI",
        "description": "Steve Wozniak tarafından bizzat lehimlenen, çalışır durumdaki nadir Apple I anakartı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/apple.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvYXBwbGUuanBnIiwiaWF0IjoxNzY3MTk5MTkxLCJleHAiOjE3OTg3MzUxOTF9.ApriVm_uCGYp-kA4BQ2bpaWvsAAzcj69Mb8rQw_CjDg",
        "displayedValue": 650000,
        "realValue": 650000,
        "category": "Tech",
        "gameSet": "SET_C",
        "intelGood": "Kondansatörlerin seri numaraları 1976 üretimi bir seriye ait.",
        "intelBad": "Üzerindeki 'Steve' imzası biraz silinmiş, bu da doğrulanmasını zorlaştırıyor.",
        "intelSecret": "Hazine! Bu kart gerçekten çalışıyor ve tarihteki 200 orijinal Apple I'den biri."
    },
    {
        "name": "NINTENDO PLAY STATION PROTOTİPİ",
        "description": "Sony ve Nintendo'nun 90'ların başında ortak geliştirdiği ancak asla piyasaya sürülmeyen, oyun tarihinin en nadir 'kayıp' donanımı.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/nintendo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbmludGVuZG8uanBnIiwiaWF0IjoxNzY3MTk3MTA0LCJleHAiOjE3OTg3MzMxMDR9.BZGXGTba3mpuMIBFZ_HgBADAozDfHg1oKasKXGoczds",
        "displayedValue": 400000,
        "realValue": 360000,
        "category": "Tech",
        "gameSet": "SET_C",
        "intelGood": "Hem Super Famicom kaset girişine hem de erken dönem CD-ROM sürücüsüne sahip hibrit bir yapı.",
        "intelBad": "Kasanın üzerindeki Sony logosu, prototip aşamasında kullanılan geçici bir baskı olduğu için biraz silik.",
        "intelSecret": "İnanılmaz bir hazine! Dünyada sadece birkaç adet olduğu bilinen bu prototip, modern oyun dünyasının temellerini atan 'iptal edilmiş' bir devrimdir."
    },
    {
        "name": "ANTİKA GRAMOFON",
        "description": "1920'lerden kalma, pirinç borulu ve ceviz ağacı gövdeli, çalışır durumda olduğu iddia edilen gramofon.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/gramophone.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZ3JhbW9waG9uZS5qcGciLCJpYXQiOjE3NjcxODI2ODcsImV4cCI6MTc5ODcxODY4N30.8c1E0ypm9zh43LtgXYGXEsKSmd8N5lq-civ8TyNkD6E",
        "displayedValue": 15000,
        "realValue": 1500,
        "category": "Tech",
        "gameSet": "SET_C",
        "intelGood": "Dış ahşap kasa, o dönemin karakteristik cila teknikleriyle tamamen uyumlu.",
        "intelBad": "İçindeki kurma kolu çevrildiğinde çıkan ses, orijinal metal dişli sesi değil, daha modern bir sürtünme sesine benziyor.",
        "intelSecret": "Aslında bu, 1990'larda üretilmiş çok kaliteli bir 'retro' replikadır. Sadece dış kasası antika parçalardan toplanmıştır."
    },
    {
        "name": "FABERGÉ YUMURTASI (RUS KRALİYETİ)",
        "description": "Çar II. Nikolay için üretildiği iddia edilen, içinde minyatür bir altın vagon bulunan yumurta.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/faberge_egg.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvZmFiZXJnZV9lZ2cuanBnIiwiaWF0IjoxNzY3MTk3MjE4LCJleHAiOjE3OTg3MzMyMTh9.thiSwumlItVWQY1Yy5mNZ6DwxYWJ8sWrX2jzO3Mfdlk",
        "displayedValue": 1150000,
        "realValue": 2500,
        "category": "Luxury",
        "gameSet": "SET_C",
        "intelGood": "Mine işçiliği ve renklerin canlılığı, Peter Carl Fabergé'nin atölyesini andırıyor.",
        "intelBad": "Altındaki usta damgası, orijinalinden milimetrik bir açı farkıyla yana yatık.",
        "intelSecret": "Çöp! Bu, 1970'lerde bir İtalyan kuyumcunun 'hobi projesi' olarak yaptığı çok başarılı bir imitasyondur."
    },
    {
        "name": "LOUIS VUITTON PROTOTİP SANDIK",
        "description": "1800'lerin sonunda gemi yolculukları için özel olarak tasarlanmış, deri kaplı prototip sandık.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/l_v_trunk.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvbF92X3RydW5rLmpwZyIsImlhdCI6MTc2NzE5NzE1MiwiZXhwIjoxNzk4NzMzMTUyfQ.AYhbcbRt3Fka2a6VccVHXj52CUeW8X-Dd7DqQx1ORS0",
        "displayedValue": 55000,
        "realValue": 150,
        "category": "Luxury",
        "gameSet": "SET_C",
        "intelGood": "Ahşap iskeleti, o dönemin Fransız meşesiyle aynı yaşta çıkıyor.",
        "intelBad": "Kanvas üzerindeki 'LV' logoları, bazı yerlerde simetri hatası içeriyor.",
        "intelSecret": "Çöp! Antika bir sandığın üzerine modern tekniklerle basılmış bir logodan ibaret."
    },
    {
        "name": "KAYIP İMPARATORLUK KOLYESİ",
        "description": "Saray baskınında çalındığı söylenen, devasa bir yakut etrafına dizilmiş inci gerdanlık.",
        "imageUrl": "https://asysvsiylbkezjxowkaf.supabase.co/storage/v1/object/sign/images/items/red_necklace.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWQ1YmY2NC01YzBhLTQ2NDgtYjViNS03Mjg2MzkxZmRmZDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXRlbXMvcmVkX25lY2tsYWNlLmpwZyIsImlhdCI6MTc2NzE5NzA3OSwiZXhwIjoxNzk4NzMzMDc5fQ.YHr2ZLf7FXS1GidfhsdkRVDPeV3pt8vQ9LEofDREVzc",
        "displayedValue": 250000,
        "realValue": 800,
        "category": "Luxury",
        "gameSet": "SET_C",
        "intelGood": "Yakutun rengi 'Güvercin Kanı' denilen en nadir tonla birebir aynı.",
        "intelBad": "Taşın içindeki inklüzyonlar, doğal bir oluşumdan ziyade sentetik bir müdahaleyi andırıyor.",
        "intelSecret": "Maalesef sahte! Taş aslında boyanmış bir cam, inciler ise plastik üzerine sedef kaplamadır."
    },
];

async function main() {
    console.log("Seeding storage (With Update Logic)...");

    let addedCount = 0;
    let updatedCount = 0;

    for (const item of items) {
        // Check if item already exists by name
        const existing = await prisma.item.findFirst({
            where: { name: item.name }
        });

        if (!existing) {
            await prisma.item.create({
                data: item,
            });
            addedCount++;
        } else {
            // Update existing with new fields (like gameSet)
            await prisma.item.update({
                where: { id: existing.id },
                data: {
                    gameSet: item.gameSet,
                    category: item.category,
                    intelGood: item.intelGood,
                    intelBad: item.intelBad,
                    intelSecret: item.intelSecret,
                    realValue: item.realValue,
                    displayedValue: item.displayedValue
                }
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

---
description: how to deploy the application to Railway.app
---
Railway, Vercel'in aksine "Persistent Server" (kesintisiz sunucu) desteği sunduğu için Socket.io uygulamaları için mükemmeldir. İşte adım adım deploy süreci:

1. **Hazırlık:**
   - Projenin GitHub'da olduğundan emin ol.
   - `prisma/schema.prisma` dosyasındaki `datasource` kısmının Supabase'e bağlı olduğundan emin ol (Zaten öyle yapmıştık).

2. **Railway'e Giriş:**
   - [Railway.app](https://railway.app/) adresine git ve GitHub ile giriş yap.

3. **Yeni Project Oluştur:**
   - **"+ New Project"** butonuna tıkla.
   - **"Deploy from GitHub repo"** seçeneğini seç.
   - `trash-or-treasure` reposunu listeden seç.

4. **Environment Variables (Çok Önemli):**
   - Proje ayarlarına git ve **"Variables"** sekmesine şu değişkenleri ekle:
     - `DATABASE_URL`: Supabase bağlantı adresin.
     - `DIRECT_URL`: Supabase direct connection adresin (Prisma migrations için).
     - `ADMIN_PASSWORD`: Admin panel şifren.
     - `NODE_ENV`: `production`

5. **Build ve Start Komutları:**
   - Railway genelde `package.json` dosyasındaki `scripts` kısmını otomatik tanır.
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start` (Bizim `server.js` dosyamızı çalıştırır).

6. **Domain:**
   - **"Settings"** sekmesine git.
   - **"Networking"** başlığı altından **"Generate Domain"** de.
   - Sana `xxx.up.railway.app` gibi bir adres verecek.

Artık oyunun bu link üzerinden hem WiFi hem mobil veri ile sorunsuz çalışacaktır! 🚀💎

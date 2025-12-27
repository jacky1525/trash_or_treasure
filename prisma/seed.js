import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const items = [
    {
        name: "Antika Osmanlı Hançeri",
        description: "Altın kakmalı, işlemeli bir hançer.",
        imageUrl: "/items/dagger.png",
        displayedValue: 1200,
        realValue: 6000,
        intelGood: "Kabzası gerçek 24 ayar altın kaplama.",
        intelBad: "Kınında küçük bir çatlak var, değerini düşürebilir.",
        intelSecret: "Bu hançer Fatih Sultan Mehmet'in şahsi koleksiyonuna ait gerçek bir parça!"
    },
    {
        name: "Modern Sanat Tablosu",
        description: "Sadece birkaç çizgi ve bir nokta...",
        imageUrl: "/items/painting.png",
        displayedValue: 5000,
        realValue: 50,
        intelGood: "Ressamın son eseri olduğu söyleniyor.",
        intelBad: "Tuvalin arkasında 'Made in China' damgası var.",
        intelSecret: "Ünlü bir ressamın değil, yerel bir anaokulu öğrencisinin parmak boyası çalışması."
    },
    {
        name: "Eski Bir Plak (Abba)",
        description: "Nadir bulunan bir baskı gibi görünüyor.",
        imageUrl: "/items/record.png",
        displayedValue: 300,
        realValue: 2500,
        intelGood: "İçinde grubun orijinal imzaları gizli.",
        intelBad: "Kapağı biraz yıpranmış.",
        intelSecret: "Bu, 1974'teki Eurovision birinciliğinden sonra basılan ilk 100 kopyadan biri."
    }
];

async function main() {
    console.log("Seeding storage...");
    await prisma.item.deleteMany();
    for (const item of items) {
        await prisma.item.create({
            data: item,
        });
    }
    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

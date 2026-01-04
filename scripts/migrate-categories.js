
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CATEGORY_MAP = {
    "History": "TARİH",
    "Pop-Culture": "POPÜLER KÜLTÜR",
    "Luxury": "LÜKS",
    "Art": "SANAT",
    "Tech": "TEKNOLOJİ",
    "Other": "DİĞER",
    // Handle inconsistent casing if any
    "history": "TARİH",
    "pop-culture": "POPÜLER KÜLTÜR",
    "luxury": "LÜKS",
    "art": "SANAT",
    "tech": "TEKNOLOJİ",
    "other": "DİĞER"
};

async function main() {
    console.log("Starting migration...");

    const items = await prisma.item.findMany();
    console.log(`Found ${items.length} items to check.`);

    for (const item of items) {
        const newCategory = CATEGORY_MAP[item.category];
        if (newCategory) {
            console.log(`Updating item '${item.name}': ${item.category} -> ${newCategory}`);
            await prisma.item.update({
                where: { id: item.id },
                data: { category: newCategory }
            });
        } else {
            // If it's already Turkish or unknown, inspect it
            // If it is NOT in the values of MAP (i.e. already migrated), log it
            const validCategories = Object.values(CATEGORY_MAP);
            if (!validCategories.includes(item.category)) {
                console.log(`[WARN] Item '${item.name}' has unknown category: '${item.category}'. Setting to DİĞER.`);
                await prisma.item.update({
                    where: { id: item.id },
                    data: { category: "DİĞER" }
                });
            }
        }
    }

    const suggestions = await prisma.suggestedItem.findMany();
    console.log(`Found ${suggestions.length} suggestions to check.`);

    for (const sug of suggestions) {
        const newCategory = CATEGORY_MAP[sug.category];
        if (newCategory) {
            console.log(`Updating suggestion '${sug.name}': ${sug.category} -> ${newCategory}`);
            await prisma.suggestedItem.update({
                where: { id: sug.id },
                data: { category: newCategory }
            });
        }
    }

    console.log("Migration complete.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

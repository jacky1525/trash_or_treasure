"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function login(password: string) {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (password === adminPassword) {
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 // 1 day
        });
        return { success: true };
    }

    return { success: false, error: "Hatalı şifre!" };
}

export async function checkAuth() {
    const cookieStore = await cookies();
    return cookieStore.get("admin_session")?.value === "true";
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    revalidatePath("/admin");
}

export async function getItems() {
    return await prisma.item.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function createItem(formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const displayedValue = parseInt(formData.get("displayedValue") as string);
    const realValue = parseInt(formData.get("realValue") as string);
    const category = formData.get("category") as string || "DİĞER";
    const gameSet = formData.get("gameSet") as string || "SET_A";
    const isTreasure = formData.get("isTreasure") === "on";
    const publicRumor = formData.get("publicRumor") as string;
    const intelPool = JSON.parse(formData.get("intelPool") as string || "[]");

    await prisma.item.create({
        data: {
            name,
            description,
            imageUrl,
            displayedValue,
            realValue,
            category,
            gameSet,
            isTreasure,
            publicRumor,
            intelPool,
        },
    });

    revalidatePath("/admin");
}

export async function deleteItem(id: string) {
    await prisma.item.delete({
        where: { id },
    });
    revalidatePath("/admin");
}

export async function updateItem(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const displayedValue = parseInt(formData.get("displayedValue") as string);
    const realValue = parseInt(formData.get("realValue") as string);
    const category = formData.get("category") as string || "DİĞER";
    const gameSet = formData.get("gameSet") as string || "SET_A";
    const isTreasure = formData.get("isTreasure") === "on";
    const publicRumor = formData.get("publicRumor") as string;
    const intelPool = JSON.parse(formData.get("intelPool") as string || "[]");

    await prisma.item.update({
        where: { id },
        data: {
            name,
            description,
            imageUrl,
            displayedValue,
            realValue,
            category,
            gameSet,
            isTreasure,
            publicRumor,
            intelPool,
        },
    });

    revalidatePath("/admin");
}

/* SUGGESTION ACTIONS */

export async function suggestItem(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        // Clean value of commas if they exist
        const rawValue = formData.get("suggestedValue") as string;
        const suggestedValue = parseInt(rawValue.replace(/,/g, ''));
        const category = formData.get("category") as string || "DİĞER";
        const suggestedBy = formData.get("suggestedBy") as string;

        if (isNaN(suggestedValue)) {
            throw new Error("Geçersiz değer formatı");
        }

        await prisma.suggestedItem.create({
            data: {
                name,
                description,
                suggestedValue,
                category,
                suggestedBy: suggestedBy || "Anonim",
                status: "PENDING"
            },
        });

        return { success: true };
    } catch (error: any) {
        console.error("Suggestion Error:", error);
        return { success: false, error: error.message };
    }
}

export async function getSuggestions() {
    return await prisma.suggestedItem.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function deleteSuggestion(id: string) {
    await prisma.suggestedItem.delete({
        where: { id },
    });
    revalidatePath("/admin");
}

export async function updateSuggestionStatus(id: string, status: string) {
    await prisma.suggestedItem.update({
        where: { id },
        data: { status },
    });
    revalidatePath("/admin");
}

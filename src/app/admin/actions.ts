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
    const intelGood = formData.get("intelGood") as string;
    const intelBad = formData.get("intelBad") as string;
    const intelSecret = formData.get("intelSecret") as string;
    const category = formData.get("category") as string || "Other";

    await prisma.item.create({
        data: {
            name,
            description,
            imageUrl,
            displayedValue,
            realValue,
            intelGood,
            intelBad,
            intelSecret,
            category,
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
    const intelGood = formData.get("intelGood") as string;
    const intelBad = formData.get("intelBad") as string;
    const intelSecret = formData.get("intelSecret") as string;
    const category = formData.get("category") as string || "Other";

    await prisma.item.update({
        where: { id },
        data: {
            name,
            description,
            imageUrl,
            displayedValue,
            realValue,
            intelGood,
            intelBad,
            intelSecret,
            category,
        },
    });

    revalidatePath("/admin");
}

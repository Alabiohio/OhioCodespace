"use server";

import { supabase } from "@/lib/supabase";

export async function sendContactMessage(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "All fields are required." };
    }

    try {
        const { error } = await supabase
            .from("contact_messages")
            .insert([{ name, email, message }]);

        if (error) {
            console.error("Supabase error:", error);
            return { error: "Failed to send message. Please try again later." };
        }

        return { success: "Message sent successfully!" };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "An unexpected error occurred." };
    }
}

export async function getContactMessages() {
    try {
        const { data, error } = await supabase
            .from("contact_messages")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Supabase error:", error);
            return { error: "Failed to fetch messages." };
        }

        return { data };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "An unexpected error occurred." };
    }
}

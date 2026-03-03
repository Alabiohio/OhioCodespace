"use server";

import { supabase } from "@/lib/supabase";

export async function sendInquiry(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const type = formData.get("type") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !type || !subject || !message) {
        return { error: "All fields are required." };
    }

    try {
        const { error } = await supabase
            .from("inquiries")
            .insert([{ name, email, type, subject, message }]);

        if (error) {
            console.error("Supabase error:", error);
            // Fallback: if 'inquiries' table doesn't exist, try 'contact_messages'
            const { error: fallbackError } = await supabase
                .from("contact_messages")
                .insert([{
                    name,
                    email,
                    message: `[${type.toUpperCase()}] Subject: ${subject}\n\n${message}`
                }]);

            if (fallbackError) {
                console.error("Fallback error:", fallbackError);
                return { error: "Failed to send inquiry. Please try again later." };
            }
        }

        return { success: "Thank you! Your inquiry has been received." };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "An unexpected error occurred." };
    }
}

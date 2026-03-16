"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { sendContactMessage } from "@/app/actions/contact";

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            // Send to Supabase (via Server Action)
            const result = await sendContactMessage(formData);

            if (result.error) {
                setStatus({ type: "error", message: result.error });
                setIsSubmitting(false);
                return;
            }

            // ── EmailJS Configuration ──────────────────────────────────────
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !adminTemplateId || !publicKey) {
                console.error("EmailJS Configuration Missing:", { serviceId, adminTemplateId, publicKey });
                throw new Error("EmailJS configuration is incomplete.");
            }

            const emailjs = (await import("@emailjs/browser")).default;

            const userEmail = formData.get("email") as string;
            const name = formData.get("name") as string;
            const message = formData.get("message") as string;

            const sentAt = new Date().toLocaleString("en-US", {
                weekday: "long", year: "numeric", month: "long",
                day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "short",
            });

            // 1️⃣  Notify admin (ohiocodespace@gmail.com)
            const adminParams = {
                // Routing
                to_email: "ohiocodespace@gmail.com",
                reply_to: userEmail,               // ← Hit "Reply" in Gmail to respond directly
                // Content
                from_name: name,
                to_name: "Ohio Codespace",
                subject: `New Contact Message from ${name}`,
                message,
                type: "General Contact",
                // Meta
                user_email: userEmail,
                sent_at: sentAt,
                site_name: "Ohio Codespace",
                // Legacy aliases (in case template references these)
                name,
                email: "ohiocodespace@gmail.com",
                title: `New Contact Message from ${name}`,
            };
            await emailjs.send(serviceId, adminTemplateId, adminParams, publicKey);

            // 2️⃣  Send confirmation / auto-reply back to the user
            if (autoReplyTemplateId) {
                const userParams = {
                    // Routing
                    to_email: userEmail,
                    reply_to: "ohiocodespace@gmail.com",
                    // Content
                    from_name: "Ohio Codespace",
                    to_name: name,
                    subject: "We received your message – Ohio Codespace",
                    message,
                    type: "General Contact",
                    // Meta
                    user_email: userEmail,
                    sent_at: sentAt,
                    site_name: "Ohio Codespace",
                    // Legacy aliases
                    name,
                    email: userEmail,
                    title: "your message!",
                };
                await emailjs.send(serviceId, autoReplyTemplateId, userParams, publicKey);
            } else {
                console.warn("Auto-reply template ID not configured. Skipping confirmation email.");
            }

            setStatus({ type: "success", message: result.success || "Message sent successfully!" });
            form.reset();
        } catch (error: any) {
            console.error("Detailed EmailJS Error:", {
                message: error?.message,
                status: error?.status,
                text: error?.text,
                fullError: error
            });
            // Even if EmailJS fails, the data is already in Supabase.
            setStatus({ type: "success", message: "Message received! Our team will get back to you soon." });
            form.reset();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]" data-aos="fade-down">
                        Get In Touch
                    </div>
                    <h2 className="text-5xl md:text-6xl font-acme font-black mb-6 tracking-tighter" data-aos="zoom-out">
                        Let's Start a <span className="text-foreground italic font-nova" style={{ fontFamily: 'var(--font-familyIII)' }}>Conversation</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
                        Interested in collaborating or have a question? Kindly send a message.
                    </p>
                </div>

                <div
                    className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-glass-border bg-glass-bg backdrop-blur-xl shadow-2xl"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest" data-aos="fade-left" data-aos-duration="600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    data-aos="zoom-in"
                                    data-aos-duration="600"
                                    className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest" data-aos="fade-right" data-aos-duration="700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    data-aos="zoom-in"
                                    data-aos-duration="700"
                                    className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest" data-aos="fade-up" data-aos-duration="800">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Write a Message..."
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            data-aos="fade-up"
                            data-aos-duration="900"
                            className="group w-full py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                        >
                            {isSubmitting ? (
                                <>
                                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status && (
                            <div
                                className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium animate-fade-in ${status.type === "success"
                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                    : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                    }`}
                            >
                                <FontAwesomeIcon icon={status.type === "success" ? faCheckCircle : faExclamationCircle} />
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default ContactForm;

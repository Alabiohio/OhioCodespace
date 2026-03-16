"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaperPlane,
    faSpinner,
    faCheckCircle,
    faExclamationCircle,
    faExclamationTriangle,
    faQuestionCircle,
    faInfoCircle,
    faLifeRing,
    faUserShield
} from "@fortawesome/free-solid-svg-icons";
import { sendInquiry } from "@/app/actions/inquiry";

const InquiryClient: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            // Send to database (via Server Action)
            const result = await sendInquiry(formData);

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
            const subject = formData.get("subject") as string;
            const message = formData.get("message") as string;
            const type = formData.get("type") as string;

            const typeLabels: Record<string, string> = {
                general: "General Inquiry",
                complaint: "Complaint",
                support: "Technical Support",
                billing: "Billing & Payments",
            };
            const typeLabel = typeLabels[type] ?? type;

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
                subject: `[${typeLabel}] ${subject}`,
                message,
                type: typeLabel,
                // Meta
                user_email: userEmail,
                sent_at: sentAt,
                site_name: "Ohio Codespace",
                // Legacy aliases
                name,
                email: "ohiocodespace@gmail.com",
                title: `[${typeLabel}] ${subject}`,
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
                    subject: `We received your ${typeLabel.toLowerCase()} – Ohio Codespace`,
                    message,
                    type: typeLabel,
                    // Meta
                    user_email: userEmail,
                    sent_at: sentAt,
                    site_name: "Ohio Codespace",
                    // Legacy aliases
                    name,
                    email: userEmail,
                    title: subject,
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

    const inquiryTypes = [
        { id: "general", label: "General Inquiry", icon: faQuestionCircle, color: "text-blue-400" },
        { id: "complaint", label: "Complaint", icon: faExclamationTriangle, color: "text-rose-400" },
        { id: "support", label: "Technical Support", icon: faLifeRing, color: "text-emerald-400" },
        { id: "billing", label: "Billing & Payments", icon: faUserShield, color: "text-amber-400" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">
            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[-10%] left-[-10%] opacity-5" />
                <div className="glow-spot glow-secondary bottom-[-10%] right-[-10%] opacity-5" />

                <div className="background-beams opacity-20">
                    <div className="beam left-[20%] animation-delay-0" style={{ animationDuration: '15s' }}></div>
                    <div className="beam left-[80%] animation-delay-5" style={{ animationDuration: '20s' }}></div>
                </div>
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20 hero-enter">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                            <FontAwesomeIcon icon={faInfoCircle} className="animate-pulse" />
                            Help & Support Center
                        </div>
                        <h1 className="text-5xl md:text-7xl font-acme font-black mb-6 tracking-tighter leading-none">
                            How Can We <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent italic font-nova" style={{ fontFamily: "var(--font-familyIII)" }}>Assist You</span> Today?
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                            Have a question, feedback, or need to report an issue? Our team is here to ensure your experience with
                            <span className="text-foreground font-semibold"> Ohio Codespace </span>
                            is exceptional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Information Sidebar */}
                        <div className="lg:col-span-4 space-y-6" data-aos="fade-right">
                            <div className="glass-card p-8 rounded-3xl border border-glass-border bg-glass-bg backdrop-blur-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faLifeRing} className="text-accent" />
                                    Support Guidelines
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Response time: Within 24-48 hours",
                                        "Available: Monday - Friday",
                                        "Detailed descriptions help us solve issues faster",
                                        "Priority support for project clients"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-glass-border bg-gradient-to-br from-accent/10 to-transparent">
                                <h3 className="text-lg font-bold mb-3">Direct Contact</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    Prefer direct email? You can reach our support desk at:
                                </p>
                                <a
                                    href="mailto:ohiocodespace@gmail.com"
                                    className="text-accent font-bold hover:underline transition-all block break-all"
                                >
                                    ohiocodespace@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="lg:col-span-8" data-aos="fade-left">
                            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-glass-border bg-glass-bg backdrop-blur-xl shadow-2xl overflow-hidden relative">
                                {/* Gradient blobs inside the card */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 blur-3xl rounded-full" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 blur-3xl rounded-full" />

                                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="name" className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Your Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="e.g. John Doe"
                                                className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="email" className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="e.g. john@example.com"
                                                className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] ml-1 block">Inquiry Category</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {inquiryTypes.map((type) => (
                                                <div key={type.id} className="relative">
                                                    <input
                                                        type="radio"
                                                        id={`type-${type.id}`}
                                                        name="type"
                                                        value={type.id}
                                                        defaultChecked={type.id === "general"}
                                                        className="peer absolute opacity-0"
                                                    />
                                                    <label
                                                        htmlFor={`type-${type.id}`}
                                                        className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-glass-bg border border-glass-border cursor-pointer transition-all peer-checked:bg-accent/10 peer-checked:border-accent/50 hover:bg-glass-bg-hover"
                                                    >
                                                        <FontAwesomeIcon icon={type.icon} className={`text-xl ${type.color}`} />
                                                        <span className="text-[10px] font-bold text-center uppercase tracking-wider">{type.label}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="subject" className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            placeholder="What is this regarding?"
                                            className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="message" className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Provide as much detail as possible..."
                                            className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                                Processing Submission...
                                            </>
                                        ) : (
                                            <>
                                                <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                Submit Inquiry
                                            </>
                                        )}
                                    </button>

                                    {status && (
                                        <div
                                            className={`flex items-center gap-3 p-5 rounded-2xl text-sm font-medium animate-fade-in ${status.type === "success"
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                                }`}
                                        >
                                            <FontAwesomeIcon icon={status.type === "success" ? faCheckCircle : faExclamationCircle} size="lg" />
                                            {status.message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default InquiryClient;

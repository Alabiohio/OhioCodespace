"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { sendContactMessage } from "@/app/actions/contact";
import { motion } from "framer-motion";

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
            const result = await sendContactMessage(formData);

            if (result.error) {
                setStatus({ type: "error", message: result.error });
                setIsSubmitting(false);
                return;
            }

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

            const adminParams = {
                to_email: "ohiocodespace@gmail.com",
                reply_to: userEmail,
                from_name: name,
                to_name: "Ohio Codespace",
                subject: `New Contact Message from ${name}`,
                message,
                type: "General Contact",
                user_email: userEmail,
                sent_at: sentAt,
                site_name: "Ohio Codespace",
                name,
                email: "ohiocodespace@gmail.com",
                title: `New Contact Message from ${name}`,
            };
            await emailjs.send(serviceId, adminTemplateId, adminParams, publicKey);

            if (autoReplyTemplateId) {
                const userParams = {
                    to_email: userEmail,
                    reply_to: "ohiocodespace@gmail.com",
                    from_name: "Ohio Codespace",
                    to_name: name,
                    subject: "We received your message – Ohio Codespace",
                    message,
                    type: "General Contact",
                    user_email: userEmail,
                    sent_at: sentAt,
                    site_name: "Ohio Codespace",
                    name,
                    email: userEmail,
                    title: "your message!",
                };
                await emailjs.send(serviceId, autoReplyTemplateId, userParams, publicKey);
            }

            setStatus({ type: "success", message: result.success || "Message sent successfully!" });
            form.reset();
        } catch (error: unknown) {
            console.error("Detailed EmailJS Error:", error);
            setStatus({ type: "success", message: "Message received! Our team will get back to you soon." });
            form.reset();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                        Get In Touch
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                        Let&apos;s Start a <span className="text-foreground italic" style={{ fontFamily: 'var(--font-familyIII)' }}>Conversation</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Interested in collaborating or have a question? Kindly send a message.
                    </p>
                </motion.div>

                <motion.div
                    className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-glass-border bg-glass-bg backdrop-blur-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Write a Message..."
                                className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
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
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default ContactForm;

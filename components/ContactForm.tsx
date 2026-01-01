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

        const formData = new FormData(event.currentTarget);
        const result = await sendContactMessage(formData);

        setIsSubmitting(false);
        if (result.error) {
            setStatus({ type: "error", message: result.error });
        } else {
            setStatus({ type: "success", message: result.success || "Message sent!" });
            (event.target as HTMLFormElement).reset();
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]" data-aos="fade-down">
                        Get In Touch
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter" data-aos="zoom-out">
                        Let's Start a <span className="text-foreground italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Conversation</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
                        Interested in collaborating or have a question? Kindly send a message.
                    </p>
                </div>

                <div
                    className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-foreground/10 bg-foreground/[0.02] backdrop-blur-xl shadow-2xl"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest" data-aos="fade-left" data-aos-duration="1000">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-foreground/[0.08] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest" data-aos="fade-right" data-aos-duration="1200">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    data-aos="zoom-in"
                                    data-aos-duration="1200"    
                                    className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-foreground/[0.08] transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest" data-aos="fade-up" data-aos-duration="1400">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Write a Message..."
                                data-aos="zoom-in"
                                data-aos-duration="1400"
                                className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-foreground/[0.08] transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            data-aos="fade-up"
                            data-aos-duration="1600"
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

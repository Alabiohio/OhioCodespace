import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faSignOutAlt, faClock, faUser, faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";
import { logout } from "@/app/actions/auth";

export default async function AdminPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    const { data: messages, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground relative selection:bg-accent selection:text-accent-foreground">
            {/* Background Animations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[5%] left-[5%] animate-float" />
                <div className="glow-spot glow-secondary bottom-[5%] right-[5%] animate-float-reverse" />
            </div>

            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-32 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-[2px] bg-accent" />
                            <span className="text-accent font-bold tracking-widest uppercase text-xs">Command Center</span>
                        </div>
                        <h1 className="text-5xl font-black tracking-tighter">
                            Messages <span className="text-white italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Vault</span>
                        </h1>
                    </div>

                    <form action={logout}>
                        <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-rose-500/10 hover:border-rose-500/20 hover:text-rose-400 transition-all flex items-center gap-3 active:scale-95 group">
                            <FontAwesomeIcon icon={faSignOutAlt} className="group-hover:translate-x-1 transition-transform" />
                            Sign Out
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {!messages || messages.length === 0 ? (
                        <div className="glass-card p-20 rounded-[3rem] text-center border border-white/5 bg-white/[0.02]">
                            <FontAwesomeIcon icon={faInbox} className="text-6xl text-gray-700 mb-6" />
                            <p className="text-xl text-gray-500 font-medium">No messages in the vault yet.</p>
                        </div>
                    ) : (
                        messages.map((msg: any) => (
                            <div
                                key={msg.id}
                                className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-accent/30 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{msg.name}</h3>
                                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                                                    {msg.email}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                            <FontAwesomeIcon icon={faClock} />
                                            {new Date(msg.created_at).toLocaleString()}
                                        </div>
                                    </div>

                                    <div className="pl-0 md:pl-16">
                                        <div className="bg-black/20 p-6 md:p-8 rounded-3xl border border-white/5 text-gray-300 leading-relaxed font-light text-lg">
                                            {msg.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

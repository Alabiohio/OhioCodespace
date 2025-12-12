import React, { useEffect, useState } from "react";

interface TypingTextProps {
    bizPage?: boolean;
    maxChars?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ bizPage = false, maxChars = 40 }) => {
    const homeIntroTextContent: string[] = [
        "Hey there! Welcome to Ohio Codespace",
        "Want your own website? We’ve got you",
        "Let’s make your business shine online",
        "More views, more clicks, more growth!",
        "Your digital journey starts here",
        "Web design that works for you",
        "Let’s turn your ideas into reality",
        "Creative. Clean. Code you can trust.",
        "From concept to launch—stress-free",
        "We build. You grow. Simple as that."
    ];

    const bizIntroTextContent: string[] = [
        "Boost your business visibility",
        "Get more views",
        "Attract the right customers",
        "Stand out online effortlessly",
        "Grow your brand reach",
        "Turn clicks into loyal customers",
        "Level up your online presence",
        "Be seen. Be chosen. Be trusted.",
        "Let your business speak for itself",
        "Shine brighter than your competitors"
    ];

    const content = bizPage ? bizIntroTextContent : homeIntroTextContent;

    const [displayText, setDisplayText] = useState<string>("");
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [typing, setTyping] = useState<boolean>(true);
    const [pause, setPause] = useState<boolean>(false); // ✅ new pause state

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentText = content[textIndex];

            if (pause) {
                // Wait for 2 seconds at the end before deleting
                setPause(false);
                setTyping(false);
                return;
            }

            if (typing) {
                setDisplayText(currentText.slice(0, charIndex + 1));
                if (charIndex + 1 === currentText.length) {
                    setPause(true); // trigger pause
                    return;
                }
                setCharIndex(charIndex + 1);
            } else {
                setDisplayText(currentText.slice(0, charIndex - 1));
                if (charIndex - 1 === 0) {
                    setTyping(true);
                    setTextIndex((textIndex + 1) % content.length);
                }
                setCharIndex(charIndex - 1);
            }
        }, pause ? 1000 : 30); // ✅ wait 2s if pause is true

        return () => clearTimeout(timer);
    }, [charIndex, typing, textIndex, content, pause]);

    // Padding for consistent width
    const paddedText = displayText.padEnd(maxChars, " ");

    return (
        <span className="font-mono inline-block w-[100%] max-w-[50ch] text-center border-r-2 border-black animate-blink" id="introText">
            {paddedText}
        </span>
    );
};

export default TypingText;

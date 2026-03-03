import type { Metadata } from "next";
import InquiryClient from "@/components/InquiryClient";

export const metadata: Metadata = {
    title: "Complaint & Inquiry | Ohio Codespace",
    description:
        "Have a question or feedback? Contact the Ohio Codespace team for support, general inquiries, or to report an issue. We're here to help.",
    keywords: [
        "Ohio Codespace contact",
        "web support",
        "complaint page",
        "customer inquiry",
        "technical support",
        "report an issue",
        "Ohio Codespace feedback",
    ],
    authors: [{ name: "Ohiocheoya Alabi" }],
    creator: "Ohiocheoya Alabi",

    openGraph: {
        title: "Complaint & Inquiry | Ohio Codespace",
        description:
            "Get in touch with Ohio Codespace for any inquiries, technical support, or feedback regarding our services.",
        url: "https://ohiocodespace.vercel.app/inquiry",
        siteName: "Ohio Codespace",
        images: [
            {
                url: "https://ohiocodespace.vercel.app/ogImg.jpeg",
                width: 1200,
                height: 630,
                alt: "Ohio Codespace Support",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Complaint & Inquiry | Ohio Codespace",
        description:
            "Submit an inquiry or complaint to the Ohio Codespace team. We are committed to providing exceptional digital experiences.",
        images: ["https://ohiocodespace.vercel.app/ogImg.jpeg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

const InquiryPage: React.FC = () => {
    return <InquiryClient />;
};

export default InquiryPage;

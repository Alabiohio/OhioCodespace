import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    const ogTitle = "Ohio Codespace | Boost your business";
    const ogDesc = "We help businesses and creators build modern, responsive websites that stand out online. Get discovered today.";
    const ogImage = "https://ohiocodespace.vercel.app/ogImg.jpeg";

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />

      <!-- Open Graph -->
      <meta property="og:title" content="${ogTitle}" />
      <meta property="og:description" content="${ogDesc}" />
      <meta property="og:image" content="${ogImage}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ohiocodespace.vercel.app/business" />

      <!-- Twitter Cards -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${ogTitle}" />
      <meta name="twitter:description" content="${ogDesc}" />
      <meta name="twitter:image" content="${ogImage}" />

      <!-- Instant Redirect to React Page -->
      <meta http-equiv="refresh" content="0; url=/business" />
      <title>${ogTitle}</title>
    </head>
    <body></body>
    </html>
  `;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
}

import "./globals.css";

export const metadata = {
  title: "Marjinal",
  description: "Jempol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

import '/Users/shreyansut/react-app/eCell-Website/styles/globals.css';

export const metadata = {
  title: 'eCell NSUT',
  description: 'Push Boundaries Beyond Your Limits',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

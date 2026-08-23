import './globals.css';

export const metadata = {
  title: 'Zen | Full Stack Developer',
  description: 'Zen builds resilient systems with .NET, Kafka, SQL, and strong architecture.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import '@/app/ui/global.css';
import { notoSansKR } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansKR} antialiased`}>{children}</body>
    </html>
  );
}

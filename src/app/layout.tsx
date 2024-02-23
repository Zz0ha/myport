import type {Metadata} from 'next';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: "Hayeon's Portfolio",
  description: 'Thank you for visiting my portfolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

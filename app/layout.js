export const metadata = {
  title: "Supabase Bomb System",
  description: "爆破ボタンでSupabaseデータを削除するシステム",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

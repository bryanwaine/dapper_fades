import "../globals.css";

export const metadata = {
  title: "Dapper Fades",
  description: "Mens Hair Styling Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

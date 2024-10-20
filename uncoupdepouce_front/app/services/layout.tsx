// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Un coup de pouce",
//   description: "Nous vous aidons dans tous vos projets de traveau à domicile",
// };

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-grow flex justify-center py-8">{children}</main>;
}

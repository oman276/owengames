import Container from "@/components/layout/Container";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
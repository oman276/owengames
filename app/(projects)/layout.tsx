import Container from "@/components/layout/Container";

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}

import NavbarB from "@/components/NavbarB";

export default function VersionBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#FAFAFA', minHeight: '100vh' }}>
      <NavbarB />
      {children}
    </div>
  );
}

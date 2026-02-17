import NavbarB from "@/components/NavbarB";

export default function VersionBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <NavbarB />
      {children}
    </div>
  );
}

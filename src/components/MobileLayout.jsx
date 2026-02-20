function MobileLayout({ children }) {
  return (
    <div className="desktop-wrapper">
      <div className="mobile-container">{children}</div>
    </div>
  );
}
export default MobileLayout;

function Header() {
  return (
    <div
      style={{
        height: "5rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#191919",
        borderRadius: "0.5rem",
      }}
    >
      <img src="/favicon.ico" width={50} height={50} alt="logo" />

      <h2>Wiljami's Toolbox</h2>
    </div>
  );
}

export default Header;

function Button({ children, onClick, variant = "primary" }) {
  const styles = {
    primary: "bg-white text-purple-600 hover:bg-purple-50",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95`}
    >
      {children}
    </button>
  );
}

export default Button;

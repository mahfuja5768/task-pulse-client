const SectionTitle = ({ title, dark }) => {
  return (
    <header
      className={`${
        !dark
          ? "bg-[#f8efef]  text-black px-4 py-6 mt-12"
          : "bg-[#f8efef]  text-black px-4 py-6 mt-12"
      }`}
    >
      <h1 className="text-3xl font-bold text-center">{title}</h1>
    </header>
  );
};

export default SectionTitle;

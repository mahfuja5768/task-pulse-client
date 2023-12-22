
  const SectionTitle= ({ title , dark}) => {
  
    return (
      <header
        className={`${
          !dark
            ? "bg-[#dfb1b3]  text-black px-4 py-8"
            : "bg-[#ecd1d1]  text-black px-4 py-8"
        }`}
      >
        <h1 className="text-3xl font-semibold text-center">{title}</h1>
      </header>
    );
  };
  
  export default SectionTitle;
  

  const SectionTitle= ({ title }) => {
  
    return (
      <div className="text-center mb-6">
        <div className="line-before inline-block h-0.5 w-6 bg-textBlue"></div>
        <h2 className="font-titleFont inline-block text-2xl ml-2 font-semibold text-textBlue md:text-4xl">
          {title}
        </h2>
        <div className="line-after inline-block h-0.5 w-6 bg-textBlue"></div>
      </div>
    );
  };
  
  export default SectionTitle;
  
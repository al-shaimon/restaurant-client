const SectionTitle = ({ className, heading, subHeading }) => {
  return (
    <div className={className}>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-[#D99904]">{subHeading}</p>
        <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;

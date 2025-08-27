const LogoSection = () => {
  return (
    <section className="relative py-40 sm:px-6 lg:px-8 overflow-hidden section-bg">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          alt="Tokyo AI" 
          className="absolute bottom-[-20px] opacity-50 w-full h-auto"
          src="https://www.usetokyo.com/logo-tokyo2.svg"
        />
      </div>
    </section>
  );
};

export default LogoSection;
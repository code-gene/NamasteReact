const Shimmer = () => {
  return (
    <div className="relative bg-white shadow-md m-4 p-4 w-[250px] rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded-lg mb-4"></div>
      <div className="w-3/4 h-6 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] mb-2 rounded-md"></div>
      <div className="w-1/2 h-6 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] mb-2 rounded-md"></div>
      <div className="w-2/4 h-6 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded-md"></div>
    </div>
  );
};

export default Shimmer;

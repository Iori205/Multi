export const Text = ({ children }) => {
  return (
    <p className="text-[#334155] text-[14px] font-semibold pb-[8px] leading-[16px]">
      {children} <span className="text-[#E14942] text-[14px]">*</span>
    </p>
  );
};

export const Input = () => {
  return (
    <div>
      <input
        className="w-[416px] h-[44px] border border-solid border-[#CBD5E1] rounded-[8px] text-[#8B8E95] font-normal font-[16px] pl-[13px] mb-[12px]"
        placeholder="Placeholder"
      />
    </div>
  );
};

export const Button = ({ variant, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[416px] h-[44px] bg-[#121316] border rounded-md mt-[150px] text-white ${
        variant === "primary" ? "bg-red-400" : ""
      } ${variant === "secondary" ? "bg-yellow-100" : ""}`}
    >
      {children}
    </button>
  );
};

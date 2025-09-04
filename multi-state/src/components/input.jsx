export const Text = ({ children }) => {
  return (
    <p className="text-[#334155] text-[14px] font-semibold pb-[8px] leading-[16px]">
      {children} <span className="text-[#E14942] text-[14px]">*</span>
    </p>
  );
};

export const Input = ({ onChange, value }) => {
  return (
    <div>
      <input
        className={`w-[416px] h-[44px] border border-solid border-[#CBD5E1] rounded-[8px] text-[#8B8E95] font-[16px] pl-[13px] mb-[12px]`}
        value={value}
        onChange={onChange}
        placeholder="Placeholder"
        type="text"
      />
    </div>
  );
};

export const Button = ({
  variant,
  children,
  onClick,
  className,
  className1,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        `w-[416px] h-[44px] bg-[#121316] border rounded-md mt-[150px] text-white ${
          variant === "primary" ? "w-[280px]" : ""
        } ${
          variant === "secondary"
            ? " bg-amber-500 border rounded-md text-black"
            : ""
        }` +
        className +
        className1
      }
    >
      {children}
    </button>
  );
};

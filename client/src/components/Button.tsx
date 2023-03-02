import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`border-2 shadow-2xl bg-blue-600 rounded p-2 w-full text-white hover:bg-blue-500 focus:bg-blue-400 transition-colors disabled:bg-gray-500 ${className}`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

//Refs are a function provided by React to access the DOM element and the React element that you might have created on your own

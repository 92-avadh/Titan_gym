import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-titan-red/50 cursor-pointer text-sm md:text-base px-6 py-3 md:px-8 md:py-3.5';
  
  const variants = {
    primary: 'bg-titan-red hover:bg-titan-red-hover text-white shadow-glow-red hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] transform hover:-translate-y-0.5',
    secondary: 'bg-titan-blue hover:bg-titan-blue-hover text-black font-bold shadow-glow-blue hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5',
    outline: 'border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md hover:border-titan-red/50 transform hover:-translate-y-0.5',
    text: 'text-white hover:text-titan-red bg-transparent border-b-2 border-transparent hover:border-titan-red rounded-none px-1 py-1 md:px-1 md:py-1'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
export default Button;

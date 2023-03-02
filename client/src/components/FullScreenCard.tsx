import { ReactNode } from "react";

type FullScreenCardProps = {
  //In React, ReactNode is a type that represents any valid React child node, such as a string, number, element, or an array of these types.
  children: ReactNode;
};

export function FullScreenCard({ children }: FullScreenCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}

FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
  return <div className="shadow bg-white p-6 rounded-lg">{children}</div>;
};

FullScreenCard.ContentBelowBody = function ({ children }: FullScreenCardProps) {
  return <div className="mt-2 justify-center flex gap-3">{children}</div>;
};

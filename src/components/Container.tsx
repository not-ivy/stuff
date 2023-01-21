export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`${className} border rounded-lg bg-black/80 backdrop-blur-lg border-zinc-400 p-8 shadow-lg shadow-zinc-800`}
    >
      {children}
    </div>
  );
}

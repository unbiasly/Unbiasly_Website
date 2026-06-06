import { cn } from "@/lib/utils";

const PageTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("inline-block", className)} {...props}>
      <h1 className="display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-white">
        {children}
      </h1>
      <div className="h-[2px] bg-accent w-16 mt-5" />
    </div>
  );
};
export default PageTitle;

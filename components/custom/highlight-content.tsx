import { cn } from "@/lib/utils";

const HighlightContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "border-y border-white/[0.06] bg-white/[0.02] py-12 lg:py-20",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">{children}</div>
    </div>
  );
};
export default HighlightContent;

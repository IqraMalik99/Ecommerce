import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-start rounded-xl border border-neutral-200 bg-white p-2 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {/* Header/Image */}
      {header}

      {/* Content */}
      <div className="transition duration-200">
        {icon && <div className="mb-1">{icon}</div>}

        {title && (
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-sm truncate">
            {title}
          </div>
        )}

        {description && (
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 truncate">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

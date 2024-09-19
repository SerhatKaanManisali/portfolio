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
                "grid grid-cols-1 md:grid-cols-5 md:grid-rows-4 gap-6 h-5/6",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    textClassName,
    title,
    description,
    image,
    spareImage,
    id,
}: {
    className?: string;
    textClassName?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    image?: string;
    spareImage?: string;
    id: number;
}) => {
    return (
        <div className={cn("relative rounded-3xl overflow-hidden p-4 border border-[#363749] min-h-60",
            className
        )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >

            {(image && id === 0) && (
                <img src={image} className="absolute top-0 left-0 w-full h-full" />
            )}

            {id === 1 && (
                <div className="flex justify-center gap-8 absolute bottom-2 left-1/2 transform -translate-x-1/2 h-1/3">
                    <img src="/angular-icon.png" />
                    <img src="/react-icon.png" />
                </div>
            )}

            {(image && id === 2) && (
                <img src={image} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2/3" />
            )}

            {(image && id === 3) && (
                <img src={image} className="absolute top-5 md:top-0 -right-10 md:-right-5" />
            )}

            {(spareImage && (id === 1 || id === 2 || id === 3)) && (
                <img src={spareImage} className={`absolute top-11 w-full z-10 ${id === 2 ? "-right-8" : "right-0"}`} />
            )}

            <div className={cn("absolute flex flex-col gap-1 text-pretty", textClassName)}>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#CBACF9]">
                    {title}
                </h2>
                <p className="w-3/5 text-sm lg:text-lg">
                    {description}
                </p>
            </div>

        </div>
    );
};

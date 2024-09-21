import { cn } from "@/lib/utils";
import { StarsBackground } from "./stars-background";
import { ShootingStars } from "./shooting-stars";

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
                "grid grid-cols-1 md:grid-cols-5 md:grid-rows-4 gap-6 h-full w-full",
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
        <div className={cn("relative rounded-3xl overflow-hidden p-4 border border-[#363749] min-h-60 lg:min-h-96",
            className
        )}
            style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)"
            }}
        >

            {id === 1 && (
                <>
                    <StarsBackground />
                    <ShootingStars />
                </>
            )}

            {(image && id === 0) && (
                <img src={image} className="absolute top-0 left-0 w-full h-full" loading="lazy" />
            )}

            {(image && id === 2) && (
                <img src={image} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2/3" loading="lazy" />
            )}

            {(image && id === 3) && (
                <img src={image} className="absolute top-5 md:top-0 -right-10 md:-right-5 xl:right-0" loading="lazy" />
            )}

            {(spareImage && (id === 1 || id === 2 || id === 3)) && (
                <img src={spareImage} className={`absolute top-11 w-full z-10 ${id === 2 ? "-right-8" : "right-0"}`} loading="lazy" />
            )}

            <div className={cn("absolute flex flex-col gap-1 text-pretty h-full", textClassName)}>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#CBACF9]">
                    {title}
                </h2>

                <p className="w-1/2 md:w-3/5 text-sm lg:text-lg">
                    {description}
                </p>

                {id === 1 && (
                    <div className="flex justify-center gap-8 h-1/3 mt-2">
                        <img src="icons/angular-icon.png" className="h-full" loading="lazy" />
                        <img src="icons/react-icon.png" className="h-full" loading="lazy" />
                    </div>
                )}
            </div>

        </div>
    );
};

interface RootParams {
    children: React.ReactNode;
}

interface RootParamsExtended {
    children: React.ReactNode;
    lang: string;
}

interface DictionaryProps {
    [key: string]: any;
}

interface ServerLocalesParams {
    params: {
        lang: string;
    };
}

interface ClientLocalesParams {
    locales: {
        [key: string]: any;
    };
    lang?: string;
}

interface ParentContainerParams {
    className?: string;
    children?: React.ReactNode;
}

interface BackgroundGradientAnimationProps extends ParentContainerParams {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    interactive?: boolean;
    containerClassName?: string;
}

interface BackgroundGradientParams extends ParentContainerParams {
    containerClassName?: string;
    animate?: boolean;
}

interface BentoGridItem {
    title: string;
    description?: string;
    textClassName?: string;
    className: string;
    image?: string;
    spareImage?: string;
    id: number;
    button?: {
        default: string;
        copied: string;
    };
}

interface HoverEffectParams {
    items: {
        title: string;
        description?: string;
        link: string;
        image: string;
        iconList: string[];
    }[];
    className?: string;
    linkText: string;
}

interface HoverEffectCardParams extends ParentContainerParams {
    item: {
        image: string;
        iconList: string[];
    },
    linkText: string
}

interface FlipWordsParams {
    words: string[];
    duration?: number;
    className?: string;
}

interface MovingCardsParams {
    items: {
        name: string;
        src: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

interface Coordinates {
    x: number;
    y: number;
}

interface ShootingStar extends Coordinates {
    id: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

interface ShootingStarsProps {
    minSpeed?: number;
    maxSpeed?: number;
    minDelay?: number;
    maxDelay?: number;
    starColor?: string;
    trailColor?: string;
    starWidth?: number;
    starHeight?: number;
    className?: string;
}

interface StarProps extends Coordinates {
    radius: number;
    opacity: number;
    twinkleSpeed: number | null;
}

interface StarBackgroundProps {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minTwinkleSpeed?: number;
    maxTwinkleSpeed?: number;
    className?: string;
}

interface MagicButtonParams {
    title: string;
    icon?: React.ReactNode;
    handleClick?: () => void;
    otherClasses?: string;
}

interface TitleParams {
    text?: string;
    highlight: string;
}

interface ProjectLocalesProps {
    title: string,
    description: string
}

interface FooterLinksLocalesProps {
    imprint: string;
    privacyPolicy: string;
}
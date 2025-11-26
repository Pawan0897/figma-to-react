import { cn } from "@/lib/utils";
import { AnimatePresence, motion as Motion } from "motion/react";

import { useState } from "react";
import { Link } from "react-router";

export const HoverEffect = ({
    items,
    className
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(1);
    return (
        <div
            className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(1)}>
                    <AnimatePresence mode="wait">
                        {hoveredIndex === idx && (
                            <Motion.div
                                className="absolute inset-0 h-full w-full  bg-red-400 block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.5, ease: "easeInOut" },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.5, ease: "easeInOut" },
                                }} />
                        )}
                    </AnimatePresence>
                    <Card>
                        {/* render optional icon if provided */}
                        {item?.icon && (
                            <div className="mb-4">
                                <img src={item.icon} width={50} alt="" />
                            </div>
                        )}
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Lin>
            ))}
        </div>
    );
};
// *****************************************************
export const Card = ({
    className,
    children
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden  border border-transparent dark:border-white/20 group-hover:border-slate-700 relative z-20 transition-all duration-300 ease-out",
                className
            )}>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children
}) => {
    return (
        <p
            className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
};

'use client'

import { Direction } from "@/lib/types";
import { DirectionProvider } from "@radix-ui/react-direction";

export const RedixProvider = ({ children, dir }: { children: React.ReactNode, dir: Direction }) => {
    return <DirectionProvider dir={dir}>{children}</DirectionProvider>;
};

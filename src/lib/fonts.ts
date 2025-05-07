import { IBM_Plex_Sans_Arabic as FontSans } from "next/font/google"

export const fontSans = FontSans({
    subsets: ["arabic", "latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
})
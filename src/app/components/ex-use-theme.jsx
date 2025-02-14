"use client"
import { ThemeProvider, useTheme } from "../provider/use-theme";

const ThemeComponent = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <h1 className="text-black">Theme Component</h1>
            <button className="text-black" onClick={toggleTheme}>Toggle Theme</button>
            <p className="text-black">Current Theme: {theme}</p>
        </div>
    )
}

export const ThemedComponent = () => {
    return (
        <ThemeProvider>
            <ThemeComponent />
        </ThemeProvider>
    )
}
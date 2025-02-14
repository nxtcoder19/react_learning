const { createContext, Children, useState, useContext } = require("react");

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={
            {
                theme,
                toggleTheme
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const themContext = useContext(ThemeContext);
    return themContext;
}

/*
📌 Definition: The useContext hook allows functional components to consume values from a 
React Context without having to pass props manually at each level (prop drilling).

✅ Simplifies state management.
✅ Avoids unnecessary prop drilling.
✅ Works well with global themes, authentication, and settings.
*/
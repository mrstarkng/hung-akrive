import {Moon, SunDim} from "phosphor-react";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <Moon size={24} /> : <SunDim size={24} />}
        </button>
    );
}

export default ThemeToggler;

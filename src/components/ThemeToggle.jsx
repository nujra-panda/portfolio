import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = 'theme';

export const ThemeToggle = () => {
    const initialDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    const [isDark, setIsDark] = useState(initialDark);
    const userChoseRef = useRef(false);

    useEffect(() => {
        const current = document.documentElement.classList.contains('dark');
        if (current !== isDark) setIsDark(current);

        if (!localStorage.getItem(STORAGE_KEY)) {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = (e) => {
                if (!userChoseRef.current && !localStorage.getItem(STORAGE_KEY)) {
                    applyTheme(e.matches, false);
                }
            };
            mql.addEventListener('change', handler);
            return () => mql.removeEventListener('change', handler);
        }
    }, []);

    const applyTheme = (dark, persist) => {
        const root = document.documentElement;
        if (dark) root.classList.add('dark'); else root.classList.remove('dark');
        setIsDark(dark);
        if (persist) {
            if (dark) localStorage.setItem(STORAGE_KEY, 'dark');
            else localStorage.setItem(STORAGE_KEY, 'light');
        }
    };

    const toggle = () => {
        userChoseRef.current = true;
        applyTheme(!isDark, true);
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full focus:outline-hidden",
                "transition-colors duration-300"
            )}
        >
            {isDark ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
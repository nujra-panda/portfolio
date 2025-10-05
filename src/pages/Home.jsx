import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "../components/Navbar"

export const Home = () => {
    return <div className="min-h-screen flex flex-col">

        {/* Theme toggle */}
            <ThemeToggle />
        {/* Background effects */}
            <StarBackground />
        {/* Navigation bar */}
            <Navbar />  
        {/* Main content */}

        {/* Footer */}
    </div>
}

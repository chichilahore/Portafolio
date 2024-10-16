import { useEffect } from 'react';
import About from './about/About';
import Projects from './projects/Projects';
import './Main.css'

export default function Main() {

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.about, .projects, footer');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty array means this effect runs once on mount

    return (
        <main>
            <About />
            <Projects />
        </main>
    );
}

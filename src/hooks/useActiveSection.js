import { useState, useEffect, useRef } from 'react';

const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');
    const idsRef = useRef(sectionIds);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -60% 0px' }
        );

        idsRef.current.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return activeSection;
};

export default useActiveSection;

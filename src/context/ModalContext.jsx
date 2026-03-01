import { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({ type: null, mode: 'signin' });

    const openAuth = useCallback((mode = 'signin') => {
        setModalState({ type: 'auth', mode });
    }, []);

    const openDemo = useCallback(() => {
        setModalState({ type: 'demo', mode: null });
    }, []);

    const closeModal = useCallback(() => {
        setModalState({ type: null, mode: 'signin' });
    }, []);

    return (
        <ModalContext.Provider value={{ modalState, openAuth, openDemo, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

import React, { useState, createContext } from "react";

export const SidebarContent = createContext()

const SidebarProvider = ({ children }) => {
    // sidebar state
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    return <SidebarContent.Provider
        value={{ isOpen, setIsOpen, handleClose }}>
        {children}
    </SidebarContent.Provider>
}

export default SidebarProvider;
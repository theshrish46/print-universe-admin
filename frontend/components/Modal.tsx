import React from 'react'


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='bg-white p-4 rounded shadow-lg'>
                <button className='absolute top-2 right-2 bg-red-500 px-3 py-2' onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    )
}

export default Modal
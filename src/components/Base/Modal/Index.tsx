import React from 'react';
import { ModalProps } from './type';

export function Modal(props: ModalProps) {
    const { isOpen, children } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-end items-end bottom-24 right-8">
            <div className="bg-white rounded-lg shadow-lg" style={{ width: '734px', height: '737px' }}>
                {children}
            </div>
        </div>
    );
}
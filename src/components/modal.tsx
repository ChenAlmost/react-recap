import React from 'react';
import styled from 'styled-components';

interface ModalProps {
    show?: boolean;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    return (
        <div className='container'>
            <div className='modal-mask'></div>
            <div className='modal-body'>
                <div className='title'>I am title</div>
                <div className='body'>{props.children}</div>
                <div className='footer'>I am footer</div>
            </div>
            <style jsx>{`
                .container {
                    font-size: 50px;
                    position: relative;
                }
                .modal-mask {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100%;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z
                }
                .modal-body {
                  position: fixed;
                  right: 50%;
                  /* left: 0; */
                  /* top: 50%; */
                  /* bottom: 0; */
                  width: 100px;
                  background: #fff;
                  z-index: 1000;
            `}</style>
        </div>
    );
};

export default Modal;

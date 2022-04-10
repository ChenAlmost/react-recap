import React from "react";
import styled from "styled-components";

interface ModalProps {
  show?: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <div className="container">
      <div className="title">I am title</div>
      <div className="body">I am body</div>
      <div className="footer">I am footer</div>
      <style jsx>{`
        .container {
          font-size: 50px;
        }
        .body {
        }
      `}</style>
    </div>
  );
};

export default Modal;

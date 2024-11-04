import PropTypes from "prop-types";

export const Modal = ({ children, isOpen, onClose }) => {
    if (isOpen) {
        return null;
    }

    return (
        <>
            <div className="absolute py-5 px-2 max-w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl w-full bg-gray-900 text-gray-50 z-50">
                {children}
            </div>
            <div className="fixed z-10 inset-0 bg-black/70" onClick={onClose} />
        </>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

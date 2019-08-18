import React from 'react';
import "./Modal.css"

const Modal = ({ children, customClass, show, closeModal }) => (
    <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
        <div className="overlay" onClick={closeModal}/>
        <div className="modal-content">
            {children}
            <span className="close" onClick={ closeModal }>
                &times;
            </span>
        </div>
    </div>
);
export default Modal;


// Usecase
/*
class Test extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    };

    render() {
        return (
            <div>
                 <button onClick={this.toggleModal}>
                    Click Me!
                </button>
                <Modal
                    show={this.state.showModal}
                    closeModal={this.toggleModal}>
                    this ok data
                </Modal>

            </div>
        );
    }
}
*/
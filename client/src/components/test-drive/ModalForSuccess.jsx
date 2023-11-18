import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export default function ModalForSuccess () {
    const navigate = useNavigate()

    const exitModal = () => {
        navigate('/')
    }

    return (

        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Successful registration. We will contact you soon!</Modal.Title>
            </Modal.Header>
    
            <Modal.Footer>
                <Button variant="primary" onClick={exitModal}>Close</Button>
            </Modal.Footer>
            </Modal.Dialog>
      </div>
    )
}
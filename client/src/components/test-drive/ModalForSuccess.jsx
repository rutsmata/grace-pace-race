import {Button, Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Path from '../../paths';

export default function ModalForSuccess () {
    const navigate = useNavigate()

    const exitModal = () => {
        navigate(Path.Home)
    }

    return (

        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={true} onEscapeKeyDown={exitModal}>
            <Modal.Header>
                <Modal.Title>Congratulations! You have successfully registered for test drive. We will contact you soon!</Modal.Title>
            </Modal.Header>
    
            <Modal.Footer>
                <Button variant="primary" onClick={exitModal}>Close</Button>
            </Modal.Footer>
            </Modal>
      </div>
    )
}
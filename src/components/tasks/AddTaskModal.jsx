import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eligendi.</p>
        </Modal>
    );
};

export default AddTaskModal;
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch()

    const onSubmit = (data) =>{
        dispatch(addTask(data))
        reset();
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title">Title</label>
                    <input
                     type="text"
                     id="title"
                     className="w-full rounded-md"
                     {...register('title')}
                     />
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="title">Description</label>
                    <input
                     type="text"
                     id="description"
                     className="w-full rounded-md"
                     {...register('description')}
                     />
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="title">Deadline</label>
                    <input
                     type="date"
                     id="date"
                     className="w-full rounded-md"
                     {...register('date')}
                     />
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="title">Assign to</label>
                    <select 
                    className="w-full rounded-md"
                     id="assignTo"
                     {...register('assignTo')}>
                        <option value="AR Asif">AR Asif</option>
                        <option value="Emdadul hoque">Emdadul hoque</option>
                        <option value="Rahat Hossen">Rahat Hossen</option>
                        <option value="Atiqur Rahaman">Atiqur Rahaman</option>
                        <option value="Tonmoy Ahamed">Tonmoy Ahamed</option>
                        <option value="Anisur Rahman">Anisur Rahman</option>
                    </select>
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="title">Priority</label>
                    <select className="w-full rounded-md"
                     id="priority"
                     {...register('priority')}
                     >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex gap-3 justify-end">
                    <button onClick={()=> setIsOpen(false, reset())} className="btn bg-[#f35a5a] text-white">Cancel</button>
                    <button type="submit" className="btn  bg-[#744eff] text-white">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
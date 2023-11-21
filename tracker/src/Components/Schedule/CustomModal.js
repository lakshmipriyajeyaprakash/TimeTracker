import { React, useState } from "react";
import { Modal} from "react-bootstrap";
import Button from '@mui/material/Button';
import { Tooltip } from "@mui/material";
import classes from '../Layout/Header.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "../assets/EditIcon";
import DeleteIcon from "../assets/DeleteIcon";
import ItemStyle from "../assets/ItemStyle";
import PlayIcon from "../assets/PlayIcon";
const CustomModal = (props) => {
  const { comp, index, onDelete ,reRun} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editTaskMemo, seteditTaskMemo] = useState({
    title: "",
    dueDate: "",
  });
  const handleClose = () => {
    console.log("in");
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    seteditTaskMemo({ ...editTaskMemo, [name]: value });
  };
  const edit = () => {
    if(editTaskMemo.title.trim()!== ''){
      comp.CompletedTitle = editTaskMemo.title;
    }
    if(editTaskMemo.dueDate.trim()!== ''){
      comp.CompletedDate = editTaskMemo.dueDate;
    }
    handleClose();
  };
  return (
    <div>
      <ItemStyle>
      <p
        class="d-flex flex-row mb-1 rounded-start-2 rounded-end-2 w-100 ps-5 pt-3 pe-5"
        className={classes.modal}
        key={index}
      >
        <Modal show={isModalOpen} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              name="title"
              placeholder="Task"
              defaultValue={comp.CompletedTitle}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="dueDate"
              defaultValue={comp.CompletedDate}
              onChange={handleInputChange}
            />
            <br></br><br></br>
          </Modal.Body>
          <Modal.Footer>
          <Button
              variant="secondary"
              class="btn btn-secondary bg-secondary text-white btn-sm-4 col-xs-3 ps-3 ps-6 pt-4"
              onClick={edit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <p class="d-flex flex-column mb-1 p-2 g-row-6 w-25 p-3 text-info">
          {comp.CompletedTitle}
        </p>
        <p class="d-flex flex-column mb-1 p-2 g-row-6 w-25 p-3 text-info">
          {comp.CompletedDate}
        </p>
        <p class="d-flex flex-row mb-1 p-2 g-row-6 w-25 p-3 text-info">
          {comp.CompletedTime} <Tooltip title="RunTimer"><Button onClick={() => reRun(comp)}><PlayIcon></PlayIcon></Button></Tooltip>
        </p>
        <p class="d-flex flex-row mb-1 p-2 g-row-6 w-25 p-3 text-info">
          Completed Time:{comp.CompletedCurrentTime}
        </p>
        <Tooltip title="Delete">
        <Button
          variant="outlined"
          size="small"
          onClick={() => onDelete(comp)}
        >
          <DeleteIcon></DeleteIcon>
        </Button>
        </Tooltip>
        <Tooltip title="Edit">
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpenModal}
        >
          <EditIcon></EditIcon>
        </Button>
        </Tooltip>
        </p>
        </ItemStyle>
    </div>
  );
};

export default CustomModal;
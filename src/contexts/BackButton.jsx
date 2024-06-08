import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
  return (
    <Button type='back' onClick={(event) => {
        event.preventDefault();
        navigate(-1)
      }}>&larr; Back</Button>
  )
}

export default BackButton
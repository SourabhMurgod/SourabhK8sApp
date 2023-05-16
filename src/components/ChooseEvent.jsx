import beginer from "../assets/images/BeginerLvl.png";
import EventTempF1 from "./EventComponents/EventTempF1";
import EventTempF2 from "./EventComponents/EventTempF2";
import EventTempF3 from "./EventComponents/EventTempF3";
import EventTempF4 from "./EventComponents/EventTempF4";
import EventTempF5 from "./EventComponents/EventTempF5";
import EventTempF6 from "./EventComponents/EventTempF6";
import EventTempF7 from "./EventComponents/EventTempF7";
import EventTempF8 from "./EventComponents/EventTempF8";
import Button from "./elements/Button";
import { useForm } from "react-hook-form";
import intermediat from "../assets/images/IntermediateLvl.png";
import practice from "../assets/images/practive.png";
import advanced from "../assets/images/advanced.png";
import { useNavigate } from "react-router-dom";

export const ChooseEvent = ({ email }) => {
    let navigate = useNavigate();
    const { chooselevel, handleSubmit } = useForm();
    const eventTitle = "Hackathon";
    const eventDate = "17 May 2023";
    const eventStartTime = "08:00 PM";
    const eventEndTime = "10:00 PM";
    const eventDuration = "2";
    const eventProblemStatementTitle = "Kubernetes L1";
    const eventProblemStatementBrief = "Container Orchestration contest for Beginners";
    console.log(email + " successfully recieved email in chooselvl page")
    const onSubmit1 = (data) => {
        navigate('/finalpractice', { state: { email: email } });

    }

    const onSubmit2 = (data) => {
        navigate('/finalbeginer', { state: { email: email } });

    }

    const onSubmit3 = (data) => {
        navigate('/finalintermediate', { state: { email: email } });

    }

    const onSubmit4 = (data) => {
        navigate('/finaladvanced', { state: { email: email } });

    }

    return (
        <div className="bg-white">

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-0 grid grid-cols-0">
                    <EventTempF1 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF2 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF3 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF4 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF5 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF6 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF7 key={index} email={email} />
                </div>
            ))}

            {Array.from({ length: 1 }, (_, index) => (
                <div className="p-4 grid grid-cols-0">
                    <EventTempF8 key={index} email={email} />
                </div>
            ))}
        </div>
    )
}

export default ChooseEvent;
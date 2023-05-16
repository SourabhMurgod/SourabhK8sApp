import beginer from "../../assets/images/BeginerLvl.png";
import tampleteCoverImg2 from "../../assets/images/CoverImages/coverImg2.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const EventTemp2 = ({ email }) => {
    let navigate = useNavigate();
    const { chooselevel, handleSubmit } = useForm();
    const eventTitle = "CoderMenia";
    const eventDate = "21 May 2023";
    const eventStartTime = "05:00 PM";
    const eventEndTime = "18:00 PM";
    const eventDuration = "3";
    const eventProblemStatementTitle = "Terraform L2";
    const eventProblemStatementBrief = "Infra As Code! ";
    console.log(email + " successfully recieved email in chooselvl page")
    const onSubmit1 = (data) => {
        navigate('/finalpractice', { state: { email: email } });

    }

    return (

        <div className="rounded-md bg-white shadow-lg mt-20 ml-24 mr-24 flex mb-20">
            <div className="w-3/4 relative">
                <img src={tampleteCoverImg2} alt="logo" className="object-fill rounded-md h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-5xl font-bold text-white absolute top-[30%] font-mohr-rounded" style={{ textTransform: 'uppercase', fontFamily: 'Open Sans' }}>
                        {eventTitle}
                    </h2>

                    <div className="text-white absolute bottom-0 top-[46%] left-[0%] right-0 p-6 text-center">
                        <p className="text-3xl font-semibold tracking-wide">{eventDate}</p>
                        <div className="flex items-center justify-center mt-4">
                            <div className="border-r border-white pr-4">
                                <p className="text-2xl font-semibold">{eventStartTime}</p>
                            </div>
                            <div className="pl-4">
                                <p className="text-2xl font-semibold">{eventEndTime} IST</p>
                            </div>
                        </div>
                        <p className="text-lg mt-4 tracking-wide">Contest Duration - {eventDuration} Hours</p>
                    </div>
                </div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white w-4 h-full blur"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white w-4 h-full right-0 blur"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white h-4 w-full blur"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white h-4 w-full bottom-0 blur"></div>
                </div>
            </div>

            <div className="w-1/4">
                <div className="flex flex-col rounded-lg bg-white shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-white-700">
                    <div className="flex flex-col justify-start p-6">
                        <div className="backdrop-filter backdrop-blur-sm py-8">
                            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-black-50 capitalize" style={{ fontFamily: '' }}>
                                {eventProblemStatementTitle}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-black-200">
                                {eventProblemStatementBrief}
                            </p>
                        </div>
                        <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-20 rounded-full shadow-lg">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventTemp2;
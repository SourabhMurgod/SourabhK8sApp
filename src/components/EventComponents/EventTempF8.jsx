import beginer from "../../assets/images/BeginerLvl.png";
import tampleteCoverImg8 from "../../assets/images/CoverImages/coverImg8.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const EventTemp8 = ({ email }) => {
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

    return (

        <div className="rounded-md bg-white shadow-lg mt-20 ml-24 mr-24 flex mb-20 hover:shadow-xl transition-transform transform hover:scale-110">
                <div className="w-3/4 relative">
                    <img src={tampleteCoverImg8} alt="logo" className="object-fill rounded-md h-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white absolute top-[30%] font-mohr-rounded sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl" style={{ textTransform: 'uppercase', fontFamily: 'Open Sans' }}>
                            {eventTitle}
                        </h2>

                        <div className="text-white absolute bottom-0 top-[46%] left-[0%] right-0 p-2 sm:p-4 text-center">
                            <p className="text-xl font-semibold tracking-wide sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">{eventDate}</p>
                            <div className="flex items-center justify-center mt-1 sm:mt-2">
                                <div className="border-r border-white pr-1 sm:pr-2">
                                    <p className="text-lg font-semibold sm:text-base md:text-sm lg:text-xs xl:text-1.5xl 2xl:text-xl">{eventStartTime}</p>
                                </div>
                                <div className="pl-1 sm:pl-2">
                                    <p className="text-lg font-semibold sm:text-base md:text-sm lg:text-xs xl:text-1.5xl 2xl:text-xl">{eventEndTime} IST</p>
                                </div>
                            </div>
                            <p className="text-base mt-1 sm:mt-2 tracking-wide sm:text-base md:text-sm lg:text-xs xl:text-lg 2xl:text-lg">Contest Duration - {eventDuration} Hours</p>
                        </div>
                    </div>
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white w-4 h-full blur"></div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white w-4 h-full right-0 blur"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white h-4 w-full blur"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white h-4 w-full bottom-0 blur"></div>
                    </div>
                </div>

                <div className="w-1/3">
                    <div className="flex flex-col rounded-lg bg-white shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-white-700">
                        <div className="flex flex-col justify-start p-4 sm:p-6">
                            <div className="backdrop-filter backdrop-blur-sm py-2 sm:py-4">
                                <h5 className="mb-1 text-sm font-medium text-neutral-800 dark:text-black-50 capitalize sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-xl" style={{ fontFamily: '' }}>
                                    {eventProblemStatementTitle}
                                </h5>
                                <p className="mb-3 text-xs text-neutral-600 dark:text-black-200 sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                                    {eventProblemStatementBrief}
                                </p>
                            </div>

                            <div className="border-t-2 border-neutral-100 px-4 sm:px-6 py-2 sm:py-3 dark:border-neutral-600 dark:text-neutral-50">
                                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 rounded-full shadow-lg text-sm sm:text-base md:text-lg lg:text-lg xl:text-base 2xl:text-base">
                                    Register
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    )
}

export default EventTemp8;
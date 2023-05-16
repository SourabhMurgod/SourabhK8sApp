import beginer from "../assets/images/BeginerLvl.png";
import aboutImage2 from "../assets/images/about-image2.png";
import Button from "./elements/Button";
import { useForm } from "react-hook-form";
import intermediat from "../assets/images/IntermediateLvl.png";
import practice from "../assets/images/practive.png";
import advanced from "../assets/images/advanced.png";
import { useNavigate } from "react-router-dom";

export const ChooseLevel = ({ email }) => {
    let navigate = useNavigate();
    const { chooselevel, handleSubmit } = useForm();
    console.log(email+" successfully recieved email in chooselvl page")
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
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Practice</h2>
                    <p className="text-lg">
                    In practice level, we will do practice on Kubernetes and we will see how the kubernetes works. Additionally, we also do hands on practice. And below there are some stages which you can be practice for gaining more Knowledge in Kubernetes
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{ marginLeft: '6rem' }}>
                    <img src={practice} alt="" className="w-[440px] h-[300px] object-cover" />
                </div>
                <div className="btn-container" style={{marginTop: '-60px'}}>
                    <Button style={{backgroundColor: 'black'}} onClick={handleSubmit(onSubmit1)}>Get Started Now</Button>
                    <a href="/menu" className="text-black-400 hover:text-black-500 font-bold text-decoration-line px-3">
                        See More
                    </a>
                </div>
            </div>

            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Beginner</h2>
                    <p className="text-lg">
                    At this level, we practice using Kubernetes to display existing nodes with 'kubectl get nodes', create simple Pods, and describe Pods with 'kubectl describe pod'. These exercises develop our skills in working with Kubernetes and its components.
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{ marginLeft: '6rem' }}>
                    <img src={beginer} alt="" className="w-[440px] h-[300px] object-cover" />
                </div>
                <div className="btn-container" style={{marginTop: '-60px'}}>
                    <Button style={{backgroundColor: 'black'}} onClick={handleSubmit(onSubmit2)}>Get Started Now</Button>
                    <a href="/menu" className="text-black-400 hover:text-black-500 font-bold text-decoration-line px-3">
                        See More
                    </a>
                </div>
            </div>

            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Intermediate</h2>
                    <p className="text-lg">
                    At this level, we're practicing adding environmental variables and capabilities to applications, managing nodes and replicas in our Kubernetes cluster to ensure high availability and scalability, and gaining hands-on experience with container orchestration and cloud-native application development.
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{ marginLeft: '6rem' }}>
                    <img src={intermediat} alt="" className="w-[440px] h-[300px] object-cover" />
                </div>
                <div className="btn-container" style={{marginTop: '-60px'}}>
                    <Button style={{backgroundColor: 'black'}} onClick={handleSubmit(onSubmit3)}>Get Started Now</Button>
                    <a href="/menu" className="text-black-400 hover:text-black-500 font-bold text-decoration-line px-3">
                        See More
                    </a>
                </div>
            </div>

            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Advanced</h2>
                    <p className="text-lg">
                    In Advance Level you can practice on various Kubernetes tasks such as creating a network policy for cross-namespace communication, manually scheduling pods with NodeSelectors, scheduling pods on master nodes, and draining nodes for maintenance, improving our skills in container management.
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{ marginLeft: '6rem' }}>
                    <img src={advanced} alt="" className="w-[440px] h-[300px] object-cover" />
                </div>
                <div className="btn-container" style={{marginTop: '-60px'}}>
                    <Button style={{backgroundColor: 'black'}} onClick={handleSubmit(onSubmit4)}>Get Started Now</Button>
                    <a href="/menu" className="text-black-400 hover:text-black-500 font-bold text-decoration-line px-3">
                        See More
                    </a>
                </div>
            </div>

            
        </div>
    )
}

export default ChooseLevel;
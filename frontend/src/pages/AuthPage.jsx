import { useRecoilValue } from "recoil";
import SignupCard from "../components/SignupCard";
import LoginCard from "../components/LoginCard";
import userOnSignup from "../atoms/authPageAtom";

export default function AuthPage (){
    const isOnSignupPage = useRecoilValue(userOnSignup);
    return(
    isOnSignupPage? <SignupCard/>:<LoginCard/> 
    )
}
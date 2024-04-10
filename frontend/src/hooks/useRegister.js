import { useState } from "react"
import toast from "react-hot-toast";

export const useRegister = () => {
    const [loading, setLoading] = useState(false);

    const register = async({firstName, username, password,confirmPassword}) => {
        const isValid = handleValidation({firstName, username, password,confirmPassword});

        if(!isValid){
            console.log("dont valid")
            return 0;
        }
        setLoading(true);
        try{
            console.log(JSON.stringify({firstName, username, password,confirmPassword}))
            const res = await fetch("/api/auth/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({firstName, username, password,confirmPassword})
            })

            const data = res.json();
            if(data.error){
                throw new Error(data.error);
            }
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading, register};
}

const handleValidation = ({firstName, username, password,confirmPassword}) => {
    if(!firstName || !username || !password || !confirmPassword){
        toast.error('Fill in all fieds');
        return false
    }

    if(password !== confirmPassword){
        toast.error("Passwords don't match");
        return false
    }

    if(password.length < 8){
        toast.error("Password don't have at least 8 chars");
        return false
    }

    if(password.match(/\d+/) == null){
        toast.error("Password must contain at least 1 num");
        return false
    }

    return true;
}

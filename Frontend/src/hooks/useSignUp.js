import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullname,
    username,
    password,
    confirmpass,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpass,
      gender,
    });
    if (!success) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          username: username,
          password: password,
          confirmpass: confirmpass,
          gender: gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmpass,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpass || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmpass) {
    toast.error("Passwords do not match");
    return false;
  }
  // if (password.length < 6) {
  //   toast.error("Password must be at least 6 characters");
  //   return false;
  // }
  return true;
}

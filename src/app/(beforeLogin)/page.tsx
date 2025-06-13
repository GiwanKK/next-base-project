import { cookies } from "next/headers";
import LoginPage from "../_components/(login)/pages";

const Login = () => {
  const cookie = cookies().get("auth")?.value;
  return <LoginPage hasAuth={!!cookie} />;
};

export default Login;

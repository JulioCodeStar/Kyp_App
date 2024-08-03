import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import KYP from "../../assets/img/encabezado.png";
import { IconEye, IconEyeOff, IconExclamationCircleFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useTitle } from "../../hooks";
import { useForm } from "react-hook-form";
import { login } from '../../api/auth/authService'
import { useNavigate } from "react-router-dom";

export default function Login() {
  useTitle("KYPBioingeniería - Login");

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async(data) => {
    const meta = await login(data); 
    if (meta.success) {
      navigate('/')
    } else {
      setLoginError(meta.message)
    }
  });

  const AlertLogin = (field) => {
    return (
      errors[field] && (
        <span className="font-semibold text-red-500 text-xs mt-1">
            {errors[field].message}
        </span>
      )
    );
  };

  return (
    <>
      <div className="mb-5">
        <img src={KYP} alt="" className="w-[200px]" />
      </div>
      <Card className="w-full max-w-sm mb-3">
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardTitle className="text-4xl text-center font-bold">
              Iniciar Sesión
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@kypbioingenieria.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {AlertLogin("email")}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••••••••"
                  className="pe-10"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                />
                {showPassword ? (
                  <button
                    type="button"
                    className="absolute bsolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <IconEye size={20} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute bsolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <IconEyeOff size={20} />
                  </button>
                )}
              </div>
              {AlertLogin("password")}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full text-[#216E71] bg-white hover:text-white border border-[#216E71] hover:bg-[#216E71]"
            >
              Acceder
            </Button>
          </CardFooter>
        </form>
      </Card>
      {loginError &&  
        <Alert variant="destructive" className="md:w-[380px] w-[350px] bg-red-500 text-white">
          <IconExclamationCircleFilled color="#fff"/>
          <AlertTitle className="ms-2">Error</AlertTitle>
          <AlertDescription className="ms-2">
            {loginError}
          </AlertDescription>
        </Alert>
      }
    </>
  );
}

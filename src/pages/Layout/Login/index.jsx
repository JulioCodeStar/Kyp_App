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
import KYP from '../../../assets/img/encabezado.png'

export default function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#FCFCFC]">
        <div className="mb-5">
            <img src={KYP} alt="" className="w-[200px]"/>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-4xl text-center font-bold">Iniciar Sesión</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@kypbioingenieria.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full border-[] hover:bg-[">Acceder</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

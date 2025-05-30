import { info } from "../../../info";

export default function Footer() {
  return (
    <footer className="relative mb-0  border-t">
      <div className="bg-gray-200 py-6">
        <div className="container max-w-[1120px] px-[30px] row bg-red-500 py-2 justify-between ">
          <div className="flex flex-row gap-3 max-w-[50%] items-center">
            <p className="text-center ft-0 m-0">
              {info.companyName} ©{" "}
              {new Date().getFullYear()}
            </p>
            <p>Privacidad</p>
            <p>Terminos</p>
            <p>Mapa del Sitio</p>
            <p>Informacion de la campaña</p>
          </div>
          <div className="max-w-[50%] flex flex-row gap-3 items-center">
            <p>Espanol(MX)</p>
            <p>$ MXN</p>
            <p>Facebook</p>
            <p>X</p>
            <p>instagram</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

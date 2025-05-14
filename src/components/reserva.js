import React from 'react';
import Image from 'next/image';

const Reserva = ({ llegada, salida, huespedes }) => {
  return (
    <>
      <div className="max-w-[1390px] mx-auto mt-10 px-[30px] w-full relative">
        <div className="w-full flex flex-wrap sm:flex-nowrap flex-row justify-between items-center rounded-lg h-auto sm:h-[70px] overflow-hidden">
          
          {/* Campo LLEGADA */}
          <div className="flex-1 text-center bg-white p-4 text-xl font-bold h-full border-l border-t border-b rounded-l-full">
            LLEGADA
            <div>{llegada}</div>
          </div>

          {/* Campo SALIDA */}
          <div className="flex-1 text-center bg-white p-4 text-xl font-bold h-full border">
            SALIDA
            <div>{salida}</div>
          </div>

          {/* Campo HUESPEDES */}
          <div className="flex-1 text-center bg-white p-4 text-xl font-bold h-full border-t border-b border-r rounded-r-full">
            HUESPEDES
            <div>{`${huespedes} huespedes`}</div>
          </div>

          {/* Botón RESERVAR - Responsive */}
          <div className="w-full sm:w-auto sm:flex-1 mt-4 sm:mt-0 mx-4">
            <div className="bg-red-500 text-white p-4 sm:p-6 text-center rounded-full font-bold hover:cursor-pointer w-full">
              RESERVAR
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Reserva;
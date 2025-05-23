import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Si lo usas
import Image from 'next/image';

const Reserva = ({ llegada, salida, huespedes }) => {
  // Estado para las fechas seleccionadas
  const [startDate, setStartDate] = useState(llegada ? new Date(llegada) : null);
  const [endDate, setEndDate] = useState(salida ? new Date(salida) : null);

  // Estado para los huéspedes (cambiado de `huespedes` a `huespedesCount`)
  const [huespedesCount, setHuespedes] = useState(huespedes || 1);

  // Manejadores de cambio de fecha
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Actualiza el estado local si las props cambian
  useEffect(() => {
    setStartDate(llegada ? new Date(llegada) : null);
    setEndDate(salida ? new Date(salida) : null);
  }, [llegada, salida]);

  return (
    <>
      <div className="max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative">
        <div className="w-full flex flex-wrap sm:flex-nowrap flex-row justify-between items-center h-auto sm:h-[70px]">
          <div className="w-full sm:w-auto sm:flex-1 mt-4 sm:mt-0 mx-4 text-xl font-bold text-center">
            Reserva tu habitación en segundos Fácil, rápido y sin complicaciones.
          </div>
          <div className='w-full md:w-[70%] flex flex-wrap sm:flex-nowrap flex-row justify-between items-center h-auto sm:h-[60px] shadow border rounded-full'>
            {/* Campo LLEGADA */}
            <div className="flex-1 text-center p-4 text-xl font-bold h-full relative flex flex-col justify-center items-center">
              LLEGADA
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                customInput={
                  <div className="cursor-pointer">
                    {startDate ? startDate.toLocaleDateString('es-ES') : llegada}
                  </div>
                }
                dateFormat="YYYY/MM/DD"
                minDate={new Date()}
                calendarClassName="custom-calendar-reserva"
              />
            </div>

            {/* Campo SALIDA */}
            <div className="flex-1 text-center bg-white p-4 text-xl font-bold h-full border-x relative flex flex-col justify-center items-center">
              SALIDA
              <DatePicker
                selected={endDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                customInput={
                  <div className="cursor-pointer">
                    {endDate ? endDate.toLocaleDateString('es-ES') : salida}
                  </div>
                }
                dateFormat="YYYY/MM/DD"
                minDate={startDate || new Date()}
                calendarClassName="custom-calendar-reserva"
              />
            </div>

            {/* Campo HUESPEDES */}
            <div className="flex-1 text-center p-2 text-xl font-bold h-full relative flex flex-col justify-center items-center">
              HUESPEDES
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setHuespedes(Math.max(1, huespedesCount - 1))}
                  className="bg-gray-200 py-0 px-2 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={huespedesCount}
                  onChange={(e) => setHuespedes(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="text-center p-0 border-none"
                />
                <button
                  onClick={() => setHuespedes(Math.min(10, huespedesCount + 1))}
                  className="bg-gray-200 py-0 px-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Botón RESERVAR */}
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
import React from 'react'
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const Salle = () => {

const patients = [
    {sexe:"f", numero: "9", nom: "Hmaid (Démo) Latifa", dateNai: "16/09/1979", status: "En consultation", arrive: "15:43", consulta: "15:43", terminer: "", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"f", numero: "8", nom: "Afida (Démo) Samira", dateNai: "22/05/1984", status: "Terminé", arrive: "12:42", consulta: "15:23", terminer: "15:40", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"f", numero: "7", nom: "Ikram (Démo) Meriem", dateNai: "31/08/1983", status: "Terminé", arrive: "12:41", consulta: "14:57", terminer: "15:26", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"m", numero: "6", nom: "Saad (Démo) Mourad", dateNai: "02/01/1987", status: "Terminé", arrive: "12:40", consulta: "14:16", terminer: "14:57", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"f", numero: "5", nom: "Kateb (Démo) Souhila", dateNai: "30/12/1980", status: "Terminé", arrive: "12:39", consulta: "14:10", terminer: "14:40", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"m",numero: "4", nom: "Korbib (Démo) Lamia", dateNai: "14/11/1982", status: "Terminé", arrive: "13:00", consulta: "13:30", terminer: "14:00", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"f", numero: "3", nom: "Tahar (Démo) Selma", dateNai: "20/06/1975", status: "Terminé", arrive: "13:10", consulta: "13:15", terminer: "13:45", assure: true, doctor: "Dr. Slimani S." },
    { sexe:"m",numero: "2", nom: "Mokhtar (Démo) Amine", dateNai: "26/10/1984", status: "Terminé", arrive: "13:09", consulta: "13:10", terminer: "13:16", assure: true, doctor: "Dr. Slimani S." },
    {sexe:"m", numero: "1", nom: "Sultan (Démo) Taki", dateNai: "10/12/1986", status: "Terminé", arrive: "12:38", consulta: "13:00", terminer: "13:30", assure: false, doctor: "Dr. Slimani S." }
];

  return (
    <div className="text-xs">
            <table className="min-w-full border border-gray-300 ">
                <thead className="text-xs">
                    <tr>
                        <th className="px-2 py-1 border-b border-r border-gray-300"></th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Numéro</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Nom complet</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Né le</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Statut</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Arrivé à</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Consulté à</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Terminé à</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Motif</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Assuré</th>
                        <th className="px-2 py-1 border-b border-r border-gray-300">Doctor Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={index} className="cursor-pointer hover:bg-slate-200">
                                  <td className={`px-2 py-1 border-b border-gray-300 text-center ${patient.sexe==="f"?"text-rose-600":"text-sky-600"}`}>{patient.sexe==="f"?<FaUser/>:<FaUser/>}</td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">{patient.numero}</td>
                       
                            <td className="px-2 py-1 border-b border-gray-300">{patient.nom}</td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">{patient.dateNai}</td>
                            <td className={`px-2 py-1 border-b border-gray-300 text-center `}>
                             <p className="flex items-center gap-2 ">   {patient.status === 'En consultation' ? <PiClockCounterClockwiseBold className="text-blue-600"/> : <FaCheckCircle className="text-green-600 "/>}
                              {patient.status}</p>
                            </td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">{patient.arrive}</td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">{patient.consulta}</td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">{patient.terminer}</td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">{patient.motif || "-"}</td>
                            <td className="px-2 py-1 border-b border-gray-300 text-center">
                                <input type="checkbox" checked={patient.assure} readOnly className="h-4 w-4 text-blue-600"/>
                            </td>
                            <td className="px-2 py-1 border-b border-gray-300">{patient.doctor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Salle
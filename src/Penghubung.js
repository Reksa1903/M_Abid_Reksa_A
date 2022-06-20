/* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'
import babakan from './Asset/babakan.jpg'
import almukmin from './Asset/Al-mukmin.jpg'
import ustarifin from './Asset/Ust Arifin.jpg'
import ustabdul from './Asset/ust Abdul.jpg'
import ustmaulana from './Asset/ust maulana.jpg'
import ustadi from './Asset/ust adi.jpg'
import Footer from './Footer'


{/* Jendral Soedirman */}
const people = [
  {
  Nama: 'Ustadz Arifin',
  Nomor_Telp: '0867-6453-2497',
  email: 'Ustadz Muhammad Arif Ilham',
  image: ustarifin,
  asal: "Kota Banjarmasin",
  href: "Ustadzarifin"
  },
  {
    Nama: 'Ustadz Abdul Somad',
    Nomor_Telp: '0876-5674-3456',
    email: 'Ustadz Abdul Somad',
    image: ustabdul,
    asal: "Kota Batubara",
    href: "#"
    },
  {
    Nama: 'Ustadz Muhammad Nur Maulana',
    Nomor_Telp: '0845-3732-4578',
    email: 'Ustadz Muhammad Nur Maulana',
    image: ustmaulana,
    asal: "Kota Sulawesi Selatan",
    href: "#"
    },
  {
    Nama: 'Ustadz Adi Hidayat ',
    Nomor_Telp: '0878-1234-5674',
    email: 'Ustadz Adi Hidayat',
    image: ustadi,
    asal: "Kota Pandeglang",
    href: "#"
    },
 ]


 function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>

<Navbar />


    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Silahkan Hubungi Penghubung</h1>
      </div>
    </header>

    <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div> */}
            {/* /End replace */}

            {/* About Me */}
            

            <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nomor Telp
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Kota Kelahiran
                  </th>
                  
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                       Kabupaten Purbalingga
                      </span>
                    </td> */}
                     <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ">{person.asal}</div>
                      
                    </td>
                    <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500 "></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                       <a href={person.href} className="text-indigo-600 hover:text-indigo-900">
                       Baca
                      </a>
                    </td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

          </div>
        </main>

 

      <Footer />
    </>
  )
}

/* This example requires Tailwind CSS v2.0+ */
import Navbar from '../Navbar'
import Footer from '../Footer'
import punyalirboyo1 from '../Asset/punyalirboyo1.JPG'
import punyalirboyo2 from '../Asset/punyalirboyo2.jpg'
import punyalirboyo3 from '../Asset/punyalirboyo3.jpg'
import punyalirboyo4 from '../Asset/punyalirboyo4.jpg'

const features = [
  { name: 'Berdiri Sejarah', description: 'Didirikan pada tahun 1910 M.' },
  { name: 'Pendiri', description: 'Didirikan oleh  KH. Abdul Karim ' },
  { name: 'Lokasi', description: 'Kota Kediri, Jawa Timur' },
  { name: 'Luas Bangunan', description: 'Luas kompleks wilayah pesantren sekitar 7 hektare.' },
  { name: 'Fasilitas', description: 'kamar tidur, kamar mandi, Sekolah MI, Sekolah MTS, Sekolah MA, lapangan bola' },
  { name: 'Jumlah Santri', description: 'diperkirakan jumlah santri putra dan putri untuk sekarang adalah ± 25.000.' },
  ]
  
  export default function Example() {
    return (
        <>
        <Navbar />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Pondok Pesantren Lirboyo</h2>
            <p className="mt-4 text-black">
              Pondok Pesantren Lirboyo didirikan oleh KH. Abdul Karim yang pada mulanya bertempat tinggal di Desa Lirboyo pada tahun 1910 M. Sebelum menetap di Desa Lirboyo, beliau mengajar di Pondok Pesantren Tebuireng asuhan KH. Hasyim Asy'ari yang juga menjadi teman sebaya ketika berguru di Syaikhona Kholil Bangkalan.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={punyalirboyo1}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={punyalirboyo2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={punyalirboyo3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={punyalirboyo4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
        <div class="flex space-x-2 justify-center">
          <a href='Pantau'>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
          Kembali
          </button>
          </a>
        </div>
      </div>
      <br />
      <Footer />
      </>
    )
  }
  
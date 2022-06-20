/* This example requires Tailwind CSS v2.0+ */
import Navbar from '../Navbar'
import Footer from '../Footer'
import punyatebuireng1 from '../Asset/punyatebuireng1.jpg'
import punyatebuireng2 from '../Asset/punyatebuireng2.jpg'
import punyatebuireng3 from '../Asset/punyatebuireng3.jpg'
import punyatebuireng4 from '../Asset/punyatebuireng4.jpg'

const features = [
  { name: 'Berdiri Sejarah', description: 'Didirikan pada tahun 1899 M.' },
  { name: 'Pendiri', description: 'Didirikan oleh K.H. Hasyim Asyari. ' },
  { name: 'Lokasi', description: 'Kecamatan Diwek, Kabupaten Jombang, Jawa Timur.' },
  { name: 'Luas Bangunan', description: 'Luas kompleks wilayah pesantren sekitar 7 hektare.' },
  { name: 'Fasilitas', description: 'kamar tidur, kamar mandi, Sekolah MI, Sekolah MTS, Sekolah MA, lapangan bola' },
  { name: 'Jumlah Santri', description: 'diperkirakan jumlah santri putra dan putri untuk sekarang adalah ± 4.000.' },
]
  
  export default function Example() {
    return (
        <>
        <Navbar />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Pondok Pesantren Tebu Ireng</h2>
            <p className="mt-4 text-gray-500">
              Sejarah. Pondok Pesantren Tebuireng didirikan oleh K.H. Hasyim Asy'ari pada tahun 1899 M. Pesantren ini didirikan setelah ia pulang dari pengembaraannya menuntut ilmu di berbagai lembaga pendidikan terkemuka dan di tanah Mekkah, untuk mengamalkan ilmu yang telah diperolehnya.
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
              src={punyatebuireng1}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={punyatebuireng2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={punyatebuireng3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={punyatebuireng4}
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
  
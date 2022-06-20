/* This example requires Tailwind CSS v2.0+ */
import Navbar from './Navbar'
import Fitur from './Fitur'
import pondok from './Asset/pondok.jpg'
import Footer from './Footer'

export default function Example() {
    return (
        <>
        <Navbar/>
        {/* Header Main */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Home</h1>
          </div>
        </header>
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-black sm:text-6xl">
                AYO MONDOK!!!
              </h1>
              <p className="mt-4 text-xl text-black">
                Mari bangun Bangsa Indonesia dengan santri, karena santri adalah manusia pilihan yang dekat dan menebar cinta kepada semua manusia, SANTRI KUAT INDONESIA HEBAT!
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-150 h-150 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src={pondok}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="Pantau"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Pantau Pondok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fitur/>
      <Footer/>
      </>
    )
  }
  
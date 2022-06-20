/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar'
import Footer from './Footer'
import punyagontor3 from './Asset/punyagontor3.jpg'
import punyatebuireng2 from './Asset/punyatebuireng2.jpg'
import Langitan1 from './Asset/langitan1.jpg'
import babakan from './Asset/babakan.jpg'
import almukmin from './Asset/Al-mukmin.jpg'
import alhidayah from './Asset/Al-hidayah.jpg'
import alhidayah1 from './Asset/al-hidayah1.jpg'
import sidogiri from './Asset/sidogiri.jpg'
  
  export default function Example() {
    return (
      <>
      <div className="bg-gray-100">
          <Navbar/>
           {/* Header Main */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Pantau Pondok</h1>
          </div>
        </header>
      </div>
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none -mb-24"> 

            {/* Gontor */}
          <div class=" flex space-x-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm flex-initial">
            <a href="#!">
            <img class="rounded-t-lg" src={punyagontor3} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Gontor</h5>
            <p class="text-gray-700 text-base mb-4">
             Pantau semua tentang Pondok Pesantren Gontor, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <a href='Forgontor'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            
            {/* Lirboyo */}
            <div class="flex-initial">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
            <img class="rounded-t-lg" src="https://drive.google.com/uc?export=view&id=1hTloVWQNPiAHPaIlsPrCmF1jvawtDwTY" alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantern Lirboyo</h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Lirboyo, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <a href='Forlirboyo'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            </div>
            
            {/* Tebu Ireng */}
            <div class="flex-initial">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
            <img class="rounded-t-lg" src={punyatebuireng2} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Tebu Ireng</h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Tebu Ireng, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <br />
            <a href='Fortebuireng'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            </div>
          </div>

          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none"> 

            {/* AL-Ihya*/}
          <div class=" flex space-x-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm flex-initial">
            <a href="#!">
            <img class="rounded-t-lg" src="https://drive.google.com/uc?export=view&id=1a6O9bFnuhDBhi7OdaQk6AgC19xpaY04Z" alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Al-Ihya Ulumuddin </h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Al-Ihya Ulumuddin, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <a href='Foralihya'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            
            {/* Langitan */}
            <div class="flex-initial">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
            <img class="rounded-t-lg" src={Langitan1} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Langitan</h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Langitan, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <a href='#'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            </div>
            
            {/* Babakan */}
            <div class="flex-initial">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
            <img class="rounded-t-lg" src={babakan} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Babakan</h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Babakan, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <a href='#'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            </div>
          </div>

          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none"> 

            {/* Al-Mukmin*/}
          <div class=" flex space-x-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm flex-initial">
            <a href="#!">
            <img class="rounded-t-lg" src={almukmin} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Al-Mukmin </h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Al-Mukmin, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <br />
            <a href='Foralihya'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            
            {/* Al-Hidayah */}
            <div class="flex-initial">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
            <img class="rounded-t-lg" src={alhidayah1} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Al-Hidayah</h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Al-Hidayah, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <br />
            <a href='#'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            </div>
            
            {/* Sidogiri */}
            <div class="flex-initial">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
            <img class="rounded-t-lg" src={sidogiri} alt=""/>
            </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pondok Pesantren Sidogiri</h5>
            <p class="text-gray-700 text-base mb-4">
            Pantau semua tentang Pondok Pesantren Sidogiri, silahkan perhatikan setiap detail tentang semua fasilitas pondok.
            </p>
            <br />
            <a href='#'>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </a>
            </div>
            </div>
            </div>
          </div>

          </div>
      </div>

      <Footer/>
      </>
    )
  }
  
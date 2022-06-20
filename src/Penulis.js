import Navbar from './Navbar'
import Footer from './Footer'
/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <>
    <Navbar/>

    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Penulis</h1>
      </div>
    </header> 
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Informasi Aplikasi</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal detai dan Aplikasi.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nama Lengkap</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">M. Abid Reksa Abhista</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Guna Aplikasi</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Pantau Pondok anda dan pastikan semuanya</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Alamat Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">masabidreksa@gmail.com</dd>
          </div>
          
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Tentang</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Web AYO MONDOK adalah web yang disiapkan untuk anda para calon santri untuk memantau suatu pondok Pesantren tanpa harus datang ke Pondok Pesantren tersebut, mulai dari sejarah, tempat, fasilitas, hingga jumlah santri pondok pesantren dapat anda pantau secara langsung seperti yang ada pada lapangan.
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <Footer/>
    </>
  )
}
    

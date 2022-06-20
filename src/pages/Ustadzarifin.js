import Navbar from '../Navbar'
import ustarifin from '../Asset/Ust Arifin.jpg'

export default function Example() {
    return (
      <>
        
        <Navbar/>

        <header className='bg-white shadow'>
            <div className='max-w-7xl mx-auto py-6 0x-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Artikel</h1>
            </div>
        </header>
        <main>
            <div className='max-w-7xl mx-auto -mb-5 py-6 sm:px-6 lg:px-8'>
                {/*berganti dengan komentr*/}
                <div className='px-4 py-6 sm:px-0'>
                    <div className='border-4 border-solid border-gray-200 rounded-lg
                    h-auto text-justify p-5'>
                        <div className='flex flex-col'>
                            {/* Artikel*/}
                            <p className='text-center mb-3 font-bold text-2xl'>
                            Tentang Ustadz Muhammad Arifin Ilham
                            </p>
                            <div>
                                <img src={ustarifin}
                                className='p-5 -mb-5'
                                width="1100px"
                                height="700px"
                                />
                                <br/>
                                <span className='p-10'>
                                Arifin Ilham adalah anak kedua dari lima bersaudara, dan dia satu-satunya anak lelaki. Ayah Arifin masih keturunan ketujuh Syekh Muhammad Arsyad al-Banjari, ulama besar di Kalimantan, sementara ibunya, Hj. Nurhayati, kelahiran Haruyan, Kabupaten Hulu Sungai Tengah.
                                <br/>

                                </span>
                                <p> Berikut adalah video lebih tentang Ustadz Muhammad Arifin Ilham</p>
                                <br/>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6EK4nz-IKOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* Judul  */}

        </>  
    )
}      
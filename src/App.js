import './App.css';
import logo from './assets/Logo.png';
import email from './assets/email.png';
import lokasi from './assets/lokasi.png';
import wa from './assets/wa.png';
import ig from './assets/ig.png';
import youtube from './assets/youtube.png';
import logo2 from './assets/logo2.png';
import logoPhoto from './assets/Photo.png';
import logoVideo from './assets/Videos.png';
import gallery1 from './assets/Gallery1.png';
import gallery2 from './assets/Gallery2.png';
import gallery3 from './assets/Gallery3.png';
import gallery4 from './assets/Gallery4.png';
import gallery5 from './assets/Gallery5.png';
import logoLagu from './assets/LogoLagu.png';
import bghero from './assets/BgHero2.png';
import musiclogo from './assets/MusikLogo.png';
import userlogo from './assets/UserLogo.png';
import lokasilogo from './assets/LokasiLogo.png';
import heroImage from './assets/ImageHero.png';

function App() {
  return (
    <div className='h-full w-full'>
      <div className="navbar z-10 absolute overflow-hidden">
        <div className="navbar-start">
          <a className="btn btn-ghost">
            <img src={logo} className='h-10' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3">
            <li><a className='text-white text-sm hover:text-[#CB985D] font-montserrat'>Home</a></li>
            <li><a className='text-white text-sm hover:text-[#CB985D] font-montserrat'>About Me</a></li>
            <li><a className='text-white text-sm hover:text-[#CB985D] font-montserrat'>My Song</a></li>
            <li><a className='text-white text-sm hover:text-[#CB985D] font-montserrat'>Gallery</a></li>
          </ul>
        </div>
        <div className="navbar-end">

        </div>
      </div>
      <div className="z-0 hero min-h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay bg-black bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-normal font-montserrat max-sm:text-4xl">Welcome!</h1>
            <h1 className="mb-5 text-5xl font-bold font-montserrat max-sm:text-4xl">I’m <span className='text-[#CB985D]'>Yudi Prata</span></h1>
            <p className='mb-5 font-light font-montserrat'>I’m a singer and songwriter</p>
            <button className=" border-2 px-8 py-2 rounded-md font-medium font-montserrat">More</button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#161616] py-40 px-28 max-sm:py-0 max-sm:px-4">
        <div className='flex flex-row max-sm:flex-col'>
          <div className="basis-1/2 space-y-32 pt-24 pl-24 max-sm:space-y-10 max-sm:pt-10 max-sm:pl-0 max-sm:pb-10">
            <h1 className='text-5xl font-bold text-white font-montserrat max-sm:text-2xl'>
              <h1 className='text-[#CB985D]'>About</h1>
              Me
            </h1>
            <div className='flex space-x-12 max-sm:space-x-4'>
              <div className='grid justify-items-center space-y-3'>
                <div className='w-10 h-10 rounded-full bg-[#2F2E2E] flex items-center justify-center max-sm:w-5 max-sm:h-5'>
                  <img
                    className='object-cover h-5 max-sm:h-3'
                    src={musiclogo}
                  />
                </div>
                <h1 className='text-white text-md font-semibold font-montserrat'>
                  Vokalis
                </h1>
              </div>
              <div className='grid justify-items-center space-y-3'>
                <div className='w-10 h-10 rounded-full bg-[#2F2E2E] flex items-center justify-center max-sm:w-5 max-sm:h-5'>
                  <img
                    className='object-cover h-5 max-sm:h-3'
                    src={userlogo}
                  />
                </div>
                <h1 className='text-white text-md font-semibold font-montserrat'>
                  Yudi Prata
                </h1>
              </div>
              <div className='grid justify-items-center space-y-3'>
                <div className='w-10 h-10 rounded-full bg-[#2F2E2E] flex items-center justify-center max-sm:w-5 max-sm:h-5'>
                  <img
                    className='object-cover h-5 max-sm:h-3'
                    src={lokasilogo}
                  />
                </div>
                <h1 className='text-white text-md font-semibold font-montserrat'>
                  Malang
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <p className='text-white text-justify font-montserrat max-sm:pb-10 max-sm:text-left'>
              Yudi Prata atau nama lengkapnya Mika Yudi Pratama adalah seorang penyanyi dan penulis lagu asal Indonesia. Lahir di Malang, Jawa Timur pada 24 Agustus, Yudi Prata mulai dikenal publik setelah lagunya yang berjudul "Takut Mencinta" meledak di youtubenya dengan viewer lebih dari 100.000. Lagu tersebut menjadi viral dan menjadi salah satu lagu yang paling banyak didengar di Malang pada waktu itu.<br></br>
              Sebelum menjadi penyanyi profesional,Yudi Prata adalah seorang pebisnis dan pegawai swasta di daerah Malang. Dia mulai menulis lagu pada usia 25 tahun dan telah menulis banyak lagu. Yudi Prata terjun didunia musik sejak tahun 2015 dengan single pertamanya. Pada tahun 2020 fokus dan mendalami industri musik.<br></br>
              Yudi prata sering tampil di panggung-panggung besar dengan penonton puluhan ribu dan sepanggung dengan deretan penyanyi dangdut ambyar dan seniman nasional seperti Denny Caknan, Happy Asmara, Cak Percil, Cak Sodiq New Monata, Ndarboy Genk, Mr. Jono Joni, Yeni Inka, Syahiba Saufa, Woro Widyowati, Sasya Arkhisna.
            </p>
          </div>
        </div>
      </div>
      <div className='z-10 absolute flex flex-col items-center min-w-full max-sm:items-start'>
        <h1 className='font-bold font-montserrat text-white text-2xl py-4 max-sm:text-base max-sm:font-medium max-sm:border-0 max-sm:py-0 max-sm:self-center'>
          My Song
        </h1>
        <div className='flex flex-row space-x-6 max-sm:pt-0 max-sm:place-items-center max-sm:grid max-sm:space-x-52'>
          <div className='basis-1/2 max-sm:basis-0'>
            <div className='w-72 h-96 bg-white rounded-md max-sm:w-0 max-sm:h-0 max-sm:self-start'>
              <div className='grid place-items-center py-5'>
                <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                  <img
                    src={logoLagu}
                  />
                </div>
                <h1 className='font-semibold font-montserrat text-xl max-sm:text-white'>Lagu Pop</h1>
                <div className='pt-4 max-sm:hidden'>
                  <ul className="list-disc">
                    <li>Biarkan Misteri</li>
                    <li>Everylasting Days</li>
                    <li>Kembalikan Ku Putih</li>
                    <li>Ayo Gol</li>
                    <li>Kembali ke Masa Silam</li>
                    <li>Perih</li>
                    <li>Resepmu Manjur</li>
                    <li>Seandainya Kau mengerti</li>
                    <li>Sepanjang Tua</li>
                    <li>Setangkai Melati Putih</li>
                    <li>Takut Mencinta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='basis-1/2 max-sm:basis-0'>
            <div className='w-72 h-96 bg-white rounded-md max-sm:w-0 max-sm:h-0'>
              <div className='grid place-items-center py-5'>
                <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                  <img
                    src={logoLagu}
                  />
                </div>
                <h1 className='font-semibold font-montserrat text-xl max-sm:text-white'>Lagu Koplo</h1>
                <div className='pt-4 max-sm:hidden'>
                  <ul className="list-disc">
                    <li>Karepmui</li>
                    <li>Katresnan</li>
                    <li>Ndang di Golno</li>
                    <li>Ngopine Kurang Adoh</li>
                    <li>Orang Mergo Nerimo</li>
                    <li>Sak Celupan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='z-0'>
        <img
          src={bghero}
        />
      </div>
      <div className=' min-h-screen bg-[#161616] flex flex-col items-center max-sm:min-h-min'>
        <h1 className='text-[#CB985D] text-3xl font-bold font-montserrat pt-16 pb-20 max-sm:text-2xl max-sm:pt-6 max-sm:pb-10'>Gallery</h1>
        <div className='flex self-start px-40 space-x-3 max-sm:px-6'>
          <img
            className=' object-contain'
            src={logoPhoto}
          />
          <h1 className='text-white text-xl font-montserrat font-normal max-sm:text-base'>Photos</h1>
        </div>
        <div className='py-20 max-sm:py-0 max-sm:pt-10 max-sm:pb-5'>
          <div className="grid gap-4 grid-cols-1">
            <div>
              <img
                src={gallery1}
              />
            </div>
            <div className='grid gap-20 grid-cols-3'>
              <div>
                <img
                  src={gallery2}
                />
              </div>
              <div>
                <img
                  src={gallery3}
                />
              </div>
              <div>
                <img
                  src={gallery4}
                />
              </div>
            </div>
            <div className='grid gap-4 grid-cols-1'>
              <div>
                <img
                  src={gallery5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-screen bg-[#0F0F0F] flex flex-col items-center'>
        <div className='flex self-start px-40 space-x-3 py-16 max-sm:px-6'>
          <img
            className=' object-contain'
            src={logoVideo}
          />
          <h1 className='text-white text-xl font-montserrat font-normal max-sm:text-base'>Videos</h1>
        </div>
        <div className='grid gap-1 grid-cols-3 pb-10 max-sm:grid-cols-1'>
          <div>
            <iframe
              src='https://www.youtube.com/embed/aSvPjjuCmmY'
              width="328.33px"
              height="180px">
            </iframe>
          </div>
          <div>
            <iframe src='https://www.youtube.com/embed/oiJsC4jMjHI' width="328.33px" height="180px">

            </iframe>
          </div>
          <div>
            <iframe src='https://www.youtube.com/embed/rZqxgPO5EWc' width="328.33px" height="180px">

            </iframe>
          </div>
          <div>
            <iframe src='https://www.youtube.com/embed/OvyiEQn_4wU' width="328.33px" height="180px">

            </iframe>
          </div>
          <div>
            <iframe src='https://www.youtube.com/embed/ea3fEegrnoA' width="328.33px" height="180px">

            </iframe>
          </div>
          <div>
            <iframe src='https://www.youtube.com/embed/OV-u-8R1prg' width="328.33px" height="180px">

            </iframe>
          </div>
        </div>
      </div>
      <footer className="footer items-center py-10 px-10 bg-[#161616] text-white">
        <div>
          <p className=' font-montserrat text-[#CB985D]'>
            Powered By :
          </p>
          <div className='flex space-x-3'>
            <div>
              <img
                src={logo}
                width={60}
              />
            </div>
            <div>
              <img
                src={logo2}
                width={36}
              />
            </div>
          </div>
        </div>
        <div>
          <div className='relative left-64 max-md:static'>
            <div className="grid gap-4 grid-cols-2 md:place-self-center md:justify-self-end max-sm:gap-x-20">
              <div className='flex items-center space-x-4 max-sm:space-x-2 max-sm:text-xs'>
                <img
                  src={email}
                  width={30}
                />
                <a href='mailto:Oyonternanto@gmail.com'>
                  Oyonternanto@gmail.com
                </a>
              </div>
              <div className='flex items-center space-x-4 max-sm:space-x-2 max-sm:text-xs'>
                <img
                  src={youtube}
                  width={30}
                />
                <a href='https://www.youtube.com/@yudiprata'>
                  yudiprata
                </a>
              </div>
              <div className='flex items-center space-x-4 max-sm:space-x-2 max-sm:text-xs'>
                <img
                  src={lokasi}
                  width={30}
                />
                <p className="font-montserrat">Kota Malang</p>
              </div>
              <div className='flex items-center space-x-4 max-sm:space-x-2 max-sm:text-xs'>
                <img
                  src={ig}
                  width={30}
                />
                <a href='https://www.instagram.com/yudiprata_/'>
                  yudiprata
                </a>
              </div>
              <div className='flex items-center space-x-4 max-sm:space-x-2 max-sm:text-xs'>
                <img
                  src={wa}
                  width={30}
                />
                <a href='https://wa.link/g9pbf8'>
                  6285646877774
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

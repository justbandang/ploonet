import Image from 'next/image';

const Works = () => {
  
  const imageData = [
    { 
        src: '/01.png', 
        alt: 'Deskripsi Gambar 1', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 1' 
      },
      { 
        src: '/02.png', 
        alt: 'Deskripsi Gambar 2', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 2' 
      },
      { 
        src: '/03.png', 
        alt: 'Deskripsi Gambar 3', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 3' 
      },
      { 
        src: '/04.png', 
        alt: 'Deskripsi Gambar 4', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 4' 
      },
      { 
        src: '/05.png', 
        alt: 'Deskripsi Gambar 5', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 5' 
      },
      { 
        src: '/06.png', 
        alt: 'Deskripsi Gambar 6', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 6' 
      },
      { 
        src: '/07.png', 
        alt: 'Deskripsi Gambar 7', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 7' 
      },
      { 
        src: '/08.png', 
        alt: 'Deskripsi Gambar 8', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 8' 
      },
      { 
        src: '/08.png', 
        alt: 'Deskripsi Gambar 9', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 9' 
      },
      { 
        src: '/10.png', 
        alt: 'Deskripsi Gambar 10', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 10' 
      },
      { 
        src: '/11.png', 
        alt: 'Deskripsi Gambar 11', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 11' 
      },
      { 
        src: '/12.png', 
        alt: 'Deskripsi Gambar 12', 
        title: 'AI Pick', 
        description: 'Lorem ipsum dolor sit amet 12' 
      },
  ];

  return (
    <ul className="grid md:grid-cols-4 grid-cols-2 gap-0 mt-14">
      {imageData.map((image, index) => (
        <li key={index} className='relative'>
        <div className='w-full h-full absolute flex items-center text-center justify-center flex-col top-0 left-0 md:px-9 bg-black bg-opacity-0 z-10 transition duration-500 hover:bg-opacity-60 opacity-0 hover:opacity-100'>
            <span className='text-2xl font-bold'>{image.title}</span>
            <span className='text-base font-bold'>{image.description}</span>
        </div>
          <Image
            src={image.src} 
            alt={image.alt} 
            className="object-cover md:h-auto"
            width={480} 
            height={270.13} 
          />
        </li>
      ))}
    </ul>
  );
};

export default Works;

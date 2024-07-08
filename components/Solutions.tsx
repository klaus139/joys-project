import Image from 'next/image';

const Solutions = () => {
  const solutions = [
    { backgroundImage: '/transportation.jpg', title: 'Transportation' },
    { backgroundImage: '/energy.jpg', title: 'Energy' },
    { backgroundImage: '/traffic.png', title: 'Traffic' },
    { backgroundImage: '/banking.png', title: 'Banking & Finance' },
    { backgroundImage: '/buiding.jpg', title: 'Building' },
    { backgroundImage: '/retail.jpg', title: 'Retail' },
  ];

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-1">
      <div>
        <h1 className="text-center text-4xl font-bold mb-6">Solutions</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="relative h-60">
            <Image src={solution.backgroundImage} alt={solution.title} layout="fill" objectFit="object-cover" />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
              <h4 className="text-white">{solution.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

import '../css/blog.css';
import Img1 from '../../../assets/image11.png';
import Img2 from '../../../assets/image10.png';
import Img3 from '../../../assets/image9.png';

const Blog = () => {
  const dataBlog = [
    {
      img: Img1,
      title: 'Lava bien tus manos para prevenir enfermedades',
      description: 'La higiene es vital para evitar que se propaguen los virus y es importante asumirla como una conducta social, cívica y de salud pública pues es una forma de protegernos entre todos”. Así lo explica César Augusto López, médico epidemiólogo de SURA, con quien hablamos para compartirte algunas medidas de prevención de enfermedades.'
    },
    {
      img: Img2,
      title: 'Importancia de una alimentación balanceada',
      description: 'Una dieta equilibrada ayuda a mantener una buena salud y a prevenir enfermedades. Incluye una variedad de alimentos ricos en nutrientes esenciales para el bienestar del cuerpo.'
    },
    {
      img: Img3,
      title: 'Ejercicio físico y salud mental',
      description: 'El ejercicio regular no solo mejora la salud física, sino también la mental. Ayuda a reducir el estrés, mejorar el estado de ánimo y aumentar la energía.'
    }
  ];

  return (
    <>
      <div id='blog' className="containerBlog">
        <h1>Contenido para tu Bienestar</h1>
        <section className="listcardBlog">
          {dataBlog.map((item, index) => (
            <div key={index} className="itemcardblog">
              <img src={item.img} alt="img" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
          <span className='separator'></span>
        </section>
      </div>
    </>
  );
};

export default Blog;

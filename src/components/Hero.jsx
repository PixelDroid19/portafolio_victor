import { TypeAnimation } from 'react-type-animation'
import { styles } from '../styles'
import Victor from '../assets/Victor.png'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 place-content-between`}
      >
        {/*   <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-sm bg-[#e3e1e1]' />
          <div className='w-1 sm:h-80 h-40 bg-[#e3e1e1]' />
        </div> */}

        <div>
          <TypeAnimation
            sequence={[
              "Hi, I'm Victor",
              3000,
              () => {
                console.log('Sequence completed')
              }
            ]}
            wrapper='span'
            repeat={Infinity}
            style={{
              fontSize: '4em',
              fontWeight: 800,
              display: 'inline-block'
            }}
          />

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web, user <br className='sm:block hidden' />
            my game favorite is minecraft
          </p>
        </div>

        {/*Separato */}
        <div>
          <img
            class='h-auto max-w-lg transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0'
            src={Victor}
            alt='image description'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

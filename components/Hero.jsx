import SplitText from '../src/blocks/TextAnimations/SplitText/SplitText'
import GradientText from '../src/blocks/TextAnimations/GradientText/GradientText'
import DecryptedText from '../src/blocks/TextAnimations/DecryptedText/DecryptedText'
import MagnetLines from '../src/blocks/Animations/MagnetLines/MagnetLines';
import SplashCursor from '../src/blocks/Animations/SplashCursor/SplashCursor';
import StarBorder from '../src/blocks/Animations/StarBorder/StarBorder';
import RotatingText from '../src/blocks/TextAnimations/RotatingText/RotatingText';






const Hero = () => {


  return (
    <>
    <div className="flex flex-col gap-6 mt-10 items-center justify-center text-white">
  

          <SplitText
            text="Welcome to my Website"
            className="text-6xl font-bold tracking-tight p-1"
            delay={75}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={1}
            rootMargin="-50px"
            />
        <DecryptedText
        className="text-2xl font-medium text-slate-200"
        encryptedClassName='text-2xl font-medium text-slate-600'
        text="Fullstack Developer in Progress"
        speed={40}
        maxIterations={100}
        characters="ABCD1234!?"
        revealDirection="start"
        animateOn='view'
        sequential={true}
        />

        <p className="text-lg font-medium text-slate-300">Sophomore at University of Houston. Currently learning fullstack development in hopes of building impressive apps to land internships.</p>
        <StarBorder
          as="a"
          className="cursor-pointer"
          color="orange"
          speed="5s"
          href="#contact"
        >
          Connect
        </StarBorder>
      </div>
    </>
      
  


  )
}

export default Hero

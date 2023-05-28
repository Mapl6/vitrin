import { ParallaxBanner,ParallaxProvider } from 'react-scroll-parallax';
import img1 from"./assets/img/banner-background.jpg"
import img2 from"./assets/img/banner-foreground.png"
const Parallax = () => {
    return (
        <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: img1, speed: -30 },
            { image: img2, speed: -20 },
            ]}
        className="aspect-2-1">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">نگین خردورزی خطه کویر</h1>
                </div>
                </ParallaxBanner>
        </ParallaxProvider>
      );
}
export default Parallax


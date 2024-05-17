import { Separator } from "./ui/separator"
import YouTube from 'react-youtube';

export const EditedShorts = () => {
    const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1
        },
        width: '480',
        height: '270',
        className: 'rounded-xl'
        
      };
    return (
        <div className="text-center">
            <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Shorts I've edited</h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <div className="flex justify-center">
                <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                        <YouTube videoId="UwufhI352ww" opts={videoOptions}/>
                        <YouTube videoId="AqQE42VWIdE" opts={videoOptions}/>
                        <YouTube videoId="1h3WMFHqzYw" opts={videoOptions}/>
                        <YouTube videoId="Qg3Eufk1ssU" opts={videoOptions}/>
                    </div>
                </div>
        </div>
    )
}
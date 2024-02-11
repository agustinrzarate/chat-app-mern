import { Player } from '@lordicon/react';
import { Box, Card, Text } from '@radix-ui/themes';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ICON from '../../assets/icons/wired-gradient-981-consultation.json';

function Login() {
  const playerRef = useRef<Player>(null);
  const onPlay = () => {
    playerRef.current?.playFromBeginning();
  };
  useEffect(() => {
    onPlay();
  }, []);

  return (
    <Box className=" h-screen  bg-slate-100 grid content-center">
      <div className="text-center my-8 md:hidden">
        <Text as="span" className=" lg:text-2xl text-xl text-center">
          Welcome to
        </Text>
        <Text
          as="span"
          className="ml-2 lg:text-2xl text-xl font-bold bg-gradient-to-r from-indigo-500 to-blue-400 inline-block text-transparent bg-clip-text"
        >
          MERNCHAT
        </Text>
      </div>
      <Card className="bg-white min-w-72 md:w-3/4 h-[500px] mx-auto py-4 px-4">
        <div className="flex h-full">
          <div className="flex-1 flex items-center justify-center  ">
            <div className="w-full max-w-[520px] px-10">
              <Outlet />
            </div>
          </div>
          <div
            className="flex-1 hidden bg-indigo-600 rounded-md md:flex items-center justify-center"
            onMouseOver={onPlay}
            onFocus={onPlay}
          >
            <div>
              <div className="mx-3">
                <Text as="span" className="text-white lg:text-2xl text-xl text-center">
                  Welcome to
                </Text>
                <Text
                  as="span"
                  className="ml-2 lg:text-2xl text-xl font-bold bg-gradient-to-r from-orange-300 to-yellow-200 inline-block text-transparent bg-clip-text"
                >
                  MERNCHAT
                </Text>
              </div>
              <div className="flex justify-center">
                <Player ref={playerRef} size={240} icon={ICON} colorize="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
}

export default Login;

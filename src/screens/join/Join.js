import { Box } from "@chakra-ui/react";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// import components
import NavbarSpacer from "../../components/Navbar/NavbarSpacer";
import Landing from "../../components/Join/Landing";
import CandidateInfo from "./CandidateInfo";
import Contact from "./Contact";

export default function Join() {
  return (
    <Box height="100%" marginTop={-150}>
      <ParticlesBg />
      <Box width="100%" zIndex={10} height="95vh">
        <Box px={{ base: 5, lg: 20, xl: 40 }} pt={3}>
          <NavbarSpacer />

          <Landing />
        </Box>
      </Box>

      {/* about section */}
      <Box px={{ base: 5, lg: 10, xl: 40 }} py={20}>
        <CandidateInfo />
      </Box>

      {/* contact the cms section */}
      <Box px={{ base: 5, lg: 10, xl: 40 }} py={20}>
        <Contact />
      </Box>
    </Box>
  );
}

function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#def3ff", "#8cd7ff", "#ffe38f", "#800909", "#f07f13"],
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          size: {
            value: { min: 1, max: 5 },
          },
          move: {
            enable: true,
            speed: 6,
            random: false,
          },
        },
        background: {
          image: "radial-gradient(#022132, #000)",
        },
      }}
    />
  );
}

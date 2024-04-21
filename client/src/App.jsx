import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'; // Import Canvas from @react-three/fiber
import Earth from './components/Earth';
import TopSection from './components/TopSection/TopSection';

// Styled component for the container
const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <>
      {/* Container for the entire Canvas */}
      <CanvasContainer>
        {/* Component for the top section */}
        <TopSection />

        {/* Three.js Canvas component */}
        <Canvas>
          {/* Suspense is used to handle loading states */}
          <Suspense fallback={null}>
            {/* Earth component wrapped in Suspense */}
            <Earth />
            <Earth /> {/* You have two instances of Earth component */}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

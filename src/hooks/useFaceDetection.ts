import { useState, useCallback } from 'react';
import { Face } from 'react-native-camera';

export const useFaceDetection = (state = []): [any[], { facesDetected: (response: { faces: Face[] }) => void }] => {
    const [faces, setFaces] = useState(state);

    const facesDetected = useCallback((data) => {
        setFaces(data.faces);
    }, []);

    return [faces, { facesDetected }];
};

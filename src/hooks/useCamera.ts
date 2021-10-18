import { RecordOptions, TakePictureOptions } from '../interfaces';
import { useState, useRef, useMemo } from 'react';
import { initialCameraState } from '../constants';
import { stopRecording } from '../videoRecorder';
import { useAutoFocusTouch } from './useAutoFocus';
import { useCameraState, useZoom } from './misc';
import { useBarcodeDetection } from './useBarcodeDetection';
import { useFaceDetection } from './useFaceDetection';
import { useTextRecognition } from './useTextRecognition';
import { useFlash, useWhiteBalance, useAutoFocus, useToggleFacing } from './useToggle';
import { takePicture as _takePicture } from '../takePicture';
import { recordVideo as _recordVideo, stopRecording as _stopRecording } from '../videoRecorder';
import { pausePreview as _pausePreview, resumePreview as _resumePreview } from '../preview';

export const useCamera = (cameraOptions = initialCameraState) => {
    const mergedCameraOptions = {
        ...initialCameraState,
        ...cameraOptions,
    };
    const cameraRef = useRef(null);
    const [type, toggleFacing] = useToggleFacing(mergedCameraOptions.type, ['front', 'back']);
    const [flashMode, { setFlash, toggleFlash }] = useFlash(mergedCameraOptions.flashMode);
    const [whiteBalance, { setWhiteBalance, toggleWB }] = useWhiteBalance(mergedCameraOptions.whiteBalance);
    const [autoFocus, toggleAutoFocus] = useAutoFocus(mergedCameraOptions.autoFocus, ['on', 'off']);
    const [autoFocusPoint, { setAutoFocusPoint, touchToFocus }] = useAutoFocusTouch(mergedCameraOptions.autoFocusPoint);
    const [focusDepth, setFocusDepth] = useState(mergedCameraOptions.focusDepth);
    const [cameraState, { setCameraState, toggleCameraState }] = useCameraState({});
    const [textBlocks, { textRecognized }] = useTextRecognition([]);
    const [faces, { facesDetected }] = useFaceDetection([]);
    const [barcodes, { barcodeRecognized }] = useBarcodeDetection([]);
    const [ratio, setRatio] = useState(mergedCameraOptions.ratio);
    const [isRecording, setIsRecording] = useState(false);

    const [zoom, { setZoom, zoomIn, zoomOut }] = useZoom(mergedCameraOptions.zoom);

    const drawFocusRingPosition = useMemo(
        () => ({
            top: autoFocusPoint.drawRectPosition.y - 32,
            left: autoFocusPoint.drawRectPosition.x - 32,
        }),
        [autoFocusPoint],
    );

    return [
        {
            cameraRef,
            type,
            flashMode,
            whiteBalance,
            autoFocus,
            autoFocusPoint,
            zoom,
            focusDepth,
            cameraState,
            drawFocusRingPosition,
            textBlocks,
            faces,
            barcodes,
            ratio,
            isRecording,
        },
        {
            setFlash,
            setWhiteBalance,
            setZoom,
            setCameraState,
            setAutoFocusPoint,
            toggleFacing,
            toggleFlash,
            toggleWB,
            toggleAutoFocus,
            touchToFocus,
            zoomIn,
            zoomOut,
            setFocusDepth,
            toggleCameraState,
            takePicture: (options: TakePictureOptions) => _takePicture({ cameraRef }, options),
            recordVideo: (options: RecordOptions) => _recordVideo({ cameraRef }, options),
            stopRecording: () => _stopRecording(cameraRef),
            pausePreview: () => _pausePreview(cameraRef),
            isRecording,
            resumePreview: () => _resumePreview(cameraRef),
            setRatio,
            setIsRecording,
            barcodeRecognized,
            textRecognized,
            facesDetected,
        },
    ];
};

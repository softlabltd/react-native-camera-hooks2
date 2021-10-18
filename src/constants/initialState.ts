import { Dimensions } from 'react-native';
import { CameraOptions, RecordOptions } from '../interfaces';

export const initialCameraState: CameraOptions = {
    flashMode: 'on',
    zoom: 0,
    autoFocus: 'on',
    autoFocusPoint: {
        normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
        drawRectPosition: {
            x: Dimensions.get('window').width * 0.5 - 32,
            y: Dimensions.get('window').height * 0.5 - 32,
        },
    },
    focusDepth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',

    isRecording: false,
    canDetectFaces: false,
    canDetectText: false,
    canDetectBarcode: false,
    faces: [],
    textBlocks: [],
    barcodes: [],
};

export const defaultVideoRecordOptions: RecordOptions = {
    quality: '720p',
    orientation: 'auto',
    maxDuration: 5,
    mute: false,
    mirrorVideo: false,
    videoBitrate: 5000000,
};

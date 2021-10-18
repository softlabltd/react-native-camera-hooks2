import { FlashMode, AutoFocus, CameraType, WhiteBalance } from '../types';

export interface RecordResponse {
    uri: string;
    videoOrientation: number;
    deviceOrientation: number;
    isRecordingInterrupted: boolean;
    codec: string;
}

export interface RecordOptions {
    quality?: string;
    orientation?: number | string;
    maxDuration?: number;
    maxFileSize?: number;
    mute?: boolean;
    mirrorVideo?: boolean;
    path?: string;
    videoBitrate?: number;
    codec?: string;
}

export interface CameraOptions {
    flashMode?: keyof FlashMode;
    zoom?: number;
    autoFocus?: keyof AutoFocus;
    autoFocusPoint?: {
        normalized: {
            x: number;
            y: number;
        };
        drawRectPosition: {
            x: number;
            y: number;
        };
    };
    focusDepth?: number;
    type?: keyof CameraType;
    whiteBalance?: keyof WhiteBalance;
    ratio?: string;
    isRecording?: boolean;
    canDetectFaces?: boolean;
    canDetectText?: boolean;
    canDetectBarcode?: boolean;
    faces?: any[];
    textBlocks?: any[];
    barcodes?: any[];
}

export interface TakePictureOptions {
    quality?: number;
    orientation?: number | string;
    base64?: boolean;
    exif?: boolean;
    width?: number;
    mirrorImage?: boolean;
    doNotSave?: boolean;
    pauseAfterCapture?: boolean;
    skipProcessing?: boolean;
    fixOrientation?: boolean;
    forceUpOrientation?: boolean;
}

export const defaultPictureTakeOptions: TakePictureOptions = {
    quality: 0.8,
    width: undefined,
    base64: false,
    doNotSave: false,
    exif: true,
    forceUpOrientation: true,
    fixOrientation: true,
    orientation: 'portrait',
};

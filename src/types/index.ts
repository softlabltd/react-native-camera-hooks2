export type Orientation = Readonly<{
    auto: any;
    landscapeLeft: any;
    landscapeRight: any;
    portrait: any;
    portraitUpsideDown: any;
}>;
export type OrientationNumber = 1 | 2 | 3 | 4;
export type AutoFocus = Readonly<{ on: any; off: any }>;
export type VideoStabilization = Readonly<{
    off: any;
    standard: any;
    cinematic: any;
    auto: any;
}>;
export type FlashMode = Readonly<{ on: any; off: any; torch: any; auto: any }>;
export type CameraType = Readonly<{ front: any; back: any }>;
export type WhiteBalance = Readonly<{
    sunny: any;
    cloudy: any;
    shadow: any;
    incandescent: any;
    fluorescent: any;
    auto: any;
}>;
export type CustomWhiteBalance = {
    temperature: number;
    tint: number;
    redGainOffset?: number;
    greenGainOffset?: number;
    blueGainOffset?: number;
};
export type BarCodeType = Readonly<{
    aztec: any;
    code128: any;
    code39: any;
    code39mod43: any;
    code93: any;
    ean13: any;
    ean8: any;
    pdf417: any;
    qr: any;
    upc_e: any;
    interleaved2of5: any;
    itf14: any;
    datamatrix: any;
}>;
export type VideoQuality = Readonly<{
    '2160p': any;
    '1080p': any;
    '720p': any;
    '480p': any;
    '4:3': any;
    /** iOS Only. Android not supported. */
    '288p': any;
}>;
export type VideoCodec = Readonly<{
    H264: symbol;
    JPEG: symbol;
    HVEC: symbol;
    AppleProRes422: symbol;
    AppleProRes4444: symbol;
}>;
export type ImageType = Readonly<{
    jpeg: any;
    png: any;
}>;

export type FaceDetectionClassifications = Readonly<{ all: any; none: any }>;
export type FaceDetectionLandmarks = Readonly<{ all: any; none: any }>;
export type FaceDetectionMode = Readonly<{ fast: any; accurate: any }>;
export type GoogleVisionBarcodeType = Readonly<{
    CODE_128: any;
    CODE_39: any;
    CODABAR: any;
    DATA_MATRIX: any;
    EAN_13: any;
    EAN_8: any;
    ITF: any;
    QR_CODE: any;
    UPC_A: any;
    UPC_E: any;
    PDF417: any;
    AZTEC: any;
    ALL: any;
}>;
export type GoogleVisionBarcodeMode = Readonly<{
    NORMAL: any;
    ALTERNATE: any;
    INVERTED: any;
}>;

// FaCC (Function as Child Components)
export type Self<T> = { [P in keyof T]: P };
export type CameraStatus = Readonly<Self<{ READY: any; PENDING_AUTHORIZATION: any; NOT_AUTHORIZED: any }>>;
export type RecordAudioPermissionStatus = Readonly<
    Self<{
        AUTHORIZED: 'AUTHORIZED';
        PENDING_AUTHORIZATION: 'PENDING_AUTHORIZATION';
        NOT_AUTHORIZED: 'NOT_AUTHORIZED';
    }>
>;

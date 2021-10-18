import { TakePictureOptions, defaultPictureTakeOptions } from './interfaces';

export interface TakePictureResponse {
    width: number;
    height: number;
    uri: string;
    base64?: string;
    exif?: { [name: string]: any };
    pictureOrientation: number;
    deviceOrientation: number;
}

export const takePicture = async (
    { cameraRef }: { cameraRef: any },
    options: TakePictureOptions = defaultPictureTakeOptions,
): Promise<TakePictureResponse | undefined> => {
    if (cameraRef && cameraRef.takePictureAsync) {
        return cameraRef.takePictureAsync(options);
    } else if (cameraRef && cameraRef.current && cameraRef.current.takePictureAsync) {
        return cameraRef.current.takePictureAsync(options);
    }
};

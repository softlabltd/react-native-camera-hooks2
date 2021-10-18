import { defaultVideoRecordOptions } from './constants';
import { RecordOptions, RecordResponse } from './interfaces';

export const recordVideo = async (
    { cameraRef }: any,
    options: RecordOptions = defaultVideoRecordOptions,
): Promise<RecordResponse | undefined> => {
    if (cameraRef && cameraRef.recordAsync) {
        return cameraRef.recordAsync(options);
    } else if (cameraRef && cameraRef.current && cameraRef.current.recordAsync) {
        return cameraRef.current.recordAsync(options);
    }
};

export const stopRecording = async (cameraRef: any): Promise<any> => {
    if (cameraRef && cameraRef.stopRecording) {
        return cameraRef.stopRecording();
    } else if (cameraRef && cameraRef.current && cameraRef.current.stopRecording) {
        return cameraRef.current.stopRecording();
    }
};

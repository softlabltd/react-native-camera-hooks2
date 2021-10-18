export const pausePreview = async (cameraRef: any): Promise<boolean> => {
    if (cameraRef && cameraRef.current && cameraRef.current.pausePreview) {
        await cameraRef.current.pausePreview();
        return true;
    }
    return false;
};

export const resumePreview = async (cameraRef: any): Promise<boolean> => {
    if (cameraRef && cameraRef.current && cameraRef.current.resumePreview) {
        await cameraRef.current.resumePreview();
        return true;
    }
    return false;
};

import { useState, useCallback } from 'react';

export const useTextRecognition = (state = []): [any[], { textRecognized: CallableFunction }] => {
    const [textBlocks, setTextblocks] = useState(state);

    const textRecognized = useCallback((data) => {
        setTextblocks(data.textBlocks);
    }, []);

    return [textBlocks, { textRecognized }];
};

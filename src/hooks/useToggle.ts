import { useState } from 'react';
import { flashModeOrder, wbOrder } from '../constants';
import { FlashMode } from '../types';

const useToggle = (initialState = '', values = []) => {
    const [state, setState]: any = useState(initialState);

    return [state, () => setState(!values ? (_state: any) => !_state : state === values[0] ? values[1] : values[0])];
};

export const useFlash = (state: any = ''): [keyof FlashMode, { toggleFlash: Function; setFlash: Function }] => {
    const [flashMode, setFlash] = useState<keyof FlashMode>(state);

    const toggleFlash = () => {
        setFlash(flashModeOrder[flashMode]);
    };

    return [
        flashMode,
        {
            toggleFlash,
            setFlash,
        },
    ];
};

export const useWhiteBalance = (state = ''): [string, { toggleWB: Function; setWhiteBalance: Function }] => {
    const [whiteBalance, setWhiteBalance] = useState<string>(state);

    const toggleWB = () => {
        Object.keys(wbOrder).indexOf(whiteBalance);
        setWhiteBalance(wbOrder[whiteBalance]);
    };

    return [
        whiteBalance,
        {
            toggleWB,
            setWhiteBalance,
        },
    ];
};

export const useAutoFocus = (state = '', toggleModes: any) => {
    const [autoFocus, toggleAutoFocus] = useToggle(state, toggleModes);

    return [autoFocus, toggleAutoFocus];
};

export const useToggleFacing = (state = '', toggleModes: any) => {
    const [type, toggleFacing] = useToggle(state, toggleModes);

    return [type, toggleFacing];
};

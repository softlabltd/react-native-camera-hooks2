export const flashModeOrder: any = {
    off: 'on',
    on: 'auto',
    auto: 'torch',
    torch: 'off',
};

export const wbOrder: any = {
    auto: 'sunny',
    sunny: 'cloudy',
    cloudy: 'shadow',
    shadow: 'fluorescent',
    fluorescent: 'incandescent',
    incandescent: 'auto',
};

export * from './initialState';

import { isMobile } from './pm-mobile';

const available = () => !!window.showSaveFilePicker;

// pm: Some bad mobile devices block any file type (iOS), so these funcs should allow all files on mobile
const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    ...(isMobile() ? {} : {
        types: [
            {
                description: 'PenguinMod Project',
                accept: {
                    'application/x.scratch.sb3': '.pmp'
                }
            }
        ],
        excludeAcceptAllOption: true
    }),
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        ...(isMobile() ? {} : {
            // Remove the "types" field entirely to allow all file types
        }),
    });
    return handle;
};


const showDirectoryPicker = async (optId, optStartIn) => {
    const handle = await window.showDirectoryPicker({
        id: optId || "pm-directory-picker",
        mode: "readwrite",
        startIn: optStartIn || "documents",
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker,
    showDirectoryPicker
};

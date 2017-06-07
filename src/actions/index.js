const LOAD_ARGUMENTS = 'LOAD_ARGUMENTS';

export const LoadArguments = (args) => {
    return {
        type: LOAD_ARGUMENTS,
        args
    }
}
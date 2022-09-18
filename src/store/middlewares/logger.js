export const logger = (store) => (next) => (action) => {
    console.log(action);
    console.log('prev store :', store)
    const result = next(action);
    return result;
}
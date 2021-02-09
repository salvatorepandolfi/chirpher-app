const logger = (store) => (next) => (action) => {
    console.group(action.type)

        console.log('The action: ', action)
        const returnVale = next(action)
        console.log('The new state is: ', store.getState())

    console.groupEnd()
    return returnVale
}


export default logger

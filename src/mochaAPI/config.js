export const postAPI = (data) => {
    const config = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    fetch('https://apimocha.com/alvatross/example', config)
}
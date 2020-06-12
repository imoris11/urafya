export const setBg = () => {
    const colors = [
        '#ff49af',
        '#50b9be',
        '#351259',
        '#226a4c',
        '#3d92ea',
        '#880ed6',
        '#963f06'
    ]
    const randomColor = Math.floor(Math.random() * 7);
    return colors[randomColor]
}
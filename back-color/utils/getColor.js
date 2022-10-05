const colors = ["yellow", "blue", "red", "green", "white", "pink", "purple"]

const customColor = process.env.CUSTOM_COLOR

if (customColor && !colors.includes(customColor.toLowerCase())) {
    console.log(customColor)
    throw `Color not found, valid colors are: ${colors.join(', ')}]`
}

exports.getColor = () => {
    if (customColor) return customColor.toLowerCase()
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}
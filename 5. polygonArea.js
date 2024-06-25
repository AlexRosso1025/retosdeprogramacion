const calculatePolygon = (type, side1, side2) => {
    if(type === "Triangle"){
        return (side1 * side2) / 2
    } else if(type === "Square" || type === "Rectangle"){
        return side1 * side2
    }
}

calculatePolygon("Triangle", 2, 4)
export function isValidWalk(walk: string[]) {

    if(walk.length != 10)
        return false

    let x = 0, y = 0
    let movs = {
        'n': 1,
        's': -1,
        'e': 1,
        'w': -1
    }

    for (let mov of walk) {
        if (mov == 'n' || mov == 's') {
            y += movs[mov]
        }

        if (mov == 'e' || mov == 'w') {
            x += movs[mov]
        }
    }

    return x == 0 && y == 0
}


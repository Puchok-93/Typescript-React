// ? Если что-то ограничено перечислением нескольких вариантов и программа выбирает один из них, то для этого используются перечисления (Enum)
// ? Enum существует только внутри TS. Она позволяет избегать опечаток и применения сторонних вариантов. 


// ? В числовых перечислениях можно заниматься вычислениями для получения новых значений.
enum Durations {
    SHORT = 1,
    LONG = SHORT + 2,
}

// ? В строковых перечислениях нельзя заниматься вычислениями для получения новых значений.

enum Directions {
    TOP,
    LEFT,
    RIGHT,
    BOTTOM
}

enum TimingFunction {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out',
    EASE_IN_OUT = 'ease-in-out',
    LINEAR = 'linear',
}

// ! Существует вариант гетерогенного enum’a - это комбинация строковых и числовых значений. Использовать такое не стоит.

function frame(id: string, direction: Directions, timing: TimingFunction) {
    if(direction === Directions.TOP) {
        console.log(timing)
    }

    if(direction === Directions.LEFT) {
        console.log(timing)
    }

    if(direction === Directions.RIGHT) {
        console.log(timing)
    }

    if(direction === Directions.BOTTOM) {
        console.log(timing)
    }
}

frame('id', Directions.TOP, TimingFunction.EASE)
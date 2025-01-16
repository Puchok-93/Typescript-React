
// ? Замена Enum на union type
type TimingFunctionU = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';

function anim(el: string, dir: string, timing: TimingFunctionU):void {
    console.log(timing)
}

anim('topbar', 'top', 'ease-in' )

// ? Замена Enum на объект
const TimingFunctionO = {
    ease :'ease',
    easeIn :'ease-in',
    easeOut :'ease-out',
    easeInOut :'ease-in-out',
    linear :'linear',
} as const;

function animate(el: string, dir: string, timing: keyof typeof TimingFunctionO):void {
    console.log(timing)
}

animate('topbar', 'top', 'ease')
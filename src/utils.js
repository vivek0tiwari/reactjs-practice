export const throttle = (func, delay) =>{
    let inThrottle = false
    return function(){
        const [...args] = arguments
        const that = this
        if(!inThrottle){
            func.apply(that, args)
            inThrottle = true
            setTimeout(()=>{
                inThrottle = false
             }, delay)
        }
        
    }
}

export const debounce = (cb, delay) =>{
    let timer;
    return function(...args){
        const that = this
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            cb.apply(that, args)
        }, delay)
    }
}
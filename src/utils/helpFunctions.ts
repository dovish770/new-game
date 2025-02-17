export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[random]] = [newArray[random], newArray[i]];
    }
    return newArray;
}

export const getRandomIndex = (maxNum: number): number => {    
    return Math.floor(Math.random() * maxNum);
}
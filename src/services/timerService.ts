export const getTimer = (time: number): string =>{
          if (time > 60) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds.toString().padStart(2, '0')} minuts`;
          } else {
            return `${time.toFixed(2)} seconds`
          }
}
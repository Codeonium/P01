export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage= () =>
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for(let x = 0; x < player.tetromino[y].length; x += 1) {

            // check if on tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                // check that move is inside the game area height
                // should not pass bottom of play area
                !stage[y + player.pos.y + moveY] ||
                // check that it keeps in game side ways
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                // check that cell is not set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            } 
        }
    }
    return false;
}
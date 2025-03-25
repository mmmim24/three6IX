export function validate(rounds, players) {
    if (rounds < 13 || rounds > 1000) {
        return false;
    }
    else if (players < 4 || players > 12) {
        return false;
    }
    else return true;
}
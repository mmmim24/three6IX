import React from 'react'

const LogicContext = React.createContext();

export const LogicProvider = ({ children }) => {
    const [values, setValues] = React.useState({
        score: 0,
        life: 3,
        currentRound: 1,
        startingPlayer: 1,
        isYourTurn: false,
        isWrongMove: false,
        isGameOver: false,
    });

    const initialPlayer = (players) => {
        const randomPlayer = Math.floor(Math.random() * players) + 1;
        setValues(prev => ({ ...prev, startingPlayer: randomPlayer }));
        return randomPlayer;
    }

    const yourTurn = (players) => {
        const currentPlayer = values.startingPlayer + (values.currentRound - 1) % players;
        setValues(prev => ({ ...prev, isYourTurn: currentPlayer === values.startingPlayer }));
        return currentPlayer === values.startingPlayer;
    }

    const updateValues = (newValues) => {
        setValues(prev => ({ ...prev, ...newValues }));
    };

    const clap = () => {
        const s = String(values.currentRound);
        let flag = false;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '3' || s[i] === '6' || s[i] === '9') {
                flag = true;
                break;
            }
        }
        if (values.life <= 0) {
            updateValues({
                isGameOver: true,
                isWrongMove: false
            });
        }
        else {

            if (flag) {
                updateValues({
                    score: values.score + 1,
                    isWrongMove: false
                });
            }
            else {
                updateValues({
                    life: values.life - 1,
                    isWrongMove: true
                });
            }
        }
    }

    const shoot = () => {
        const s = String(values.currentRound);
        let flag = true;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '3' || s[i] === '6' || s[i] === '9') {
                flag = false;
                break;
            }
        }
        if (values.life <= 0) {
            updateValues({
                isGameOver: true,
                isWrongMove: false
            });
        }
        if (flag) {
            updateValues({
                score: values.score + 1,
                isWrongMove: false
            });
        }
        else {
            updateValues({
                life: values.life - 1,
                isWrongMove: true
            });
        }
    }

    const ctxValues = {
        values,
        updateValues,
        initialPlayer,
        yourTurn,
        clap,
        shoot
    };

    return (
        <LogicContext.Provider value={ctxValues}>
            {children}
        </LogicContext.Provider>
    );
}

export default LogicProvider;
export const useLogicContext = () => React.useContext(LogicContext);
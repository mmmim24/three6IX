import React from 'react'

const LogicContext = React.createContext();

export const LogicProvider = ({ children }) => {
    const [values, setValues] = React.useState({
        score: 0,
        life: 3,
        currentRound: 1,
        startingPlayer: 2,
        isYourTurn: false,
        isWrongMove: false,
        isGameOver: false,
        isPressed: false,
    });

    const updateValues = (newValues) => {
        setValues(prev => ({ ...prev, ...newValues }));
    };

    const clap = () => {
        if (!values.isPressed) {
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
            updateValues({
                isPressed: true
            });
        }
    }

    const shoot = () => {
        if (!values.isPressed) {
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
            updateValues({
                isPressed: true
            });
        }
    }

    const ctxValues = {
        values,
        updateValues,
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
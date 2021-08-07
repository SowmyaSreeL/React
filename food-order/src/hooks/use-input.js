import { useReducer } from "react";

const initalState = {value: '', isTouched: false};
const inputReducer = (state, action) => {
    if(action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }

    if(action.type === 'BLUR') {
        return {isTouched : true, value: state.value };
    }

    if(action.type === 'RESET') {
        return {value: '', isTouched: false}
    }

    return {value: '', isTouched: false}
}
const useInput = (validateVal) => {
    const [inputState, dispatch] = useReducer(inputReducer, initalState)

    const valueValid = validateVal(inputState.value);
    const hasErr = !valueValid && inputState.isTouched;

    const valueChangeHandler = e =>   {
        dispatch({
            type: 'INPUT',
            value: e.target.value
        })
      }
    
      const valueBlurHandler = e => {
        dispatch({
            type: 'BLUR'
        })
      }

      const reset = () => {
        dispatch({type: 'RESET'})
      }

      return {
          value: inputState.value,
          valueChangeHandler,
          valueBlurHandler,
          isValid: valueValid,
          hasErr,
          reset
      }
}

export default useInput;
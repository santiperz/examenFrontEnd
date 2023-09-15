import {createContext, useEffect, useReducer} from 'react';
export const globalcontext = createContext(undefined)

const getThemeFromStorage = () => {
    const localTheme = localStorage.getItem("theme")
    return localTheme ? localTheme : [];
}

const setThemeInStorage = (theme) =>{
    localStorage.setItem("theme", theme)
}

export const themeReducer = (state, action) => {
    let theme
    switch (action.type) {
        case "CHANGE_THEME":
            if (state== 'light'){
                theme = 'dark'
                setThemeInStorage(theme)
                return theme;
            }
            else{
                theme ='light'
                setThemeInStorage(theme)
                return theme;
            }
        default:
            return state;
    }
};

export function ContextProvider({children}){
    const changeTheme = () => dispatch({ type: CHANGE_THEME});
    const [theme, dispatch] = useReducer(themeReducer, getThemeFromStorage());
    return(
         <globalcontext.Provider value={{theme, changeTheme}}>
            themeReducer.{children}
         </globalcontext.Provider>       
    )
}

const dentistReducer = (state, action) =>{
    switch(action.type){
        case "GET_DENTIST":
            return{
                dentistList: action.payload,
                favList: state.favList
            }
        case "ADD_FAV":
            return{
                dentistList: state.dentistList,
                favList: [...state.favList,action.payload]
            }
        case "DEL_FAV":
            return{
                dentistList: state.dentistList,
                favList: state.favList.filter((fav)=>fav.id!==action.payload)
            }
    }
}

const initState =  JSON.parse(localStorage.getItem("dentist")) || {
    dentistList: [],
    favList: []
}

export function DentistProvider({ children }){

    const [dentistState, dentistDispatch] = useReducer( dentistReducer, initState )

    
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw new Error('No se obtuvo la lista')
            }
            return res.json();
        })
        .then(data=>{
            dentistDispatch({type:"GET_DENTIST",payload: data})})
    },[])

    useEffect(() => {
        localStorage.setItem("dentist", JSON.stringify(dentistState));
      }, [dentistState]);

    return(
        <globalcontext.Provider value={{
            dentistState,
            dentistDispatch
        }}>
            { children }
        </globalcontext.Provider>
    )
}
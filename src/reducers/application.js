export const SET_DAY = "SET_DAY";
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";


function getSpotsForDay(state, day) {
  return state.days
    .find(d => d.name === day)
    .appointments.reduce((a, c) => {
      return state.appointments[c].interview ? a : a + 1;
    }, 0);
}

export default function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.day
      };
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }}}
    

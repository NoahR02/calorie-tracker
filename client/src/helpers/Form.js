    /* 
    @name submitForm,
    @type Function : Void,
    @description : A helper function to reduce the repetition of having to create multiple onSubmit methods.
     This also provides error catching functionality and onSuccess like methods for ease of use.
  */
  const submitForm = async (
    e, // event 
    method = "POST",
    action = "/",
    headers = { 'Content-Type': 'application/json'},
    redirect = false, // If desired then redirect. 
    redirectLocation = "", // Location or address to redirect to.
    history = [], // React Router props.history[].
    state = {}, // State to send. 
    updateErrors = () => {}, // Prop from top component.
    updateState = (result) => {} // Custom implementation to update your state.
    ) => {
    
      if(typeof(e) !== "undefined") e.preventDefault();

    try {
      // Send fetch request with data provided.
      const res = await fetch(action, {
        method,
        headers,
        body: JSON.stringify({ ...state })
      });
      const result = await res.json();
      // If there are any errors then show them and after 2 seconds then set it to an empty array.
      if(typeof(result.errors) !== "undefined") {
        updateErrors(result.errors);
        setTimeout(() => updateErrors([]), 2000);
      } else {
        // If there aren't any errors then update data and redirect if requested.
        updateState(result);
        if(redirect) return history.push(redirectLocation);
      } 

    } catch(e) {
        console.log(e.message);
        updateErrors(["Failed to submit form."]);
        setTimeout( () => updateErrors([]), 2000);
        return;
    }
  }

  export default submitForm;
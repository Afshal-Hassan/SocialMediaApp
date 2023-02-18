

const useProfileSettings = () => {


    const handleProfileSettings = (display,displayNotification) => {
        if(display.current.style.display === "initial") { display.current.style.display = "none"} 
            else { 
            display.current.style.display = "initial"     
            displayNotification.current.style.display = "none" 
        }
            
         
    }
    return [handleProfileSettings];
}

export default useProfileSettings;

const useNotifications = () => {


    const handleNotifications = (display , displaySettings) => {
       if( display.current.style.display === "initial" ) { display.current.style.display = "none" }
          else { display.current.style.display = "initial";
            displaySettings.current.style.display = "none";
        }
    }
    return [handleNotifications];
}

export default useNotifications;
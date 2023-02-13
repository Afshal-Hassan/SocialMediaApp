
const useNotifications = () => {


    const handleNotifications = (display) => {
        display.current.style.display === "initial" ? display.current.style.display = "none"
            : display.current.style.display = "initial";
    }
    return [handleNotifications];
}

export default useNotifications;
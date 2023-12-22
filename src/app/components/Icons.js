export const priorityIcons = (priority) => {
    if (priority === 0 || priority === "No Priority") {
      return(
        <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'gray' }}
  >
    <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></path>
  </svg>
      );
    }
    if (priority === 1 || priority === "Low") {
      return(
        <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'gray' }}
  >
    <path d="M2 20h.01"></path>
    <path d="M7 20v-4"></path>
  </svg>
      )
    }
    if (priority === 2 || priority === "Medium") {
      return(
        <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'gray' }}
  >
    <path d="M2 20h.01"></path>
    <path d="M7 20v-4"></path>
    <path d="M12 20v-8"></path>
  </svg>
      );
    }
    if (priority === 3 || priority === "High") {
      return(
        <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'gray' }}
  >
    <path d="M2 20h.01"></path>
    <path d="M7 20v-4"></path>
    <path d="M12 20v-8"></path>
    <path d="M17 20V8"></path>
  </svg>
      )
    }
    return(
      <svg
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ErrorIcon"
    style={{color: 'orange' , height: '1em', width: '1em'}}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
  </svg>
    )
  };
  
  export const progressIcons = (progress) => {
    switch (progress) {
      case "Todo":
        return (
          <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'gray' }}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  </svg>
        )
      case "In progress":
        return (
          <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'rgb(245, 200, 66)' }}
  >
    <path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path>
  </svg>
        )
      case "Done":
        return (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'rgb(56, 75, 181)' }}
  >
    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
  </svg>
        )
        case "Backlog":
          return (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'gray' }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7.5 4.21l0 .01"></path>
              <path d="M4.21 7.5l0 .01"></path>
              <path d="M3 12l0 .01"></path>
              <path d="M4.21 16.5l0 .01"></path>
              <path d="M7.5 19.79l0 .01"></path>
              <path d="M12 21l0 .01"></path>
              <path d="M16.5 19.79l0 .01"></path>
              <path d="M19.79 16.5l0 .01"></path>
              <path d="M21 12l0 .01"></path>
              <path d="M19.79 7.5l0 .01"></path>
              <path d="M16.5 4.21l0 .01"></path>
              <path d="M12 3l0 .01"></path>
            </svg>
          );      
      default:
        return(
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'gray' }}
  >
    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z"></path>
  </svg>
        )
    }
  };

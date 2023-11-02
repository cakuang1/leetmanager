import { toast } from "react-toastify";


interface ToastProps {
    message: string;
    difficulty: string;
  }
  
  // Modify the notify function to accept a component and typed parameters
  export  const notify = (ToastComponent: React.FC<ToastProps>, message: string) => {
    toast(<ToastComponent message={message} difficulty={""}/>, {
      position: "top-right",
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  

  export const GT = ({message,difficulty}:any) => {
return (
<div id="toast-success" className="flex items-center w-full max-w-xs  rounded" role="alert">
<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
</div>
<div className='pl-4'> <span className=''>{message}</span><span className={`${getColorClasses(difficulty)} px-2 text-xs font-semibold rounded-full `}>
    {difficulty}</span></div>
</div>
)
}
export const BT = ({message,difficulty}:any) => {
    return (
    <div id="toast-success" className="flex items-center w-full max-w-xs  rounded" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-green-800 dark:text-green-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
    </div>
    <div className='pl-4'> <span className=''>{message}</span><span className={`${getColorClasses(difficulty)} px-2 text-xs font-semibold rounded-full `}>
        {difficulty}</span></div>
    </div>
    )
    }
    export const GA = ({message,difficulty}:any) => {
        return (
        <div id="toast-success" className="flex items-center w-full max-w-xs  rounded" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>        </div>
        <div className='pl-4'> <span className=''>{message}</span><span className={`${getColorClasses(difficulty)} px-2 text-xs font-semibold rounded-full `}>
            {difficulty}</span></div>
        </div>
        )
        }
            

        export const BA = ({message,difficulty}:any) => {
            return (
            <div id="toast-success" className="flex items-center w-full max-w-xs  rounded" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>            </div>
            <div className='pl-4'> <span className=''>{message}</span><span className={`${getColorClasses(difficulty)} px-2 text-xs font-semibold rounded-full `}>
                {difficulty}</span></div>
            </div>
            )
            }

function getColorClasses(difficulty : String) {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return ''; 
    }
  }
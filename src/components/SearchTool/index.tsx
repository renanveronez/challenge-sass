import { useState } from 'react';
import './style.modules.scss';

export function SearchTool() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  return (
    <div className="box">

      <form className="search" >
        <input
          className="input"
          type="text"
          name="text"
        // onMouseOut={handleFirstNameInputChange}
        />
      </form>
    </div>
  )
}

// <div className={styles.searchEngine}>
//           <div className={styles.searchBox}>
//             <form name="search">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 onChange={(event) => {
//                   setSearchTerm(event.target.value);
//                 }}
//               />
//             </form>
//             <div className={styles.iconSearch}>
//               <MdArrowForward color='#000' />
//             </div>
//           </div>
//         </div>

import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "../../hooks/useLogout";
const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <IoIosLogOut
          onClick={logout}
          className="w-6 h-6 text-white cursor-pointer"
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logout;

//
// import React from "react";
// import { IoIosLogOut } from "react-icons/io";
// const Logout = () => {
//   return (
//     <div className="mt-auto">
//       <IoIosLogOut className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   );
// };

// export default Logout;

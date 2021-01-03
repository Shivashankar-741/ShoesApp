import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [sidebar, setSidebar] = useState(false);

	return (
		<AppContext.Provider value={[sidebar, setSidebar]}>
			{props.children}
		</AppContext.Provider>
	);
};

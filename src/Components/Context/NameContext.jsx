import React, { createContext, useState } from "react";

export const NameContext = createContext();

export const NameProvider = (props) => {
	const [name, setName] = useState("shiva");

	return (
		<NameContext.Provider value={[name, setName]}>
			{props.children}
		</NameContext.Provider>
	);
};

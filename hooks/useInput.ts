import React, { ChangeEvent, useCallback, useState } from "react";

export default (initialValue = null) => {
	const [value, setValue] = useState(initialValue);
	const handler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	}, []);
	return [value, handler];
};

import React from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	return <AuthProvider.Provider>AuthContext</AuthProvider.Provider>;
};

let user = "Guest"

export const getCurrentUser = () => {
	return new Promise<string>((resolve) => resolve(user));
}

export const editCurrentUser = (newUser: string) => {
	user = newUser
	return new Promise<string>((resolve) => resolve("success"));
}
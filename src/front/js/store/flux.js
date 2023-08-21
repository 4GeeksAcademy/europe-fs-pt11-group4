const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			doctors: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			authToken: null,
			user: null,
			users: [],
			appointments: [],
			newsapi: [],
		},
		actions: {
			login: async (email, password, navigate) => {
				try {
					const response = await fetch(
						process.env.BACKEND_URL +"/api/token",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								"email": email,
								"password": password
							}),
						}
					);
					if (response.ok) {
						const data = await response.json()
						setStore({ authToken: data.token, user: data });
						sessionStorage.setItem("token", data.token);
						navigate("/private")
						return true
					}
				} catch (error) {
					console.error("There has been an error logging in");
				};
				return false

			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application just loaded, syncing the session storage token");
				setStore ({ authToken: token });
			},

			getUser: async () => {
				const store = getStore()
				try {
					const response = await fetch(process.env.BACKEND_URL +"/api/protected", {
						headers: { Authorization: `Bearer ${store.authToken}` }
					});
					if (response.ok) {
						const data = await response.json();
						setStore({ user: data })
						localStorage.setItem("user", JSON.stringify(data))
					}
				}
				catch (error) {
					console.log(error)
				}

			},

			loadUser: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL+"api/user", {
						headers: { Authorization: `Bearer ${store.authToken}` }
					});
					if (response.ok) {
						const data = await response.json();
						setStore({ users: data.users })
					}
				}
				catch (error) {
					console.log(error)
				}

			},

			logOut: async (navigate) => {
				setStore({ user: null, authToken: null })
				localStorage.clear()
				navigate("/")
			},



			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			setDoctorData: (data) => {
				const store = getStore();
				setStore({ ...store, doctors: data });
			},
			setAppointmentData: (data) => {
				const store = getStore();
				setStore({ ...store, appointments: data });
			},
			setChannelData: (data) => {
				const store = getStore();
				setStore({ ...store, newsapi: data });
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
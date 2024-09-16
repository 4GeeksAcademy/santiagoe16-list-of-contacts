const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			
			getContacts: () => {
				console.log("getcontacts")
				fetch("https://playground.4geeks.com/contact/agendas/santiagoe16/contacts")
				.then((response) => response.json())
				.then((data) =>  setStore({contacts: data.contacts}))
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/santiagoe16/contacts/${id}`,
					{
						method: 'DELETE',
						redirect:"follow"
					}
				)
				.then( ()=> getActions().getContacts())
				console.log(id+" eliminado")
			},

			submitForm: (formData)=>{
				fetch("https://playground.4geeks.com/contact/agendas/santiagoe16/contacts",{
					method: "POST",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				})
				.then(() => getActions().getContacts())
			},

			editContac: (id,formData) => {
				fetch(`https://playground.4geeks.com/contact/agendas/santiagoe16/contacts/${id}`,{
					method: "PUT",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				})
				.then(() => getActions().getContacts())
			}
		}
	};
};

export default getState;

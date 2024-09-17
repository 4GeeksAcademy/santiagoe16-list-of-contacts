const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			verifySlug: async () => {
				
				
				const response = await fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100");
				const data = await response.json();
			
				const exists = data.agendas.some(agenda => agenda.slug === "santiagoe16");
			
				if (!exists) {

					await fetch("https://playground.4geeks.com/contact/agendas/santiagoe16", {method: 'POST'});
				}else{
					getActions().getContacts()
				}
				 
				 
			},

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

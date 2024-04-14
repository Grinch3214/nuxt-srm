interface IAuthStore {
	email: string
	name: string
	status: boolean
}

// const defaultValue: { user: IAuthStore } = {
// 	user: {
// 		email: '',
// 		name: '',
// 		status: false
// 	}
// }

export const useAuthStore = defineStore('auth', () => {

	const user: IAuthStore = reactive({
			email: '',
			name: '',
			status: false
	})

	const isLoading = ref(true)

	const isAuth = computed(() => user.status)

	const clear = () => {
		user.email = '',
		user.name = '',
		user.status = false
	}
	
	return {
		user,
		isAuth,
		clear,
		isLoading
	}

})
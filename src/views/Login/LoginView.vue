<template>
	<v-app>
		<v-main>
			<div class="bg"></div>
			<div class="form">
				<div class="logo"></div>
				<div class="content">
					<v-form
						v-model="form"
						class="w-100"
						@submit.prevent="onSubmit"
					>
						<v-text-field
							v-model="account"
							label="Account"
							variant="outlined"
							:rules="[rules.required]"
							class="mb-2"
							:readonly="loading"
							density="compact"
							color="blue-lighten-1"
						></v-text-field>

						<v-text-field
							v-model="password"
							label="Password"
							variant="outlined"
							:rules="[rules.required]"
							:readonly="loading"
							:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
							:type="visible ? 'text' : 'password'"
							@click:append-inner="visible = !visible"
							density="compact"
							color="blue-lighten-1"
						>
						</v-text-field>

						<br>

						<v-btn
							:disabled="!form"
							:loading="loading"
							color="blue"
							size="large"
							type="submit"
							variant="elevated"
							block
						>
							LOG IN
						</v-btn>
					</v-form>
				</div>
			</div>
		</v-main>
	</v-app>
</template>

<script lang="ts">
export default {
	data: () => ({
		form: false,
		account: '',
		password: '',
		rules: {
			required: (value: string) => !!value || 'Required.',
		},
		loading: false,
		visible: false,
	}),
	methods: {
		onSubmit() {
			if (!this.form) {
				return
			}

			this.loading = true

			setTimeout(() => {
				this.loading = false
			}, 1000)
		},
	},
}
</script>

<style scoped>
.bg {
	flex: 0 0 auto;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url("@/assets/images/BG-min.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.form {
	flex: 0 0 auto;
	display: flex;
	position: relative;
	margin: 12vh auto auto auto;
	padding: 0 55px 0 55px;
	width: 400px;
	height: 400px;
	flex-direction: column;
	border-radius: 5px;
	background-color: white;

	.logo {
		flex: 0 0 auto;
		display: flex;
		position: relative;
		height: 70px;
		margin-top: 20px;
		background-image: url("@/assets/images/atfx.png");
		background-size: 130px auto;
		background-repeat: no-repeat;
		background-position: center;
	}
	.content {
		flex: 0 0 auto;
		display: flex;
		position: relative;
		margin-top: 30px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}
</style>

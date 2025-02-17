import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

export default createVuetify({
	blueprint: md3,
  	components,
  	directives,
	aliases: {
		MyButton: components.VBtn,
	},
	defaults: {
		VBtn: { variant: 'flat' },
		MyButton: { variant: 'tonal' },
	},
})


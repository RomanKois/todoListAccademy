import { App } 		from 'vue'
import { Options } 	from './types'

import moxios	 	from '../moxios'
export default {
	install: (app: App, options: Options = {}) => {
		moxios.install(app, options.moxios)
	}
}
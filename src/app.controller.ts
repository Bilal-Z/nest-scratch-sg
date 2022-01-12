import { Controller, Get } from '@nestjs/common';

@Controller('/cat')
export class AppController {
	@Get('/cat')
	getRootRoute() {
		return 'hello there';
	}

	@Get('/hat')
	getHatRoute() {
		return 'good day';
	}
}

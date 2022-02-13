import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class StudentService {
	constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}

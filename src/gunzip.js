import { Interceptor } from 'kronos-interceptor';
const zlib = require('zlib');

/**
 *
 */
export class GunzipInterceptor extends Interceptor {
  static get name() {
    return 'gunzip';
  }

  receive(request, args) {
    return this.connected.receive(request.pipe(zlib.createGunzip()));
  }
}

/**
 *
 */
export class GzipInterceptor extends Interceptor {
  static get name() {
    return 'gzip';
  }

  receive(request, args) {
    return this.connected.receive(request.pipe(zlib.createGzip()));
  }
}

export function registerWithManager(manager) {
  return manager.registerInterceptor(GunzipInterceptor);
  return manager.registerInterceptor(GzipInterceptor);
}

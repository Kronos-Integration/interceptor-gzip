import { Interceptor } from 'kronos-interceptor';
const zlib = require('zlib');

/**
 * Decompress requests with gunzip
 */
export class GunzipInterceptor extends Interceptor {
  /**
   * @return {string} 'gunzip'
   */
  static get name() {
    return 'gunzip';
  }

  receive(request, args) {
    return this.connected.receive(request.pipe(zlib.createGunzip()));
  }
}

/**
 * Compress requests with gzip
 */
export class GzipInterceptor extends Interceptor {
  /**
   * @return {string} 'gzip'
   */
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

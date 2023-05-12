[![npm](https://img.shields.io/npm/v/@kronos-integration/interceptor-gzip.svg)](https://www.npmjs.com/package/@kronos-integration/interceptor-gzip)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![bundlejs](https://deno.bundlejs.com/?q=@kronos-integration/interceptor-gzip\&badge=detailed)](https://bundlejs.com/?q=@kronos-integration/interceptor-gzip)
[![downloads](http://img.shields.io/npm/dm/@kronos-integration/interceptor-gzip.svg?style=flat-square)](https://npmjs.org/package/@kronos-integration/interceptor-gzip)
[![GitHub Issues](https://img.shields.io/github/issues/Kronos-Integration/interceptor-gzip.svg?style=flat-square)](https://github.com/Kronos-Integration/interceptor-gzip/issues)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FKronos-Integration%2Finterceptor-gzip%2Fbadge\&style=flat)](https://actions-badge.atrox.dev/Kronos-Integration/interceptor-gzip/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/Kronos-Integration/interceptor-gzip/badge.svg)](https://snyk.io/test/github/Kronos-Integration/interceptor-gzip)
[![Coverage Status](https://coveralls.io/repos/Kronos-Integration/interceptor-gzip/badge.svg)](https://coveralls.io/github/Kronos-Integration/interceptor-gzip)

# @kronos-integration/interceptor-gzip

interceptor to compress / decompress streams

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [GunzipInterceptor](#gunzipinterceptor)
    *   [name](#name)
*   [GzipInterceptor](#gzipinterceptor)
    *   [name](#name-1)

## GunzipInterceptor

**Extends StreamTransformInterceptor**

Decompress requests with gunzip

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'gunzip'

## GzipInterceptor

**Extends StreamTransformInterceptor**

Compress requests with gzip

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'gzip'

# install

With [npm](http://npmjs.org) do:

```shell
npm install @kronos-integration/interceptor-gzip
```

# license

BSD-2-Clause

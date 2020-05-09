import test from "ava";
import {
  dummyEndpoint,
  interceptorTest
} from "@kronos-integration/test-interceptor";
import { GzipInterceptor, GunzipInterceptor } from "@kronos-integration/interceptor-gzip";

test(
  interceptorTest,
  GzipInterceptor,
  undefined,
  { type: "gzip", json: { type: "gzip" } },
  dummyEndpoint("ep"),
  ["[1, 2, 3]"],
  (request) => request.map(x => x * x),
  async (t, interceptor, e, next, result) => {
    t.deepEqual(result, JSON.stringify([1, 4, 9]));
  }
);


// @ts-check

import example from "example"
import something from "example/other"

/**
 * @type {string}
 */
export const first = "Hello World";

/**
 * @type {string}
 */
export const second = example(first)

/**
 * @type {string}
 */
export const third = something()
